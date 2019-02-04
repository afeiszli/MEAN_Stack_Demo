FROM node:0.10.40
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . ./
RUN npm install
CMD ["ng", "serve"]
