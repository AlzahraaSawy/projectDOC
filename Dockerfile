FROM alpine

WORKDIR /application 

COPY fullstack-app .

RUN apk add --update nodejs

RUN apk add --update npm

RUN npm install express

CMD node fullstack-app