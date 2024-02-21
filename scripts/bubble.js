function bubblesort()
{
    document.getElementById("Time_Worst").innerText="O(N^2)";
    document.getElementById("Time_Average").innerText="Θ(N^2)";
    document.getElementById("Time_Best").innerText="Ω(N)";

    document.getElementById("Space_Worst").innerText="O(1)";

    cdelay=0;

    for(var i=0 ;i<n-1; i++)
    {
        for (var j=0; j<n-i-1;j++)
        {
            divupdate(div[j], sizes[j], "yellow")
            if(sizes[j]>sizes[j+1])
            {
                divupdate(div[j],sizes[j],"red");
                divupdate(div[j+1],sizes[j+1],"red");

                var temp = sizes[j];
                sizes[j]=sizes[j+1];
                sizes[j+1]=temp;

                divupdate(div[j],sizes[j],"red");
                divupdate(div[j+1],sizes[j+1],"red");
            }
            divupdate(div[j],sizes[j],"white");
        }
        divupdate(div[j],sizes[j],"rgba(27, 219, 133, 0.68)");
    }
    divupdate(div[0],sizes[0],"rgba(27, 219, 133, 0.68)");

    enable_buttons();
}