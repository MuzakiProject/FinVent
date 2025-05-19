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
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
export default function stockreport(){
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
                <div className="flex gap-6 mb-5">
                    <Card className="w-full">
                        <i className="fa-solid fa-box bg-gray-200 w-fit p-3 rounded"></i>
                        <p className="font-light">Total Produk</p>
                        <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">4012</h2>
                    </Card>
                    <Card className="w-full">
                        <i className="fa-solid fa-box-open bg-gray-200 w-fit p-3 rounded"></i>
                        <p className="font-light">Total Stok</p>
                        <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">4012</h2>
                    </Card>
                    <Card className="w-full">
                        <i className="fa-solid fa-circle-exclamation bg-gray-200 w-fit p-3 rounded"></i>
                        <p className="font-light">Stok Rendah</p>
                        <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">4012</h2>
                    </Card>
                    <Card className="w-full">
                        <i className="fa-solid fa-circle-xmark bg-gray-200 w-fit p-3 rounded"></i>
                        <p className="font-light">Produk Habis</p>
                        <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">4012</h2>
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
                        <div className="card-body">Card Body...</div>
                    </Card>
                </div>
                <div className="table-activity shadow-md rounded mb-5">
                    <div className=" overflow-x-auto ">
                        <Table hoverable>
                            <TableHead>
                                <TableRow className="border-b border-gray-200">
                                    <TableHeadCell className="p-5 bg-white text-lg capitalize">Aktivitas Stok Barang</TableHeadCell>
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
                                    Nama Barang
                                    </TableCell>
                                    <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    Tanggal
                                    </TableCell>
                                    <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    Kategori
                                    </TableCell>
                                    <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    Jenis Aktivitas
                                    </TableCell>
                                    <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    Jumlah
                                    </TableCell>
                                    <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    Keterangan
                                    </TableCell>
                                </TableRow>
                                <TableRow className="bg-white border-b border-gray-200 dark:border-gray-700 dark:bg-gray-800">
                                    <TableCell>Susu Murni 1 Liter</TableCell>
                                    <TableCell>12-02-2025</TableCell>
                                    <TableCell>Minuman</TableCell>
                                    <TableCell className="text-green-700">Masuk</TableCell>
                                    <TableCell>15</TableCell>
                                    <TableCell>Lorem Ipsum Dolor Sit Amet..</TableCell>
                                </TableRow>
                                <TableRow className="bg-white border-b border-gray-200 dark:border-gray-700 dark:bg-gray-800">
                                    <TableCell>Minyak Goreng 1 Liter</TableCell>
                                    <TableCell>12-02-2025</TableCell>
                                    <TableCell>Minuman</TableCell>
                                    <TableCell className="text-red-700">Keluar</TableCell>
                                    <TableCell>15</TableCell>
                                    <TableCell>Lorem Ipsum Dolor Sit Amet..</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </main>
        </>
    );
}