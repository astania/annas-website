const h2 = document.createElement("h2");
h2.textContent = "These are a few of my favorite things";
document.querySelector("body").appendChild(h2);

var image = document.getElementById("image");

image.onmouseover = imageTwo;
image.onmouseout = imageOne;

function imageOne() {
    image.src = "https://scontent.fdet1-1.fna.fbcdn.net/v/t1.6435-9/75586134_10159113638896980_3430606429055090688_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=o6lBwc5W034AX-v8svX&_nc_ht=scontent.fdet1-1.fna&oh=956e915cf6c2ccf3328eee44c0f56358&oe=61788DB4" 
}
function imageTwo() {
    image.src = "https://kundenfokussiert.de/wp-content/uploads/2019/09/Anna-Stania-Mowomind-300x300.jpg"
}




// const favMovies = document.createElement("div");
// favMovies.setAttribute('id', 'movies');
// document.querySelector("body").appendChild(favMovies)

// const favMusic = document.createElement("div");
// favMusic.setAttribute('id', 'music');
// document.querySelector("body").appendChild(favMusic);

// const favBooks = document.createElement("div");
// favBooks.setAttribute('id', 'books');
// document.querySelector("body").appendChild(favBooks);

// const favMoviesTitle = document.createElement("h3");
// favMoviesTitle.innerText = "Anna's Favorite Movies";
// favMovies.appendChild(favMoviesTitle);




