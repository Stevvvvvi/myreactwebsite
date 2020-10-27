FROM node:alpine

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./
RUN yarn install 
#RUN yarn install react-scripts@3.4.1 -g

COPY . ./
CMD ["yarn","start"]