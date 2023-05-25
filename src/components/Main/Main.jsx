import { Loader } from 'components/Loader/Loader';
import { observer } from 'mobx-react-lite';
import { NavLink, Outlet } from 'react-router-dom';
import { routes } from 'routes/routes';
import { storeRestaurant } from 'store/storeRestaurant';
import { ContainerBox, HeaderBox } from 'styles/styled';

export const Main = observer(() => {
  const { isLoading } = storeRestaurant;

  const items = routes.map(({ path, title }) => (
    <li key={title}>
      <NavLink to={path}>{title}</NavLink>
    </li>
  ));

  return (
    <ContainerBox>
      <HeaderBox as="nav">
        <ul>{items}</ul>
      </HeaderBox>
      {!isLoading ? <Outlet /> : <Loader />}
    </ContainerBox>
  );
});
