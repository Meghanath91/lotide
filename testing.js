const person = {
  name: "Paul",
  address: {
    street: "310 W 95th",
    city: "New York",
    zipCode: 10027
  }
};
console.log(person["address"])
person["phoneNumbers"] =[1754754] /* <insert array of phone numbers here> */
/*console.log(typeof person["phoneNumbers"]);
console.log(person["phoneNumbers"] instanceof Object);
console.log(person["phoneNumbers"] instanceof Array);
console.log(person["phoneNumbers"] instanceof String);
console.log(Object.keys(person)); 
/*
var planetMoons = {
  mercury: 0,
  venus: 0,
  earth: 1,
  mars: 2,
  jupiter: 67,
  saturn: 62,
  uranus: 27,
  neptune: 14
};
for (var planet in planetMoons) {
  var numberOfMoons = planetMoons[planet];
  console.log("Planet: " + planet + ", # of Moons: "+ numberOfMoons);
}
for (var planet in planetMoons) {
  // additional filter for object properties:
  if (planetMoons.hasOwnProperty(planet)) {
    //  ...
  }
}
*/
