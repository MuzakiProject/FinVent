import { Outlet } from 'react-router-dom';
import Sidebarc from '../components/widget/sidebar-c';
import Footer from '../components/widget/footer';

const CashierLayout = () => {
    return (
        <div className='md:grid  md:grid-cols-[255px_1fr] h-screen'>
            <div className="side">
                <Sidebarc/>
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

export default CashierLayout;
