# Use the official Node.js LTS (Long Term Support) image as the base image for building the Angular app
FROM node:14 as builder

# Set the working directory inside the container
WORKDIR /app

# Install Angular CLI globally
RUN npm install -g @angular/cli@13

# Copy the package.json and package-lock.json to the container's working directory
COPY package*.json ./

# Install Node.js dependencies
RUN npm ci

# Copy the rest of the application source code to the container's working directory
COPY . .

# Build the Angular application for production
RUN ng build --prod

# Use a smaller nginx image for serving the built application
FROM nginx:alpine

# Copy the built Angular application from the builder stage to the nginx image
COPY --from=builder /app/dist/web-sample /usr/share/nginx/html

# Expose the container's port 80
EXPOSE 80

# Start nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]
