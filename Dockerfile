# Static resume site served by Nginx
FROM nginx:alpine

# Copy site into default html dir
COPY . /usr/share/nginx/html

EXPOSE 80
