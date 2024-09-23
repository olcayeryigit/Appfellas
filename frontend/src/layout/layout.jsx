import { Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  const { pathname } = useLocation();

  return (
    <>
      <Outlet />
    </>
  );
};

export default Layout;
