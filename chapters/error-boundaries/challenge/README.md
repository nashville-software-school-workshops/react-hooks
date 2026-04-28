# Error Boundary Exercise

This exercise demonstrates how to implement Error Boundaries to catch and handle errors gracefully in your React application.

## Objectives

1. Create an ErrorFallback component to display when errors occur
2. Understand how to use Error Boundaries with a fallback UI
3. Use Error Boundaries to wrap error-prone components
4. Implement the retry pattern with a reset function

## Starting Point

The starter code provides:
- ErrorBoundary class component (already implemented)
- ItemList component that throws errors for invalid data
- App component structure ready for integration
- Basic styling

## Tasks

1. **Create the ErrorFallback Component**
   - Create a new `ErrorFallback.js` file in the `src` folder
   - Display a user-friendly error message

2. **Import Required Components**
   - Import ErrorBoundary from './ErrorBoundary'
   - Import ErrorFallback from './ErrorFallback'

3. **Use the Error Boundary**
   - Wrap the ItemList component with ErrorBoundary
   - Pass the fallback as a render prop

4. **Test the Implementation**
   - The ItemList will throw an error when it encounters an item with a negative value
   - The ErrorBoundary should catch this error
   - If you adjust the code so the component doesn't throw an error, the fallback should not be shown

## Component Structure

```
App
├── Header
├── ErrorBoundary (wraps ItemList)
│   └── ItemList (throws error for negative values)
└── Footer (unaffected by errors)
```
