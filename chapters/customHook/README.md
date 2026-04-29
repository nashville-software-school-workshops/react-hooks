# Custom Hooks

A custom hook is a JavaScript function whose name starts with `use` that calls other hooks. Custom hooks let you extract stateful logic from a component into a reusable function that can be shared across multiple components.

## Purpose and Explanation

When you find yourself repeating the same stateful logic in multiple components — the same `useState` calls, the same handlers, the same `useEffect` patterns — that's a sign the logic belongs in a custom hook.

Custom hooks follow the same rules as built-in hooks: they can only be called at the top level of a React function component or another hook. By convention, every custom hook name starts with `use`, which lets React (and your tools) enforce those rules.

Custom hooks are just functions — they don't have any special syntax. The power comes from the fact that they can contain and share stateful logic without sharing state itself. Each component that calls a custom hook gets its own isolated state.

## How to Write One

1. Create a new file (e.g. `useToggle.js`).
2. Write a function whose name starts with `use`.
3. Call any hooks you need inside it.
4. Return whatever the component needs — a value, a setter, or an object of both.

**Explanation of the Example:**

In this example, `useToggle` wraps `useState` to manage a boolean value. It returns the current value and a `toggle` function. The component can call `useToggle` twice to manage two independent toggles — each gets its own separate state.

## When to Use

*   **Reusing stateful logic:** When two or more components share the same state + handler pattern, extract it into a custom hook.
*   **Simplifying complex components:** Move logic out of the component body so the JSX stays focused on rendering.
*   **Encapsulating side effects:** Wrap `useEffect` logic (data fetching, subscriptions, timers) in a hook so components don't need to know the details.

## Beyond the Basics

Custom hooks are useful even when logic isn't shared across multiple components. Some other patterns you'll encounter in real codebases:

*   **Bridging external systems:** Hooks are the standard way to connect non-React things — browser APIs, WebSockets, local storage, third-party SDKs — into the React lifecycle. Rather than extracting existing logic, you're adapting an outside API to work with React's model.
*   **Composing hooks together:** A custom hook can call other custom hooks, building up behavior in layers. A `usePaginatedSearch` hook might internally call a `useFetch` hook, a `useDebounce` hook, and a `useLocalStorage` hook, combining them into a single clean interface.
*   **Separating what from how:** A component can stay focused purely on rendering — `const { data, isLoading } = useUserProfile(id)` — without knowing anything about fetching, caching, or retries. The hook owns those decisions. This is about keeping components readable, not about reuse.
*   **Hiding implementation details:** Because the component only sees what the hook returns, you can change the internals — swap a plain `fetch` for a caching library, change how errors are handled — without touching any of the components that use the hook.
