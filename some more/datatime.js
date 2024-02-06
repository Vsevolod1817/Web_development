function NormalSeconds(time)
{
    if(time.getSeconds()<=9)
    {
        return "0"+time.getSeconds();
    }
    else
    {
        return time.getSeconds();
    }
}

function NormalMinutes(time)
{
    if(time.getMinutes()<=9)
    {
        return "0"+time.getMinutes();
    }
    else
    {
        return time.getMinutes();
    }
}

function NormalHours(time)
{
    if(time.getHours()>=13)
    {
        return time.getHours()-12
    }
    if(time.getHours()==0)
    {
        return "12"
    }
}



function ShowTime()
{
    let date = new Date();
    var days=['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    var n = date.getDay();
    var c = date.getMonth();
    let time = new Date();
    elem=document.getElementById('DT');
        elem.innerHTML = NormalHours(time) + '-' + NormalMinutes(time) + '-' + NormalSeconds(time) + '    ' + "0"+date.getDate()+' 0'+(date.getMonth()+1)+' '+date.getFullYear()+', '+days[n];
}


setInterval(ShowTime,250);
