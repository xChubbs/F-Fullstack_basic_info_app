# pull official base image
FROM node:18-alpine

# set working directory
WORKDIR /app

COPY public/ /app/public
COPY src/ /appe/src
COPY package.json /app/
COPY package-lock.json /app/

# add app
COPY . /app/

# start app
RUN npm install

