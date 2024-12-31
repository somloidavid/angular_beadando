FROM node:23-alpine3.20 AS node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM httpd
COPY --from=node /app/dist/angular_beadando/browser /usr/local/apache2/htdocs
