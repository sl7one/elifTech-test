import { gsap } from 'gsap';
import { observer } from 'mobx-react-lite';
import { useEffect, useRef } from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import { storeRestaurant } from 'store/storeRestaurant';
import { LeftBox, RightBox, ShopBox } from 'styles/styled';

export const Shop = observer(() => {
  const { data, setCurrentRestaurant, currentRestaurant } = storeRestaurant;
  const { name } = useParams();
  const ref = useRef(null);
  const listRef = useRef([]);

  useEffect(() => {
    if (!name) return;
    setCurrentRestaurant(name);
  }, [setCurrentRestaurant, name, currentRestaurant]);

  useEffect(() => {
    gsap.fromTo(
      ref.current,
      { x: '-100%', opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: 'back.out' }
    );
    gsap.fromTo(
      listRef.current,
      { x: '-50px', opacity: 0 },
      { x: '0', opacity: 1, duration: 1, ease: 'back.out', stagger: 0.1 }
    );
  }, []);

  const shops = data.map(({ name }) => (
    <li key={name} ref={el => listRef.current.push(el)}>
      <NavLink to={`${name}`}>{name}</NavLink>
    </li>
  ));

  return (
    <ShopBox ref={ref}>
      <LeftBox>
        <ul routes="shopRoutes">{shops}</ul>
      </LeftBox>
      <RightBox>
        <Outlet />
      </RightBox>
    </ShopBox>
  );
});
