// data.js - Tree view data structure with nested menus
export const menuData = [
    {
      id: '1',
      name: 'Dashboard',
      icon: 'dashboard',
      path: '/dashboard',
    },
    {
      id: '2',
      name: 'Products',
      icon: 'shopping-bag',
      children: [
        {
          id: '2.1',
          name: 'All Products',
          path: '/products',
        },
        {
          id: '2.2',
          name: 'Categories',
          path: '/products/categories',
        },
        {
          id: '2.3',
          name: 'Inventory',
          children: [
            {
              id: '2.3.1',
              name: 'Stock Levels',
              path: '/products/inventory/stock',
            },
            {
              id: '2.3.2',
              name: 'Warehouses',
              path: '/products/inventory/warehouses',
            },
          ],
        },
      ],
    },
    {
      id: '3',
      name: 'Sales',
      icon: 'dollar-sign',
      children: [
        {
          id: '3.1',
          name: 'Orders',
          path: '/sales/orders',
        },
        {
          id: '3.2',
          name: 'Customers',
          path: '/sales/customers',
        },
        {
          id: '3.3',
          name: 'Reports',
          children: [
            {
              id: '3.3.1',
              name: 'Daily Sales',
              path: '/sales/reports/daily',
            },
            {
              id: '3.3.2',
              name: 'Monthly Sales',
              path: '/sales/reports/monthly',
            },
          ],
        },
      ],
    },
    {
      id: '4',
      name: 'Settings',
      icon: 'settings',
      children: [
        {
          id: '4.1',
          name: 'Account',
          path: '/settings/account',
        },
        {
          id: '4.2',
          name: 'Security',
          children: [
            {
              id: '4.2.1',
              name: 'Password',
              path: '/settings/security/password',
            },
            {
              id: '4.2.2',
              name: 'Two-Factor Auth',
              path: '/settings/security/2fa',
            },
          ],
        },
        {
          id: '4.3',
          name: 'Preferences',
          path: '/settings/preferences',
        },
      ],
    },
  ];