// src/router.jsx
import { createBrowserRouter } from 'react-router-dom';
import App from './App';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
], {
  future: {
    v7_startTransition: true,
  },
});

export default router;
