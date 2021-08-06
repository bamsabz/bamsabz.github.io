// var imageAdd = 
// [
//     "https://renew.org.au/wp-content/uploads/2018/12/SHD2018-feature.jpg",
//     "https://th.bing.com/th?id=OIF.Ttd%2ftYwJcTDY4xcKNvgQpw&pid=ImgDet&rs=1"
// ]

// var array1 = 
// [
//     "https://renew.org.au/wp-content/uploads/2018/12/SHD2018-feature.jpg",
//     "https://th.bing.com/th?id=OIF.Ttd%2ftYwJcTDY4xcKNvgQpw&pid=ImgDet&rs=1"
// ]

// var array2 = 
// [
//     "https://renew.org.au/wp-content/uploads/2018/12/SHD2018-feature.jpg",
//     "https://th.bing.com/th?id=OIF.Ttd%2ftYwJcTDY4xcKNvgQpw&pid=ImgDet&rs=1"
// ]


// var slideIndex = 0
// var helper = 1;

// function sliderButtonClick(bI, parentId, imageAdd)
// {
    
//     console.log(parentId)
//     if(helper == 1)
//     {
//         document.getElementById(parentId).style.animationName = "a"
//         helper = 2
//     }
//     else if(helper == 2)
//     {
//         document.getElementById(parentId).style.animationName = "b"
//         helper = 1
//     }
//     if(bI == "next")
//     {
//         if( (slideIndex + 1) < imageAdd.length)
//         {
//             document.getElementById(parentId).src = imageAdd[slideIndex + 1]
//             slideIndex = slideIndex + 1
//             console.log(slideIndex)
//         }
//         else if( (slideIndex + 1) == imageAdd.length)
//         {
//             document.getElementById(parentId).src = imageAdd[0]
//             slideIndex = 0
//             console.log(slideIndex)
//         }
        
//     }
//     else if(bI == "prev")
//     {
//         if( (slideIndex + 1) <= imageAdd.length && slideIndex != 0)
//         {
//             document.getElementById(parentId).src = imageAdd[slideIndex - 1]
//             slideIndex = slideIndex - 1
//             console.log(slideIndex)
//         }
//         else if(slideIndex == 0)
//         {
//             document.getElementById(parentId).src = imageAdd[imageAdd.length-1]
//             slideIndex = imageAdd.length-1
//             console.log(slideIndex)
//         }
//     }
// }

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n, a) {
  showDivs(slideIndex += n, a);
}

function showDivs(n, a) {

  

  var i;
  var x = document.getElementsByClassName(a);
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
  x[slideIndex-1].style.margin = "10px 15% 10px 15%"
}

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

