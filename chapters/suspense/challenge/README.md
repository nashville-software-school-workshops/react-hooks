# Suspense Exercise

This exercise demonstrates how to use React's Suspense component for code splitting and managing loading states declaratively.

## Objectives

1. Understand how Suspense works with lazy-loaded components
2. Use React.lazy() to code-split components
3. Display fallback UI while components load
4. Handle multiple suspended components

## Starting Point

The starter code provides:
- App component with Suspense placeholder
- Component structure ready for lazy loading
- Basic styling for loading and content states

## Tasks

1. **Import Suspense and lazy**
   - Import Suspense from React
   - Import lazy from React
   - These are built-in React features

2. **Create Lazy-Loaded Components**
   - Use `React.lazy()` to wrap component imports
   - Create separate component files that can be lazy-loaded
   - Make sure component exports are default exports

3. **Add Suspense Boundaries**
   - Wrap lazy components with `<Suspense>`
   - Provide a `fallback` prop with loading UI
   - The fallback can be a loading spinner or message

4. **Create a Loading Component**
   - Create a simple loading indicator component
   - Display it in the Suspense fallback
   - Add appropriate styling

5. **Test Multiple Suspense Boundaries**
   - Wrap multiple lazy components in Suspense
   - Verify fallback UI appears while loading
   - Confirm components render once loaded
   - Test that one boundary doesn't block others

## Component Structure

```
App
├── Suspense (with LoadingSpinner fallback)
│   ├── LazyUserCard
│   ├── LazyPostCard
│   └── LazyCommentCard
└── StaticSection (loads immediately)
```

## Tips

- `React.lazy()` only works with default exports
- The fallback prop can be any React element
- Multiple components can share the same Suspense boundary
- Suspense works best with code splitting for performance
- You can have nested Suspense boundaries for granular control

## Common Pitfalls to Avoid

- Don't forget to use `React.lazy()` - it won't code-split without it
- Remember that lazy components must be default exports
- Don't forget the fallback prop on Suspense
- Remember that Suspense suspends all children - they will all show the fallback together
- Lazy imports need to resolve to a component, not a file

## Understanding Suspense

1. **Lazy Loading a Component**
   ```javascript
   const LazyComponent = lazy(() => import('./Component'));
   ```

2. **Wrapping with Suspense**
   ```javascript
   <Suspense fallback={<Loading />}>
     <LazyComponent />
   </Suspense>
   ```

3. **Fallback Display**
   The fallback is shown while the lazy component is downloading and loading. Once loaded, the fallback is replaced with the actual component.

## Why Suspense?

Without Suspense:
1. All code is bundled together in one large file
2. Users download unnecessary code on first load
3. Loading states must be managed manually in each component
4. Consistency in loading UI is hard to maintain

With Suspense:
1. Code is automatically split into chunks
2. Only needed components are downloaded
3. Loading states are managed declaratively
4. Provides consistent loading experience

## Solution

Check the completed version in the `completed` folder to see the working implementation.
