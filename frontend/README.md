# AutoApply Frontend

This is the frontend interface for the AutoApply system specification.

## Getting Started

1. Install dependencies:
   ```
   npm install
   ```

2. Start the development server:
   ```
   npm start
   ```

The application will be available at http://localhost:3000

## Project Structure

```
src/
├── App.js          # Main application component with navigation
├── index.js        # Entry point
├── index.css       # Global styles
├── components/     # React components
│   ├── Dashboard.js           # Example dashboard component
│   ├── TechnicalSpec.js       # Technical specification viewer
│   └── ProjectSpec.js         # Project plan and requirements
├── assets/         # Static assets
├── utils/          # Utility functions
└── styles/         # CSS modules
```

## Available Views

The application has three main views:

1. **System Specification** - High-level system design and architecture
2. **Technical Specification** - Detailed API endpoints, database schema, and class definitions
3. **Project Plan** - Complete project requirements, MVP backlog, and implementation roadmap

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Runs the test suite
- `npm run eject` - Ejects from Create React App (irreversible)

## Dependencies

- React 18
- Tailwind CSS
- Lucide React (icons)
- Recharts (for data visualization)