# Stage 1: Build
FROM node:20-alpine AS builder
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --production
COPY . .

# Stage 2: Production
FROM node:20-alpine
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
WORKDIR /usr/src/app
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app .
USER appuser
EXPOSE 5000
CMD ["node", "server.js"]
