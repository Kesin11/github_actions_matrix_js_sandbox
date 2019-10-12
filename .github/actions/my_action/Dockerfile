FROM ubuntu:latest

RUN apt-get update; apt-get install -y lsb-release

ENTRYPOINT [ "lsb_release" ]
CMD [ "-da" ]