FROM node:20-alpine

WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Copy all source code (including app directory)
COPY . .

# Build the application
RUN npm run build -- --config vite.config.docker.ts

# Remove dev dependencies
RUN npm prune --production

EXPOSE 3000

CMD [ "node", "./build/server/server.js" ]
