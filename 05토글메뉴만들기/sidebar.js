/* ==========좌측사이드========== */
var menuBtn = document.querySelector(".menuBtn");
var a = document.querySelector(".sidenav li a");
var sidenav = document.querySelector(".sidenav");

menuBtn.onclick = function() {

    console.log(menuBtn.classList);
    if(menuBtn.classList.contains("um")) {

        sidenav.style.marginLeft = "0px";
        sidenav.style.width = "100%";
        menuBtn.classList.toggle("um"); // 클래스 이름에 um 빼기
        
    } else {
        menuBtn.classList.toggle("um"); // 클래스 이름에 um 추가
        sidenav.style.marginLeft = "-100%";
        

    }



    
    
}



