import productsData from "../data/product"
import Card from "../components/partials/card"
import {
  Avatar,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar,
  NavbarBrand,
} from "flowbite-react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader, Select } from "flowbite-react";
import { useState } from "react";
import { Label, FileInput, TextInput } from "flowbite-react";

export default function product(){
    
    const [openModal, setOpenModal] = useState(false);
    const [modalPlacement] = useState("center");
    const [modalSize] = useState<string>("4xl");

    return(
        <>
            <Navbar className="border-b border-gray-200 bg-white p-5 sticky top-0 z-40" fluid>
                <NavbarBrand  href="https://flowbite-react.com">
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Produk</span>
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
            <main className="p-5 md:p-15">
                <h1 className="font-bold text-lg md:text-xl">Best Produk</h1>   
                <div className="grid grid-cols-2 lg:flex lg:flex-wrap gap-4 mt-5 justify-evenly gap-6">
                    {productsData.map((product, index) => (
                            product.category == "Best Seller" ? (
                        <Card
                            key={index}
                            name={product.name}
                            price={product.price}
                            stock={product.stock}
                            category={product.category}
                            sold={product.sold}
                            image={product.image}
                        />
                            ) : null
                    ))}
                </div>
                <div className="flex justify-between align-middle mt-10">
                    <h1 className="font-bold text-lg md:text-xl">List Produk</h1>
                    <Button onClick={() => setOpenModal(true)} color="blue">Add Product</Button>
                </div>
                <div className="grid grid-cols-2 lg:flex lg:flex-wrap gap-4 mt-5 justify-evenly gap-6">
                    {productsData.map((product, index) => (
                        <Card
                            key={index}
                            name={product.name}
                            price={product.price}
                            stock={product.stock}
                            category={product.category}
                            sold={product.sold}
                            image={product.image}
                        />
                    ))}
                </div>
                <Modal size={modalSize} show={openModal} position={modalPlacement} onClose={() => setOpenModal(false)}>
                    <ModalHeader>Small modal</ModalHeader>
                    <ModalBody>
                    <div className="space-y-6">
                        <div className="flex w-full items-center justify-center">
                            <Label
                                htmlFor="dropzone-file"
                                className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                            >
                                <div className="flex flex-col items-center justify-center pb-6 pt-5">
                                <svg
                                    className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 20 16"
                                >
                                    <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                    />
                                </svg>
                                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                    <span className="font-semibold">Click to upload</span> or drag and drop
                                </p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                </div>
                                <FileInput id="dropzone-file" className="hidden" />
                            </Label>
                            </div>
                        <div className="grid gap-6 mb-6 md:grid-cols-2">
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="base">Nama Produk</Label>
                                </div>
                                <TextInput id="base" type="text" sizing="md" />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="base">Harga</Label>
                                </div>
                                <TextInput id="base" type="text" sizing="md" />
                            </div>
                        </div>
                        <div className="grid gap-6 mb-6 md:grid-cols-2">
                            <div className="max-w-md">
                                <div className="mb-2 block">
                                    <Label htmlFor="kategori">Kategori</Label>
                                </div>
                                <Select id="kategori" required>
                                    <option>Makanan</option>
                                    <option>Minuman</option>
                                </Select>
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="base">Jumlah</Label>
                                </div>
                                <TextInput id="base" type="number" sizing="md" />
                            </div>
                        </div>
                    </div>
                    </ModalBody>
                    <ModalFooter>
                    <Button onClick={() => setOpenModal(false)}>I accept</Button>
                    <Button color="gray" onClick={() => setOpenModal(false)}>
                        Decline
                    </Button>
                    </ModalFooter>
                </Modal>

            </main>
        </>
    )
}