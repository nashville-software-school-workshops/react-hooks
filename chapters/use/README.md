# use

The `use` hook is a newer React hook that allows you to read values from resources like Context, Promise, or other objects that can be "used" by React. It's a more generic version of hooks like `useContext` that can handle different types of resources. The `use` hook is particularly powerful because it can be called conditionally, unlike other React hooks.

## How to Use It

The `use` hook takes one argument:

1. **resource:** The resource you want to read a value from. This can be:
   - A Context object created with `createContext`
   - A Promise
   - Any other resource that React can "use"

**Return Value:**

`use` returns the current value of the resource. For a Context, it returns the current context value. For a Promise, it returns the resolved value of the Promise — but only after the Promise has fulfilled. While it is pending, `use` does not block or wait: it **throws the Promise**, which React catches internally. React then renders the nearest `<Suspense>` boundary's fallback in place of the component, and retries rendering the component once the Promise settles.

If the Promise **rejects**, `use` throws the error instead. React looks for the nearest `<ErrorBoundary>` above the component to handle it. Without one, a rejected Promise will crash the component tree.

```javascript
<ErrorBoundary fallback={<p>Something went wrong.</p>}>
  <Suspense fallback={<p>Loading...</p>}>
    <ComponentThatUsesPromise promise={dataPromise} />
  </Suspense>
</ErrorBoundary>
```

In summary:
- **Pending promise** → throws the Promise → `<Suspense>` fallback renders
- **Fulfilled promise** → returns the resolved value → component renders normally
- **Rejected promise** → throws the error → `<ErrorBoundary>` fallback renders

Because `use` throws while a Promise is pending, the Promise passed to it must be **stable** — created outside the component or passed as a prop. Creating a new Promise on every render means `use` throws a new Promise each time, causing the component to suspend indefinitely.

**Explanation of the Example:**

In this example, we demonstrate two common use cases for the `use` hook:

1. **Using Context:** We create a `UserContext` and use the `use` hook to access it directly in a component. This is similar to `useContext` but can be used conditionally.

2. **Using Promises:** We create a function that fetches data and returns a Promise. We then use the `use` hook to directly consume this Promise in a component. When the Promise resolves, the component will render with the resolved data.

The key advantage of `use` is that it can be called conditionally inside your component, which allows for more flexible patterns than traditional hooks.

## When to Use

* **Conditional Context Access:** When you need to access context values conditionally within your component.
* **Data Fetching:** When you want to directly use Promise-based data in your components.
* **Server Components:** The `use` hook is particularly valuable in React Server Components where traditional hooks aren't available.
* **Resource Composition:** When you want to compose multiple resources together in a more flexible way than traditional hooks allow.
* **Dynamic Resource Selection:** When the resource you need to use depends on runtime conditions.

## Important Notes

* The `use` hook is designed to work with React's Suspense for handling loading states.
* When using `use` with Promises, your component might suspend while waiting for the Promise to resolve.
* Unlike other hooks, `use` can be called conditionally (inside if statements, loops, etc.).
* The `use` hook is part of React's newer features and requires React 18.3 or higher.