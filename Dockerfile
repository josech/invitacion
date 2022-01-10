FROM node:16-alpine as build

WORKDIR /app

ENV GM3="$GM3"
ENV GMREACT_APP_KEY_MAPS3="$REACT_APP_KEY_MAPS"
ENV KEY_GOOGLE_MAPS="$KEY_GOOGLE_MAPS"

COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 1 - Serve Frontend Assets
FROM fholzer/nginx-brotli:v1.12.2

WORKDIR /etc/nginx
ADD nginx.conf /etc/nginx/nginx.conf

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 443
CMD ["nginx", "-g", "daemon off;"]