# Image to use
FROM node:16-alpine

# Main directory
WORKDIR /app

# Copy of packages
COPY package.json .
COPY package-lock.json .

# Install of dependecies
RUN npm install

# Copy of directory on server
COPY . .

# required for docker desktop port mapping
EXPOSE 3000

# Run of react proyect
CMD ["npm", "start"]