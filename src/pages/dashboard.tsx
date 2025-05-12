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
  NavbarToggle,
} from "flowbite-react";

function home(){
    return(
        <>
            <Navbar className="border-b border-gray-200 bg-white p-5" fluid>
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
                <NavbarToggle />
            </div>
            </Navbar>
            <div className="p-5 gap-6 flex flex-col">
                <div className="flex gap-6">
                    <div className="left flex w-fit gap-6 flex-wrap">
                        <Card href="#" className="w-[26.2vw] ">
                            <i className="fa-solid fa-user-group bg-gray-300 w-fit p-3 rounded"></i>
                            <p className="font-light" >
                                Pelanggan
                            </p>
                            <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                4012
                            </h2>
                        </Card>
                        <Card href="#" className="w-[26.2vw] ">
                            <i className="fa-solid fa-user-group bg-gray-300 w-fit p-3 rounded"></i>
                            <p className="font-light" >
                                Pelanggan
                            </p>
                            <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                4012
                            </h2>
                        </Card>
                        <Card href="#" className="w-full ">
                            <i className="fa-solid fa-user-group bg-gray-300 w-fit p-3 rounded"></i>
                            <p className="font-light" >
                                Pelanggan
                            </p>
                            <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                4012
                            </h2>
                        </Card>
                    </div>
                    <div className="right">
                        <Card href="#" className="w-fit pe-[16.3vw] h-full">
                            <i className="fa-solid fa-user-group bg-gray-300 w-fit p-3 rounded"></i>
                            <p className="font-light" >
                                Pelanggan
                            </p>
                            <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                4012
                            </h2>
                        </Card>
                    </div>
                </div>
                <div className="table">
                    <div className="overflow-x-auto">
                        <Table hoverable>
                            <TableHead>
                                <TableRow>
                                    <TableHeadCell>Transaksi Terbaru</TableHeadCell>
                                    <TableHeadCell></TableHeadCell>
                                    <TableHeadCell></TableHeadCell>
                                    <TableHeadCell></TableHeadCell>
                                    <TableHeadCell></TableHeadCell>
                                    <TableHeadCell></TableHeadCell>
                                </TableRow>
                            </TableHead>
                            <TableBody className="divide-y">
                                <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                    <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    Id
                                    </TableCell>
                                    <TableCell>Tanggal</TableCell>
                                    <TableCell>Deskripsi</TableCell>
                                    <TableCell>Kategori</TableCell>
                                    <TableCell>Jumlah</TableCell>
                                    <TableCell>Status</TableCell>
                                </TableRow>
                                <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                    <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    Microsoft Surface Pro
                                    </TableCell>
                                    <TableCell>White</TableCell>
                                    <TableCell>Laptop PC</TableCell>
                                    <TableCell>$1999</TableCell>
                                    <TableCell>
                                    <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                                        Edit
                                    </a>
                                    </TableCell>
                                </TableRow>
                                <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                    <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Magic Mouse 2</TableCell>
                                    <TableCell>Black</TableCell>
                                    <TableCell>Accessories</TableCell>
                                    <TableCell>$99</TableCell>
                                    <TableCell>
                                    <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                                        Edit
                                    </a>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </div>
        </>

    )
}
export default home;