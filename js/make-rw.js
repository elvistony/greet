allwish = document.getElementById('allwish')
var i=0
for (var greet of Greetings) {
  allwish.innerHTML+="<option value='"+i+"'>"+greet+"</option>";
}

function makeWish() {
  name=document.getElementById('name').value
  option = allwish.options[allwish.selectedIndex].index;
  if(name.length>0){
    stringURL = SerializeURL({"from":name,"w":option})
    document.getElementById('madelink').style.display='block';
    document.getElementById('sharelink').value="https://elvistony.github.io/greet/#"+stringURL;
  }

}

function SerializeURL(obj){
  var str = [];
  for (var p in obj)
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
  return str.join("&");
}

function copyToClipBoard() {
var copyText = document.getElementById("sharelink");
copyText.select();
copyText.setSelectionRange(0, 99999); /*For mobile devices*/
document.execCommand("copy");
}

function preview() {
url = document.getElementById('sharelink').value;
window.open(url, '_blank');
}
