export const getMenuData = [
  // Vb:REPLACE-START:MENU-CONFIG


  {
    category: true,
    title: 'Apps & Pages',
    key: '2t2ghm',
  },
  {
    title: 'Dashboard',
    key: 'dashboard',
    icon: 'fe fe-home',
    children: [
      {
        title: 'Alpha',
        key: 'alpha',
        url: '/dashboard/alpha',
      },
      {
        title: 'Beta',
        key: 'beta',
        url: '/dashboard/beta',
      },
    ],
  },
  {
    title: 'Tree',
    key: 'tree',
    url: '/tree',
    icon: 'fe fe-home',
  },
  {
    title: 'Cars',
    key: 'cars',
    url: '/cars',
    icon: 'fe fe-home',
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
