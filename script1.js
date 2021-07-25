let h1 = document.createElement('h1');
h1.innerHTML = "WELCOME TO  SEE YOUR NAME IN DIFFERENT COUNTRIES";
h1.style.color = "white";
h1.style.backgroundColor = "blue";
h1.setAttribute("class","center");
let hr =document.createElement('hr');
let img=document.createElement('img');
img.setAttribute("src","flag.jpg");
img.setAttribute("class","center1");
img.style.floa
let h = document.createElement('h4');
h.innerHTML = "Enter your Name:"
document.body.append(h1,hr,img, h);
let f = document.createElement("FORM");
var x = document.createElement("INPUT");
x.setAttribute("type", "text");
x.setAttribute("id", "name");
// x.setAttribute("value","alli")
let y = document.createElement("button");
y.innerHTML = "click me"
y.setAttribute("id", "but_y")
f.append(x, y);
document.body.append(f);

let p = document.createElement('p');
p.setAttribute("id", "demo");
//p.innerHTML="welcome";
document.body.append(p);
y.addEventListener("click", valuetext);


function valuetext(e) {
    try{
    e.preventDefault();
    var name1 = document.getElementById("name").value;
    var demo1 = document.getElementById("demo");
    demo1.innerHTML = name1;

    console.log(name1);
    // alert(document.getElementById("name").value);

    getjson(name1);
}
catch(error){
console.log(error);
}
}



async function getjson(name) {
    try {

        let resp = await fetch("https://api.nationalize.io/?name=" + name);
        let data = await resp.json();
        let resp1 =await fetch("https://api.genderize.io?name=" +name);
        let value= await resp1.json();
        let resp3 =await fetch("https://api.agify.io?name=" +name);
        let value1= await resp3.json();
        foo(data,value,value1);
        console.log(data);
        console.log(value);
        console.log(value2);
    }
    catch (error) {
        console.log(error);

    }
}







function foo(data,data1,data2) {
    try{

    let container = document.createElement("div");
    container.setAttribute("class", "container");
    let row = document.createElement("div");
    row.setAttribute("class", "row");
    console.log(data);
    console.log(data1);
    console.log(data2);
    
    //    let cardTilte = document.createElement("h2");
    //     cardTilte.setAttribute("class", "h2");
    //     cardTilte.innerHTML = "Name :" + data.name;


    data.country.forEach((element) =>{
        // let resp2 = await fetch("https://api.genderize.io?name="+ data.name&country_id=" + );
        // let data2 = await resp.json();
        
        let col = document.createElement("div"); 
        col.setAttribute("class", "col-4 mb-3");

        let card = document.createElement("div");
        card.setAttribute("class", "card h-200");


        

        // let cardImg = document.createElement("img");
        // cardImg.setAttribute("class","card-img-top");
        // cardImg.setAttribute("src",);

        let cardBody = document.createElement("div")
        cardBody.setAttribute("class", "card-body");

        let cardTilte1 = document.createElement("h5");
        cardTilte1.setAttribute("class", "h5");
        cardTilte1.innerHTML = "Name :" + data.name;

        let cardTilte4 = document.createElement("h6");
        cardTilte4.setAttribute("class", "h6");
        cardTilte4.innerHTML = "Sex:" + data1.gender;

        let cardTilte5= document.createElement("h6");
        cardTilte5.setAttribute("class", "h6");
        cardTilte5.innerHTML = "Age: "+ data2.age;

        let cardTilte2 = document.createElement("h6");
        cardTilte2.setAttribute("class", "h6");
        cardTilte2.innerHTML = "country code :" + element.country_id;

        let cardTilte3 = document.createElement("h6");
        cardTilte3.setAttribute("class", "h6");
        cardTilte3.innerHTML = "Probability :" + element.probability;
        
        let cardtext = document.createElement('p');
        cardtext.setAttribute("class", "card-text");
        cardtext.innerHTML = "Have a wonderful day to you";

        cardBody.append(cardTilte1,cardTilte2,cardTilte3, cardTilte4,cardTilte5,cardtext);

        card.append(cardBody);
        col.append(card);
        row.append(col);
    });

    container.append(row);
    document.body.append(container);
}
catch(error)
{
    console.log(error);
}
 }