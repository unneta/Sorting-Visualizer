function insertionsort()
{
    document.getElementById("Time_Worst").innerText="O(N^2)";
    document.getElementById("Time_Average").innerText="Θ(N^2)";
    document.getElementById("Time_Best").innerText="Ω(N)";

    document.getElementById("Space_Worst").innerText="O(1)";

    cdelay=0;

    for(var x=0;x<n;x++)
    {
        divupdate(div[x],sizes[x],"yellow");//Color update

        var key= sizes[x];
        var i=x-1;
        while(i>=0 && sizes[i]>key)
        {
            divupdate(div[i],sizes[i],"red");//Color update
            divupdate(div[i+1],sizes[i+1],"red");//Color update

            sizes[i+1]=sizes[i];

            divupdate(div[i],sizes[i],"red");//Height update
            divupdate(div[i+1],sizes[i+1],"red");//Height update
    
            divupdate(div[i],sizes[i],"white");//Color update
            if(i==(x-1))
            {
                divupdate(div[i+1],sizes[i+1],"yellow");//Color update
            }
            else
            {
                divupdate(div[i+1],sizes[i+1],"white");//Color update
            }
            i-=1;
        }
        sizes[i+1]=key;

        for(var t=0;t<x;t++)
        {
            divupdate(div[t],sizes[t],"rgba(27, 219, 133, 0.68)");
        }//Color update
    }
    divupdate(div[x-1],sizes[x-1],"rgba(27, 219, 133, 0.68)");//Color update

    enable_buttons();
}