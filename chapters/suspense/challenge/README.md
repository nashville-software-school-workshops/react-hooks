# Image Gallery with Suspense Exercise

This exercise will help you understand how to use React Suspense for code splitting and data fetching. You'll create an image gallery application that loads images on demand and uses Suspense to handle loading states.

## Starting Point

The starter code provides a basic React application with a gallery layout. You'll implement Suspense to improve the user experience when loading images and image details.

## Tasks

1. **Implement Code Splitting with Suspense**
   
   Use `React.lazy()` and `Suspense` to lazy-load the following components:
   - `ImageDetails` component (shown when a user clicks on an image)
   - `SearchFilters` component (for filtering images)
   
   Wrap these components with Suspense and provide appropriate fallback UIs.

2. **Create a Suspense-Compatible Image Loader**

   Implement a suspense-compatible image loading mechanism:
   - Create a `wrapPromise` utility function that follows the Suspense data fetching pattern
   - Create an `ImageResource` that uses this pattern to load image data
   - Make the image components use this resource to load images

3. **Implement Nested Suspense Boundaries**

   Create a more sophisticated loading experience by nesting Suspense components:
   - Outer Suspense for the overall gallery layout
   - Inner Suspense for individual images
   
   This will allow parts of the UI to load progressively.

## Solution

Check the completed version in the `completed` folder to see the working implementation.

## Tips

- Remember that Suspense works by catching promises thrown during rendering.
- The `wrapPromise` pattern typically involves creating a resource with a `read()` method that either returns data or throws a promise.
- When implementing code splitting, consider what granularity makes sense for your application.
- Suspense boundaries can be nested to create a more refined loading experience.

## Bonus

Implement a "Suspense List" pattern (even though the actual SuspenseList component isn't released yet) by creating a sequence of loading states that appear in a specific order to avoid layout shifts.