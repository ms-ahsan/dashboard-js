import MenuBreadcrumb from '@/components/menu-breadcrumb';
import React from 'react'

export default function PageSetting() {
  const breadcrumbItems = [
    { label: "Dashboard", path: "/dashboard" },
    { label: "Settings", path: "/dashboard/settings" },
  ];
  return (
    <div>
      <MenuBreadcrumb items={breadcrumbItems}/>
      Setting
    </div>
  )
}
