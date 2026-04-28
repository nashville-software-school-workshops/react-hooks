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

In this example, we fetch data from an API and use a promise wrapper to make it Suspense-compatible. The `wrapPromise()` function tracks the promise state (pending, success, error) and throws the promise to Suspense while it's loading. This causes the fallback UI to display until the data arrives. Once the promise resolves, the component can call `read()` again to get the actual data. Notice how other page content loads immediately while the API request is pending—that's the power of Suspense.

## When to Use

*   **Data Fetching:** Use Suspense with data fetching libraries or custom promise wrappers to manage loading states declaratively instead of using useState for loading flags.
*   **Code Splitting:** Use Suspense with `React.lazy()` to load components on-demand, reducing initial bundle size.
*   **Progressive Loading:** Use Suspense to provide a better UX by showing loading indicators while async operations complete, without blocking other page content.
*   **Cleaner Component Logic:** Eliminates the need to manually manage loading, error, and success states throughout your component tree.

## Important Notes

- For data fetching, you need a Suspense-compatible solution like a promise wrapper, TanStack Query with Suspense, or React 19's `use()` hook
- Traditional data fetching with `useEffect` and `fetch()` does not support Suspense—it requires a library or custom wrapper
- The `wrapPromise()` pattern shown in the example is how you make a promise Suspense-compatible by throwing the promise until it resolves
- Error Boundaries work well alongside Suspense to handle errors in suspended components
- Multiple components can suspend together and share the same fallback UI
- Code splitting with `React.lazy()` is another powerful use case for Suspense

## Common Patterns

Suspense is commonly used at multiple levels:
- **Per-Route:** Suspend at the route level for code splitting
- **Per-Section:** Suspend individual sections to stream content progressively
- **Per-Component:** Suspend individual components for granular control
