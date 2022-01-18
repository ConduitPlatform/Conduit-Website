FROM node:fermium

COPY . /app

WORKDIR /app

RUN yarn && yarn build

EXPOSE 80

CMD ["yarn", "start"]
