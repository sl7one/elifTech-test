import { ErrorPage } from 'Pages/ErrorPage';
import { History } from 'Pages/History';
import { Shop } from 'Pages/Shop';
import { ShoppingCart } from 'Pages/ShoppingCart';
import { Main } from 'components/Main/Main';
import { Products } from 'components/Products/Products';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { storeRestaurant } from 'store/storeRestaurant';

export const App = observer(() => {
  const { fetchRestaurants, data, currentRestaurant } = storeRestaurant;

  useEffect(() => {
    fetchRestaurants();
  }, [fetchRestaurants]);

  if (!data.length) return;

  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route index element={<Navigate to="shop" />} />
        <Route path="shop" element={<Shop />}>
          <Route
            index
            element={<Navigate to={currentRestaurant || data[0].name} />}
          />
          <Route path=":name" element={<Products />} />
        </Route>
        <Route path="shoppingCart" element={<ShoppingCart />} />
        <Route path="history" element={<History />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
});
