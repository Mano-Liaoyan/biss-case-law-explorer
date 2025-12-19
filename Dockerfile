# Build stage
FROM node:20-slim AS builder

# Set the working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM node:20-slim

# Set the working directory
WORKDIR /app

# Copy the production build from the builder stage
COPY --from=builder /app/.output ./.output

# Set environment variables
ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=5000

# Expose the port
EXPOSE 5000

# Start the application
CMD ["node", ".output/server/index.mjs"]
