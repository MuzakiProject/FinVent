import { Card } from "flowbite-react";
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
            <Navbar className="border-b border-gray-200" fluid>
            <NavbarBrand  href="https://flowbite-react.com">
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Dashboard Financial</span>
            </NavbarBrand>
            <div className="flex md:order-2">
                <Dropdown
                arrowIcon={false}
                inline
                label={
                    <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
                }
                >
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
            <div className="h-screen mt-3 p-3">
                <div className="grid grid-cols-3"></div>
                <Card href="#" className="max-w-2xs">
                    <i className="fa-solid fa-user-group bg-gray-300 w-fit p-3 rounded"></i>
                    <p className="font-light" >
                        Pelanggan
                    </p>
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        4012
                    </h5>
                </Card>
            </div>
        </>

    )
}
export default home;