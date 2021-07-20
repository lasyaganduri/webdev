
var fields={};

document.addEventListener("DOMContentLoaded", function() {
 fields.firstName = document.getElementById('firstName');
 fields.lastName = document.getElementById('lastName');
 fields.email = document.getElementById('email');
 fields.address = document.getElementById('address');
 fields.apt = document.getElementById('apt');
 fields.phone = document.getElementById('phone');
 fields.feedback = document.getElementById('feedback');
})

function isNotEmpty(value) {
 if (value == null || typeof value == 'undefined' ) return false;
 return (value.length > 0);
}

function isNumber(num) {
 return (num.length > 0) && !isNaN(num);
}

function isEmail(email) {
 let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
 return regex.test(String(email).toLowerCase());
}

function fieldValidation(field, validationFunction) {
   if (field == null) return false;

   let isFieldValid = validationFunction(field.value)
   if (!isFieldValid) {
     field.className = 'placeholderRed';
   } else {
     field.className = '';
   }
   return isFieldValid;
 }

     function isValid() {
     var valid = true;

     valid &= fieldValidation(fields.firstName, isNotEmpty);
     valid &= fieldValidation(fields.lastName, isNotEmpty);
     valid &= fieldValidation(fields.address, isNotEmpty);
     valid &= fieldValidation(fields.apt, isNumber);
     valid &= fieldValidation(fields.email, isEmail);
     valid &= fieldValidation(fields.phone, isNotEmpty);
     valid &= fieldValidation(fields.feedback, isNotEmpty);

     return valid;
    }



class User {
 constructor(firstName, lastName, address, apt, email, phone, feedback) {
 this.firstName = firstName;
 this.lastName = lastName;
 this.address = address;
 this.apt = apt;
 this.email = email;
 this.phone = phone;
 this.feedback = feedback;
 }
}
function submit(){

  if(isValid()){

    let usr = new User(firstName.value, lastName.value, address.value, apt.value, email.value, phone.value, feedback.value);

      console.log(usr);
      var xmlhttp = new XMLHttpRequest();
      xmlhttp.open("POST","./api/members");
      xmlhttp.setRequestHeader("Content-Type","application/json;charset=UTF-8");
      xmlhttp.send(JSON.stringify(usr));
      
      

  }
  else{
    alert("there was an error, there is a field which is either blank or filled wrong please check and try again.")
  }
}
