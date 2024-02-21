function selectionsort()
{
    document.getElementById("Time_Worst").innerText="O(N^2)";
    document.getElementById("Time_Average").innerText="Θ(N^2)";
    document.getElementById("Time_Best").innerText="Ω(N^2)";

    document.getElementById("Space_Worst").innerText="O(1)";

    cdelay=0;
    for(var i=0;i<n-1;i++)
    {
        divupdate(div[i],sizes[i],"red");//Color update

        min=i;

        for(var j=i+1;j<n;j++)
        {
            divupdate(div[j],sizes[j],"yellow");//Color update

            if(sizes[j]<sizes[min])
            {
                if(min!=i)
                {
                    divupdate(div[min],sizes[min],"white");//Color update
                }
                min=j;
                divupdate(div[min],sizes[min],"red");//Color update
            }
            else
            {
                divupdate(div[j],sizes[j],"white");//Color update
            }
        }
        
        if(min!=i)
        {
            var temp=sizes[min];
            sizes[min]=sizes[i];
            sizes[i]=temp;

            divupdate(div[min],sizes[min],"red");//Height update
            divupdate(div[i],sizes[i],"red");//Height update
            divupdate(div[min],sizes[min],"white");//Color update
        }
        divupdate(div[i],sizes[i],"rgba(27, 219, 133, 0.68)");//Color update
    }
    divupdate(div[i],sizes[i],"rgba(27, 219, 133, 0.68)");//Color update

    enable_buttons();
}