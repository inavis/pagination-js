//GETTING JSON DATA
let xhr = new XMLHttpRequest();


xhr.open("GET","https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json");
xhr.send();

let data;

xhr.onload=function(){
    if(xhr.status >=200 && xhr.status<300){
         data = JSON.parse(this.response);
        id1=data[0];
    }else{
        alert("Data is Not available");
    }
}

let currentpage=1;
let currentdata="First";

// let flag1=0;

let sample=
{
  "id": "1",
  "name": "Lura Senger",
  "email": "Xander_Collier@yahoo.com"
}

let div = document.createElement("div");
div.setAttribute("id","display");
document.body.appendChild(div);
div.innerHTML=`
<div> 
    <div id="head"><h2>USER DATA </h2> </div>
    
    <div class="data"><b>ID :</b>  <br><br> ${sample.id} </div>
    <br><br>
    <div class="data"><b>NAME :</b> <br><br>  ${sample.name} </div>
    <br><br>
    <div class="data"><b>EMAILID :</b>  <br><br> ${sample.email}  </div>
    <br><br>
</div>
`




//CREATING HTML ELEMENTS
let maindiv = document.createElement("div");
maindiv.className="container";
document.body.appendChild(maindiv);

let itemf = document.createElement("div")
itemf.setAttribute("class","item");
itemf.setAttribute("id","first");
itemf.innerHTML="First";
maindiv.appendChild(itemf);


let itemp= document.createElement("div")
itemp.setAttribute("class","item");
itemp.setAttribute("id","previous");
itemp.innerHTML="Previous";
itemp.style.display="none"
maindiv.appendChild(itemp);

let item1 = document.createElement("div");
item1.setAttribute("class","item");
item1.setAttribute("id","item1");
item1.innerHTML="1";
maindiv.appendChild(item1);
item1.style.color="black";
item1.style.textDecoration="underline";
item1.style.backgroundColor="cadetblue";


let item2 = document.createElement("div");
item2.setAttribute("class","item");
item2.setAttribute("id","item2");
item2.innerHTML="2";
maindiv.appendChild(item2);

let item3 = document.createElement("div");
item3.setAttribute("class","item");
item3.setAttribute("id","item3");
item3.innerHTML="3";
maindiv.appendChild(item3);

let item4 = document.createElement("div");
item4.setAttribute("class","item");
item4.setAttribute("id","item4");
item4.innerHTML="4";
maindiv.appendChild(item4);

let item5 = document.createElement("div");
item5.setAttribute("class","item");
item5.setAttribute("id","item5");
item5.innerHTML="5";
maindiv.appendChild(item5);

// let item6 = document.createElement("div");
// item6.setAttribute("class","item");
// item6.setAttribute("id","item6");
// item6.innerHTML="6";
// maindiv.appendChild(item6);

// let item7 = document.createElement("div");
// item7.setAttribute("class","item");
// item7.setAttribute("id","item7");
// item7.innerHTML="7";
// maindiv.appendChild(item7);

// let item8 = document.createElement("div");
// item8.setAttribute("class","item");
// item8.setAttribute("id","item8");
// item8.innerHTML="8";
// maindiv.appendChild(item8);

// let item9 = document.createElement("div");
// item9.setAttribute("class","item");
// item9.setAttribute("id","item9");
// item9.innerHTML="9";
// maindiv.appendChild(item9);

// let item10 = document.createElement("div");
// item10.setAttribute("class","item");
// item10.setAttribute("id","item10");
// item10.innerHTML="10";
// maindiv.appendChild(item10);


let itemn = document.createElement("div");
itemn.setAttribute("class","item");
itemn.setAttribute("id","next");
itemn.innerHTML="Next";
maindiv.appendChild(itemn);



document.getElementById("first").addEventListener('click',()=>{
    document.getElementById("next").style.display="block";
    currentpage=1;
    currentdata= document.getElementById("first").innerHTML;
    document.getElementById("item5").innerHTML=String(5);
    document.getElementById("item4").innerHTML=String(4);
    document.getElementById("item3").innerHTML=String(3);
    document.getElementById("item2").innerHTML=String(2);
    document.getElementById("item1").innerHTML=String(1);
    display(currentdata,currentpage);
    // if(currentpage==1){
    //     document.getElementById("previous").style.display="none";
    // }else{
    //     document.getElementById("previous").style.display="block";
    // }
    // if(currentpage==100){
    //     document.getElementById("next").style.display="none";
    // }else{
    //     document.getElementById("next").style.display="block";
    // }
});
document.getElementById("previous").addEventListener('click',()=>{
    if(Number(currentpage)-1>0){
        currentpage=Number(currentpage)-1;
        currentdata= document.getElementById("previous").innerHTML;
        //interval of 5 678910 -> 12345
        // if((currentpage+1)%5==1){

        //     document.getElementById("item1").innerHTML=String(currentpage-4);
        //     document.getElementById("item2").innerHTML=String(currentpage-3);
        //     document.getElementById("item3").innerHTML=String(currentpage-2);
        //     document.getElementById("item4").innerHTML=String(currentpage-1);
        //     document.getElementById("item5").innerHTML=String(currentpage);
        // }
       if(document.getElementById("item1").innerHTML==3){
        document.getElementById("item5").innerHTML=String(5);
        document.getElementById("item4").innerHTML=String(4);
        document.getElementById("item3").innerHTML=String(3);
        document.getElementById("item2").innerHTML=String(2);
        document.getElementById("item1").innerHTML=String(1);
       }else{
        if(document.getElementById("item1").innerHTML==(currentpage+1)){
        document.getElementById("item5").innerHTML=String(currentpage+2);
     document.getElementById("item4").innerHTML=String(currentpage+1);
     document.getElementById("item3").innerHTML=String(currentpage);
     document.getElementById("item2").innerHTML=String(currentpage-1);
     document.getElementById("item1").innerHTML=String(currentpage-2);
       }
 }

        display(currentdata,currentpage);
    }
    if(currentpage==1){
        document.getElementById("previous").style.display="none";
    }else{
        document.getElementById("previous").style.display="block";
    }
    if(currentpage==100){
        document.getElementById("next").style.display="none";
    }else{
        document.getElementById("next").style.display="block";
    }
    
});
document.getElementById("next").addEventListener('click',()=>{
    if(Number(currentpage)+1<101){
        
        currentpage=Number(currentpage)+1;
    currentdata= document.getElementById("next").innerHTML;
    //pagination -> 1 to 5 , 5 to 10 (interval of 5)
    // if(currentpage%5==1){
    //     document.getElementById("item5").innerHTML=String(currentpage+4);
    //     document.getElementById("item4").innerHTML=String(currentpage+3);
    //     document.getElementById("item3").innerHTML=String(currentpage+2);
    //     document.getElementById("item2").innerHTML=String(currentpage+1);
    //     document.getElementById("item1").innerHTML=String(currentpage);
    // }

    //to have a gap of 3 like 12345 -> 45678
    if(document.getElementById("item5").innerHTML==(currentpage-1)  ){

        if(document.getElementById("item5").innerHTML==98){
            document.getElementById("item5").innerHTML=String(100);
            document.getElementById("item4").innerHTML=String(99);
            document.getElementById("item3").innerHTML=String(98);
            document.getElementById("item2").innerHTML=String(97);
            document.getElementById("item1").innerHTML=String(96);
        }else{
            document.getElementById("item5").innerHTML=String(currentpage+2);
            document.getElementById("item4").innerHTML=String(currentpage+1);
            document.getElementById("item3").innerHTML=String(currentpage);
            document.getElementById("item2").innerHTML=String(currentpage-1);
            document.getElementById("item1").innerHTML=String(currentpage-2);
        }
        }
              
    display(currentdata,currentpage);

  

    }
    if(currentpage==100 ){
        document.getElementById("next").style.display="none";
    }else{
        document.getElementById("next").style.display="block";
    }
    if(currentpage==1){
        document.getElementById("previous").style.display="none";
    }else{
        document.getElementById("previous").style.display="block";
    }
    
});
document.getElementById("item1").addEventListener('click',()=>{
    currentdata= document.getElementById("item1").innerHTML;
    currentpage=currentdata;
    display(currentdata,currentpage);
    if(currentpage==100){
        document.getElementById("next").style.display="none";
    }else{
        document.getElementById("next").style.display="block";
    }
    if(currentpage==1){
        document.getElementById("previous").style.display="none";
    }else{
        document.getElementById("previous").style.display="block";
    }
    
    
});
document.getElementById("item2").addEventListener('click',()=>{
    currentdata= document.getElementById("item2").innerHTML;
    currentpage=currentdata;
    display(currentdata,currentpage);
    if(currentpage==100){
        document.getElementById("next").style.display="none";
    }else{
        document.getElementById("next").style.display="block";
    }
    if(currentpage==1){
        document.getElementById("previous").style.display="none";
    }else{
        document.getElementById("previous").style.display="block";
    }
    
});
document.getElementById("item3").addEventListener('click',()=>{
    currentdata= document.getElementById("item3").innerHTML;
    currentpage=currentdata;
    display(currentdata,currentpage);
    if(currentpage==100){
        document.getElementById("next").style.display="none";
    }else{
        document.getElementById("next").style.display="block";
    }
    if(currentpage==1){
        document.getElementById("previous").style.display="none";
    }else{
        document.getElementById("previous").style.display="block";
    }
    
});
document.getElementById("item4").addEventListener('click',()=>{
    currentdata= document.getElementById("item4").innerHTML;
    currentpage=currentdata;
    display(currentdata,currentpage);
    if(currentpage==100){
        document.getElementById("next").style.display="none";
    }else{
        document.getElementById("next").style.display="block";
    }
    if(currentpage==1){
        document.getElementById("previous").style.display="none";
    }else{
        document.getElementById("previous").style.display="block";
    }
    
});
document.getElementById("item5").addEventListener('click',()=>{
    currentdata= document.getElementById("item5").innerHTML;
    currentpage=currentdata;
    display(currentdata,currentpage);
    if(currentpage==100){
        document.getElementById("next").style.display="none";
    }else{
        document.getElementById("next").style.display="block";
    }
    if(currentpage==1){
        document.getElementById("previous").style.display="none";
    }else{
        document.getElementById("previous").style.display="block";
    }
    
});




function display(currentdata,currentpage){
    console.log(currentpage,currentdata);
    div.innerHTML=`
    <div> 
        <div id="head"><h2>USER DATA </h2> </div>
        <br><br>
        <div class="data"><b>ID :</b>  <br><br>  ${data[currentpage-1].id} </div>
        <br><br>
        <div class="data"><b>NAME :</b> <br><br>   ${data[currentpage-1].name} </div>
        <br><br>
        <div class="data"><b>EMAILID :</b>  <br><br>  ${data[currentpage-1].email} </div>
        <br><br>
    </div>
    `
    if(currentpage==document.getElementById("item5").innerHTML){
        //console.log(currentpage,document.getElementById("item5").innerHTML)
        document.getElementById("item5").style.color="black";
        document.getElementById("item5").style.textDecoration="underline";
        document.getElementById("item5").style.backgroundColor="cadetblue";
        document.getElementById("item4").style.color="rgb(69, 96, 214)";
        document.getElementById("item3").style.color="rgb(69, 96, 214)";
        document.getElementById("item2").style.color="rgb(69, 96, 214)";
        document.getElementById("item1").style.color="rgb(69, 96, 214)";
        document.getElementById("item4").style.textDecoration="none";
        document.getElementById("item3").style.textDecoration="none";
        document.getElementById("item2").style.textDecoration="none";
        document.getElementById("item1").style.textDecoration="none";
        document.getElementById("item4").style.backgroundColor="white";
        document.getElementById("item3").style.backgroundColor="white";
        document.getElementById("item2").style.backgroundColor="white";
        document.getElementById("item1").style.backgroundColor="white";
        // document.getElementById("item6").style.color="rgb(69, 96, 214)";
        // document.getElementById("item7").style.color="rgb(69, 96, 214)";
        // document.getElementById("item8").style.color="rgb(69, 96, 214)";
        // document.getElementById("item9").style.color="rgb(69, 96, 214)";
        // document.getElementById("item10").style.color="rgb(69, 96, 214)";
        // document.getElementById("item6").style.textDecoration="none";
        // document.getElementById("item7").style.textDecoration="none";
        // document.getElementById("item8").style.textDecoration="none";
        // document.getElementById("item9").style.textDecoration="none";
        // document.getElementById("item10").style.textDecoration="none";
    }else if(currentpage==document.getElementById("item4").innerHTML){
        //console.log(currentpage,document.getElementById("item4").innerHTML)
        document.getElementById("item4").style.color="black";
        document.getElementById("item4").style.textDecoration="underline";
        document.getElementById("item4").style.backgroundColor="cadetblue";
        document.getElementById("item5").style.color="rgb(69, 96, 214)";
        document.getElementById("item3").style.color="rgb(69, 96, 214)";
        document.getElementById("item2").style.color="rgb(69, 96, 214)";
        document.getElementById("item1").style.color="rgb(69, 96, 214)";
        document.getElementById("item5").style.textDecoration="none";
        document.getElementById("item3").style.textDecoration="none";
        document.getElementById("item2").style.textDecoration="none";
        document.getElementById("item1").style.textDecoration="none";
        document.getElementById("item5").style.backgroundColor="white";
        document.getElementById("item3").style.backgroundColor="white";
        document.getElementById("item2").style.backgroundColor="white";
        document.getElementById("item1").style.backgroundColor="white";
    }else if(currentpage==document.getElementById("item3").innerHTML){
        //console.log(currentpage,document.getElementById("item3").innerHTML)
        document.getElementById("item3").style.color="black";
        document.getElementById("item3").style.textDecoration="underline";
        document.getElementById("item3").style.backgroundColor="cadetblue";
        document.getElementById("item5").style.color="rgb(69, 96, 214)";
        document.getElementById("item4").style.color="rgb(69, 96, 214)";
        document.getElementById("item2").style.color="rgb(69, 96, 214)";
        document.getElementById("item1").style.color="rgb(69, 96, 214)";
        document.getElementById("item5").style.textDecoration="none";
        document.getElementById("item4").style.textDecoration="none";
        document.getElementById("item2").style.textDecoration="none";
        document.getElementById("item1").style.textDecoration="none";
        document.getElementById("item5").style.backgroundColor="white";
        document.getElementById("item4").style.backgroundColor="white";
        document.getElementById("item2").style.backgroundColor="white";
        document.getElementById("item1").style.backgroundColor="white";
    }else if(currentpage==document.getElementById("item2").innerHTML){
        //console.log(currentpage,document.getElementById("item2").innerHTML)
        document.getElementById("item2").style.color="black";
        document.getElementById("item2").style.textDecoration="underline";
        document.getElementById("item2").style.backgroundColor="cadetblue";
        document.getElementById("item5").style.color="rgb(69, 96, 214)";
        document.getElementById("item4").style.color="rgb(69, 96, 214)";
        document.getElementById("item3").style.color="rgb(69, 96, 214)";
        document.getElementById("item1").style.color="rgb(69, 96, 214)";
        document.getElementById("item5").style.textDecoration="none";
        document.getElementById("item4").style.textDecoration="none";
        document.getElementById("item3").style.textDecoration="none";
        document.getElementById("item1").style.textDecoration="none";
        document.getElementById("item5").style.backgroundColor="white";
        document.getElementById("item4").style.backgroundColor="white";
        document.getElementById("item3").style.backgroundColor="white";
        document.getElementById("item1").style.backgroundColor="white";
    }
    else if(currentpage==document.getElementById("item1").innerHTML){
        //console.log(currentpage,document.getElementById("item3").innerHTML)
        document.getElementById("item1").style.color="black";
        document.getElementById("item1").style.textDecoration="underline";
        document.getElementById("item1").style.backgroundColor="cadetblue";
        document.getElementById("item5").style.color="rgb(69, 96, 214)";
        document.getElementById("item4").style.color="rgb(69, 96, 214)";
        document.getElementById("item3").style.color="rgb(69, 96, 214)";
        document.getElementById("item2").style.color="rgb(69, 96, 214)";
        document.getElementById("item5").style.textDecoration="none";
        document.getElementById("item4").style.textDecoration="none";
        document.getElementById("item3").style.textDecoration="none";
        document.getElementById("item2").style.textDecoration="none";
        document.getElementById("item5").style.backgroundColor="white";
        document.getElementById("item4").style.backgroundColor="white";
        document.getElementById("item3").style.backgroundColor="white";
        document.getElementById("item2").style.backgroundColor="white";
    }
}






// for (var i = 0; i < current.length; i++) {
//     current[i].addEventListener('click', display)}
