const base_url="https://2024-03-06.currency-api.pages.dev/v1/currencies/eur.json"; // Base URL for the API

const dropdowns=document.querySelectorAll(".dropdown select");
   
const btn=document.querySelector("button");


const fromcurr=document.querySelector(".from select");
const tocurr=document.querySelector(".to select");

for(let select of dropdowns){
    for(code in countryList){
        let newOption=document.createElement("option");
        newOption.value=code;
        newOption.innerText=code;
        if(select.name==="from" && code==="USD"){
            newOption.selected="selected"; // Set USD as the default selected option for "from"
        }else if(select.name==="to" && code==="INR"){
            newOption.selected="selected"; // Set INR as the default selected option for "from"
        }
        select.append(newOption);
    }
    select.addEventListener("change",(evt) =>{
    updateFlag(evt.target);
});
}

const updateFlag=(elem)=>{
    let currcode=elem.value;
    let countryCode=countryList[currcode];
    let newsrc=`https://flagsapi.com/${countryCode}/flat/64.png`;
    let img=elem.parentElement.querySelector("img");
    img.src=newsrc;

}


btn.addEventListener("click",async (evt)=>{
    evt.preventDefault();
    let amount=document.querySelector(".amount input").value;
    if(amount===""||amount<1){
        amount=1;
    }
    
    const URL='${base_url}/$(fromcurr.value.toLowerCase())/$(tocurr.value.toLowerCase()).json';
    let response=await fetch(URL);
    let data=await response.json();
    console.log(data);
});









