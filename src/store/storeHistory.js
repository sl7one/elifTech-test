const { addHistory, getHistory } = require('API/API');
const { makeAutoObservable, runInAction } = require('mobx');

class StoreHistory {
  history = [];
  isLoading = false;
  error = '';

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  async fetchHistory() {
    this.isLoading = true;

    try {
      const data = await getHistory();
      runInAction(() => {
        this.history = data;
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

  async fetchAddHistory(history, cb) {
    this.isLoading = true;

    try {
      const data = await addHistory(history);
      runInAction(() => {
        this.history.push(data);
      });
      cb();
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
}

export const storeHistory = new StoreHistory();
