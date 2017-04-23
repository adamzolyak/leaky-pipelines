FROM nginx
COPY html /usr/share/nginx/html
COPY html/pipelines.json /usr/share/nginx/html/html/pipelines.json