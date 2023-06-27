import Navbar from "../Header/Header";
import Footer from "../Footer/Footer";
import SideBar from "../Sidebar/Sidebar";

const Layout = (data) => {
    const webTitle = "home";
   // const pageTitle = "E-commerce Dashboard Template"
    return (
        <>
        <title>{data.pageTitle}</title>
        <Navbar/>

        <div className='flex flex-row bg-slate-100 w-full overflow-hidden'>
            <div>
                <SideBar/>
            </div>
            <div className='ml-[270px] w-[calc(100%-_270px)]'>
                {data.children}
            </div>
        </div>
        <Footer/>
        </>
    )
}
export default Layout;