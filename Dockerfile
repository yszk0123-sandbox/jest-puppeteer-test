FROM nginx:1.15.3-alpine
COPY foo.html /usr/share/nginx/html
COPY index.html /usr/share/nginx/html
