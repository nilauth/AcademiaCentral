import NavBar from "@/components/NavBar";
import { Outlet, useNavigate } from "react-router-dom";

import { LOGIN_ROUTE } from "@/router/index";
import { useEffect, useState } from "react";
import { axiosClient } from "@/api/axios";

type StudentData = {
  id: number | null;
  name: string;
  created_at: string;
  email: string;
};

const StudentLayout = () => {
  const navigate = useNavigate();
  const [data, setdata] = useState<StudentData>({
    id: null,
    name: "",
    created_at: "",
    email: "",
  });

  useEffect(() => {
    if (!window.localStorage.getItem("ACCESS_TOKEN")) {
      navigate(LOGIN_ROUTE);
    }
    axiosClient
      .get("/user")
      .then(({ data }) => {
        // console.log(data);
        setdata(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className='h-screen mx-auto max-w-screen-xl'>
      <NavBar
        navElements={{
          home: "Home",
          users: "Users",
          logout: "Logout",
        }}
      />
      <main className='container pt-10'>
        {/* show logged in student infos temporarily */}

        <div className='relative overflow-x-auto'>
          <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
            <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
              <tr>
                <th scope='col' className='px-6 py-3'>
                  ID
                </th>
                <th scope='col' className='px-6 py-3'>
                  NAME
                </th>
                <th scope='col' className='px-6 py-3'>
                  EMAIL
                </th>
                <th scope='col' className='px-6 py-3'>
                  ACCOUNT CREATION DATE
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                <th
                  scope='row'
                  className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
                >
                  {data.id}
                </th>
                <td className='px-6 py-4'>{data.name}</td>
                <td className='px-6 py-4'>{data.email}</td>
                <td className='px-6 py-4'>{data.created_at}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <Outlet />
      </main>
    </div>
  );
};

export default StudentLayout;
