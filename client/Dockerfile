FROM node:8.15-alpine
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . ./
RUN npm install
CMD ["ng", "serve"]
