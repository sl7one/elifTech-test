import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { storeRestaurant } from 'store/storeRestaurant';
import { ProductBox } from 'styles/styled';

export const Products = observer(() => {
  const { name: currentRestaurantName } = useParams();
  const { data, addToCart, checkerIsSomeoneAdded } = storeRestaurant;

  useEffect(() => {
    checkerIsSomeoneAdded();
  }, [checkerIsSomeoneAdded, data]);

  if (!data) return;
  const currentRestaurant = data.find(
    ({ name }) => name === currentRestaurantName
  );

  const { dishes } = currentRestaurant;

  const items = dishes.map(({ name, img, id, isAdded }) => {
    return (
      <li key={id}>
        <img src={img} alt="pic" />
        <p>{name}</p>
        <button
          type="button"
          onClick={() => addToCart(id)}
          added={isAdded.toString()}
        >
          Add to cart
        </button>
      </li>
    );
  });

  return (
    <ProductBox>
      <ul>{items}</ul>
    </ProductBox>
  );
});
