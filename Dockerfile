FROM node:16.13.0

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

ENV DATABASE_URL = "mongodb+srv://yaojiejia0715:kpoppnp1IzWbr4bw@cluster0.y2usxhc.mongodb.net/players?retryWrites=true&w=majority&appName=Cluster0"
ENV JWT_SECRET_KEY = "9apSvwso6d0Rw9j+Dnf5gFChJzLzK4PRH70JQ1e+/gg="

EXPOSE 8900

CMD [ "npm","start" ]