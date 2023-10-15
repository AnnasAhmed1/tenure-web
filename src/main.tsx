import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// ]
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter> {/* Wrap your entire app with BrowserRouter */}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>,
// );
