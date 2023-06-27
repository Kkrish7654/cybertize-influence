
import Navbar from '../header/Navbar';
import Footer from '../footer/Footer';
import SideBar from '../sidebar/SideBar';

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
            <div className='ml-[280px] w-full'>
                {data.children}
            </div>
        </div>
        <Footer/>
        </>
    )
}
export default Layout;