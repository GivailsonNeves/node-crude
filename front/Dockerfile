FROM node:10.16.0-alpine

EXPOSE 3000 
RUN mkdir -p /app/public /app/src
WORKDIR /app
COPY tsconfig.json /app/tsconfig.json
COPY package.json /app/package.json

RUN yarn install

CMD ["yarn", "start"]