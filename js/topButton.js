let topBtn = document.getElementById("topBtn");
topBtn.style.display = "none";
window.onscroll = function(){scrollFunction()};

function scrollFunction(){
    if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){
        topBtn.style.display = "block";
    }else{
        topBtn.style.display = "none";
    }
}
function backToTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}