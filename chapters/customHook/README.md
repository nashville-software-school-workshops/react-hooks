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
