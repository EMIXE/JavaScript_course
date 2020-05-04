var week = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
for(var i=0; i<7; i++)
{
    if(i==5 || i==6) document.writeln(`${week[i].bold()}<br/>`);
        else if(i==0) document.writeln(`${week[i].italics()}<br/>`);
            else document.writeln(`${week[i]}<br/>`);
}

var arr = [];
for(var i=0; i<7; i++)
{
    arr.push(`${i+1}123456789`);
    if(arr[i][0] == "3" || arr[i][0] == "7") console.log(arr[i]);
}
