FROM node:alpine

WORKDIR /app

COPY package*.json .

RUN npm i

COPY . .

EXPOSE 3000

RUN npm i -g vite

CMD [ "npm", "run", "dev" ]
