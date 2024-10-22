# Solid.js TypeScript Starter

A strictly typed Solid.js starter template with Solid Devtools, TypeScript, ESLint, and Prettier.

## Features

- 🚀 [Solid.js](https://www.solidjs.com/) with TypeScript
- ⚡️ [Vite](https://vitejs.dev/) for fast development and building
- 💪 Strict TypeScript configuration
- 🔍 ESLint with modern flat config for static code analysis
- 💅 Prettier for consistent code formatting
- 🛠️ SVG support via `vite-plugin-solid-svg`
- 🔧 DevTools for debugging

## Getting Started

```bash
# Clone this repository
git clone https://github.com/Vujovic/solid-starter

# Install dependencies
pnpm install

# Start dev server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm serve
```

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm serve` - Preview production build
- `pnpm format` - Format all files with Prettier
- `pnpm format:check` - Check if files are formatted
- `pnpm lint` - Lint files with ESLint
- `pnpm lint:fix` - Fix ESLint errors automatically
- `pnpm check` - Run both format check and lint

## TypeScript

Uses a strict TypeScript configuration including:

- Strict null checks
- No implicit any
- No unchecked indexed access
- Strict property initialization
- And more...

## ESLint

Modern flat config setup with:

- TypeScript support
- Solid.js specific rules
- Prettier integration
- Strict type checking
- Import sorting
- Console logging warnings

## SVG Support

SVGs can be imported directly as Solid components:

```tsx
import Logo from './assets/logo.svg'

function App() {
  return <Logo />
}
```