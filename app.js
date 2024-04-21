var inp = prompt("find user by hobby");
var users = [
  { name: "ali", hobbies: ["cricket", "painting", "gaming"] },
  {
    name: "ahmed",
    hobbies: ["football", "bedminton", "ludo", "hockey", "travelling"],
  },
  { name: "sahir", hobbies: ["cycling", "swimming", "football"] },
];
var flag = false;
for (var i = 0; i < users.length; i++) {
  for (j = 0; j < users[i].hobbies.length; j++) {
    if (inp === users[i].hobbies[j]) {
      flag=true;
      alert(users[i].name);
      break;
    }
  }
}
if (!flag) {
  alert("hobby not found");
}