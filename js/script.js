var menuItem = document.getElementById("textarea__lists").getElementsByTagName("il");
var bigText = document.getElementById("textarea__bigh");
var smallText = document.getElementById("textarea__smallh");
var button = document.getElementById("textarea__btn")


menuItem[1].addEventListener("click", selectItem);
menuItem[0].addEventListener("click", selectItem1);
menuItem[2].addEventListener("click", selectItem2);

function selectItem() {
    this.classList.add("list1");
    menuItem[0].classList.remove("list1");
    menuItem[2].classList.remove("list1");
    bigText.innerHTML = "We add value to your businesses "
    smallText.innerHTML = "We have a passion for producing distinctive"
    button.innerHTML = "start a projet"




}

function selectItem1() {
    this.classList.add("list1");
    menuItem[1].classList.remove("list1");
    menuItem[2].classList.remove("list1");
    bigText.innerHTML = "POWERFUL INSIGHTS INTO YOUR TEAM"
    smallText.innerHTML = "Project planning and time tracking for agile teams"
    button.innerHTML = "SCHEDULE A DEMO"


}

function selectItem2() {
    this.classList.add("list1");
    menuItem[0].classList.remove("list1");
    menuItem[1].classList.remove("list1");
    bigText.innerHTML = "DIGITAL BEAUTY INSIDE AND OUT"
    smallText.innerHTML = "We build websites that build brands"
    button.innerHTML = "start your brand"

}