FROM node:17.0.1-alpine3.14

WORKDIR /database
COPY package*.json ./
RUN npm install
COPY .env .env
COPY src src
EXPOSE 3003

CMD ["./src/index.js"]
