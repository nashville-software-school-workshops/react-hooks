# Error Handling Dashboard Exercise

This exercise will help you understand how to use Error Boundaries in React to gracefully handle errors in your application. You'll create a dashboard with multiple widgets, where some widgets might throw errors, but the entire dashboard should remain functional.

## Starting Point

The starter code provides a basic React application with a dashboard layout containing multiple widgets. Each widget is a separate component that displays different types of data. Some widgets have bugs that will cause them to crash under certain conditions.

## Tasks

1. **Create an Error Boundary Component**
   
   Create a reusable `ErrorBoundary` class component that:
   - Catches errors in its child components
   - Displays a fallback UI when an error occurs
   - Logs error information to the console
   - Provides a "Try Again" button to reset the error state

2. **Implement Strategic Error Boundaries**
   
   Wrap individual widgets with Error Boundaries so that when one widget crashes, the others continue to function. Consider:
   - Should you wrap the entire dashboard with one Error Boundary?
   - Should you wrap each widget separately?
   - What's the best granularity for error handling in this UI?

3. **Customize Error Messages**
   
   Modify your Error Boundary to accept custom fallback UI or error messages through props, allowing different error messages for different parts of your application.

## Solution

Check the completed version in the `completed` folder to see the working implementation.

## Tips

- Remember that Error Boundaries only catch errors in the component tree below them.
- Error Boundaries don't catch errors in event handlers. For those, use regular try/catch statements.
- Consider how granular your error handling should be. Too few Error Boundaries might not isolate errors effectively, while too many might lead to code duplication.
- The `componentDidCatch` lifecycle method is perfect for logging errors to an error reporting service.

## Bonus

Add error reporting functionality to your Error Boundary that simulates sending error information to a monitoring service. You can use `console.log` with a message indicating that the error would be reported in a real application.