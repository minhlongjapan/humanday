var hoveredNo = function() {
   var btn = document.getElementById("no");
   var top = Math.floor(Math.random()*400);
   var left = Math.floor(Math.random()*900);

   btn.style.top = top;
   btn.style.left = left;
}

let modalBtn = document.getElementById("yes");
let modal = document.querySelector(".popup");
let closeBtn = document.querySelector(".close-btn");
// Hiển thị popup khi nhấp chuột vào button
modalBtn.onclick = function(){
   modal.style.display = "block"
}
// Đóng popup khi ấn vào nút đóng
closeBtn.onclick = function(){
   modal.style.display = "none"
}
// Đóng khi nhấp chuột vào bất cứ khu vực nào trên màn hình
window.onclick = function(e){
   if(e.target == modal){
      modal.style.display = "none"
   }
}