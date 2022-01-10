FROM node:16-alpine as build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 1 - Serve Frontend Assets
FROM fholzer/nginx-brotli:v1.12.2

WORKDIR /etc/nginx
ADD nginx.conf /etc/nginx/nginx.conf

COPY --from=build /app/build /usr/share/nginx/html

ENV GM1 KEY_GOOGLE_MAPS
ENV GM2 "KEY_GOOGLE_MAPS"
ENV GM_3 GM3

EXPOSE 443
CMD ["nginx", "-g", "daemon off;"]