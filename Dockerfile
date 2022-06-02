FROM node:17.0.1-alpine3.14

WORKDIR /database
COPY package*.json ./
RUN npm install
COPY .env .env
COPY index.js index.js
EXPOSE 3003

CMD ["./index.js"]
