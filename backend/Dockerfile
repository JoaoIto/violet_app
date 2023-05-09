FROM node:18.15-alpine3.16 as builder

WORKDIR /app

COPY . .

RUN yarn install
RUN yarn build

EXPOSE 8000

CMD ["yarn", "start"]