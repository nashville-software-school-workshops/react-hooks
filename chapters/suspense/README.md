# Suspense

Suspense is a React feature that allows you to handle asynchronous operations like data fetching and code splitting in a declarative way. Instead of managing loading states manually, Suspense lets you suspend rendering while waiting for data or lazy-loaded components to be ready, and display a fallback UI in the meantime.

## How to Use It

Suspense is used with the `<Suspense>` component wrapper that accepts a `fallback` prop.

**Key Props:**

1. **`fallback`** - The UI to display while waiting for the suspended components to load. Can be any React element (usually a loading spinner or placeholder).

2. **`children`** - The components that may suspend. These components typically use data fetching libraries that support Suspense or lazy-loaded components.

**How It Works:**

When a component inside a Suspense boundary throws a promise (which Suspense-compatible libraries do), the Suspense component catches it and displays the fallback UI until the promise resolves.

**Explanation of the Example:**

In this example, we use `React.lazy()` to code-split a component, wrapping it in a Suspense boundary. The fallback UI (loading message) is displayed while the component is being downloaded. Once loaded, the actual component renders. This pattern works with any Suspense-compatible data fetching solution.

## When to Use

*   **Code Splitting:** Use Suspense with `React.lazy()` to load components on-demand, reducing initial bundle size.
*   **Data Fetching:** Use with Suspense-compatible data fetching libraries (like those using the Resource API pattern) to manage loading states declaratively.
*   **Progressive Loading:** Use Suspense to provide a better UX by showing loading indicators while async operations complete.
*   **Better Than Loading State:** Eliminates the need to manually manage loading, error, and success states throughout your component tree.

## Important Notes

- Suspense works with code splitting (`React.lazy()`) and is framework-agnostic for data fetching
- Traditional data fetching with `useEffect` and `fetch()` does not support Suspense yet in React 18
- Error Boundaries work well alongside Suspense to handle errors in suspended components
- Multiple components can suspend together and share the same fallback UI

## Common Patterns

Suspense is commonly used at multiple levels:
- **Per-Route:** Suspend at the route level for code splitting
- **Per-Section:** Suspend individual sections to stream content progressively
- **Per-Component:** Suspend individual components for granular control