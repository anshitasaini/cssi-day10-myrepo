password = document.querySelector("#password")
username = document.querySelector('#name')
signin = document.querySelector("#signin")

function hash(pass) {
    return new Hashes.MD5().hex(pass)
}

let attempts = 0;
allow_next = false;

const findPassword = (user, pass) => {
    let found = 0;
    const people = firebase.database().ref();
    people.on('value', (snapshot) => {
        const data = snapshot.val();
        for (let key in data) {
            const person = data[key];
            if (user == (person.user)) {
                if (pass == person.pass) {
                    allow_next = true;
                }
            }     
        }
        if (allow_next == false) {
            alert("Passcode does not match any messages!")
        }
        if (attempts >= 5) {
            alert ("5 attempts are up!")
            password.disabled = true;
            signin.disabled = true;
            username.disabled = true;
            setTimeout(refresh, 3000)
        }
    });
}

signin.addEventListener("click", (e) => {
    const user = username.value;
    const pass = password.value;
    attempts += 1;
    findMessage(user, pass);
    if (allow_next == true) {
        window.location.href = "./searchMovies.html"
    }
});

refresh = () => {
    attempts = 0;
    password.disabled = false;
    signin.disabled = false;
    username.disabled = false;
    alert("You can try again now.")
}