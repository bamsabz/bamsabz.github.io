var openCheck = false;

function pageHeaderClick(a)
{
    var el = document.getElementById(a)
    el.style.animationName = "aa"
    if(openCheck == false)
    {
        el.style.display = "block";
        openCheck = true;
        document.getElementById("pageHeaderClickId").innerHTML = "&#10006;"
    }
    else if(openCheck == true)
    {
        el.style.animationName = "aaa"
        openCheck = false;
        setTimeout(function(){el.style.display = "none";}, 550)
        // el.style.display = "none";
        document.getElementById("pageHeaderClickId").innerHTML = "☰"
    }

    
}