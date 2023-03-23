"use strict";

const button = document.getElementsByClassName("submit-button");
let input = document.querySelector("input");

const validate = (emailInput) => {
  let email = input.value.trim();
  const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (email.length == 0) {
    alert("Empty");
  } else {
    alert("Not Empty");
  }

  if (emailInput.value.match(mailFormat)) {
    alert("Thank you!");
  } else {
    alert("Enter valid email address!");
  }
};
