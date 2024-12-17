'use client'
import FormExample from '@/components/form/form-example';
import MenuBreadcrumb from '@/components/menu-breadcrumb';
import React from 'react'

const breadcrumbItems = [
  { label: "Dashboard", path: "/dashboard" },
  { label: "Form", path: "/dashboard/settings" },
];

export default function PageForm() {
   
    return (
      <div>
        <MenuBreadcrumb items={breadcrumbItems}/>
        <FormExample/>
      </div>
    )
}
