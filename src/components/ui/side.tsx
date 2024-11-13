'use client'

import React from 'react'
import { IconHome, IconUser, IconSettings, IconLogout } from '@tabler/icons-react'
import { Sidebar, SidebarBody, SidebarLink } from '@/components/ui/sidebar'

const links = [
  {
    label: 'Home',
    href: '/',
    icon: <IconHome className="h-5 w-5" />,
  },
  {
    label: 'Profile',
    href: '/profile',
    icon: <IconUser className="h-5 w-5" />,
    
  },
  {
    label: 'Settings',
    href: '/settings',
    icon: <IconSettings className="h-5 w-5" />,
  },
  {
    label: 'Logout',
    href: '/logout',
    icon: <IconLogout className="h-5 w-5" />,
  },
]

export default function SidebarDemo() {
  return (
    <div className="flex h-screen">
      <Sidebar>
        <SidebarBody>
          <div className="flex flex-col space-y-6">
            <div className="flex items-center space-x-2 px-2">
              <div className="h-8 w-8 rounded-full bg-blue-500" />
              <span className="text-lg font-semibold">My App</span>
            </div>
            <nav className="flex flex-col space-y-1">
              {links.map((link) => (
                <SidebarLink key={link.href} link={link} />
              ))}
            </nav>
          </div>
        </SidebarBody>
      </Sidebar>
      <main className="flex-1 overflow-auto p-8">
        <h1 className="text-2xl font-bold mb-4">Dashboard Content</h1>
        <p>This is where your main content would go.</p>
      </main>
    </div>
  )
}