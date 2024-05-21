let image = document.queryselector(".Slider_image");
let translate = 0;
setInterval(()=>{
    if(translate >= 0 && translate < 400){
        translate+=100
    }
    else{
        translate = 0
    }

    image.style.transform = `translatex(${-translate}%)`
},1000)