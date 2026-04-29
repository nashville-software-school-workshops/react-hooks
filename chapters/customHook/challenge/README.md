# Custom Hook Practice Project

## Objective

The component in the `challenge` folder has a working counter with increment, decrement, and reset. All of the counter logic lives directly inside the component. Your task is to extract that logic into a custom hook called `useCounter`.

## Tasks

1. **Create `useCounter.js`** in the `src` folder. The hook should:
   - Accept an `initialValue` parameter (default to `0`)
   - Manage the `count` state internally
   - Return `count`, `increment`, `decrement`, and `reset`

2. **Update `App.js`** to import and use `useCounter` instead of managing the state directly.

## Hints

1. **Name it with `use`:** The function must be named `useCounter` so React knows it's a hook.
2. **Move the state in:** Cut the `useState` call and the three handler functions out of `App` and paste them into `useCounter`.
3. **Return what the component needs:** Return an object `{ count, increment, decrement, reset }` from the hook.
4. **Import and destructure:** In `App.js`, call `const { count, increment, decrement, reset } = useCounter(0);` and remove the logic you moved.

## Solution

Refer to the `/completed/src` folder for a completed example.
