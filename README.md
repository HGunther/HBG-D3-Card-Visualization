# HBG D3 Card Visualization

A beautiful nodes and edges graph visualization built with D3.js and TypeScript.

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Local Development Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```
   This will open the visualization in your browser at `http://localhost:8080`

3. **Type checking:**
   ```bash
   npm run type-check
   ```

### Building for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` directory.

## 📖 GitHub Pages

This project is configured to use GitHub Pages. After building:

1. Ensure the `dist/` folder is in your repository
2. Go to your repository settings → Pages
3. Select "Deploy from a branch"
4. Choose the main branch and `/dist` folder
5. Your visualization will be available at `https://HGunther.github.io/HBG-D3-Card-Visualization/`

Alternatively, you can use GitHub Actions to automate the build and deployment process.

## 🏗️ Project Structure

```
src/
├── index.html       # Main HTML file
├── index.ts         # Main TypeScript entry point
└── ...              # Additional components

dist/               # Build output (generated)
node_modules/       # Dependencies (generated)
webpack.config.js   # Webpack configuration
tsconfig.json       # TypeScript configuration
```

## 🎨 Features

- **D3.js Visualization**: Interactive nodes and edges graph
- **TypeScript Support**: Full type safety and IntelliSense
- **Development Server**: Hot module reloading with webpack-dev-server
- **VS Code IntelliSense**: Configured for excellent autocomplete

## 🔧 Development

### Adding New Features

The current visualization demonstrates:
- Force simulation with physics
- Node positioning and rendering
- Link rendering
- Drag interactions
- Responsive layout

You can extend this by modifying `src/index.ts` and adding new components.

### Dependencies

- **d3**: Data-driven visualization library
- **TypeScript**: Type-safe JavaScript
- **Webpack**: Module bundler and dev server
- **ts-loader**: TypeScript loader for webpack

## 📝 License

MIT

## 👤 Author

HGunther
