FROM node:16.13.1-alpine as builder

WORKDIR /app/build/

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine

COPY --from=builder /app/build/ /usr/share/nginx/html
