import MenuBreadcrumb from "@/components/menu-breadcrumb";

export default function Page() {
  const breadcrumbItems = [
    { label: "Dashboard", path: "/dashboard" },
    
  ];
  return (
    <div>
      <MenuBreadcrumb items={breadcrumbItems}/>
      <div>Dsahboard</div>
    </div>
  );
}
