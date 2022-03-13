import Footer from "./footer";
import Logo from "./logos";
import Navbar from "./navbar";

const Layout = ({ children }) => {
    return ( 

        <div className="content">
            <Logo />
            <Navbar />
            {children}
            <Footer />
        </div>
     );
}
 
export default Layout;