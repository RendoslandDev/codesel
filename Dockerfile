# Build Stage
FROM node:18-alpine AS build
WORKDIR /src
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Production Stage
FROM nginx:stable-alpine AS production
COPY --from=build /src/ /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
