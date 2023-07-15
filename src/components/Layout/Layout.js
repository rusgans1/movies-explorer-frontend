import "./Layout.css";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Layout({ isSuccess }) {
  let location = useLocation();

  const accessFooterRoutes = ["/", "/movies", "/saved-movies"];
  const isAccessFooterRoute = accessFooterRoutes.includes(location.pathname);

  return (
    <div className="layout">
      <Header isSuccess={isSuccess} />
      <main className="main">
        <Outlet />
      </main>
      {isAccessFooterRoute && <Footer />}
    </div>
  );
}

export default Layout;