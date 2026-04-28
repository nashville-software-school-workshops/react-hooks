# Error Boundaries

Error Boundaries are React components that catch JavaScript errors that occur anywhere in their child component tree. They log those errors and display a fallback UI instead of crashing the entire application. Error boundaries are particularly useful for gracefully handling unexpected errors in production applications and preventing white-screen-of-death scenarios.

## How to Use Them

Error Boundaries are implemented as class components with the `componentDidCatch()` and/or `static getDerivedStateFromError()` lifecycle methods.

**Key Methods:**

1. **`static getDerivedStateFromError(error)`** - Called when an error is thrown in a descendant component. It should return a state object to update the component's state.

2. **`componentDidCatch(error, errorInfo)`** - Called when an error has been thrown by a descendant component. Use this to log error details or send error reports to an error logging service.

**Return Value:**

Error Boundaries are wrapper components that render either the child components normally or a fallback UI based on whether an error has been caught.

**Explanation of the Example:**

In this example, we create an `ErrorBoundary` class component that wraps problematic components. The `getDerivedStateFromError()` method catches errors and updates the component state to trigger a re-render with fallback UI. The `componentDidCatch()` method logs the error details for debugging purposes. When a component inside the boundary throws an error, the fallback UI is displayed instead of crashing the entire application.

## When to Use

*   **Production Error Handling:** Use Error Boundaries to catch unexpected errors in production and display user-friendly error messages instead of broken UIs.
*   **Component Isolation:** Use Error Boundaries to isolate errors to specific parts of your application so one broken component doesn't crash the whole app.
*   **Error Logging:** Use Error Boundaries combined with error logging services to track and monitor errors in production.
*   **Graceful Degradation:** Use Error Boundaries to provide fallback UI that allows users to continue using other parts of the application even when one section fails.

## Important Limitations

Error Boundaries **cannot** catch errors for:
- Event handlers (use try/catch instead)
- Asynchronous code (use try/catch or `.catch()`)
- Server-side rendering
- Errors in the Error Boundary itself

## Common Patterns

Error Boundaries work best when used at strategic points in your component tree, such as:
- Around route components
- Around main feature sections
- Around third-party components that might throw errors
