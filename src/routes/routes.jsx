import { History } from 'Pages/History';
import { Shop } from 'Pages/Shop';
import { ShoppingCart } from 'Pages/ShoppingCart';

export const routes = [
  {
    path: 'shop',
    element: <Shop />,
    title: 'Shop',
  },
  {
    path: 'shoppingCart',
    element: <ShoppingCart />,
    title: 'Shopping Cart',
  },
  {
    path: 'history',
    element: <History />,
    title: 'History',
  },
];
