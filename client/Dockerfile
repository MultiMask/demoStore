# Stage 1 - the build process
FROM node:latest as build-client

WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn
COPY . ./
RUN yarn build

# Stage 2 - the production environment
FROM zzswang/docker-nginx-react:latest as proxy-client

COPY --from=build-client ./usr/src/app/build .

## Suppose your app is in the dist directory.
COPY ./ /app
