const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
// hex colors consists of # and 6 values  eg -> #f15025
const btn=document.querySelector("#btn");
const color=document.querySelector(".color");
    let copyColor;
btn.addEventListener('click',function(){
    let hexColor='#';
    for(let i=0;i<6;i++){
        hexColor+=hex[getRandom()];
    }
    copyColor=hexColor;
    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor;
})

function getRandom(){
    const randomNumber = Math.floor(Math.random()*16);
    return randomNumber;
}

const copy=document.querySelector('.copy-btn');
copy.addEventListener('click',function(){
    // console.log(copyColor);
    navigator.clipboard.writeText(copyColor);
    alert("Hex Value Copied");
})