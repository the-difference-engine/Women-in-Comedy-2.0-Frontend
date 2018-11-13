FROM node:8.12.0

RUN apt-get update

RUN mkdir /code
WORKDIR /code
COPY . /code/

ENTRYPOINT ["./docker-entrypoint.sh"]