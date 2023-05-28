import { GSAPWrapper } from 'components/GSAPWrapper/GSAPWrapper';
import { Loader } from 'components/Loader/Loader';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { storeHistory } from 'store/storeHistory';
import { HistoryBox } from 'styles/styled';

export const History = observer(() => {
  const { history, fetchHistory, isLoading } = storeHistory;

  useEffect(() => {
    fetchHistory();
  }, [fetchHistory]);

  const ordersHistory = history.map(
    ({ _id: restaurantId, restaurant, dishes }) => {
      let total = 0;

      const orderedDishes = dishes.map(({ img, name, ordered, price, id }) => {
        total += ordered * price;

        return (
          <li key={id}>
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
        <li key={restaurantId}>
          <p attr="title">{restaurant}</p>
          <ul attr="dishes">{orderedDishes}</ul>
          <p attr="title">
            TOTAL: <span>{total}</span>
          </p>
        </li>
      );
    }
  );

  return (
    <GSAPWrapper>
      <HistoryBox>
        {isLoading ? (
          <Loader />
        ) : !history.length ? (
          <div>There is no history</div>
        ) : (
          <ul attr="restaurants">{ordersHistory}</ul>
        )}
      </HistoryBox>
    </GSAPWrapper>
  );
});
