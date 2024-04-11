import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Layout({cart}) {
  return (
    <>
      <Header cart={cart}/>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;