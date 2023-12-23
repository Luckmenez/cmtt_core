FROM node:18.18-alpine

LABEL maintainer 'SMT Informática'



WORKDIR /usr/app

COPY . .

RUN npm install -g npm

RUN npm install --quiet --no-optional --no-fund --loglevel=error

RUN npm run build



EXPOSE 3333


CMD ["npm","run","start:prod"]
