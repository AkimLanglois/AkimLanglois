// window.onbeforeunload = function(e) {
// setTimeout(function() {
//   document.getElementById("divParagraphe").className = "out";
// }, 20000);
// };

// window.addEventListener(
//   "beforeunload",
//   function() {
//     document.body.classList.add("fadeout");
//   },
//   false
// );

// $("@faqLink").click(function(e) {
//   e.preventDefault(); //will stop the link href to call the blog page

//   setTimeout(function() {
//     document.getElementById("divParagraphe").className = "out";

//     window.location.href = "faq.html"; //will redirect to your blog page (an ex: blog.html)
//   }, 20000); //will call the function after 2 secs.
// });

// function reply_click() {
//   e.preventDefault(); //will stop the link href to call the blog page
//   window.location.href = "index.html";
//   setTimeout(function() {
//     document.getElementById("divParagraphe").className = "out";

//     window.location.href = "faq.html"; //will redirect to your blog page (an ex: blog.html)
//   }, 20000); //will call the function after 2 secs.
// }

// var el = document.getElementById("faqLink");
// el.onclick = showFoo;

// function showFoo() {
//   e.preventDefault(); //will stop the link href to call the blog page
//   window.location.href = "index.html";
//   setTimeout(function() {
//     document.getElementById("divParagraphe").className = "out";

//     window.location.href = "index.html"; //will redirect to your blog page (an ex: blog.html)
//   }, 20000); //will call the function after 2 secs.
//   return false;
// }

// $("#faqLink").click(function(e) {
//   e.preventDefault();
//   setTimeout(
//     function(url) {
//       window.location = url;
//     },
//     5000,
//     this.href
//   );
// });

// var myEvent = window.attachEvent || window.addEventListener;
// var chkevent = window.attachEvent ? "onbeforeunload" : "beforeunload"; /// make IE7, IE8 compitable

// myEvent(chkevent, function(e) {
//   document.getElementById("divParagraphe").className = "out";
//   setTimeout(function() {
//     document.getElementById("divParagraphe").className = "out";
//   }, 20000);
//   For >=IE7, Chrome, Firefox
//     var confirmationMessage = "Are you sure to leave the page?";
//     (e || window.event).returnValue = confirmationMessage;
//     return confirmationMessage;
//   return undefined;
// });

// myEvent(chkevent, function(e) {
//   document.getElementById("divParagraphe").className = "out";
//   setTimeout(function() {
//     document.getElementById("divParagraphe").className = "out";
//   }, 20000);

//   return undefined;
// });
// var link = document.getElementById("faqlink");

// window.onload = function() {
//   document.getElementById("faqLink").onclick = function() {
//     myFunction();
//   };
// };

// setTimeout(function myFunction() {
//   window.location.href = "index.html";

//   // faqLink.setAttribute("href", "login.html");

//   // setTimeout(faqLink.setAttribute("href", "login.html"), 3000);
// }, 3000);

// document.getElementById("faqLink").addEventListener("click", function(e) {
//   //if user clicked prevent default and trigger after 2 seconds
//   if (e.isTrusted) {
//     e.preventDefault();

//     //after 2 seconds click it and it'll not wait since it's not user triggered
//     setTimeout(function() {
//       e.target.click();
//     }, 2000);
//   }
// });

// $("a.question[href]").click(function(e) {
//   e.preventDefault();
//   if (this.href) {
//     var target = "index.html";
//     setTimeout(function() {
//       window.location = target;
//     }, 20000);
//   }
// });

function delay(URL) {
  setTimeout(function() {
    window.location = URL;
  }, 500);
  document.getElementById("nav").className = "navOut";
  document.getElementById("img").className = "imgOut";
  document.getElementById("divParagraphe").className = "out";
}
