FROM alpine:3.10

RUN apk add docker-compose

RUN wget https://raw.githubusercontent.com/open-learning-exchange/planet/master/docker/planet.yml
RUN wget https://raw.githubusercontent.com/open-learning-exchange/planet/master/docker/install.yml

CMD docker-compose -f planet.yml -f install.yml -p planet up -d; echo "recreated planet!"
