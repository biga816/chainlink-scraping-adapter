FROM node:16.14.2-alpine
RUN apk add --no-cache python3 py3-pip make g++

WORKDIR /usr/src/app

COPY . .

RUN npm ci
RUN npm run build

CMD ["npm","run","start:prod"]