// create an observabe OF A STRING
// after the last item is completed the steam stops and the observer unsuscribes
const o1 = of( "John" , "Marry" ); // emits John then Mary
const o2 = of(["John", "Mary"]); // emits the array as the first value
//create an observable FROM AN ARRAY
const o3 = from(["John", "Mary"]); // emits each value of the array, one at a time
