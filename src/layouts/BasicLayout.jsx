import Header from "../component/Header";
import Footer from "../component/Footer";

const BasicLayout = ({children}) => {
    return (
        <div className="wrapper">
            <Header />
            <main className="main">{children}</main>
            <Footer />
        </div>
    );
}

export default BasicLayout;