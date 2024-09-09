# Use the official Node.js image as the base image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy all the files
COPY . .

# Install the dependencies
RUN npm install

# Expose the port the app runs on
EXPOSE 3000

# Build and start the Express app
CMD ["sh", "-c", "npm run build && npm start"]