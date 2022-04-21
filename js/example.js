var list = document.getElementsByTagName('ul')[0];
//tạo 1 thẻ li mới
var newItemLast = document.createElement('li');
//tạo một văn bản mới
var newTextLast = document.createTextNode('cream');
//nối văn bản vừa tạo vào newItemLast bằng appendChild
newItemLast.appendChild(newTextLast);
list.appendChild(newItemLast);

// var newItemFirst = document.createElement('li');
// var newTextFirst = document.createTextNode('kale');
// newItemFirst.appendChild(newItemFirst);
// list.insertBefore(newItemFirst, list.firstChild);

var listItems = document.querySelectorAll('li');

var i ;
for (i = 0 ; i < listItems.length ; i++){
    listItems[i].className='cool';
}
// var heading = document.querySelector('h2');
// var headingText = heading.firstChild.nodeValue;
// var totalItems = listItems.length;
// var newHeading = headingText + '<span>' + totalItems + '</span>';
// heading.innerHTML =newHeading;