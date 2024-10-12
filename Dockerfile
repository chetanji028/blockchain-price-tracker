# Stage 1: Install dependencies only when needed
FROM node:16 AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# Stage 2: Rebuild the source code only when needed
FROM node:16 AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Stage 3: Production image, copy all the files and run the app
FROM node:16 AS runner
WORKDIR /app
COPY --from=builder /app ./
CMD ["npm", "run", "start:prod"]
