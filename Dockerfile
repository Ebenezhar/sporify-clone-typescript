FROM alpine:3.16

ENV NODE_VERSION 19.4.0

WORKDIR /app

COPY package.json .

RUN apk add git

RUN apk add npm

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
