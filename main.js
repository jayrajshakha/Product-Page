
const buttons = document.querySelectorAll(".rb");
const productImg = document.querySelector("#image");
const images =[ 
    "images/image1.png",
    "images/image2.png",
    "images/image3.png"
];

let a = 0;
      

     for(button of buttons){

        button.onclick = (e)=>{

          productImg.src = images[a];
           a++;

           if(a > 2){
              a = 0;
           }
        }
       }