FROM node:0.10.40
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . ./
EXPOSE 3000
RUN npm install
CMD ["node", "start"]
