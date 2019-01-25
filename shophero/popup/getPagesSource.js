
//price_inside_buybox
//var ourPrice = document.getElementById("priceblock_ourprice").textContent;
var priceInsideBuybox = document.getElementById("price_inside_buybox").textContent;
var productTitle = document.getElementById("productTitle").textContent
console.log(window.location.href)
var urlFull = window.location.href
var urlSplit = urlFull.split('/')
var urlShort =""
if (urlSplit[3] == "dp")
{
 urlShort=urlFull
}
else
{
    urlShort = urlSplit[0]+"//"+urlSplit[2]+"/"+urlSplit[4]+"/"+urlSplit[5];
}

console.log(urlSplit[0]+"//"+urlSplit[2]+"/"+urlSplit[4]+"/"+urlSplit[5])
chrome.runtime.sendMessage({
    action: "getSource",
    source: productTitle.trim()+priceInsideBuybox.trim()+urlShort
});
