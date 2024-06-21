#FROM postgres:latest
#
#ARG DB_USERNAME
#ARG DB_PASSWORD
#
#ENV POSTGRES_USER=${DB_USERNAME}
#ENV POSTGRES_PASSWORD=${DB_PASSWORD}
#ENV POSTGRES_DB=chat
#
## Expose the default PostgreSQL port
#EXPOSE 5432


# Використовуємо базовий образ OpenJDK 17
FROM openjdk:17-jdk-slim

# Встановлюємо робочу директорію для додатка
WORKDIR /app

# Копіюємо файли конфігурації Gradle до робочої директорії
COPY build.gradle /app/
COPY gradlew /app/
COPY gradlew.bat /app/
COPY gradle /app/gradle

# Копіюємо код з директорії src до робочої директорії
COPY src /app/src

# Копіюємо файли налаштувань (якщо є)
COPY settings.gradle /app/

# Збираємо проект за допомогою Gradle
RUN ./gradlew build

# Копіюємо зібраний .jar файл до робочої директорії
COPY build/libs/Chat_Yak-0.0.1-SNAPSHOT.jar /app/build/libs/

# Відкриваємо порт 9999 для доступу до додатка
EXPOSE 9999

# Вказуємо команду для запуску додатка
CMD ["java", "-jar", "/app/build/libs/Chat_Yak-0.0.1-SNAPSHOT.jar"]







#docker build --build-arg DB_USERNAME=postgres --build-arg DB_PASSWORD=mysecretpassword -t db_chat .
# docker run --name chat_postgresql -d -p 5432:5432 db_chat

# docker start container chat_postgresql
# docker start chat_postgresql
# docker stop container chat_postgresql
# docker stop chat_postgresql