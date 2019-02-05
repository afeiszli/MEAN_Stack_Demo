FROM node:8.15-alpine
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . ./
RUN npm install
EXPOSE 4200
CMD ["./node_modules/@angular/cli/bin/ng", "serve --host=0.0.0.0 --disable-host-check"]
