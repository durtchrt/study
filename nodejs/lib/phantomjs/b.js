var page = require('webpage').create();
page.open('http://m.daum.net', function(status) {
  console.log("Status: " + status);
  if(status === "success") {
    page.render('example.png');
  }
  phantom.exit();
});

