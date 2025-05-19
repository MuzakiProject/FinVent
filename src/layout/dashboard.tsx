import { Outlet } from 'react-router-dom';
import Sidebar from '../components/widget/sidebar';
import Footer from '../components/widget/footer';

const DashboardLayout = () => {
    return (
        <div className='md:grid  md:grid-cols-[255px_1fr] h-screen'>
            <div className="side">
                <Sidebar/>
            </div>
        <div className="main bg-gray-100 ">
            <main>
            <Outlet />
            </main>
            <Footer />
        </div>
        </div>
    );
};

export default DashboardLayout;
