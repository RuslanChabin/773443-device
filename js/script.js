var popupbtn = document.querySelector(".btn_write");
var popup = document.querySelector(".modal_write_us");
var closebtn = document.querySelector(".btn_modal_close");
var mapmini = document.querySelector(".map_img");
var mappopup = document.querySelector(".modal_map");
var closebtnmap = document.querySelector(".btn_map_close");

popupbtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal_show");
});

closebtn.addEventListener("click", function (evt){
  evt.preventDefault();
  popup.classList.remove("modal_show");
});

mapmini.addEventListener("click", function (evt){
  evt.preventDefault();
  mappopup.classList.add("modal_show");
});

closebtnmap.addEventListener("click", function (evt){
  evt.preventDefault();
  mappopup.classList.remove("modal_show");
});