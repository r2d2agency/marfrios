# ---- Build stage ----
FROM oven/bun:1.1 AS build
WORKDIR /app

# Install deps (better cache)
COPY package.json bun.lock* bunfig.toml* ./
RUN bun install --frozen-lockfile || bun install

# Copy source and build for Node target
COPY . .
ENV SELF_HOST=1
ENV NODE_ENV=production
RUN bun run build

# ---- Runtime stage ----
FROM node:20-alpine AS runtime
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000
ENV HOST=0.0.0.0

# Nitro node-server output is self-contained in .output/
COPY --from=build /app/.output ./.output

EXPOSE 3000
CMD ["node", ".output/server/index.mjs"]
