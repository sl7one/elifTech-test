import { GSAPWrapper } from 'components/GSAPWrapper/GSAPWrapper';
import { NavList } from 'components/NavList/NavList';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { storeRestaurant } from 'store/storeRestaurant';
import { LeftBox, RightBox, ShopBox } from 'styles/styled';

export const Shop = observer(() => {
  const { setCurrentRestaurant, currentRestaurant } = storeRestaurant;
  const { name } = useParams();

  useEffect(() => {
    if (!name) return;
    setCurrentRestaurant(name);
  }, [setCurrentRestaurant, name, currentRestaurant]);

  return (
    <GSAPWrapper>
      <ShopBox>
        <LeftBox>
          <NavList />
        </LeftBox>
        <RightBox>
          <Outlet />
        </RightBox>
      </ShopBox>
    </GSAPWrapper>
  );
});
