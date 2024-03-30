import Footer from "./Footer";
import Header from "./Header";
import Whatsapp from "../Whatsapp";

const Layout = (props) => {
  return (
    <>
      <Whatsapp />
      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;
