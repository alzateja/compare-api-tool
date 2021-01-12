// We define an example object with various types
const widget = {
  stringOne: 'one',
  stringThree: 'three',
  bool: false,
};

/*
Uncurried version of getting object properties.
We define a bootleg version of lodash 'get'.
We try to get a prop and if not found return a default value.
*/
const get = (object, property, defaultValue) => object[property] ?? defaultValue;

// Here is how we call it.
const stringOneGet = get(widget, 'stringOne', ''); // returns "one"
const stringTwoGet = get(widget, 'stringTwo', ''); // returns ""
const boolGet = get(widget, 'bool', true); // returns "false"
const stringThreeGet = get(widget, 'stringThree', ''); // returns "three"

/*
Curried version of getting object properties.
The first time we call it we get back a new function.
We can use to build abstractions and increase reusability.
*/
const curryGet = (object) => (defaultValue) => (property) => object[property] ?? defaultValue;

// STEP 1: We pass our widget object and get a new function.
const getFromWidget = curryGet(widget);
/* EXPLANATION
It partially applies the value so our new function is equal to:

const getFromWidget = defaultValue => property =>
    widget[property] ?? defaultValue
*/

// STEP 2: Reuse our new partially applied function
const getStringFromWidget = getFromWidget('');
const getBoolFromWidget = getFromWidget(true);
/*
We can reuse our previous function to create two more.
We continue to partially apply the values.
As a result, our new string function is equal to:

const getStringFromWidget =  property =>
    widget[property] ?? ""
*/

// STEP 3: We call our new functions.
const strOneCurry = getStringFromWidget('stringOne'); // returns "one"
const strTwoCurry = getStringFromWidget('stringTwo'); // returns ""
const boolCurry = getBoolFromWidget('bool'); // returns "false"
const strThreeCurry = getStringFromWidget('stringThree'); // returns "three"
