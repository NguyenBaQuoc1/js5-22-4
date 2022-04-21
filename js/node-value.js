var itemTwo = document.getElementById('two') ; 
var eltext = itemTwo.firstChild.nodeValue;

eltext = eltext.replace('pine nuts' , 'kale');
itemTwo.firstChild.nodeValue = eltext;