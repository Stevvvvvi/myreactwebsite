FROM node:12-alpine

WORKDIR /app
# ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
# COPY package-lock.json ./
# COPY yarn.lock ./
COPY . ./
# RUN yarn add node-sass
RUN yarn
#RUN yarn install react-scripts@3.4.1 -g

CMD ["yarn","start"]