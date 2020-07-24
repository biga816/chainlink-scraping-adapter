import { Injectable } from '@nestjs/common';
import * as xmldom from 'xmldom';
import { detect } from 'jschardet';
import { Iconv } from 'iconv';
import got from 'got';

@Injectable()
export class AppService {
  async scrape(url: string, path: string): Promise<any[]> {
    const { body: data } = await got(url, {
      encoding: 'binary',
      responseType: 'buffer',
    });

    const detectResult = detect(data);
    const iconv = new Iconv(detectResult.encoding, 'UTF-8//TRANSLIT//IGNORE');
    const encodedData = iconv.convert(data).toString();

    const jsonData = this.mapDOM(encodedData);
    return this.getTargetContent([jsonData], path);
  }

  filterContent(contents: any[], filter: string): any[] {
    const filterList = filter.split('.');
    const targetType = filterList.shift();
    const filterdContents = contents
      .filter(content => content?.type === targetType)
      .map(content => content?.content)
      .flat();

    if (filterdContents && filterdContents.length && filterList.length > 0) {
      return this.filterContent(filterdContents, filterList.join('.'));
    } else {
      return filterdContents;
    }
  }

  private mapDOM(element: any, json?: any) {
    const treeObject = {};

    // if string convert to document Node
    if (typeof element === 'string') {
      const parser = new xmldom.DOMParser({ errorHandler: { warning: null } });
      const docNode = parser.parseFromString(element, 'text/xml');
      element = docNode.lastChild;
    }

    // recursively loop through DOM elements and assign properties to object
    const treeHTML = (element: any, object: any) => {
      object['type'] = element.nodeName;
      const nodeList = element.childNodes;
      if (nodeList != null) {
        if (nodeList.length) {
          object['content'] = [];
          for (let i = 0; i < nodeList.length; i++) {
            if (nodeList[i].nodeType == 3) {
              object['content'].push(nodeList[i].nodeValue);
            } else {
              object['content'].push({});
              treeHTML(
                nodeList[i],
                object['content'][object['content'].length - 1],
              );
            }
          }
        }
      }
      if (element.attributes != null) {
        if (element.attributes.length) {
          object['attributes'] = {};
          for (let i = 0; i < element.attributes.length; i++) {
            object['attributes'][element.attributes[i].nodeName] =
              element.attributes[i].nodeValue;
          }
        }
      }
    };
    treeHTML(element, treeObject);

    return json ? JSON.stringify(treeObject) : treeObject;
  }

  private getTargetContent(contents: any[], path: string): any {
    const elements = path.split('.');
    const targetType = elements.shift();
    const targetContents = contents.filter(
      content => content.type?.toLowerCase() === targetType?.toLowerCase(),
    );
    const index = isNaN(elements[0] as any) ? 0 : Number(elements.shift());
    const targetContent = targetContents[index]?.['content'];

    if (targetContent && targetContent.length && elements.length > 0) {
      return this.getTargetContent(targetContent, elements.join('.'));
    } else {
      return targetContents[index];
    }
  }
}
