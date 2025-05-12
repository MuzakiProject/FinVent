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
export default function product(){
    
    
    
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
                <h1 className="font-bold text-lg md:text-xl mt-10">List Produk</h1>
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
            </main>
        </>
    )
}