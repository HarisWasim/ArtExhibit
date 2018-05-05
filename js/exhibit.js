function imageOneFunction(){
    document.getElementById("flex-container-column").style.display = "flex";
    document.getElementById("flex-container-column2").style.display = "none";
    document.getElementById("flex-container-column3").style.display = "none";
    document.getElementById("flex-container-column4").style.display = "none";
    document.getElementById("flex-container-column5").style.display = "none";
    document.getElementById("flex-container-column6").style.display = "none";
};

function imageTwoFunction(){
    document.getElementById("flex-container-column").style.display = "none";
    document.getElementById("flex-container-column2").style.display = "flex";
    document.getElementById("flex-container-column3").style.display = "none";
    document.getElementById("flex-container-column4").style.display = "none";
    document.getElementById("flex-container-column5").style.display = "none";
    document.getElementById("flex-container-column6").style.display = "none";
};

function imageThreeFunction(){
    document.getElementById("flex-container-column").style.display = "none";
    document.getElementById("flex-container-column2").style.display = "none";
    document.getElementById("flex-container-column3").style.display = "flex";
    document.getElementById("flex-container-column4").style.display = "none";
    document.getElementById("flex-container-column5").style.display = "none";
    document.getElementById("flex-container-column6").style.display = "none";
};

function imageFourFunction(){
    document.getElementById("flex-container-column").style.display = "none";
    document.getElementById("flex-container-column2").style.display = "none";
    document.getElementById("flex-container-column3").style.display = "none";
    document.getElementById("flex-container-column4").style.display = "flex";
    document.getElementById("flex-container-column5").style.display = "none";
    document.getElementById("flex-container-column6").style.display = "none";
};

function imageFiveFunction(){
    document.getElementById("flex-container-column").style.display = "none";
    document.getElementById("flex-container-column2").style.display = "none";
    document.getElementById("flex-container-column3").style.display = "none";
    document.getElementById("flex-container-column4").style.display = "none";
    document.getElementById("flex-container-column5").style.display = "flex";
    document.getElementById("flex-container-column6").style.display = "none";
};

function imageSixFunction(){
    document.getElementById("flex-container-column").style.display = "none";
    document.getElementById("flex-container-column2").style.display = "none";
    document.getElementById("flex-container-column3").style.display = "none";
    document.getElementById("flex-container-column4").style.display = "none";
    document.getElementById("flex-container-column5").style.display = "none";
    document.getElementById("flex-container-column6").style.display = "flex";
};


let imageOne = document.getElementById('wind-toys-thumbnail');
imageOne.addEventListener('click', imageOneFunction);

let imageTwo = document.getElementById('pancake-breakfast-thumbnail');
imageTwo.addEventListener('click', imageTwoFunction);

let imageThree = document.getElementById('around-the-cake-thumbnail');
imageThree.addEventListener('click', imageThreeFunction);

let imageFour = document.getElementById('three-machines-thumbnail');
imageFour.addEventListener('click', imageFourFunction);

let imageFive = document.getElementById('boston-creems-thumbnail');
imageFive.addEventListener('click', imageFiveFunction);

let imageSix = document.getElementById('bananas-thumbnail');
imageSix.addEventListener('click', imageSixFunction);

// if((window.innerWidth)<1200){
//     document.getElementById("flex-container-column").style.display = "flex";
//     document.getElementById("flex-container-column2").style.display = "flex";
//     document.getElementById("flex-container-column3").style.display = "flex";
//     document.getElementById("flex-container-column4").style.display = "flex";
//     document.getElementById("flex-container-column5").style.display = "flex";
//     document.getElementById("flex-container-column6").style.display = "flex"; 
// }

// if(window.innerWidth<1200){
//     console.log("hello");
// }