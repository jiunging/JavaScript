// 이미지 옆에 넘기기버튼들
var items = document.querySelectorAll(".item-wrap");
var prevbtn = document.querySelector(".btn-prev");
var nextbtn = document.querySelector(".btn-next");
var index = 0;

// 스틸컷, 트레일러 뒤에 몇건인지 나오는거
var stillcutcount = document.querySelector(".stillcutcount");
var trailers = document.querySelectorAll(".image-wrap");
var trailercount = document.querySelector(".trailercount");
trailercount.innerHTML = trailers.length + "건";


// 트레일러 동영상 버튼 누르면 팝업
var playvideo = document.querySelector(".img-wrrap");

playvideo.onclick = function() {

    var popupWidth = 1229;
    var popupHeight = 835;
    var leftPosition = (window.screen.width - popupWidth) / 2;
    var topPosition = (window.screen.height - popupHeight) / 2;

    window.open("popup/popup_demonslayer.html", "귀칼팝업", "width=" + popupWidth + ", height=" + popupHeight + ", left=" + leftPosition + ", top=" + topPosition);
}


prevbtn.onclick = function() {
    if(index <= 0) {
        index = items.length;
    }
    index--;
    changeImg(index);
    stillcutcount.innerHTML = index+1 + "/" + items.length + "건";
}
nextbtn.onclick = function() {
    if(index > items.length - 2) {
        index = -1;
    }
    index++;
    changeImg(index);
    stillcutcount.innerHTML = index+1 + "/" + items.length + "건";
}

function changeImg(index) {
    for(var i = 0; i < items.length; i++) {
        items[i].classList.toggle("on", i === index);
    }
}


