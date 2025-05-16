# Builder stage
FROM node:18 AS builder
RUN apt-get update && apt-get install -y --no-install-recommends optipng \
    && rm -rf /var/lib/apt/lists/*
WORKDIR /app
COPY package.json package-lock.json ./
COPY .npmrc  ./
RUN npm ci --prefer-offline --no-audit
COPY . .
RUN npm run build

# Final stage
FROM nginx:1.25-alpine
RUN apk add --no-cache curl
ARG NODE_ENV=production
ARG NGINX_PORT=80
ENV NODE_ENV=${NODE_ENV}
WORKDIR /usr/share/nginx/html

COPY --from=builder /app/dist .

COPY nginx.conf /etc/nginx/nginx.conf

HEALTHCHECK --interval=30s --timeout=3s CMD curl -f http://localhost:${NGINX_PORT}/healthcheck || exit 1
EXPOSE ${NGINX_PORT}
CMD ["nginx", "-g", "daemon off;"]
