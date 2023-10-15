// import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import './App.css';
// import Layout from './components/Layout/Layout';
// import { SplashScreen } from './pages/IntroScreens/SpashScreen';
import SignUp from './pages/SignUp/SignUp.tsx';
import Login from './pages/Login/Login.tsx';
// import Forgetpassword from './pages/ForgetPassword/ForgetPassword.tsx';
// import ResetPassword from './pages/ForgetPassword/ResetPassword.tsx';
// import Sucess from './pages/ForgetPassword/Sucess.tsx';
// import Email_sent from './pages/ForgetPassword/Email_sent.tsx';
// import Step1 from './pages/OnBoarding/Step1.tsx';
// import Step2 from './pages/OnBoarding/Step2.tsx';
// import Step3 from './pages/OnBoarding/Step3.tsx';
// import Step4_dc from './pages/OnBoarding/Step4_dc.tsx';
// import Layout from './components/Layout/Layout.tsx';
// const router = createBrowserRouter([
//   { path: '/', Component: Login }, //
//   { path: '*', Component: SignUp },
// ]);

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        {/* Add more routes as needed */}
      </Routes>
    </div>
  );
}
