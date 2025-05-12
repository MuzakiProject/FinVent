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
                        </Card>
                    </div>
                    <div className="right w-full lg:w-[30%]">
                        <Card className="w-full h-full">
                            <p className="font-light text-center">Anda Mendapatkan Rp. 4.102.000 hari ini. Pertahankan kerja bagus anda</p>
                        </Card>
                    </div>
                </div>

                <div className="table shadow-md rounded">
                    <div className=" overflow-x-auto ">
                        <Table hoverable>
                            <TableHead>
                                <TableRow className="border-b border-gray-200">
                                    <TableHeadCell className="p-5 bg-white text-sm">Transaksi Terbaru</TableHeadCell>
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