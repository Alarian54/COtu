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
};



function alertCat() {

    let productName = document.getElementById('productTitle').innerText;


    // alert(priceStr);
    // remove first element (pound or dollar sign)
    let cat = document.getElementById('nav-subnav').getAttribute('data-category').trim();
    // alert(cat);


    let priceStr = document.getElementById('priceblock_ourprice') ? document.getElementById('priceblock_ourprice').innerText.trim() :null ;

    if(!priceStr){
        priceStr = document.getElementsByClassName('offer-price') ? document.getElementsByClassName('offer-price')[0].innerText.trim() : null ;
    }
    else if(!priceStr){
        priceStr = document.getElementsByClassName('a-color-price') ? document.getElementsByClassName('a-color-price')[0].innerText.trim() : null ;

    }
    let priceNumber = Number(priceStr.substr(1));
    let costPerMetricTon = 5;

    // alert(cat)
    let offsetAmount = 5;
    if(cat ==="computers"){
        offsetAmount = costPerMetricTon*priceNumber*carbonFootprintPerUSD['ComputersITEquipment'];
    } else if (cat ==="dvd"){
        offsetAmount = costPerMetricTon*priceNumber*carbonFootprintPerUSD['TelevisionRadioPhoneEquipment'];
    }


    document.getElementsByClassName('offer-price')[0].parentElement.innerHTML+= '<div style="text-decoration:none !important;">  --> + £'+ offsetAmount.toFixed(2).toString() + " offset </div>"

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

alertCat();

chrome.runtime.sendMessage({
    url: window.location.href,
    count: window.count
});


chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    htmlreplace(window.yangNameReplace, request.yangNameReplace)
    // window.count = count2
    window.yangNameReplace = request.yangNameReplace

});
