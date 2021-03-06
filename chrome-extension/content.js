// Change replace button texts
var button1Name = "Yang Gang"
var button2Name = "Yang Army"
var button3Name = "Math Math"
var button4Name = "1000 Bux"

window.yangNameReplace = button1Name
window.count  = 0;

window.counter = 0

let carbonFootprintPerUSD = {
    'Food':{
        'HeavyMeatEater': 0.00135004,
        'MediumMeatEater': 0.0010572,
        'LowMeatEater': 0.00087642,
        'Pescatarian': 0.0007337,
        'Vegetarian': 0.00071572,
        'Vegan': 0.00054234,
    },
'Pharmaceuticals': 0.0005065 ,
'ClothesTextilesShoes': 0.00024791 ,
'PaperProducts': 0.00049538 ,
'ComputersITEquipment': 0.0006511 ,
'TelevisionRadioPhoneEquipment': 0.0003934 ,
'MotorVehiclesWithoutFuel': 0.0007792 ,
'FurnitureAndOtherManufacturedGoods': 0.0005037 ,
'HotelsRestaurantsPubsEtc': 0.0005141 ,
'TelephoneMobileCellPhoneCallCosts': 0.0006236 ,
'BankingAndFinance': 0.0001846 , // Mortgage and loan interest payments)
'Insurance': 0.0003108 ,
'Education':0.0002477,
'RecreationalCulturalSportingActivities': 0.00021518 ,
'Flights':  0.00273411  ,
'Car':  0.0000184294 ,
'Train':  0.0000036  ,
'Taxi':  0.0001001  ,
'zero':0,
};

let productLevel = {
    'digitalMusic':0,
    'phone': 0.06,
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "none";
}



function alertCat() {

    

    let productName = document.getElementById('productTitle').innerText;

    // alert(priceStr);
    // remove first element (pound or dollar sign)
    let cat = document.getElementById('nav-subnav').getAttribute('data-category').trim();
    // alert(cat);

    let priceTags = [['id','priceblock_ourprice'],
                        ['class','offer-price'],
                        ['class','a-color-price']
                    ]

    let priceStr = 0;
    let pricesFound = []
    priceTags.forEach(([attributeType,attributeName]) => {

        if(attributeType == 'id'){

            if(document.getElementById(attributeName)){
                priceStr =  document.getElementById(attributeName).innerText.trim();
                pricesFound.push([attributeType,attributeName])
            }

        }
        else if(attributeType == 'class'){

            if(document.getElementsByClassName(attributeName).length!==0){
                priceStr =  document.getElementsByClassName(attributeName)[0].innerText.trim();
                pricesFound.push([attributeType,attributeName])
            }

        }

    })

    // alert(priceStr);

    // let priceStr = document.getElementById('priceblock_ourprice') ? document.getElementById('priceblock_ourprice').innerText.trim() :null ;

    // if(!priceStr){
    //     priceStr = document.getElementsByClassName('offer-price') ? document.getElementsByClassName('offer-price')[0].innerText.trim() : null ;
    // }
    // else if(!priceStr){
    //     priceStr = document.getElementsByClassName('a-color-price') ? document.getElementsByClassName('a-color-price')[0].innerText.trim() : null ;

    // }
    let priceNumber = Number(priceStr.substr(1));
    let costPerMetricTon = 5;

    // alert(cat)
    let offsetAmount = 5;
    let emissionsCategory = 'ComputersITEquipment'
    // alert(cat);
    switch(cat){
        case("computers"):
            emissionsCategory = 'ComputersITEquipment'
            break;
        case("dvd"):
            emissionsCategory= 'TelevisionRadioPhoneEquipment'
            break;
        case("drugstore"):
            emissionsCategory= 'Pharmaceuticals'
            break;
        case('kitchen'):
            emissionsCategory= 'FurnitureAndOtherManufacturedGoods'
            break;
        case('pantry'):
            emissionsCategory= 'MediumMeatEater'
            break;
        case('baby'):
            emissionsCategory= 'ClothesTextilesShoes'
            break;
        case('beauty'):
            emissionsCategory= 'Pharmaceuticals'
            break;
        case('books'):
            emissionsCategory= 'PaperProducts'
            break;
        case('automotive'):
            emissionsCategory= 'MotorVehiclesWithoutFuel'
            break;
        case('music'):
            emissionsCategory= 'zero'
            break;
        case('clothing'):
            emissionsCategory= 'ClothesTextilesShoes'
            break;
        case('diy'):
            emissionsCategory= 'FurnitureAndOtherManufacturedGoods'
            break;
        case('electronics'):
            emissionsCategory= 'ComputersITEquipment'
            break;
        case('shoes'):
            emissionsCategory= 'ClothesTextilesShoes'
            break;
        case('outdoors'):
            emissionsCategory= 'FurnitureAndOtherManufacturedGoods'
            break;
        case('grocery'):
            emissionsCategory= 'MediumMeatEater'
            break;
        case('handmade'):
            emissionsCategory= 'ClothesTextilesShoes'
            break;
        case('handmade'):
            emissionsCategory= 'ClothesTextilesShoes'
            break;
        case('industrial'):
            emissionsCategory= 'ComputersITEquipment'
            break;
        case('tools'):
            emissionsCategory= 'ComputersITEquipment'
            break;
        case('jewelry'):
            emissionsCategory= 'FurnitureAndOtherManufacturedGoods'
            break;
        case('digital-text'):
            emissionsCategory= 'zero'
            break;
        case('appliances'):
            emissionsCategory= 'FurnitureAndOtherManufacturedGoods'
            break;
        case('lighting'):
            emissionsCategory= 'ComputersITEquipment'
            break;
        case('luggage'):
            emissionsCategory= 'ClothesTextilesShoes'
            break;
        case('luxury-beauty'):
            emissionsCategory= 'Pharmaceuticals'
            break;
        case('musical-instruments'):
            emissionsCategory= 'ComputersITEquipment'
            break;
        case('videogames'):
            emissionsCategory= 'ComputersITEquipment'
            break;
        case('pet-supplies'):
            emissionsCategory= 'MediumMeatEater'
            break;
        case('instant-video'):
            emissionsCategory= 'zero'
            break;
        case('software'):
            emissionsCategory= 'zero'
            break;
        case('sports'):
            emissionsCategory= 'FurnitureAndOtherManufacturedGoods'
            break;
        case('officeproduct'):
            emissionsCategory= 'PaperProducts'
            break;
        case('toys'):
            emissionsCategory= 'FurnitureAndOtherManufacturedGoods'
            break;
        case('video'):
            emissionsCategory= 'TelevisionRadioPhoneEquipment'
            break;
        case('watch'):
            emissionsCategory= 'FurnitureAndOtherManufacturedGoods'
            break;


        default:
            break;



    }

    offsetAmount = costPerMetricTon*priceNumber*carbonFootprintPerUSD[emissionsCategory];
    // alert(offsetAmount);

    if(pricesFound.length!==0){
        pricesFound.forEach((attr) =>{
            let attributeType = attr[0];
            let attributeName = attr[1];


    // Assume that 4 trees are needed to offset one metric tonne of carbon.
    let treesPerMetricTonne = 4
    let trees = (offsetAmount/costPerMetricTon)*treesPerMetricTonne

    let textbox = ""

    if (offsetAmount >= 1) {
      textbox += '💰 £'+ offsetAmount.toFixed(2).toString() + " to offset"
    } else {
      textbox += '💰 ' + (offsetAmount*100).toFixed(0).toString() + "p to offset"
    }

    if (trees > 1){
      textbox += "<br><span style='color:#636e72;'>Equivalent to " + trees.toFixed(0).toString() + "</span> 🌳&nbsp; "
    } else {
      textbox += "<br><span style='color:#636e72;'>Equivalent to " + (trees*1000).toFixed(0).toString() + "</span> 🌱&nbsp; "
    }

    imageHTML = '<img alt src="//i.imgur.com/8LYBkjU.png" height=37px width=37px style="padding:1px">'

    if (attributeType == 'class') {

      document.getElementsByClassName(attributeName)[0].parentElement.innerHTML+= '<br><div style="display:inline-grid; grid-template-columns: auto auto; border:3px; border-style:solid; border-radius:10px; border-color:#35DDB5; background-color:#EAF7F0; padding: 0.3em ;"><div>' + textbox + '</div><div>' + imageHTML + '</div>'

    } else if (attributeType == 'id') {

      document.getElementById(attributeName).parentElement.innerHTML+= '<br><div style="display:inline-grid; grid-template-columns: auto auto; border:3px; border-style:solid; border-radius:10px; border-color:#35DDB5; background-color:#EAF7F0; padding: 0.3em ;"><div>' + textbox + '</div><div>' + imageHTML + '</div>'

    }

  

   
    // remove add to cart button and add ours instead
    if( document.getElementById('addToCart_feature_div').style.display!=="none"){
       
        
        let min=0; 
        let max=100000;  
        let random = (Math.random() * (+max - +min) + +min).toFixed(0); 

        let cotuAddToCart = document.createElement("button");
        cotuAddToCart.innerText = " 🌱 Add to Cart with Cotu";
        cotuAddToCart.style = "border-width: 3px; border-radius: 2px; background-color: #EAF7F0 ; width: 100%; text-align:center; padding: 5px; border-color:#77F2D0; margin-bottom:5px;";
    
        cotuAddToCart.addEventListener("click", () => 
    
    
        $.post("https://d8cf8aff.ngrok.io/insertItem",
        {
            Id:random ,
            productName: productName,
            productCategory: cat,
            offsetCost: offsetAmount.toFixed(2) ,
            productCost:priceNumber,
        },
        function(data, status){
            alert("Data: " + data + "\nStatus: " + status);
        })
        );
       
       
        document.getElementById('addToCart_feature_div').parentNode.insertBefore(cotuAddToCart, document.getElementById('addToCart_feature_div').nextSibling);
        document.getElementById('addToCart_feature_div').style.display ="none";
    }

    })
}



}


function htmlreplace(a,b,element) {
    if(!element)element=document.body;
    let nodes=element.childNodes;
    for(let n=0;n<nodes.length;n++){
    if(nodes[n].type&&nodes[n].type.toLowerCase()=='textarea'){
        let r=new RegExp(a,'gim');
        if(nodes[n].value.match(r)){
            window.count++;
        }
        nodes[n].value=nodes[n].value.replace(r,b);
        }
        else if(nodes[n].nodeValue && nodes[n].nodeValue.length > 0){
        let r=new RegExp(a,'gim');
        if(nodes[n].nodeValue.match(r)){
            window.count++;
        }
        nodes[n].nodeValue=nodes[n].nodeValue.replace(r,b)
        }
        else{
        htmlreplace(a,b,nodes[n])
        }
    }
}
chrome.storage.sync.get('whatButton', function(whatButton) {
    if(whatButton===1){
        window.yangNameReplace= button1Name
    } else if(whatButton===2){
        window.yangNameReplace = button2Name
    } else if(whatButton===3){
        window.yangNameReplace= button3Name
    } else if(whatButton===4){
        window.yangNameReplace= button4Name
    }
  });

try{
  alertCat();
} catch {}

chrome.runtime.sendMessage({
    url: window.location.href,
    count: window.count
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    htmlreplace(window.yangNameReplace, request.yangNameReplace)
    // window.count = count2
    window.yangNameReplace = request.yangNameReplace

});
