var speed=1200;
aspeed.addEventListener("input", speedvis);
function speedvis()
{
    var arr_speed= aspeed.value;
    switch(parseInt(arr_speed))
    {
        case 1: speed=1; break;
        case 2: speed=10; break;
        case 3: speed=100; break;
        case 4: speed=1000; break;
        case 5: speed=10000; break;
    }
    delay=10000/(Math.floor(n/10)*speed);
}

var delay=10000/(Math.floor(n/10)*speed);
var cdelay=0; // updated for visulaization visibility

function divupdate(cont, height, color)
{
    window.setTimeout(function(){
        cont.style=" margin:0% " + marginsize + "%; width:" + (100/n-(2*marginsize)) + "%; height:" + height + "%; background-color:" + color + ";";
    }, cdelay+=delay)
}

function enable_buttons()
{
    window.setTimeout(function(){
        for(var i=0;i<butalgo.length;i++)
        {
            butalgo[i].classList=[];
            butalgo[i].classList.add("butt_unselected");
            butalgo[i].disabled=false;
            as.disabled=false;
            gen.disabled=false;
            aspeed.disabled=false;
        }
    },cdelay+=delay);
}