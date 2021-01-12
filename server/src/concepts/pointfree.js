const double = (x) => x * 2;

/*
We want to double all numbers in an array.
We have 3 ways of writing it.
*/
// Method 1 - Inline
numbers.map((x) => x * 2);

// Method 2 - Using a predefined function call
numbers.map((x) => double(x));

// Method 3 - Point-free
numbers.map(double);
/*
We can just pass the function definition.
This is because every map always invokes like this:

element => function(element)

So JavaScript is intelligent enough to know when passed a
function definition to invoke it in that manner.
*/
