import { DishesComponent } from 'components/DishesComponent/DishesComponent';
import { FormField } from 'components/FormField/FormField';
import { GSAPWrapper } from 'components/GSAPWrapper/GSAPWrapper';
import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { storeHistory } from 'store/storeHistory';
import { storeRestaurant } from 'store/storeRestaurant';
import { ShoppingCartBox } from 'styles/styled';

export const ShoppingCart = observer(() => {
  const navigate = useNavigate();
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

  const onChange = ({ target }) => {
    const { name, value } = target;
    setData(prev => ({ ...prev, [name]: value }));
  };

  const restaurant = restaurantList.find(
    ({ name }) => name === currentRestaurant
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

  return (
    <GSAPWrapper>
      <ShoppingCartBox>
        <form onSubmit={onSubmit}>
          <div part="left">
            <FormField
              title="Name"
              id="name"
              type="text"
              value={name}
              onChange={onChange}
              placeholder="Put your name"
            />
            <FormField
              title="Email"
              id="email"
              type="email"
              value={email}
              onChange={onChange}
              placeholder="Put your email"
            />
            <FormField
              title="Phone"
              id="phone"
              type="text"
              value={phone}
              onChange={onChange}
              placeholder="Put your phone"
            />
            <FormField
              title="Adress"
              id="adress"
              type="text"
              value={adress}
              onChange={onChange}
              placeholder="Put your adress"
            />
          </div>
          <div part="right">
            <DishesComponent
              dishes={dishes}
              handleIncrement={handleIncrement}
              handleRemove={handleRemove}
            />
          </div>
        </form>
      </ShoppingCartBox>
    </GSAPWrapper>
  );
});
