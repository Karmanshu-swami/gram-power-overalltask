FROM node:18.12.0

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . ./

# ENTRYPOINT ["chmod" , "+x" , "export.sh"] 

ENV MONGO_USER = grampower

ENV MONGO_PASS = grampower

ENV MONGO_DB = grampower

# ENTRYPOINT ["./export.sh"]

CMD ["npm" , "run" , "start"]

EXPOSE 5000