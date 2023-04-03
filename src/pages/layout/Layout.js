import "./Layout.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

const Layout = ({children}) => {
    return (
        <div>
            <main className="main">
                <div className="main-content">
                    <Header/>
                    {children}
                    <Footer/>
                </div>
            </main>
        </div>
    )
};

export default Layout;