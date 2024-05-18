import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

const Layout = ({children}) => {
    return (
        <div className={'app'}>
            <Header />
            <main className={"main"}>
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
