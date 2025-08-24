# React + Express + TypeScript Starter

[![CI](https://github.com/Dellrodar/React-express-typescript-template/actions/workflows/ci.yml/badge.svg)](https://github.com/Dellrodar/React-express-typescript-template/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A pragmatic full‑stack starter with a React frontend (Vite + TypeScript) and an Express backend (TypeScript), in a single repository. Optimized for quick starts, local DX, and production-ready deployment.

## 🚀 Features

- **Frontend**: React 19 + Vite + TypeScript + Tailwind CSS
- **Backend**: Express 5 + TypeScript + Pino logging + Zod validation
- **Testing**: Vitest + React Testing Library + Supertest
- **Development**: Hot reload for both client and server
- **Linting**: ESLint + Prettier configured for both sides
- **CI/CD**: GitHub Actions workflow included
- **Type Safety**: Full TypeScript coverage

## 🏃‍♂️ Quick Start

```bash
# Clone this template
npx degit Dellrodar/React-express-typescript-template my-app
cd my-app

# Install dependencies for both client and server
cd client && npm install && cd ../server && npm install && cd ..
npm install

# Start development servers (client on :3000, server on :3001)
npm run dev
```

## 📁 Project Structure

```
├── client/                 # React + Vite + TypeScript
│   ├── src/
│   │   ├── lib/api.ts     # API helpers
│   │   ├── App.tsx        # Main component
│   │   └── __tests__/     # Component tests
│   ├── vite.config.ts     # Vite config with proxy
│   └── package.json
├── server/                 # Express + TypeScript
│   ├── src/
│   │   ├── routes/        # API routes
│   │   ├── lib/           # Utilities (env, logger)
│   │   └── app.ts         # Express app setup
│   ├── test/              # API tests
│   └── package.json
├── .github/workflows/     # CI configuration
└── package.json           # Root scripts
```

## 🛠️ Available Scripts

```bash
# Development
npm run dev          # Start both client and server
npm run dev:client   # Start only client
npm run dev:server   # Start only server

# Building
npm run build        # Build both client and server
npm run build:client # Build only client
npm run build:server # Build only server

# Testing
npm test             # Run all tests
npm run test:client  # Run client tests
npm run test:server  # Run server tests

# Linting
npm run lint         # Lint both client and server
npm run lint:client  # Lint only client
npm run lint:server  # Lint only server
```

## 🔧 Configuration

### Environment Variables

Copy `server/.env.example` to `server/.env` and customize:

```env
PORT=3001
LOG_LEVEL=info
NODE_ENV=development
```

### API Routes

- `GET /api/health` - Health check endpoint
- `GET /api/example/greet?name=world` - Example API endpoint

## 🧪 Testing

- **Client**: Vitest + React Testing Library
- **Server**: Vitest + Supertest
- **Coverage**: Run `npm test` for both client and server tests

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Docker Support

```dockerfile
# Example Dockerfile for server
FROM node:24-alpine
WORKDIR /app
COPY server/package*.json ./
RUN npm ci
COPY server/ .
RUN npm run build
EXPOSE 3001
CMD ["node", "dist/index.js"]
```

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/Dellrodar/React-express-typescript-template/issues).

## ❤️ Support

If this template helped you, please consider:

- ⭐ Starring this repository
- 🍀 [Sponsoring the maintainer](https://github.com/sponsors/Dellrodar)
- 🐛 [Reporting issues](https://github.com/Dellrodar/React-express-typescript-template/issues)

## 📄 License

This project is [MIT](./LICENSE) licensed.

## 🏗️ Built With

- [React](https://reactjs.org/) - Frontend framework
- [Vite](https://vitejs.dev/) - Build tool
- [Express](https://expressjs.com/) - Backend framework
- [TypeScript](https://typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Vitest](https://vitest.dev/) - Testing framework
- [Pino](https://getpino.io/) - Logging
- [Zod](https://zod.dev/) - Schema validation
