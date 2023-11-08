//todo:- Problem one:
function Union(Find) {
    if (typeof Find === 'string') {
        return Find.length;
    }
    if (typeof Find === 'number') {
        return Find * Find;
    }
}
const forit = Union(3);
function getAddressCity(Person) {
    var _a;
    return (_a = Person.address) === null || _a === void 0 ? void 0 : _a.city;
}
const getcity = getAddressCity('dhaka');
// console.log(getcity);
// todo:- Problem 3:
class Cat {
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
const CombineBoth = (driver, car) => {
    const Gather = Object.assign(Object.assign({}, driver), car);
    return Gather;
};
const getobj = CombineBoth(driver, car);
const product = {
    name: 'Shampoo',
    price: 30,
    quantity: 2
};
