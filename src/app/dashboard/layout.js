import { AppSidebar } from "@/components/layout/app-sidebar"
import Header from "@/components/layout/header";
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"


export default function DashboardLayout({ children }) {
  return (
    (
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <Header/>
          <div className="flex-1 p-4 pt-2">
            {children}
          </div>
        </SidebarInset>
      </SidebarProvider>
    )
  );
}
