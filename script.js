document.addEventListener("DOMContentLoaded", function() {
    const acceptButton = document.getElementById("accept-cookies");
    const declineButton = document.getElementById("decline-cookies");

    acceptButton.addEventListener("click", function() {
      // Set cookie indicating user accepted cookies
      document.cookie = "cookies_accepted=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
      // Remove the cookie consent box from the DOM
      document.querySelector(".cookie-consent").remove();
    });

    declineButton.addEventListener("click", function() {
      // Set cookie indicating user declined cookies
      document.cookie = "cookies_accepted=false; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
      // Remove the cookie consent box from the DOM
      document.querySelector(".cookie-consent").remove();
    });
  });