//todo:- Problem 1:

function Union(Find: string | number) {
  if (typeof Find === 'string') {
    return Find.length;
  }
  if (typeof Find === 'number') {
    return Find * Find;
  }
}

const forit = Union(78);

// todo:- Problem 2:

type AddressObj = {
  city: string;
  street: string;
};

interface Person {
  address?: AddressObj;
  phone?: number;
}

const findforCity: Person = {
  address: {
    city: 'dhaka',
    street: 'by road',
  },
  phone: 984757757,
};

function getAddressCity(Person): string | undefined {
  return Person.address?.city;
}

const getcity = getAddressCity(findforCity);

// todo:- Problem 3:

class Cat {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

const IsCats = (cat: Cat): cat is Cat => {
  return cat instanceof Cat;
};

function isCat(cat: Cat) {
  if (IsCats(cat)) {
    return `yes, it's a cat `;
  } else {
    return `no it's not a cat`;
  }
}

const cats = new Cat('cat');

// todo:- Problem 5:

interface Car {
  make: string;
  model: string;
  year: number;
}

interface Driver {
  name: string;
  licenseNumber: number;
}

const car: Car = {
  make: 'Honda',
  model: 'dsr907',
  year: 2015,
};

const driver: Driver = {
  name: 'kader',
  licenseNumber: 8975647,
};

const CombineBoth = <C, D>(car: C, driver: D): C | D => {
  const Gather = {
    ...car,
    ...driver,
  };
  return Gather;
};

const getobj = CombineBoth(car, driver);

// todo:- Problem 8:

interface Product {
  name: string;
  price: number;
  quantity: number;
}

const product: Product = {
  name: 'Shampoo',
  price: 30,
  quantity: 2,
};

function Totalcost(product) {
  return product.price * product.quantity;
}

const getotalCost = Totalcost(product);
