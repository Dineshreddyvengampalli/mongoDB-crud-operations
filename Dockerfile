FROM node:16 as Build

WORKDIR /home/node/crud_app

COPY package.json .

RUN npm install

FROM node:16-buster-slim

USER node

EXPOSE 3000

COPY --from=Build /home/node/crud_app .

COPY . .

CMD [ "npm","run","start" ]