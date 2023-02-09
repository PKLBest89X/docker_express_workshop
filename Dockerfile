FROM node:16-alpine
WORKDIR /app
COPY . /app
RUN npm install
EXPOSE 2000
CMD [ "--default-authentication-plugin=mysql_native_password" ]
ENTRYPOINT node index.js