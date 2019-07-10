FROM node:alpine AS builder

CMD ["nginx", "-g", "daemon off;"]

WORKDIR /app

COPY . .

RUN npm install && \
    npm run build

FROM nginx:alpine

COPY --from=builder /app/dist/* /usr/share/nginx/html/