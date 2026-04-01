# Creating Custom Hooks

Custom hooks let you extract component logic into reusable functions. A custom hook is just a JavaScript function that calls other React hooks and returns state, handlers, or other useful values. This unlocks the power of hooks to organize your own code.

## Purpose and Explanation

The main purpose of custom hooks is to share logic between components without duplicating code. Before custom hooks, you would need to use higher-order components or render props to reuse stateful logic. Custom hooks make this much simpler by letting you extract hook logic into a standalone function.

A custom hook is a function whose name starts with `use`. It can call other hooks (like `useState` or `useEffect`) and return whatever values or handlers the component needs. Components can then call this custom hook just like any built-in React hook.

## How to Use It

To create a custom hook:

1. **Create a function** that starts with the word `use`
2. **Call other React hooks** inside it, as needed (like `useState`, `useEffect`)
3. **Return the values** the component needs (state, handlers, computed values, etc.)
4. **Use it in components** like any other hook

**Return Formats:**

Custom hooks can return values in different ways:
- An **object**: `return { value, setValue, handler }`
- An **array**: `return [value, handler]`
- Multiple **values**: `return [state, setState, isLoading]`

Choose the format that makes sense for your hook. Objects work well when you have many values. Arrays work well when there's a primary value and one or two handlers.

## When to Use

* **Extracting repeated logic:** If you find the same logic in multiple components, extract it into a custom hook.
* **Making code more readable:** Custom hooks let you name your logic, making components easier to understand.
* **Encapsulating complexity:** Hide complex state management or side effects inside a hook.
* **Sharing behavior across components:** Use custom hooks to share stateful behavior without changing component structure.

To sum it up, custom hooks are a powerful way to reuse and organize logic in React applications. They keep components clean and focused on rendering UI, while logic lives in hooks.
