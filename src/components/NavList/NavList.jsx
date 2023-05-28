import { gsap } from 'gsap';
import { observer } from 'mobx-react-lite';
import { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { storeRestaurant } from 'store/storeRestaurant';

export const NavList = observer(() => {
  const listRef = useRef([]);
  const { data } = storeRestaurant;

  useEffect(() => {
    gsap.fromTo(
      listRef.current,
      { x: '-50px', opacity: 0 },
      { x: '0', opacity: 1, duration: 1, ease: 'back.out', stagger: 0.1 }
    );
  }, []);

  const shops = data.map(({ name, _id }) => (
    <li key={_id} ref={el => listRef.current.push(el)}>
      <NavLink to={`${name}`}>{name}</NavLink>
    </li>
  ));

  return <ul routes="shopRoutes">{shops}</ul>;
});
