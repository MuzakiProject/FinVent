
import { Sidebar, SidebarItem, SidebarItemGroup, SidebarItems } from "flowbite-react";


export function sidebar() {
  return (
    <Sidebar className="h-full">
      <SidebarItems>
        <span className="self-center whitespace-nowrap text-xl font-semibold text-blue-500 w-max ps-3 pt-5 pb-5">FinVent</span>
        <SidebarItemGroup>
          <SidebarItem href="#" >
            Dashboard
          </SidebarItem>
          <SidebarItem href="#"  label="Pro" labelColor="dark">
            Kanban
          </SidebarItem>
          <SidebarItem href="#"  label="3">
            Inbox
          </SidebarItem>
          <SidebarItem href="#" >
            Users
          </SidebarItem>
          <SidebarItem href="#" >
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
  );
}
export default sidebar;