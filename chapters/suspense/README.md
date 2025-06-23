# Suspense

React Suspense is a feature that allows components to "wait" for something before rendering. It's primarily used for handling asynchronous operations like data fetching and code splitting in a declarative way.

## How to Use It

The `Suspense` component takes two props:

1. **children:** The component tree that might suspend (i.e., components that might need to wait for something).
2. **fallback:** The UI to show while the children are waiting.

`Suspense` doesn't return any value; it's a component that manages the loading state of its children.

To use Suspense effectively, you need components that can "suspend" - meaning they throw a promise when they're not ready to render. React will catch this promise, show the fallback UI, and retry rendering when the promise resolves.

Common use cases for Suspense include:

- **Code splitting** with `React.lazy()` to load components on demand
- **Data fetching** with compatible data fetching libraries
- **Image loading** with the experimental `use` hook or compatible libraries

**Explanation of the Example:**

In this example, Suspense is used for two purposes:

1. **Code splitting:** We use `React.lazy()` to load the `HeavyComponent` only when it's needed, showing a loading spinner while it loads.

2. **Data fetching:** We use a suspense-compatible data fetching approach to load user data, showing a skeleton UI while the data loads.

This demonstrates how Suspense provides a clean way to handle loading states without cluttering your components with conditional rendering logic.