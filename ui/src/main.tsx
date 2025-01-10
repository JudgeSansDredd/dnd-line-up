import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

// Route tree import
import { createRouter, RouterProvider } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen';
// Create a router instance
const router = createRouter({routeTree});
// Register the router for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

// Render the app
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
