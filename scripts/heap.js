function heapsort()
{
    document.getElementById("Time_Worst").innerText="O(N log N)";
    document.getElementById("Time_Average").innerText="Θ(N log N)";
    document.getElementById("Time_Best").innerText="Ω(N log N)";

    document.getElementById("Space_Worst").innerText="O(1)";

    cdelay=0;

    heap();
    
    enable_buttons();
}

function swap(i,j)
{
    divupdate(div[i],sizes[i],"red");//Color update
    divupdate(div[j],sizes[j],"red");//Color update

    var temp=sizes[i];
    sizes[i]=sizes[j];
    sizes[j]=temp;

    divupdate(div[i],sizes[i],"red");//Height update
    divupdate(div[j],sizes[j],"red");//Height update

    divupdate(div[i],sizes[i],"white");//Color update
    divupdate(div[j],sizes[j],"white");//Color update
}

function max_heapify(x,i)
{
    var largest=i;
    var l=2*i+1;
    var r=2*i+2;

    if(l<x && sizes[l]>sizes[largest])
    {
        if(largest!=i)
        {
            divupdate(div[largest],sizes[largest],"white");//Color update
        }

        largest=l;

        divupdate(div[largest],sizes[largest],"red");//Color update
    }

    if(r<x && sizes[r]>sizes[largest])
    {
        if(largest!=i)
        {
            divupdate(div[largest],sizes[largest],"white");//Color update
        }

        largest=r;

        divupdate(div[largest],sizes[largest],"red");//Color update
    }

    if(largest!=i)
    {
        swap(i,largest);

        max_heapify(x,largest);
    }
}

function heap()
{
    for(var i=Math.floor(n/2)-1;i>=0;i--)
    {
        max_heapify(n,i);
    }

    for(var i=n-1;i>0;i--)
    {
        swap(0,i);
        divupdate(div[i],sizes[i],"rgba(27, 219, 133, 0.68)");//Color update
        divupdate(div[i],sizes[i],"yellow");//Color update

        max_heapify(i,0);

        divupdate(div[i],sizes[i],"white");//Color update
        divupdate(div[i],sizes[i],"rgba(27, 219, 133, 0.68)");//Color update
    }
    divupdate(div[i],sizes[i],"rgba(27, 219, 133, 0.68)");//Color update
}
