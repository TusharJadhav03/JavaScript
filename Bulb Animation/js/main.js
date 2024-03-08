var switchBulb = "";
function bulbAnimation(){
   if(switchBulb == true){
       document.getElementById("bulb").setAttribute("src","/bulb_on.png");
       document.getElementById("btn").setAttribute("src","/btn_on.png");
       switchBulb = false;
    }
    else{
        document.getElementById("bulb").setAttribute("src","/bulb_off.png");
        document.getElementById("btn").setAttribute("src","/btn_off.png");
        switchBulb = true;
   }
}
