import NavBar from "@/components/NavBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className='h-screen mx-auto max-w-screen-xl'>
      <NavBar />
      <main className='container'>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
