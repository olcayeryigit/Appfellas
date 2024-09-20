import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/common/header";


const Layout = () => {
  const { pathname } = useLocation();

  return (
    <>
      <Header/>
      <Outlet />

    </>
  );
};

export default Layout;