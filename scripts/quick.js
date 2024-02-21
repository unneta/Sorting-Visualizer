function quicksort()
{
    document.getElementById("Time_Worst").innerText="O(N^2)";
    document.getElementById("Time_Average").innerText="Θ(N log N)";
    document.getElementById("Time_Best").innerText="Ω(N log N)";

    document.getElementById("Space_Worst").innerText="O(log N)";

    cdelay=0;

    quick(0,n-1);

    enable_buttons();
}


function quick_partition (start, end)
{
    var i = start + 1;
    var piv = sizes[start] ;//make the first element as pivot element.
    divupdate(div[start],sizes[start],"yellow");//Color update

        for(var j =start + 1; j <= end ; j++ )
        {
            //re-arrange the array by putting elements which are less than pivot on one side and which are greater that on other.
            if (sizes[ j ] < piv)
            {
                divupdate(div[j],sizes[j],"yellow");//Color update

                divupdate(div[i],sizes[i],"red");//Color update
                divupdate(div[j],sizes[j],"red");//Color update

                var temp=sizes[i];
                sizes[i]=sizes[j];
                sizes[j]=temp;

                divupdate(div[i],sizes[i],"red");//Height update
                divupdate(div[j],sizes[j],"red");//Height update

                divupdate(div[i],sizes[i],"white");//Height update
                divupdate(div[j],sizes[j],"white");//Height update

                i += 1;
            }
    }
    divupdate(div[start],sizes[start],"red");//Color update
    divupdate(div[i-1],sizes[i-1],"red");//Color update
    
    var temp=sizes[start];//put the pivot element in its proper place.
    sizes[start]=sizes[i-1];
    sizes[i-1]=temp;

    divupdate(div[start],sizes[start],"red");//Height update
    divupdate(div[i-1],sizes[i-1],"red");//Height update

    for(var t=start;t<=i;t++)
    {
        divupdate(div[t],sizes[t],"rgba(27, 219, 133, 0.68)");//Color update
    }

    return i-1;//return the position of the pivot
}

function quick (start, end )
{
    if( start < end )
    {
        //stores the position of pivot element
        var piv_pos = quick_partition (start, end ) ;     
        quick (start, piv_pos -1);//sorts the left side of pivot.
        quick (piv_pos +1, end) ;//sorts the right side of pivot.
    }
}
