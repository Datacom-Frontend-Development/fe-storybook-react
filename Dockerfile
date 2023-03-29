FROM node:18.12.1-alpine as build

WORKDIR /usr/app
COPY . .

RUN yarn
RUN yarn build-storybook

FROM nginx:latest
RUN echo "types { application/javascript js mjs; }" > /etc/nginx/conf.d/mjs.conf
COPY --from=build /usr/app/storybook-static /usr/share/nginx/html