import { SquaresFour, HandCoins, CurrencyCircleDollar, ShoppingBagOpen, Warehouse, ClockCounterClockwise, SignOut } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { useState } from "react";

const sideBarItems = [
    {
        name: "Dashboard",
        icon: <SquaresFour size={20} />,
        link: "/",
    },
    {
        name : "Transaksi",
        icon: <HandCoins size={20} />,
        link: "/transaction",
    },
    {
        name : "Laporan Keuangan",
        icon : <CurrencyCircleDollar size={20} />,
        link: "/financial-report",
    },
    {
        name : "Produk",
        icon : <ShoppingBagOpen size={20} />,
        link: "/product",

    },
    {
        name : "Laporan Stok",
        icon : <Warehouse size={20} />,
        link: "/stock-report",
    },
    {
        name : "Aktivitas",
        icon : <ClockCounterClockwise size={20} />,
        link: "/activity",
    },
]




const Sidebar = () => {
    const [itemActive, setItemActive] = useState("Dashboard");

    const handleItemClick = (itemName: string) => {
        setItemActive(itemName);
    }

    return (
        <nav className="border-r border-gray-300 bg-white h-screen fixed w-64">
            <div className="mb-10">
                <h1 className="font-bold text-primary p-5 text-2xl">
                    FinVent 
                </h1>
            </div>

            <p className="p-5 font-bold text-lg">Menu</p>

            <div className="p-5 flex flex-col gap-3">
                {sideBarItems.map((item) => (
                <Link to={`${item.link}`} key={item.name} onClick={() => handleItemClick(item.name)}>   
                    <section className={`flex gap-5 items-center p-4  ${itemActive === item.name ? "bg-primary-2" : ""} rounded-lg hover:bg-primary-2 transition-all duration-300 ease-in-out`}>
                        <div className={`${itemActive === item.name ? "text-primary" : "text-black"}`}>
                            {item.icon}
                        </div>
                        <p className={`${itemActive === item.name ? "text-primary" : "text-black"} text-sm`}>{item.name}</p>
                    </section>
                </Link>
                ))}
            </div>

            <div>
                <Link to="/logout">
                    <section className="flex gap-5 items-center absolute bottom-10 hover:bg-primary-2 transition-all duration-300 ease-in-out p-5 w-[90%] rounded-2xl text-sm">
                        <div>
                            <SignOut size={20} />
                        </div>
                        <p>Logout</p>
                    </section>
                </Link>
            </div>
        </nav>
    )
}

export default Sidebar;