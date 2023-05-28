import { DishesItem } from 'components/DishesItem/DishesItem';
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

export const DishesComponent = ({ dishes, handleIncrement, handleRemove }) => {
  const listRef = useRef([]);

  useEffect(() => {
    if (!listRef.current.length) return;
    gsap.fromTo(
      listRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1, delay: 1, ease: 'back.out', stagger: 0.2 }
    );
  }, []);

  let total = 0;
  const items = dishes
    .filter(({ isAdded }) => isAdded === true)
    .map(({ id, img, name, price, ordered }) => {
      total += ordered * price;
      return (
        <DishesItem
          id={id}
          listRef={listRef}
          img={img}
          name={name}
          price={price}
          ordered={ordered}
          handleIncrement={handleIncrement}
          handleRemove={handleRemove}
        />
      );
    });
  return (
    <>
      {items.length ? (
        <>
          <ul>{items}</ul>
          <p title="total">total: {total}</p>
          <button type="submit">Submit</button>
        </>
      ) : (
        <div attr="message">
          <p>There is no items</p>
        </div>
      )}
    </>
  );
};
