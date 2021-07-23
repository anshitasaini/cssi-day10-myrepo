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

const username = "martin";
const password = "mypass";
const dbRef = firebase.database().ref();

const submitBtn = document.querySelector('#add_Movie');
const movieTitle = document.querySelector('#submit_Moviename');
const movieGenre = document.querySelector('#submit_Genre');
const movieRating = document.querySelector('#rate1_10');
const movieImgLink = document.querySelector('#image_link');


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