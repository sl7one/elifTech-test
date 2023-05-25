import { makePersistable, getPersistedStore } from 'mobx-persist-store';

const { makeAutoObservable, runInAction } = require('mobx');
const { fakeRestaurants } = require('utils/fakeShops');

class StoreRestaurant {
  data = [];
  error = [];
  isLoading = false;
  currentRestaurant = '';
  isSomeoneAdded = false;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
    makePersistable(this, {
      name: 'restaurants',
      properties: ['data', 'currentRestaurant'],
      storage: window.localStorage,
    });
  }

  async fetchRestaurants() {
    const { data } = await getPersistedStore(this);

    if (data.length > 0) {
      runInAction(() => (this.data = data));
      return;
    }

    this.isLoading = true;

    try {
      const data = await Promise.resolve(fakeRestaurants);
      runInAction(() => {
        this.data = data;
      });
    } catch (e) {
      runInAction(() => {
        this.error = e.message;
      });
    } finally {
      runInAction(() => {
        this.isLoading = false;
      });
    }
  }

  addToCart(id) {
    const dishes = this.helperReturnDishes();
    const updatedDishes = dishes.map(el =>
      el.id === id ? { ...el, isAdded: !el.isAdded } : el
    );

    this.data = this.data.map(el =>
      el.name === this.currentRestaurant ? { ...el, dishes: updatedDishes } : el
    );
  }

  handleIncrement(value, id) {
    const dishes = this.helperReturnDishes();
    const updatedDishes = dishes.map(el =>
      el.id === id ? { ...el, ordered: value } : el
    );

    this.data = this.data.map(el =>
      el.name === this.currentRestaurant ? { ...el, dishes: updatedDishes } : el
    );
  }

  handleRemove = id => {
    const dishes = this.helperReturnDishes();
    const updatedDishes = dishes.map(el =>
      el.id === id ? { ...el, isAdded: false } : el
    );

    this.data = this.data.map(el =>
      el.name === this.currentRestaurant ? { ...el, dishes: updatedDishes } : el
    );
  };

  setCurrentRestaurant(name) {
    this.currentRestaurant = name;
  }

  async getStoredData() {
    return getPersistedStore(this);
  }

  helperReturnDishes() {
    const restaurant = this.data.find(
      ({ name }) => name === this.currentRestaurant
    );
    const { dishes } = restaurant;
    return dishes;
  }

  checkerIsSomeoneAdded() {
    for (let { dishes } of this.data) {
      const isAdded = dishes.some(({ isAdded }) => isAdded === true);

      if (isAdded) {
        this.isSomeoneAdded = isAdded;
        break;
      }

      this.isSomeoneAdded = false;
    }

    this.isSomeoneAdded ? this.disableAnotherShops() : this.resetAnotherShops();
  }

  disableAnotherShops() {
    const routes = document
      .querySelector('[routes="shopRoutes"]')
      .querySelectorAll('a');
    routes.forEach(el => {
      if (!el.classList.contains('active')) {
        el.style.pointerEvents = 'none';
        el.style.opacity = 0.1;
      }
    });
  }

  resetAnotherShops() {
    const routes = document
      .querySelector('[routes="shopRoutes"]')
      .querySelectorAll('a');
    routes.forEach(el => {
      if (!el.classList.contains('active')) {
        el.style.pointerEvents = 'all';
        el.style.opacity = 1;
      }
    });
  }
}

export const storeRestaurant = new StoreRestaurant();
