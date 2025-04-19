import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

const BasicLayout = ({children}) => {
    return (
        <div className="wrapper">
            <Header />
            <main className="main">
                {children}
            </main>
            <Footer />
        </div>
    );
}

export default BasicLayout;