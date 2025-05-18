import { Card } from "flowbite-react";
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import {
  Avatar,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar,
  NavbarBrand,
} from "flowbite-react";

import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import data from "../data/dashboard.chart";

export default function home(){

    return(
        <>
            <Navbar className="border-b border-gray-200 bg-white p-5 sticky top-0 z-40" fluid>
                <NavbarBrand  href="https://flowbite-react.com">
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Dashboard</span>
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
            <div className="p-5 gap-6 flex flex-col mb-10">
                <div className="flex flex-col lg:flex-row gap-6">
                    <div className="left flex flex-wrap gap-6 w-full lg:w-[70%]">
                        <Card className="w-full sm:w-[48%] lg:w-[27vw]">
                            <i className="fa-solid fa-user-group bg-gray-200 w-fit p-3 rounded"></i>
                            <p className="font-light">Pelanggan</p>
                            <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">4012</h2>
                        </Card>
                        <Card className="w-full sm:w-[48%] lg:w-[26.2vw]">
                            <i className="fa-solid fa-boxes-packing bg-gray-200 w-fit p-3 rounded"></i>
                            <p className="font-light">Total Penjualan</p>
                            <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">4012</h2>
                        </Card>
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
                                    <BarChart data={data} width={150} height={40}>
                                         <XAxis dataKey="name" />
                                         <Bar dataKey="value" fill="#8884d8" />
                                         <YAxis />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </Card>
                    </div>
                    <div className="right w-full lg:w-[30%]">
                        <Card className="w-full h-full relative flex flex-col items-center justify-center p-6">
                            <div className="z-10 flex justify-center items-center flex-col gap lg:gap-5">
                            <p className="font-bold text-2xl 2xl:text-4xl pt-4 lg:pt-0">100%</p>
                            <p className="bg-secondary-2 rounded-xl py-1 px-5 text-xs lg:text-base font-semibold text-secondary shadow-lg">^ 11</p>
                            </div>

                            <div className="rounded-full w-50 h-50 lg:w-70 lg:h-70 border-[10px] border-primary absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2"></div>

                            <div className="bg-white z-20 relative  py-6 px-4 rounded-xl max-w-[300px] text-center">
                            <p className="font-light">Anda Mendapatkan Rp. 4.102.000 hari ini. Pertahankan kerja bagus anda</p>
                            </div>
                        </Card>
                    </div>

                </div>

                <div className="table-dashboard shadow-md rounded">
                    <div className=" overflow-x-auto ">
                        <Table hoverable>
                            <TableHead>
                                <TableRow className="border-b border-gray-200">
                                    <TableHeadCell className="p-5 bg-white text-lg capitalize">Transaksi Terbaru</TableHeadCell>
                                    <TableHeadCell className=" bg-white"></TableHeadCell>
                                    <TableHeadCell className=" bg-white"></TableHeadCell>
                                    <TableHeadCell className=" bg-white"></TableHeadCell>
                                    <TableHeadCell className=" bg-white"></TableHeadCell>
                                    <TableHeadCell className=" bg-white"></TableHeadCell>
                                </TableRow>
                            </TableHead>
                            <TableBody className="divide-y">
                                <TableRow className="bg-white border-b border-gray-200 dark:border-gray-700 dark:bg-gray-800">
                                    <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    Id
                                    </TableCell>
                                    <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    Nama Produk
                                    </TableCell>
                                    <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    Kategori
                                    </TableCell>
                                    <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    Tanggal
                                    </TableCell>
                                    <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    Jumlah
                                    </TableCell>
                                    <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    Status
                                    </TableCell>
                                </TableRow>
                                <TableRow className="bg-white border-b border-gray-200 dark:border-gray-700 dark:bg-gray-800">
                                    <TableCell>LP1201</TableCell>
                                    <TableCell>Redbull Drink</TableCell>
                                    <TableCell>Minuman</TableCell>
                                    <TableCell>12-02-2025</TableCell>
                                    <TableCell>15</TableCell>
                                    <TableCell className="text-green-700">Sukses</TableCell>
                                </TableRow>
                                <TableRow className="bg-white border-b border-gray-200 dark:border-gray-700 dark:bg-gray-800">
                                    <TableCell>LP1201</TableCell>
                                    <TableCell>Redbull Drink</TableCell>
                                    <TableCell>Minuman</TableCell>
                                    <TableCell>12-02-2025</TableCell>
                                    <TableCell>15</TableCell>
                                    <TableCell className="text-green-700">Sukses</TableCell>
                                </TableRow>
                                <TableRow className="bg-white border-b border-gray-200 dark:border-gray-700 dark:bg-gray-800">
                                    <TableCell>LP1201</TableCell>
                                    <TableCell>Redbull Drink</TableCell>
                                    <TableCell>Minuman</TableCell>
                                    <TableCell>12-02-2025</TableCell>
                                    <TableCell>15</TableCell>
                                    <TableCell className="text-green-700">Sukses</TableCell>
                                </TableRow>
                                <TableRow className="bg-white border-b border-gray-200 dark:border-gray-700 dark:bg-gray-800">
                                    <TableCell>LP1201</TableCell>
                                    <TableCell>Redbull Drink</TableCell>
                                    <TableCell>Minuman</TableCell>
                                    <TableCell>12-02-2025</TableCell>
                                    <TableCell>15</TableCell>
                                    <TableCell className="text-green-700">Sukses</TableCell>
                                </TableRow>
                                <TableRow className="bg-white border-b border-gray-200 dark:border-gray-700 dark:bg-gray-800">
                                    <TableCell>LP1201</TableCell>
                                    <TableCell>Redbull Drink</TableCell>
                                    <TableCell>Minuman</TableCell>
                                    <TableCell>12-02-2025</TableCell>
                                    <TableCell>15</TableCell>
                                    <TableCell className="text-green-700">Sukses</TableCell>
                                </TableRow>
                                <TableRow className="bg-white border-b border-gray-200 dark:border-gray-700 dark:bg-gray-800">
                                    <TableCell>LP1201</TableCell>
                                    <TableCell>Redbull Drink</TableCell>
                                    <TableCell>Minuman</TableCell>
                                    <TableCell>12-02-2025</TableCell>
                                    <TableCell>15</TableCell>
                                    <TableCell className="text-green-700">Sukses</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </div>
        </>

    )
}