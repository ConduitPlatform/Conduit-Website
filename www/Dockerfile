FROM node:fermium

COPY . /app

WORKDIR /app

RUN yarn && yarn build

EXPOSE 3000

CMD ["yarn", "start"]
