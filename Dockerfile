FROM node:16.13.0

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

ENV DATABASE_URL = 
ENV JWT_SECRET_KEY = 

EXPOSE 8900

CMD [ "npm","start" ]