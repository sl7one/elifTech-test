import { GSAPWrapper } from 'components/GSAPWrapper/GSAPWrapper';
import { gsap } from 'gsap';
import { observer } from 'mobx-react-lite';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { storeHistory } from 'store/storeHistory';
import { storeRestaurant } from 'store/storeRestaurant';
import { ShoppingCartBox } from 'styles/styled';

export const ShoppingCart = observer(() => {
  const navigate = useNavigate();
  const listRef = useRef([]);
  const {
    data: restaurantList,
    handleIncrement,
    currentRestaurant,
    handleRemove,
    resetOrders,
  } = storeRestaurant;

  const { fetchAddHistory } = storeHistory;

  const [data, setData] = useState({
    name: '',
    email: '',
    phone: '',
    adress: '',
  });
  const { name, email, phone, adress } = data;

  useEffect(() => {
    if (!listRef.current.length) return;
    gsap.fromTo(
      listRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1, delay: 1, ease: 'back.out', stagger: 0.2 }
    );
  }, []);

  const onChange = ({ target }) => {
    setData(prev => ({ ...prev, [target.name]: target.value }));
  };

  const restaurant = restaurantList.find(
    ({ name: restaurantName }) => restaurantName === currentRestaurant
  );

  if (!restaurant) return <div>No data</div>;

  const { dishes } = restaurant;

  const cb = () => {
    navigate('/history');
    resetOrders();
  };

  const onSubmit = e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('adress', adress);
    formData.append('restaurant', currentRestaurant);
    formData.append(
      'dishes',
      JSON.stringify(dishes.filter(({ isAdded }) => isAdded === true))
    );

    let data = {};
    formData.forEach((val, key) => (data = { ...data, [key]: val }));
    fetchAddHistory(data, cb);
  };

  let total = 0;
  const items = dishes
    .filter(({ isAdded }) => isAdded === true)
    .map(({ id, img, name, price, ordered }) => {
      total += ordered * price;
      return (
        <li key={id} ref={el => listRef.current.push(el)}>
          <img src={img} alt="pic" />
          <div>
            <p>{name}</p>
            <p>
              Price: <span>{price}</span>
            </p>
            <input
              type="number"
              max={50}
              min={0}
              value={ordered}
              onChange={({ currentTarget }) =>
                handleIncrement(currentTarget.value, id)
              }
            />
            <p>
              Total: <span>{ordered * price}</span>
            </p>
          </div>
          <button type="button" onClick={() => handleRemove(id)}>
            X
          </button>
        </li>
      );
    });

  return (
    <GSAPWrapper>
      <ShoppingCartBox>
        <form onSubmit={onSubmit}>
          <div part="left">
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={onChange}
                required
                placeholder="Name"
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={onChange}
                required
                placeholder="Email"
              />
            </div>
            <div>
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                name="phone"
                id="phone"
                value={phone}
                onChange={onChange}
                required
                placeholder="Phone"
              />
            </div>
            <div>
              <label htmlFor="adress">Adress</label>
              <input
                type="text"
                name="adress"
                id="adress"
                value={adress}
                onChange={onChange}
                required
                placeholder="Adress"
              />
            </div>
          </div>
          <div part="right">
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
          </div>
        </form>
      </ShoppingCartBox>
    </GSAPWrapper>
  );
});
