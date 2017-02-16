FROM node:latest

RUN mkdir -p /usr/bin/app

VOLUME /usr/bin/app/src

WORKDIR /usr/bin/app

ADD ./package.json ./package.json

ENTRYPOINT npm install && npm run start

CMD npm run start
