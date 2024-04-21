// function

// var now = new Date();
// var theHr = now.getHours();
// var theMin = now.getMinutes();
// alert("Time: " + theHr + ":" + theMin );

//     document.write("hello world")

// var email ='admin'
// var password ='Admin'
// var email =  prompt('Please enter your Email');
// var password =  prompt ('please enter your Password') ;
// if(email == password){
//     document.write('login successful');
// }
// else {
//     document.write('invalid password')
// }
// if(true)
// {
//     document.write("true");
// }
// else
// {
//     document.write("false");
// }
// var userinput = prompt ("Enter your city")
// var arr = ['karachi', 'islamabad','lahore', 'peshawar', 'quetta', ];

// for(i =0; i<arr.length; i++){
//     if(userinput == arr[i]){
//         alert('You are in'+" "+ arr[i])
//         break
//     }

//     }

// if (userinput != arr [i]){
//     alert('Invalid City, Please try again!')
// }

// var x = prompt("Where does the Pope live?")
// if (x =="vatican"){
// document.write("right");
// }

// var name = prompt("What is your Name ? ");
// document.write("Hello " +name+ ", nice to meet you")

// var age = prompt("How old are you?");
//  if(age < 25)
//  {
//  alert('This is true condition');
//  }
//  else
//  {
//  alert('This is false condition');
//  }

var userinput = prompt("enter your city");
var arr = ["lahore", "islamabad", "karachi", "peshawar", "quetta"];
var match = false;
for (var i = 0; i < arr.length; i++) {
  if (userinput === arr[i]) {
    match = true;
    alert("you are from" + "  " + arr[i]);
    break;
  }
}
if (match == false) {
  alert("Invalid City, Please try again");
}
