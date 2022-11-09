var container=document.createElement("div");
container.setAttribute("class","container");
var row=document.createElement("div");
row.setAttribute("class","row");
row.classList.add("row","m-3");
container.append(row);

//var res=fetch("https://restcountries.com/v2/all");
//res.then((data)=>data.json()).then((data1)=>foo(data1));

restdata();
async function restdata(){
    let res=await fetch("https://restcountries.com/v2/all");
    let res1= await res.json();
    console.log(res1);
    try{
        for(var i=0;i<res1.length;i++)
        {
        var countryname=res1[i].name;
        var latlong=res1[i].latlng;
        //console.log(countryname,latlong);
        foo(res1);
        }
        if(latlong.length===undefined)
        {
            throw new Error("invalid coordinates");
        }
        //opendata(name,...latlong);
    }
     catch (error) {
        console.log("invalid"+error.message);
    }
}
function foo(data1){
    //console.log(data1) 
    for(var i=0;i<data1.length;i++){
        let name2=data1[i].name;
        let lat=data1[i].latlng[0];
        let lng=data1[i].latlng[1];
        //console.log(name2,lat,lng);
       row.innerHTML+=`<div class="col-lg-4" style="border:1px solid black; " >
       <div class="card-header" style="background-color:aquamarine; font-family: 'Courier New', Courier, monospace;text-align:center;">Countryname:${data1[i].name}</div>
       <img src="${data1[i].flag}" class="card-img-top" alt="...">
       <div class="card-body text-success" " style=" background-color: aquamarine;text-align:center;">
            <h5 class="card-title">Capital:${data1[i].capital}</h5>
            <h5 class="card-title">Region:${data1[i].region}</h5>
            <h5 class="card-title">Countrycode:${data1[i].cioc}</h5>
            <h5 class="card-title">Latitude:${data1[i].latlng[0]}</h5>
            <h5 class="card-title">Longitude:${data1[i].latlng[1]}</h5>
            <button class="btn btn-primary"  onclick="opendata(${lat},${lng})">Click For Weather</button>    
       </div>
     </div>`;
     document.body.append(container); 
    }
}


async function opendata(lat,lng){
    try {
    let res2=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=1b55f75dc8ebc4a44f808493820896b4`);
    let res3= await res2.json();
    alert(`Temp:${res3.main.temp} `)
   //console( ` Temp:${res3.main.temp}`);
   //alert(`Country name:${name2} , Temp:${res3.main.temp}`);
   //console.log(`Country name:${res3.name1} , Temp:${res3.main.temp}`);
    }
    catch (error) {
        console.log(error.message);
    }
    }