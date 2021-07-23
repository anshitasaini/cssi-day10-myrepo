submit_password = document.querySelector("#password")
submit_name = document.querySelector('#submit_name')
signup = document.querySelector("#signup")

submit_name.onkeypress = function () {
    if (submit_name.value.length > 20) {
        submit_name.value = submit_name.value.substring(0, submit_name.value.length - 2)
        alert("Username must be shorter than 20 characters");
    }
};

function hash(pass) {
    return new Hashes.MD5().hex(pass)
}

function containsNum(pass) {
  return /\d/.test(pass);
}

function containsCap(pass) {
  if (pass.toLowerCase() == pass) {
    return false;
  }
  else {
    return true;
  }
}

singup.addEventListener("click", (e) => {
    if (containsNum(submit_password.value) == false) {
        alert("Password must contain at least 1 number!");
    }
    else if (containsCap(passcode.value) == false) {
        alert("Password must contain at least 1 capital letter!");
    }
    else {
        writeUserData(submit_name.value, (submit_password.value));
    }
})

function writeUserData(user, pass) {
  firebase.database().ref().push({
    user: user,
    pass: pass
  });
}