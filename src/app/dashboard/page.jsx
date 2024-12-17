import MenuBreadcrumb from "@/components/menu-breadcrumb";

export default function Page() {
  const breadcrumbItems = [
    { label: "Dashboard", path: "/dashboard" },
    { label: "Settings", path: "/dashboard/settings" },
  ];
  return (
    <div>
      <MenuBreadcrumb items={breadcrumbItems}/>
      <div>Dsahboard</div>
    </div>
  );
}
