What are some benefits of using TypeScript over JavaScript in a project?

Ans no 1 :- 1. type safety 2. better error handling 3. easy debug code 4. Readibility.

What is the purpose of the optional chaining (?.) and nullish coalescing (??) operators in TypeScript, and how do they work? Provide an example for each.

Ans no 2 :- the purpose of the optional chaining is if i find something from the array or object if value unavailable but don't give the error.

const findforCity : Person ={
  address:{
    city: 'dhaka',
    street: 'by road'
  },
  phone: 984757757,
}

function getAddressCity( Person ) : string | undefined{
  return Person.address?.city;
}


The nullish coalescing (??) operator is a logical operant it will return true or false value if left hand wrong return right side if right hand false return left side.

const Istrue = true ?? 'istrue'.


How do you handle asynchronous operations in TypeScript, and what are the advantages of using async/await over callbacks or Promises?.

Ans no 3:- asynchronous operations main feature is error handing with a better way that will be tricky in Promises. async/await code syntax suger for Promises, and it make easier to understand.


How can you use TypeScript's enums, and what are their advantages?.

Ans no 4:- In typescript enums is a speacial set of constants variable. enums give us two favor string and number. enums advantage is structure code, readability, autocompletion.

Explain the role of type guards in TypeScript and provide an example of a custom type guard.

And no 5:- the main role type guard in typescript is checking piece of code and narrow down the type of the variable.

function getValues(a: number | string, b: string) {
  if(a === b) {
    console.log(typeof a) 
  } else {
    console.log(typeof a)
  }
}


Can you give an example of how to use "readonly" properties in TypeScript?

Ans no 6:- The readonly keyword in the typescript the property read-only itself.

class Readonly{
  readonly name: 'kader',
  age: 80,
}


Explain what a union type is in TypeScript and provide an example of its usage.

Ans no 7:- A union type describe a many several types.

const code : number | boolean | string ;

code = 24,
code = true,
code = 'string'.


