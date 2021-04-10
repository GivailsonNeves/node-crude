FROM node:10.16.0-alpine
RUN mkdir -p /app/src
WORKDIR /app
COPY src /app/src
COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json
COPY knexfile.js /app/knexfile.js
COPY jest.config.js /app/jest.config.js
RUN npm install
RUN npm install knex -g
CMD ["npm", "run", "prod"]