import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from 'react-hot-toast'
import Loading from "./components/ui/Loading";
import PageNotFound from "./components/ui/PageNotFound";
// import Header from "./components/navbar/Header";
// import Sidebar from "./components/Sidebar";


// const Home = React.lazy(() => import('./pages/Home'));
const Dashboard = React.lazy(() => import('./pages/Dashboard/Dashboard'));
const Search = React.lazy(() => import('./pages/Search'));
const Course = React.lazy(() => import('./pages/course/Course'));


// auth
const Login = React.lazy(() => import('./components/auth/Login'));
const Register = React.lazy(() => import('./components/auth/Register'));
const ResetPassword = React.lazy(() => import('./components/auth/ResetPassword'));
const OtpVerify = React.lazy(() => import('./components/auth/OtpVerify'));
const NewPassword = React.lazy(() => import('./components/auth/NewPassword'));




const Profile = React.lazy(() => import('./pages/profile/Profile'));

const App = () => {
  return (
    <Router>
      {/* <Header /> */}

      {/* <Sidebar /> */}

      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Dashboard />} />

          <Route path="/search" element={<Search />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/course" element={<Course />} />


          {/*  auth  */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgetpassword" element={<ResetPassword />} />
          <Route path="/otp" element={<OtpVerify />} />
          <Route path="/newpassword" element={<NewPassword />} />


          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>

      <Toaster position="bottom-right" />
    </Router>
  );
};

export default App;