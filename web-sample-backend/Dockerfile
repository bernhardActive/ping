# Build stage
FROM maven:3.8.4-openjdk-17 as builder

WORKDIR /app

COPY pom.xml .
RUN mvn dependency:go-offline

COPY src ./src
RUN mvn package -DskipTests

# Final runtime stage
FROM openjdk:17

WORKDIR /app

COPY --from=builder /app/target/web-sample-backend-0.0.1-SNAPSHOT.jar .

EXPOSE 8080

CMD ["java", "-jar", "web-sample-backend-0.0.1-SNAPSHOT.jar"]
