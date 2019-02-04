FROM node:8-alpine
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . ./
EXPOSE 3000
RUN npm install
CMD ["node", "server"]
