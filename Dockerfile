# Use the official Node.js runtime as the base image
FROM node

# Create and set the working directory in the container
WORKDIR /app

# Install dependencies
COPY package*.json ./

RUN npm install

# Copy your application code into the container
COPY . .

# Expose the port your Express app will run on
EXPOSE 3000

ENV PORT=3000
ENV MONGODB_URI=mongodb://mongo:27017/school_app

# Start MongoDB and your Express app
CMD ["npm", "start"]
