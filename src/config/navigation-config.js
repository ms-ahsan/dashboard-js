import {
  ChartArea,
  Component,
  Frame,
  Fullscreen,
  Map,
  Navigation,
  PictureInPictureIcon,
  PieChart,
  SquareLibrary,
  Table,
} from "lucide-react"

export const NavigationMenus = {
  navMain: [
    {
      title: "UI Component",
      url: "#",
      icon: Component,
      isActive: true,
      items: [
        {
          title: "Genesis",
          url: "#",
        },
        {
          title: "Explorer",
          url: "#",
        },
        {
          title: "Quantum",
          url: "#",
        },
      ],
    },
    {
      title: "Navigation",
      url: "#",
      icon: Navigation,
      items: [
        {
          title: "Accordion",
          url: "#",
        },
        {
          title: "Breadcrumb",
          url: "#",
        },
        {
          title: "Navigation Menu",
          url: "#",
        },
        {
          title: "Menubar",
          url: "#",
        },
        {
          title: "Tabs",
          url: "#",
        },
        {
          title: "Pagination",
          url: "#",
        },
        {
          title: "Dropdown Menu",
          url: "#",
        },
        {
          title: "Context Menu",
          url: "#",
        },
        {
          title: "Command",
          url: "#",
        },
       
      ],
    },
    {
      title: "Dialog",
      url: "#",
      icon: PictureInPictureIcon,
      items: [
        {
          title: "Genesis",
          url: "#",
        },
        {
          title: "Explorer",
          url: "#",
        },
        {
          title: "Quantum",
          url: "#",
        },
      ],
    },
    {
      title: "Chart",
      url: "#",
      icon: ChartArea,
      items: [
        {
          title: "Genesis",
          url: "#",
        },
        {
          title: "Explorer",
          url: "#",
        },
        {
          title: "Quantum",
          url: "#",
        },
      ],
    },
    {
      title: "Form",
      url: "/dashboard/form",
      icon: SquareLibrary,
      items: [],
    },
    {
      title: "Table",
      url: "#",
      icon: Table,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
    {
      title: "Media",
      url: "#",
      icon: Fullscreen,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
}