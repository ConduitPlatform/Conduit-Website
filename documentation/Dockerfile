FROM node:fermium-alpine as Builder
COPY . /app

COPY ./yarn.lock /app/yarn.lock
COPY ./package.json /app/package.json

WORKDIR /app

RUN yarn install --pure-lockfile --non-interactive --cache-folder ./ycache; rm -rf ./ycache

RUN yarn build

FROM nginx:stable-alpine

COPY --from=Builder /app/build /usr/share/nginx/html/docs
COPY --from=Builder /app/config/nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

