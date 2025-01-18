import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"


// Menu items.
const items = [
    {
      title: "Home",
      url: "/sales-dashbord",
      icon: Home,
    },
    {
      title: "Inbox",
      url: "/sales-dashbord/inbox",
      icon: Inbox,
    },
    {
      title: "Calendar",
      url: "/sales-dashbord/calendar",
      icon: Calendar,
    },
    {
      title: "Search",
      url: "/sales-dashbord/search",
      icon: Search,
    },
    {
      title: "Settings",
      url: "/sales-dashbord/settings",
      icon: Settings,
    },
  ]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
