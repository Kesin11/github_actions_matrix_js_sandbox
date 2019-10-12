FROM node:12

COPY package*.json ./

RUN npm ci

COPY . .

ENTRYPOINT [ "node" ]
CMD [ "--version" ]