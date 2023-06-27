import Navbar from "../Header/Header";
import Footer from "../Footer/Footer";
import Sidebar from "../Sidebar/Sidebar";

const Layout = (data) => {
   // const pageTitle = "E-commerce Dashboard Template"
    return (
        <>
        <title>{data.pageTitle}</title>
        <Navbar/>

        <div className='flex flex-row bg-slate-100 w-full overflow-hidden'>
            <div>
                <Sidebar/>
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