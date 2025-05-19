import {
  Avatar,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar,
  NavbarBrand
} from "flowbite-react";
import { Card } from "flowbite-react";
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import data from "../data/financial.chart";

export default function financialreport(){
    return(
        <>
            <Navbar className="border-b border-gray-200 bg-white p-5 sticky top-0 z-40" fluid>
                <NavbarBrand  href="https://flowbite-react.com">
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Laporan Keuangan</span>
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
                        <i className="fa-solid fa-user-group bg-gray-200 w-fit p-3 rounded"></i>
                        <p className="font-light">Total Pendapatan</p>
                        <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">4012</h2>
                    </Card>
                    <Card className="w-full">
                        <i className="fa-solid fa-money-bill-transfer bg-gray-200 w-fit p-3 rounded"></i>
                        <p className="font-light">Total Pengeluaran</p>
                        <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">4012</h2>
                    </Card>
                    <Card className="w-full">
                        <i className="fa-solid fa-money-bill-trend-up bg-gray-200 w-fit p-3 rounded"></i>
                        <p className="font-light">Laba Bersih</p>
                        <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">4012</h2>
                    </Card>
                    <Card className="w-full">
                        <i className="fa-solid fa-dollar-sign bg-gray-200 w-fit p-3 rounded"></i>
                        <p className="font-light">Transaksi Tertunda</p>
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
                <div className="table-activity shadow-md rounded mb-5">
                    <div className=" overflow-x-auto ">
                        <Table hoverable>
                            <TableHead>
                                <TableRow className="border-b border-gray-200">
                                    <TableHeadCell className="p-5 bg-white text-lg capitalize">Aktivitas Finansial</TableHeadCell>
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
                                    Deskripsi
                                    </TableCell>
                                    <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    Tanggal
                                    </TableCell>
                                    <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    Kategori
                                    </TableCell>
                                    <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    Jenis
                                    </TableCell>
                                    <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    Jumlah
                                    </TableCell>
                                    <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    Saldo
                                    </TableCell>
                                </TableRow>
                                <TableRow className="bg-white border-b border-gray-200 dark:border-gray-700 dark:bg-gray-800">
                                    <TableCell>Lorem Ipsum Dolor Sit Amet..</TableCell>
                                    <TableCell>12-02-2025</TableCell>
                                    <TableCell>Pemasukan</TableCell>
                                    <TableCell>Penjualan Barang</TableCell>
                                    <TableCell>15</TableCell>
                                    <TableCell className="text-green-700">Rp. 999.999,9</TableCell>
                                </TableRow>
                                <TableRow className="bg-white border-b border-gray-200 dark:border-gray-700 dark:bg-gray-800">
                                    <TableCell>Lorem Ipsum Dolor Sit Amet..</TableCell>
                                    <TableCell>12-02-2025</TableCell>
                                    <TableCell>Pengeluaran</TableCell>
                                    <TableCell>Pembelian Stok Barang</TableCell>
                                    <TableCell>15</TableCell>
                                    <TableCell className="text-red-800">Rp. 999.999,9</TableCell>
                                </TableRow>
                                <TableRow className="bg-white border-b border-gray-200 dark:border-gray-700 dark:bg-gray-800">
                                    <TableCell>Lorem Ipsum Dolor Sit Amet..</TableCell>
                                    <TableCell>12-02-2025</TableCell>
                                    <TableCell>Pemasukan</TableCell>
                                    <TableCell>Penjualan Barang</TableCell>
                                    <TableCell>15</TableCell>
                                    <TableCell className="text-green-700">Rp. 999.999,9</TableCell>
                                </TableRow>
                                <TableRow className="bg-white border-b border-gray-200 dark:border-gray-700 dark:bg-gray-800">
                                    <TableCell>Lorem Ipsum Dolor Sit Amet..</TableCell>
                                    <TableCell>12-02-2025</TableCell>
                                    <TableCell>Pemasukan</TableCell>
                                    <TableCell>Penjualan Barang</TableCell>
                                    <TableCell>15</TableCell>
                                    <TableCell className="text-green-700">Rp. 999.999,9</TableCell>
                                </TableRow>
                                <TableRow className="bg-white border-b border-gray-200 dark:border-gray-700 dark:bg-gray-800">
                                    <TableCell>Lorem Ipsum Dolor Sit Amet..</TableCell>
                                    <TableCell>12-02-2025</TableCell>
                                    <TableCell>Pemasukan</TableCell>
                                    <TableCell>Penjualan Barang</TableCell>
                                    <TableCell>15</TableCell>
                                    <TableCell className="text-green-700">Rp. 999.999,9</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </main>
        </>
    );
}