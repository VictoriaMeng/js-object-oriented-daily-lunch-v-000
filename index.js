// global datastore
let store = { neighborhoods: [], meals: [], customers: [], deliveries: [] };

let neighborhoodId = 0;

let customerId = 0;

class Neighborhood {
  constructor(name) {
    this.name = name;
    this.id = ++neighborhoodId;
    store.neighborhoods.push(this);
  };
};

class Customer {
  constructor(name) {
    this.name = name;
    this.id = ++neighborhoodId;
  }
};

class Meal {

};

class Delivery {

};
