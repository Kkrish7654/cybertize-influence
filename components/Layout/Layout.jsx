import Navbar from "../Header/Header";
import Footer from "../Footer/Footer";
import SideBar from "../sidebar/SideBar";

const Layout = (data) => {
   // const pageTitle = "E-commerce Dashboard Template"
    return (
        <>
        <title>{data.pageTitle}</title>
        <Navbar/>

        <div className='flex flex-row bg-slate-100 w-full'>
            <div>
                <SideBar/>
            </div>
            <div className='ml-[290px] mt-24 mb-24 w-[calc(100%_-_310px)] h-screen'>
                {data.children}
            </div>
        </div>
        {/* <Footer/> */}
        </>
    )
}
export default Layout;