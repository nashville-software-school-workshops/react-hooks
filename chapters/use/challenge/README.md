# Data Fetching with the use Hook Exercise

This exercise demonstrates how to use the `use` hook to handle data fetching and context in React.

## Objectives

1. Use the `use` hook to consume Context
2. Use the `use` hook to handle Promises
3. Work with React Suspense for loading states

## Starting Point

The starter code provides:
- Component structure (App, Header, UserProfile, PostList)
- Styling that responds to theme changes
- Data fetching functions (`fetchUserData`, `fetchUserPosts`)
- Module-level promises passed as props to components
- Component layout and Suspense boundaries

## Tasks

1. **Use the `use` Hook with Context**
   - In the `Header` component, use the `use` hook to get `theme` and `toggleTheme` from `ThemeContext`
   - In the `UserProfile` and `PostList` components, use the `use` hook to get the current `theme`

2. **Use the `use` Hook with Promises**
   - In the `UserProfile` component, use the `use` hook with `userPromise` to get and display the user data
   - In the `PostList` component, use the `use` hook with `postsPromise` to get and display the posts

## Component Structure

```
App
├── ThemeContext.Provider (provides theme and toggleTheme)
    ├── Header (displays title and theme toggle)
    ├── UserProfile (uses theme context and userPromise)
    └── PostList (uses theme context and postsPromise)
```

## Tips

- The `use` hook works with both Context and Promises
- When using `use` with a Promise, the component suspends until the Promise resolves — make sure it's wrapped in `<Suspense>`
- The promises are created at module level (outside the component) so they remain stable across renders

## Solution

Check the completed version in the `completed` folder to see the working implementation.
