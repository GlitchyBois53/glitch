var list1 = document.querySelector(".list-item-1")
var list2 = document.querySelector(".list-item-2")
var list3 = document.querySelector(".list-item-3")

var box1 = document.querySelector(".hover-box-1")
var box2 = document.querySelector(".hover-box-2")
var box3 = document.querySelector(".hover-box-3")

box1.addEventListener("mouseover", () => {
    list1.classList.add("list-active")
})

box1.addEventListener("mouseleave", () => {
    list1.classList.remove("list-active")
})

box2.addEventListener("mouseover", () => {
    list2.classList.add("list-active")
})

box2.addEventListener("mouseleave", () => {
    list2.classList.remove("list-active")
})

box3.addEventListener("mouseover", () => {
    list3.classList.add("list-active")
})

box3.addEventListener("mouseleave", () => {
    list3.classList.remove("list-active")
})