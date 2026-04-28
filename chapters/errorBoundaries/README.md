# Error Boundaries

Error Boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of crashing the whole component tree.

## How to Use Them

Error Boundaries are created by defining a class component that implements either or both of these lifecycle methods:

1. **static getDerivedStateFromError():** Used to render a fallback UI after an error has been thrown.
2. **componentDidCatch():** Used to log error information.

A component becomes an Error Boundary when it defines at least one of these lifecycle methods.

Error Boundaries only catch errors in the components below them in the tree. They can't catch errors in:
- Event handlers
- Asynchronous code (e.g., setTimeout or requestAnimationFrame callbacks)
- Server-side rendering
- Errors thrown in the Error Boundary itself

**Explanation of the Example:**

In this example, we create an `ErrorBoundary` class component that catches errors in its children. We have a `BuggyCounter` component that intentionally throws an error when the count exceeds 5. The Error Boundary catches this error and displays a fallback UI instead of crashing the entire application. This demonstrates how Error Boundaries can be used to gracefully handle errors in a React application.