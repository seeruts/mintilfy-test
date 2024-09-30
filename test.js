function showHelloWorldPopup() {
  alert("Hello, World!");
}


test=false
let paramString = urlString.split('?')[1];
let queryString = new URLSearchParams(paramString);
for (let pair of queryString.entries()) {
   console.log("Key is: " + pair[0]);
   console.log("Value is: " + pair[1]);
  if (pair[0] = 'userinfo') {
    test=true
  }
}

if (!test) {
  document.body.style.display="none";
}
