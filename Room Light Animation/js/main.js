var setButton = true;
function roomLight(){
    if(setButton== true){
        document.getElementById("room").setAttribute("src","./lightroom.png");
        document.getElementById("roomBtn").setAttribute("src","./on_btn.jpg");
        setButton = false;
    }else{
        document.getElementById("room").setAttribute("src","./darkroom.png");
        document.getElementById("roomBtn").setAttribute("src","./off_btn.jpg");
        setButton =true;
    }

}

function bathroomLight(){
    if(setButton== true){
        document.getElementById("bathRoom").setAttribute("src","./lightbathroom.png");
        document.getElementById("bathroomBtn").setAttribute("src","./on_btn.jpg");
        setButton = false;
    }else{
        document.getElementById("bathRoom").setAttribute("src","./darkbathroom.png");
        document.getElementById("bathroomBtn").setAttribute("src","./off_btn.jpg");
        setButton =true;
    }

}

function bedroomLight(){
    if(setButton== true){
        document.getElementById("bedRoom").setAttribute("src","./lightbedroom.png");
        document.getElementById("bedroomBtn").setAttribute("src","./on_btn.jpg");
        setButton = false;
    }else{
        document.getElementById("bedRoom").setAttribute("src","./darkbedroom.png");
        document.getElementById("bedroomBtn").setAttribute("src","./off_btn.jpg");
        setButton =true;
    }
}

function hallLight(){
    if(setButton== true){
        document.getElementById("hall").setAttribute("src","./lighthall.png");
        document.getElementById("hallBtn").setAttribute("src","./on_btn.jpg");
        setButton = false;
    }else{
        document.getElementById("hall").setAttribute("src","./darkhall.png");
        document.getElementById("hallBtn").setAttribute("src","./off_btn.jpg");
        setButton =true;
    }
}