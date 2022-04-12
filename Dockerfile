FROM git.infocityvn.com:5050/info-city/web-admin/web-infocity/infocity-node:v1 as build
WORKDIR /src
COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm install
COPY . .
RUN npm run webapp:build:prod

FROM git.infocityvn.com:5050/info-city/web-admin/web-infocity/web-proxy:v1
COPY ./config/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /src/target/classes/static/ /usr/share/nginx/html/
EXPOSE 81
CMD ["nginx", "-g", "daemon off;"]