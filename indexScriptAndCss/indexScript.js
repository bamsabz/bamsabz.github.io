var openCheck = false;

var details = 
  [
    "This text is a test for cutting details of properties. This text is going to be previewed and when the item get a \"onclick\" event it's going to expand",
    "This text is a test for cutting details of properties. This text is going to be previewed and when the item get a \"onclick\" event it's going to expand",
    "This text is a test for cutting details of properties. This text is going to be previewed and when the item get a \"onclick\" event it's going to expand"
  ]

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


var detailsSave = details;
  function pageStartUp()
  {
    for(var j = 0; 0 < details.length; j++)
  {
    var stringForDes = "";
    
    for(var i = 80; i < 105; i++)
    {
      if(details[j].substring(0, i)[i-1] == ' ')
      {
        stringForDes = details[j].substring(0, i);
        console.log(document.getElementById('card1DescrptionId' + (j + 1)).innerHTML)
        document.getElementById('card1DescrptionId' + (j + 1)).innerHTML = stringForDes + "...";
        break;
      }
    }
  }
  details = detailsSave;
  }
  pageStartUp();