function red_font(){
    document.getElementById("container2").style.color="red";


}
function green_font(){
    document.getElementById("container2").style.color="green";


}
function blue_font(){
    document.getElementById("container2").style.color="blue";


}
function bg(){
    let c=document.getElementById("bg_color").value;

    if(c=="red"){
    
    document.getElementById("container2").style.backgroundColor="red";}
    
    if(c=="green"){
    
    document.getElementById("container2").style.backgroundColor="green";}
    if(c=="blue"){
    
    document.getElementById("container2").style.backgroundColor="blue";}


}

        // creating function named fontColor which takes in an parameter
        function fontColor(color) {
            //   getting element of target element and setting style color of color
            document.getElementById("target").style.color = color;
          }
    
          // creating function named backgroundColor which takes in an parameter
          function backgroundColor(color) {
            //   getting element of target element and setting style backgroundColor of color
            document.getElementById("target").style.backgroundColor  = color;
          }