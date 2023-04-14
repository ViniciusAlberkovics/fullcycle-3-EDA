FROM node:19-alpine

WORKDIR /usr/app

COPY . /usr/app

RUN npm install

EXPOSE 3003

CMD ["npm", "run", "dev"]