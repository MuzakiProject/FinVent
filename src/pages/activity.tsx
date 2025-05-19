import {
  Avatar,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar,
  NavbarBrand,
} from "flowbite-react";
import { Card } from "flowbite-react";
import data from "../data/financial.chart";
import data2 from "../data/dashboard.chart";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';

export default function activity(){
    return(
        <>
            <Navbar className="border-b border-gray-200 bg-white p-5 sticky top-0 z-40" fluid>
                <NavbarBrand  href="https://flowbite-react.com">
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Laporan Stok</span>
                </NavbarBrand>
                <div className="flex md:order-2">
                    <Dropdown arrowIcon={false} inline label={
                        <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />}>
                        <DropdownHeader>
                            <span className="block text-sm">Bonnie Green</span>
                            <span className="block truncate text-sm font-medium">name@flowbite.com</span>
                        </DropdownHeader>
                        <DropdownItem>Dashboard</DropdownItem>
                        <DropdownItem>Settings</DropdownItem>
                        <DropdownItem>Earnings</DropdownItem>
                        <DropdownDivider />
                        <DropdownItem>Sign out</DropdownItem>
                    </Dropdown>
                </div>
            </Navbar>
            <main className="p-5">
                <div className="chart mb-5">
                    <Card className="w-full">
                        <div className="flex justify-between align-middle">
                            <h2 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">Penjualan Bulanan</h2>
                            <Dropdown placement="left-start" label="" dismissOnClick={false} renderTrigger={() => <span><i className="fa-solid fa-ellipsis-vertical cursor-pointer"></i></span>}>
                                <DropdownItem>Dashboard</DropdownItem>
                                <DropdownItem>Settings</DropdownItem>
                                <DropdownItem>Earnings</DropdownItem>
                                <DropdownItem>Sign out</DropdownItem>
                            </Dropdown>
                        </div>
                        <div className="card-body">
                            <div className="card-body" style={{ height: '300px' }}>
                                <ResponsiveContainer width="100%" height="100%">
                                    <LineChart data={data}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Line type="monotone" dataKey="pemasukan" stroke="#8884d8" activeDot={{ r: 8 }} />
                                    <Line type="monotone" dataKey="pengeluaran" stroke="#82ca9d" />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </Card>
                </div>
                <div className="chart mb-5">
                    <Card className="w-full">
                        <div className="flex justify-between align-middle">
                            <h2 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">Penjualan Bulanan</h2>
                            <Dropdown placement="left-start" label="" dismissOnClick={false} renderTrigger={() => <span><i className="fa-solid fa-ellipsis-vertical cursor-pointer"></i></span>}>
                                <DropdownItem>Dashboard</DropdownItem>
                                <DropdownItem>Settings</DropdownItem>
                                <DropdownItem>Earnings</DropdownItem>
                                <DropdownItem>Sign out</DropdownItem>
                            </Dropdown>
                        </div>
                        <div className="card-body">
                            <ResponsiveContainer width="100%" height={300}>
                                <BarChart data={data2} width={150} height={40}>
                                        <XAxis dataKey="name" />
                                        <Bar dataKey="value" fill="#8884d8" />
                                        <YAxis />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </Card>
                </div>
            </main>
        </>
    );
}