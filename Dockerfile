FROM postgres:latest

ARG DB_USERNAME
ARG DB_PASSWORD

ENV POSTGRES_USER=${DB_USERNAME}
ENV POSTGRES_PASSWORD=${DB_PASSWORD}
ENV POSTGRES_DB=chat


#docker build --build-arg DB_USERNAME=admin --build-arg DB_PASSWORD=admin -t db_chat .
# docker run --name chat_postgresql -d -p 5434:5432 db_chat

# docker start container chat_postgresql
# docker stop container chat_postgresql