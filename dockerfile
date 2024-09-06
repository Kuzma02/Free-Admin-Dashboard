FROM node:19-bullseye

LABEL org.opencontainers.image.source https://github.com/Kuzma02/free-admin-dashboard

WORKDIR /app

COPY . . 

RUN npm i 

EXPOSE 5173

ENTRYPOINT [ "npm", "run" ]
CMD [ "dev:docker" ]