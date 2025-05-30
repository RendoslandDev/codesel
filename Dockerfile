# Build stage
FROM node:18 as builder

WORKDIR /usr/src/app
# Copy package.json and package-lock.json first to leverage Docker cache
# and avoid reinstalling dependencies on every change


COPY package*.json ./
RUN npm install
COPY . .

RUN npm run build

# Runtime stage
FROM nginx:alpine

COPY --from=builder /usr/src/app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
