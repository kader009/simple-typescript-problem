//todo:- Problem one:

function Union(Find: string | number){
  if(typeof Find === 'string'){
    return Find.length
  }if(typeof Find === 'number'){
    return Find * Find;
  }
}

const forit = Union(3)
// console.log(forit);



// todo:- Problem 2:

type Address = {
  city:string,
  street: string
}

interface Person{
  address?:Address;
  phone?: number;
}

function getAddressCity( Person ){
  return Person.address?.city;
}

const getcity = getAddressCity('dhaka')
// console.log(getcity);





// todo:- Problem 3:


class Cat{
  name: string;
  age: number
}




// todo:- Problem 5:

interface Car{
  make:string,
  model: string,
  year: number
}

interface Driver{
  name: string,
  licenseNumber: number
}

const car : Car ={
  make: 'Honda',
  model:'dsr907',
  year:2015
}

const driver : Driver ={
  name:'kader',
  licenseNumber: 8975647
}

const CombineBoth =<D, C> (driver:D, car: C) : D | C=>{
  const Gather = {
    ...driver,
    ...car
  }
  return Gather;
}

const getobj = CombineBoth(driver, car)

// console.log(getobj);







// todo:- Problem 8:

interface Product{
  name: string,
  price:number,
  quantity:number
}


const product : Product ={
  name:'Shampoo',
  price: 30,
  quantity:2
}
















