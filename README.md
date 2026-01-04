# Currency Converter

A simple currency conversion tool built with React, TypeScript, and Vite. This project demonstrates clean architecture, component composition, and best practices for a frontend application.

## Features

- **Currency Selection**: Two select inputs for choosing source and target currencies
- **Real-time Conversion**: Automatic conversion when amount or currencies change
- **Debounced API Requests**: Optimized API calls with 500ms debounce
- **Error Handling**: Comprehensive error handling for API failures
- **Loading States**: User-friendly loading indicators
- **Input Validation**: Validates numeric input and prevents invalid conversions
- **Swap Functionality**: Quick swap button to exchange currencies

## Project Structure

```
src/
├── api/              # API layer for external services
│   └── currencyApi.ts
├── components/       # React components
│   ├── CurrencyConverter.tsx
│   ├── CurrencySelect.tsx
│   └── AmountInput.tsx
├── hooks/           # Custom React hooks
│   └── useCurrencyConversion.ts
├── types/           # TypeScript type definitions
│   └── currency.ts
├── App.tsx          # Main application component
└── main.tsx         # Application entry point
```

## Setup Instructions

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. **Clone or download the project**

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` and add your Currency Beacon API key:
   ```
   VITE_API_KEY=your_actual_api_key_here
   ```
   
   You can get a free API key from [Currency Beacon](https://currencybeacon.com/).

4. **Run the development server**
   ```bash
   npm run dev
   ```
   
   The application will open at `http://localhost:3000`

5. **Build for production**
   ```bash
   npm run build
   ```
   
   The production build will be in the `dist` directory.

## API Configuration

This project uses the Currency Beacon API:
- **Currencies Endpoint**: `https://api.currencybeacon.com/v1/currencies`
- **Conversion Endpoint**: `https://api.currencybeacon.com/v1/convert`

The API key is read from the `VITE_API_KEY` environment variable. Make sure to prefix environment variables with `VITE_` for Vite to expose them to the client-side code.

## Architecture Decisions

### Separation of Concerns

- **API Layer** (`src/api/`): Isolated API calls with proper error handling
- **Hooks** (`src/hooks/`): Business logic and state management
- **Components** (`src/components/`): Presentational components with minimal logic
- **Types** (`src/types/`): Centralized type definitions

### Performance Optimizations

- **Debounced API Requests**: 500ms debounce to prevent excessive API calls
- **Memoized Callbacks**: Using `useCallback` to prevent unnecessary re-renders
- **Controlled Components**: All inputs are controlled for predictable state
- **Code Splitting**: Vendor chunks separated in build configuration

### Error Handling

- API errors are caught and displayed to the user
- Input validation prevents invalid API calls
- Loading states provide user feedback during async operations

### Accessibility

- Proper label associations for form inputs
- Semantic HTML structure
- ARIA labels for interactive elements

## Assumptions

1. **API Response Format**: The implementation assumes the Currency Beacon API returns data in the format:
   - Currencies: `{ response: { currencies: { [code]: name } } }`
   - Conversion: `{ response: { value: number } }`

2. **Default Behavior**: 
   - Currencies are sorted alphabetically by code
   - Conversion is triggered automatically on input change (with debounce)
   - Empty or invalid amounts prevent conversion

3. **Error Handling**: 
   - Missing API key throws an error on app load
   - Network errors are displayed to the user
   - Invalid conversions show error messages

## Development Notes

- The project uses React 18 with functional components and hooks
- TypeScript strict mode is enabled for type safety
- Vite is configured for optimal development experience
- No global state management library (React state and hooks are sufficient)
- All components are functional with hooks

## Future Enhancements (Optional)

- Add currency conversion history
- Implement favorite currencies
- Add currency charts/graphs
- Support for multiple conversions at once
- Offline support with service workers
- Unit and integration tests

## License

This is a demonstration project for technical assessment purposes.

