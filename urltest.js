const url = require('url');

const myurl = new URL('http://shapetransformation.com/index.html?id=100&status=active');

//serialized url

console.log(myurl.href);
console.log(myurl.toString());

//host 

console.log(myurl.host);

//pathname

console.log(myurl.pathname);

//params
console.log(myurl.searchParams);


// append
myurl.searchParams.append('hello','122');

console.log(myurl.searchParams);

//for loop search
myurl.searchParams.forEach((value,name) => console.log(" "+name+":"+ value+" "));

