import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const LayoutPublic = () => {
  const navigation = useNavigation();

  return (
    <>
      <Navbar />
      <main className="container d-flex justify-content-center align-items-center">
        {navigation.state === "loading" && (
          <div className="alert alert-info my-5">Loading...</div>
        )}
        <Outlet />
      </main>
      {/* <footer className="container text-center">Footer</footer> */}
      <Footer />
    </>
  );
};

export default LayoutPublic;
