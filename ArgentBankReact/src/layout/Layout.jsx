import Nav from "../components/nav/Nav"
import Footer from "../components/footer/Footer"

const Layout = ({children}) => {
    return (
        <>
        <Nav />
        {children}
        <Footer />
        </>
    )
}

export default Layout