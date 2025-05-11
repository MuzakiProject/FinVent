import { Sidebar, SidebarCollapse, SidebarItem, SidebarItemGroup, SidebarItems } from "flowbite-react";


export function sidebar() {
  return (
    <div className="fixed left-0 h-screen">
   <Sidebar aria-label="Sidebar with multi-level dropdown example">
    <h1 className="font-bold text-blue-600 p-5 pt-1 text-xl">FinVent</h1>
      <SidebarItems>
        <SidebarItemGroup>
          <SidebarCollapse label="Dashboard">
            <SidebarItem href="#">Financial</SidebarItem>
            <SidebarItem href="#">Inventory</SidebarItem>
          </SidebarCollapse>
          <SidebarItem href="#" >
            Inbox
          </SidebarItem>
          <SidebarItem href="#">
            Users
          </SidebarItem>
          <SidebarItem href="#">
            Products
          </SidebarItem>
          <SidebarItem href="#" >
            Sign In
          </SidebarItem>
          <SidebarItem href="#" >
            Sign Up
          </SidebarItem>
        </SidebarItemGroup>
      </SidebarItems>
    </Sidebar>
    </div>
  );
}
export default sidebar;