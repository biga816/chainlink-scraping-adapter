FROM node:12.18.3

WORKDIR /usr/src/app

COPY . .

RUN npm ci

CMD ["npm","start"]