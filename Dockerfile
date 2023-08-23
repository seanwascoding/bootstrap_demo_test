FROM node:18.15.0
WORKDIR /app
ADD . /app
RUN npm install
EXPOSE 300
CMD npm start