let clickScroll = function(){
    let box = document.getElementById('d')
    if (box){
        let left = box.offsetLeft;
        let navBox = document.getElementById("nav-box")
        if (navBox){
            // clientWidth 元素宽度
            navBox.scrollTo(navBox.clientWidth / 2 - box.clientWidth / 2 - 15,0);
        }
    }
}