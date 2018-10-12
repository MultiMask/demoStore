FROM node:boron

RUN mkdir -p /data
WORKDIR /data

# Bundle app source
COPY package.json /data
RUN yarn install
COPY index.js /data 
EXPOSE  8000
CMD ["node", "/data/index.js"]