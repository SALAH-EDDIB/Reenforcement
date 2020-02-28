var menuItem = document.getElementById("textarea__lists").getElementsByTagName("il");
var bigText = document.getElementById("textarea__bigh");


menuItem[1].addEventListener("click", selectItem);
menuItem[0].addEventListener("click", selectItem1);
menuItem[2].addEventListener("click", selectItem2);

function selectItem() {
    this.classList.add("list1");
    menuItem[0].classList.remove("list1");
    menuItem[2].classList.remove("list1");



}

function selectItem1() {
    this.classList.add("list1");
    menuItem[1].classList.remove("list1");
    menuItem[2].classList.remove("list1");
}

function selectItem2() {
    this.classList.add("list1");
    menuItem[0].classList.remove("list1");
    menuItem[1].classList.remove("list1");

}