var item = 4;
var item_2;
item_2 = 5;

// ::::::::::::::::::::::::::::::::Array

var list = ["salahh", "eddib", 20, true],
    list2 = new Array("salah", "eddib", 20, false);

list.push("web devlopper");

list2.pop();
list.shift();
list.unshift("salah");


var lists = list.concat(list2);


//:::::::::::::::::::::::::::::::: Object
var person = Object();

person.name = "salah";
person.age = 20;
person.height = 1.92;
person.married = false;
person["name"] = "eddib";



var person2 = {
    name: "mark",
    age: 34,
    height: 1.59,
    married: true
};

// :::::::::::::::::::::::::::: if statement

var x = 5;



if (x == 5) {
    console.log("true");
}

var age = 19;

if (age < 20) {
    console.log("teenager");
} else if (age >= 20 && age < 40) {
    console.log("a young man !");
} else {
    console.log("not so young anymore");
}




if (age > 20) {
    console.log("not teen anymore");
} else {
    console.log("teen");
}

age > 20 ? console.log("not teen anymore") : console.log("teen");



//::::::::::::::::::::::::::::::::::::::: loops

var names = ["salah", "ahmed", "yassine"];



function books() {
    for (let y = 0; y < names.length; y++) {

        console.log(names[y]);

    }
}




var z = 0;
do {
    console.log(names[z]);
    z++;
} while (z < names.length);

//::::::::::::::::::::::::::::::::::::::: function

function add(val1, val2) {
    console.log(val1 + val2);
}


//:::::::::::::::::::::::::::::::::: EventListener and select 

var imagePass = document.querySelector(".devices-img");

imagePass.addEventListener("mouseenter", imgPass);

function imgPass() {
    console.log("mouse pass the image");
    this.removeEventListener("mouseenter", imgPass);



}


//::::::::::::::::::::::: C3Worshops


var favoriteBooks = ['the witcher', 'To Kill a Mockingbird', 'Invisible Man'];

function addFavoriteBook(bookname) {
    var n = bookname.includes("Great")
    if (n != true) {
        favoriteBooks.push(bookname);
    }
}

function printFavoriteBooks() {

    console.log("Livres favoris : " + favoriteBooks[0])
    console.log("number of books :  " + favoriteBooks.length)

    for (let y = 0; y < favoriteBooks.length; y++) {

        console.log(favoriteBooks[y]);

    }
}