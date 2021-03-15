//Documentation: https://www.npmjs.com/package/faker
var faker = require("faker");

var database = {
  users: [],
};

database.users.push({
  id: "1",
  username: "accenture",
  email: "accenture@user.com",
});

console.log(JSON.stringify(database));
