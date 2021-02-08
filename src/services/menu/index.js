export const getMenuData = [
  // Vb:REPLACE-START:MENU-CONFIG
  {
    title: 'Dashboard',
    key: '__dashboard',
    url: '/dashboard',
    icon: 'fe fe-home',
    children: [
      {
        title: 'New',
        key: 'new',
        url: '/dashboard/new',
      },
      {
        title: 'Hello',
        key: 'hello',
        url: '/dashboard/hello',
      },
    ],
  },
  {
    category: true,
    title: 'Apps & Pages',
    key: '2t2ghm',
  },
  {
    title: 'Apps',
    key: '6rq4ze6',
    url: '/apps',
    icon: 'fe fe-database',
    children: [
      {
        title: 'Profile',
        key: 'e38wke',
        url: '/apps/profile',
      },
    ],
  },

  // Vb:REPLACE-END:MENU-CONFIG
]
