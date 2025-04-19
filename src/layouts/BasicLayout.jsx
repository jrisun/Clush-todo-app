import Header from "../component/common/Header";
import Footer from "../component/common/Footer";

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