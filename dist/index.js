//todo:- Problem 1:
function Union(Find) {
    if (typeof Find === 'string') {
        return Find.length;
    }
    if (typeof Find === 'number') {
        return Find * Find;
    }
}
const forit = Union(78);
const findforCity = {
    address: {
        city: 'dhaka',
        street: 'by road'
    },
    phone: 984757757,
};
function getAddressCity(Person) {
    var _a;
    return (_a = Person.address) === null || _a === void 0 ? void 0 : _a.city;
}
const getcity = getAddressCity(findforCity);
// console.log(getcity);
// todo:- Problem 3:
class Cat {
    constructor(name) {
        this.name = name;
    }
}
const IsCats = (cat) => {
    return cat instanceof Cat;
};
function isCat(cat) {
    if (IsCats(cat)) {
        return `yes, it's a cat `;
    }
    else {
        return `no it's not a cat`;
    }
}
const cats = new Cat('cat');
// console.log(isCat(cats));
// todo:- Problem 4:
const array = [1, 'two', 3, 'four', 5];
function sumUp(array) {
}
const car = {
    make: 'Honda',
    model: 'dsr907',
    year: 2015
};
const driver = {
    name: 'kader',
    licenseNumber: 8975647
};
const CombineBoth = (car, driver) => {
    const Gather = Object.assign(Object.assign({}, car), driver);
    return Gather;
};
const getobj = CombineBoth(car, driver);
// console.log(getobj);
// todo:- Problem 6:
function Params(para) {
    if (typeof para === "number") {
        const sum = +para;
    }
    else {
        console.error('it is not a number');
    }
}
// todo:- Problem 7:
const numbers = [1, 2, 3, 4, 5, 2];
const strings = ["apple", "banana", "cherry", "date", "apple"];
function findFirstOccurrence(arg, ocr) {
    const rightOcr = arg.indexOf(ocr);
    if (rightOcr === 'none') {
        return -1;
    }
}
const product = {
    name: 'Shampoo',
    price: 30,
    quantity: 2
};
function Totalcost(product) {
    return product.price * product.quantity;
}
const getotalCost = Totalcost(product);
// console.log(getotalCost);
