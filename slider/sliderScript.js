
function change(className, func)
{
    
    var imgList = document.getElementsByClassName(className)
    
    for (var i = 0; i < imgList.length; i++)
    {
        
        if(imgList[i].style.display == "block")
        {
            
            if(func == 'F')
            {
                if((i+1) == imgList.length)
                {
                    console.log("Transfering form the last item")
                    imgList[0].style.display = "block"
                    imgList[i].style.display = "none"
                    break;
                }
                else
                {
                    imgList[i+1].style.display = "block"
                    imgList[i].style.display = "none"
                    break;
                }
                
            }
            else if(func == 'B')
            {
                
                if(i == 0)
                {
                    console.log("Transfering form the first item")
                    imgList[imgList.length - 1].style.display = "block"
                    imgList[0].style.display = "none"
                    break;
                }
                else
                {
                    imgList[i-1].style.display = "block"
                    imgList[i].style.display = "none"
                    break;
                }
            }
        }
    }
}

function titleClicked(itemId)
{
    if(document.getElementById(itemId).style.position != "absolute")
    {
        document.getElementById(itemId).style.position = "absolute";
        document.getElementById(itemId).style.width = "100%";
        document.getElementById(itemId).style.height = "100%";
        document.getElementById(itemId).style.top =  "50%";
        document.getElementById(itemId).style.left = "50%";
        document.getElementById(itemId).style.transform = "translate(-50%,-50%)";
        document.getElementById(itemId).style.zIndex = "99";
        for(var j = 0; 0 < details.length; j++)
        {
            document.getElementById('card1DescrptionId' + (j + 1)).innerHTML = details[j];
        }
    }
    else if(document.getElementById(itemId).style.position == "absolute")
    {
        document.getElementById(itemId).style.position = "";
        document.getElementById(itemId).style.width = "80%";
        document.getElementById(itemId).style.height = "";
        document.getElementById(itemId).style.top =  "";
        document.getElementById(itemId).style.left = "";
        document.getElementById(itemId).style.transform = "";
        (itemId).style.zIndex = "0";
   
        console.log("From slider script: " + details[1]);
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
        
    }
    console.log("From slider script: " + details[1]);
    if(details[0] != document.getElementById('card1DescrptionId').innerHTML)
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
    }
    
     

     //position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);
}