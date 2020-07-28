function readHash() {
  var hash = window.location.hash.substr(1);

  var result = hash.split('&').reduce(function (result, item) {
      var parts = item.split('=');
      result[parts[0]] = decodeURIComponent(parts[1]);
      return result;
  }, {});

  return result;
}

hashdata = readHash()
console.log(Object.keys(hashdata).length);

mains = document.getElementById('main')
wishes = document.getElementById('wishes')

if(('from' in hashdata)||('w' in hashdata)){
  mains.style.display="none";
  wish=9;
  from = "Someone"
  if('from' in hashdata){
    from = hashdata['from']
  }
  if('w' in hashdata){
    wish = hashdata['w'];
  }
  document.getElementById('from').innerHTML  = from;
  document.getElementById('wish').innerText = Greetings[wish]
}else{
  wishes.style.display="none";
}
