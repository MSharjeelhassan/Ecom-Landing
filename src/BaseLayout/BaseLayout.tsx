import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"

const BaseLayout = ()=>{

    return(
        <>
        
        <Header
        brandName="Home Depot"
        contactPage="Contact-Us"
        aboutPage="About"
        productPage="Products"
        signin="Sign-In"
        signup="Sign-Up"
        category = 'Category'
    
      />
        

        <main>
            <Outlet/>
        </main>


        <footer>
           <Footer/>
        </footer>
        </>
    )
}

export default BaseLayout