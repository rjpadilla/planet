FROM vmnet8/planet

COPY docker/planet/default.conf /etc/nginx/conf.d/
COPY package.json ./
COPY docker/planet/scripts/ ./
RUN cat package.json | jq -r .version > /usr/share/nginx/html/version
COPY ./ng-app/dist /usr/share/nginx/html
COPY docker/planet/nginx/ /usr/share/nginx/html

RUN ./create_version_json.sh

CMD ./docker-entrypoint.sh
