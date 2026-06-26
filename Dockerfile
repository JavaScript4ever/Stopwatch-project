# === Этап 1: Сборка проекта ===
FROM maven:3.9.6-eclipse-temurin-21 AS build
WORKDIR /app
# Копируем настройки Maven и исходный код
COPY pom.xml .
COPY src ./src
# Собираем .jar файл, пропуская тесты для скорости
RUN mvn clean package -DskipTests

# === Этап 2: Запуск приложения ===
FROM eclipse-temurin:21-jre-alpine
WORKDIR /app
# Копируем собранный .jar из первого этапа
COPY --from=build /app/target/*.jar app.jar

# Указываем Spring Boot использовать порт, который выдаст Render
ENTRYPOINT ["java", "-Dserver.port=${PORT:8080}", "-jar", "app.jar"]