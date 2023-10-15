import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import SignUp from './pages/SignUp/SignUp.tsx';
import Login from './pages/Login/Login.tsx';

// <Route path="/SignUp" element={<SignUp />} />
// <Route path="/ForgetPassword" element={<Forgetpassword />} />
// <Route path="/EmailSent" element={<Email_sent />} />
// <Route path="/ResetPassword" element={<ResetPassword />} />
// <Route path="/RasswordResetSuccess" element={<Sucess />} />
// <Route path="/OnBoarding1" element={<Step1 />} />
// <Route path="/OnBoarding2" element={<Step2 />} />
// <Route path="/OnBoarding3" element={<Step3 />} />
// <Route path="/OnBoarding4" element={<Step4_dc />} />
// <Route path="/" element={<Login />} />
// <Route
//   path="/*"
//   element={<Layout />}
// />

const router = createBrowserRouter([
  {
    path: '/vite-react-router/',
    element: <App />,
    children: [
      {
        path: '/vite-react-router/SignUp',
        element: <SignUp />,
      },
      {
        path: '/vite-react-router/',
        element: <Login />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
