function mergesort()
{
    document.getElementById("Time_Worst").innerText="O(N log N)";
    document.getElementById("Time_Average").innerText="Θ(N log N)";
    document.getElementById("Time_Best").innerText="Ω(N log N)";

    document.getElementById("Space_Worst").innerText="O(N)";

    cdelay=0;

    mergepartition(0,n-1);

    enable_buttons();

function merge(start,mid,end)
{
    var p=start,q=mid+1;

    var a=[],k=0;

    for(var i=start; i<=end; i++)
    {
        if(p>mid)
        {
            a[k++]=sizes[q++];
            divupdate(div[q-1],sizes[q-1],"red");//Color update
        }
        else if(q>end)
        {
            a[k++]=sizes[p++];
            divupdate(div[p-1],sizes[p-1],"red");//Color update
        }
        else if(sizes[p]<sizes[q])
        {
            a[k++]=sizes[p++];
            divupdate(div[p-1],sizes[p-1],"red");//Color update
        }
        else
        {
            a[k++]=sizes[q++];
            divupdate(div[q-1],sizes[q-1],"red");//Color update
        }
    }

    for(var t=0;t<k;t++)
    {
        sizes[start++]=a[t];
        divupdate(div[start-1],sizes[start-1],"rgba(27, 219, 133, 0.68)");//Color update
    }
}

function mergepartition(start,end)
{
    if(start < end)
    {
        var mid=Math.floor((start + end) / 2);
        divupdate(div[mid],sizes[mid],"yellow");//Color update

        mergepartition(start,mid);
        mergepartition(mid+1,end);

        merge(start,mid,end);
    }
}
}