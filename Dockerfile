FROM node:14.4.0-alpine3.11

ENV INFLUXDB_BUCKETID ''
ENV INFLUXDB_TOKEN ''

WORKDIR /app

ADD /package.json /app
ADD /package-lock.json /app
RUN npm install

ADD /index.js /app/
RUN npm install

ADD /startup.sh /

CMD [ "/startup.sh" ]
