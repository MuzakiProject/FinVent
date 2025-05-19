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
  NavbarCollapse,   
  NavbarLink
} from "flowbite-react";
import { Button, Modal, ModalBody, ModalHeader } from "flowbite-react";
import { useState } from "react";
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import data from "../data/dashboard.chart";
import Chatbot from "../components/chatbot/chat";

export default function home(){
    const [openModal, setOpenModal] = useState(false);
    const [modalPlacement] = useState("center");
    const [modalSize] = useState<string>("4xl");

    return(
        <>
            <Navbar className="border-b border-gray-200 bg-white p-5 sticky top-0 z-40" fluid>
                <NavbarBrand  href="https://flowbite-react.com">
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Dashboard</span>
                </NavbarBrand>
                <NavbarCollapse>
                    <NavbarLink href="#">
                        <Button className="bg-transparent hover:bg-transparent hover:text-inherit hover:shadow-none" onClick={() => setOpenModal(true)} >
                        <div className="relative w-full">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <i className="fa-solid fa-robot text-gray-500"></i>
                            </div>
                            <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Tanyakan apa saja..." required />
                        </div>
                        </Button>
                    </NavbarLink>
                </NavbarCollapse>
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
                            <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">201</h2>
                        </Card>
                        <Card className="w-full sm:w-[48%] lg:w-[26.2vw]">
                            <i className="fa-solid fa-boxes-packing bg-gray-200 w-fit p-3 rounded"></i>
                            <p className="font-light">Total Penjualan</p>
                            <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">402</h2>
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
                        <Card className="w-full h-full">
                            <p className="font-light text-center">Anda Mendapatkan Rp. 4.102.000 hari ini. Pertahankan kerja bagus anda</p>
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
            <Modal size={modalSize} show={openModal} position={modalPlacement} onClose={() => setOpenModal(false)}>
                <ModalHeader>AI Asisten Manajer</ModalHeader>
                <ModalBody>
                    <Chatbot />
                </ModalBody>
            </Modal>
        </>

    )
}