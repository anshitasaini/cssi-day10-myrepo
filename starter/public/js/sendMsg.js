console.log("Script Running!");

function sendObj(obj) {
    dbRef.push({
        message: msg,
        passcode: hash(pass)
    });
}

let movieSample = {
    title: "",
    rating: 10,
    imgLink: ""
}

const username = "";
const password = "";
const dbRef = firebase.database().ref();

const submitBtn = document.querySelector('');
const movieTitle = document.querySelector('');
const movieGenre = document.querySelector('');
const movieRating = document.querySelector('');
const movieImgLink = document.querySelector('');


submitBtn.addEventListener('click', e => {
    sendObj({
        username: username,
        password: password,
        movie: {
            title: movieTitle.value,
            genre: movieGenre.value,
            rating: movieRating.value,
            imgLink: movieImgLink.value
        }
    });
});