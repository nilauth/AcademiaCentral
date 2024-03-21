import NavBar from "@/components/NavBar";
import { STUDENT_DASHBOARD_ROUTE } from "@/router";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const GuestLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (window.localStorage.getItem("ACCESS_TOKEN")) {
      navigate(STUDENT_DASHBOARD_ROUTE);
    }
  });

  return (
    <div className='h-screen mx-auto max-w-screen-xl'>
      <NavBar
        navElements={{
          home: "Home",
          login: "Login",
          register: "Register",
        }}
      />
      <main className='container'>
        <Outlet />
      </main>
    </div>
  );
};

export default GuestLayout;
