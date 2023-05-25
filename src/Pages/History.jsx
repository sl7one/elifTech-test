import { observer } from 'mobx-react-lite';
import { storeRestaurant } from 'store/storeRestaurant';
import { HistoryBox } from 'styles/styled';

export const History = observer(() => {
  const { history } = storeRestaurant;

  if (!history.length) return <div>There is no history</div>;

  const ordersHistory = history.map(({ restaurant, dishes: data }) => {
    const dishes = JSON.parse(data);

    let total = 0;

    const orderedDishes = dishes.map(({ img, name, ordered, price }) => {
      total += ordered * price;
      return (
        <li key={name}>
          <img src={img} alt="pic" />
          <div>
            <p attr="title">{name}</p>
            <p>Ordered: {ordered}</p>
            <p>Price: {price}</p>
            <p>
              Total: <span> {ordered * price}</span>
            </p>
          </div>
        </li>
      );
    });

    return (
      <li key={restaurant}>
        <p attr="title">{restaurant}</p>
        <ul attr="dishes">{orderedDishes}</ul>
        <p attr="title">
          TOTAL: <span>{total}</span>
        </p>
      </li>
    );
  });
  return (
    <HistoryBox>
      <ul attr="restaurants">{ordersHistory}</ul>
    </HistoryBox>
  );
});
