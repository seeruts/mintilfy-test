function showHelloWorldPopup() {
  alert("Hello, World!");
}



let paramString = urlString.split('?')[1];
let queryString = new URLSearchParams(paramString);
for (let pair of queryString.entries()) {
   console.log("Key is: " + pair[0]);
   console.log("Value is: " + pair[1]);
  if (pair[0] = 'userinfo') {
    test=true
  }
}

if (test) {
type UserInfo = {
  expiresAt?: number;
  groups?: 'admin';
  content?: Record<string, any>;
  apiPlaygroundInputs?: {
    header?: Record<string, any>;
    query?: Record<string, any>;
    cookie?: Record<string, any>;
    server?: Record<string, string>;
  }
}
}

if (test) {
  window.onload = showHelloWorldPopup;
}
