
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

