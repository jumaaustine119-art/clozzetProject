import Nav from "../components/Nav"
// import logo from "../assets/images/logo.svg"
import Footer from "../components/Footer"
// import { LibrarySquareIcon } from "lucide-react";

function Layout ({children, cart}){
    return(
<div className="flex flex-col min-h-screen">
    <header>
        <Nav cart={cart}/>
    </header>
    <main className="flex-1" >
        {children}
    </main>
    <footer>
     <Footer/>
    </footer>
</div>


    )

}

export default Layout;