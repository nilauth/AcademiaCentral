import { Link } from "react-router-dom";

type NavElementsType = {
  [key: string]: string;
};

const NavBar = ({ navElements }: { navElements: NavElementsType }) => {
  const links = [];

  for (const key in navElements) {
    links.push(
      <li key={key}>
        <Link to={`/${key}`}>{navElements[key]}</Link>
      </li>
    );
  }
  return (
    <nav className='bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700'>
      <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
        <Link
          to='/'
          className='flex items-center space-x-3 rtl:space-x-reverse'
        >
          <img src='/src/assets/logo.svg' className='h-8' alt='App Logo' />
          <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
            AcademiaCentral
          </span>
        </Link>

        <div className='hidden w-full md:block md:w-auto'>
          <ul className='flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
            {/* <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/users'>Users</Link>
            </li>
            <li>
              <Link to='/login'>Login</Link>
            </li>
            <li>
              <Link to='/register'>Register</Link>
            </li> */}
            {links}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
