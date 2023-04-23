
//gettting object of the select tags
let o1 = document.getElementById('scale-1');
let o2 = document.getElementById('scale-2');

let t1 = document.getElementById('temperature-1');
let t2 = document.getElementById('temperature-2');

//Kelven-Celcius Conversions
function cToK(t)
{
    return t + 273.15;
}
function kToC(t)
{
    return t - 273.15; 
}


//Kelven-Farenhite Conversions
function fToK(t)
{
    return  (5/9)*(t - 32) + 273.15;
}

function kToF(t)
{
    return (t - 273.15)*(9/5) + 32;
}


//Kelvin to Kelvin Conversions
function kToK(t)
{
    return t;
}


//kelvin to Reaumur Conversions
function reToK(t){
    return t/0.8 + 273.15;
}

function kToRe(t){
    return (t - 273.15)*0.8;
}


//kelvin to Rankine Conversions
function raToK(t){
    return t*(5/9);
}

function kToRa(t){
    return t*(9/5);
}

let toK = [cToK,kToK,reToK,raToK,fToK];
let kTo = [kToC,kToK,kToRe,kToRa,kToF];



t1.addEventListener('change',function(){
    console.log("*************");
    let index1 = o1.selectedIndex;
    let index2 = o2.selectedIndex;
    let v1 = +t1.value;

    let v2 = toK[index1](v1);
    console.log("1111       "+v2);
    v2 = kTo[index2](v2);

    t2.value = v2;

})

o1.addEventListener('change',function(){
    console.log("*************");
    let index1 = o1.selectedIndex;
    let index2 = o2.selectedIndex;
    let v1 = +t1.value;

    let v2 = toK[index1](v1);
    console.log("2222      "+v2);
    v2 = kTo[index2](v2);

    t2.value = v2;

})

t2.addEventListener('change',function(){
    console.log("*************");
    let index1 = o1.selectedIndex;
    let index2 = o2.selectedIndex;
    let v2 = +t2.value;

    let v1 = toK[index2](v2);
    console.log("3333     "+v1);
    v1 = kTo[index1](v1);

    t1.value = v1;

})

o2.addEventListener('change',function(){
    console.log("*************");
    let index1 = o1.selectedIndex;
    let index2 = o2.selectedIndex;
    let v2 = +t2.value;

    let v1 = toK[index2](v2);
    console.log("4444     "+v1);
    v1 = kTo[index1](v1);

    t1.value = v1;

})