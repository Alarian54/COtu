
const gretaCountArray = [
  [0, "You're Greata", 0, 'progressFaces/YoureGreata.png'],
  [1, "Don't thin the Bergs", 25, 'progressFaces/DontthintheBergs.png'],
  [2, 'ReGretable', 50, 'progressFaces/ReGretable.png'],
  [3, 'How Dare You', 75, 'progressFaces/HowDareYou.png'],
  
 
];

function percentage(maxCount, count) {
  if (maxCount <= count) {
    return 100;
  }
  var percentage = Math.floor(100 * count / maxCount)
  return percentage
}

function marginMove(percent) {
  var leftMostMargin = -220 // '-220px'
  var rightMostMargin = -40 //'-40px'

  var marginPosition = (leftMostMargin - (percent / 100) * (leftMostMargin - rightMostMargin))

  return marginPosition.toString() + "px";

}

function gretaDecider(count) {

  for (var i = gretaCountArray.length - 1; i >= 0; i--) {
    const threshCount = gretaCountArray[i][0]
    const level = gretaCountArray[i][1]

    if (threshCount <= count) {
      return level
    }
  }
}




document.addEventListener('DOMContentLoaded', function () {

  function getAjax(url, success) {
    var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
    // xhr.responseType = 'json';
    xhr.open('GET', url);
    xhr.onreadystatechange = function() {
        if (xhr.readyState>3 && xhr.status==200) success(xhr);
    };
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    xhr.send();
    return xhr;
  }
let array = []
getAjax('https://b2100d7d.ngrok.io/getHistory', function(data){

  let products = JSON.parse(data.responseText).recordsets[0]
  let totalOffsetCost =0;
  products.forEach((productInfo)=>{
    // array.push(productInfo.productName);

    totalOffsetCost+=productInfo.offsetCost;

  })

  document.getElementById("yangCaption").innerHTML="Greta Says: How Dare You"

  document.getElementById('yangPercentage').innerHTML=
  '<h2 style="margin-top:5px;margin-bottom:-20px;width:100%; text-align: center;color:red !important;display:inline-block;"> £'+totalOffsetCost.toFixed(2)+'</h2>'


  document.getElementById('cartHistory').innerHTML=

    '<p style="color: #b2bec3; widht:100%; text-align:center; margin-bottom:-6px !important; padding:0px"> <b>Recent:</b></p>'+
     '<p style="z-index:1000; padding: 5px; color: #dfe6e9  !important;margin-top=0px!important;border-radius: 6px; ;width:100%; text-align: center;display:inline-block;"> '+products[products.length-1].productName+" </br> <b>Carbon cost:</b> " + products[products.length-1] .offsetCost +"</p>";

    '<p style="z-index:1000; border: 0.5px solid #dfe6e9;color: #636e72;margin-top=-40px;border-radius: 6px; box-shadow: 10px 10px 3px -9px rgba(0,0,0,0.75);width:100%; text-align: center; display:inline-block;"> <b>Recent:</b> '+products[products.length-1].productName+" </br></br> <b>Carbon cost:</b> " + products[products.length-1] .offsetCost +"</p>";




    let percent = percentage(10, totalOffsetCost);
    let marginAmount = marginMove(percent);
    document.getElementById('progessBarImg').style.marginLeft = marginAmount;
    document.getElementById('progress-bar-yangness').value = percent.toString();
    // let picGreta = [3];
    // document.getElementById('progessBarImg').src = picGreta;



    var num1 = 0;
    var level =gretaDecider(totalOffsetCost);

        // #7DCBF5 - Light blue from logo
        if (percent >= 75) {
          num1 = 3;
        } else if (percent >= 50) {
          num1 = 2;
        } else if (percent >= 25) {
      
          num1 = 1;
        } else if (percent >= 0) {
          num1 = 0;
        }
        

        document.getElementById('progessBarImg').src = gretaCountArray[num1][3];
        document.getElementById('yangCaption').innerHTML = level;

    // alert(marginAmount);
} );





}, false)
