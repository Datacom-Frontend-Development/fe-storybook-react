FROM node:18.12.1-alpine as build

WORKDIR /usr/app
COPY . .
#ENV YARN_CACHE_FOLDER=/dev/shm/yarn_cache
RUN yarn
RUN yarn build-storybook

FROM nginx:latest
COPY --from=build /usr/app/storybook-static /usr/share/nginx/html