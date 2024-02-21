var as=document.getElementById('a_size'),n=as.value;
var gen= document.getElementById("a_generate");
var aspeed=document.getElementById("a_speed");

var butalgo=document.querySelectorAll(".algos button");

var sizes=[];
var div=[];
var marginsize;
var cont=document.getElementById("array_container")
cont.style="flex-direction:row";

gen.addEventListener("click",generatearray);
as.addEventListener("input",updatearraysize);

function generatearray()
{
    cont.innerHTML="";

    for(var i=0;i<n;i++)
    {
        sizes[i]=Math.floor(Math.random() * 0.5*(as.max - as.min) ) + 10;
        div[i]=document.createElement("div");
        cont.appendChild(div[i]);
        marginsize=0.1;
        div[i].style=" margin:0% " + marginsize + "%; background-color: #ffffffe4; width:" + (100/n-(2*marginsize)) + "%; height:" + (sizes[i]) + "%;";
    }
}

function updatearraysize()
{
    n=as.value;
    generatearray();
}

window.onload=updatearraysize();
var reset=document.getElementById("reset");
reset.addEventListener("click",function() {
    window.location.reload();
});

for(var i=0; i<butalgo.length; i++)
{
    butalgo[i].addEventListener("click",runalgo);
}

function disable_buttons()
{
    for(var i=0;i<butalgo.length;i++)
    {
        butalgo[i].classList=[];
        butalgo[i].classList.add("butt_locked");
        butalgo[i].disabled=true;
        as.disabled=true;
        gen.disabled=true;
        aspeed.disabled=true;
    }
}

function runalgo()
{
    disable_buttons();

    this.classList.add("butt_selected");
    switch(this.innerHTML)
    {
        case "Bubble":bubblesort();
                        break;
        case "Selection":selectionsort();
                         break;
        case "Insertion":insertionsort();
                         break;
        case "Merge":mergesort();
                        break;
        case "Quick":quicksort();
                        break;
        case "Heap":heapsort();
                        break;
    }
}