# Stage 1 - the build process
FROM node:latest as build-client

WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn
COPY . ./
CMD ["yarn" ,"start"]

