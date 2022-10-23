/*
    Email Obfuscation
    Author: Jenny McBride
*/

(function() {

    function findLink(selector) {
        return document.querySelector(selector);
    }

    function assembleMail(src) {
        var tmp ="";
        for (var i = 0; i < src.length; i++) {
            tmp += src[i];
        }
        return tmp;
    }

    function writeMail(lnk, addr, wrtInnr = true) {
        var src = findLink(lnk);
        var rslt = atob(addr);
        if (wrtInnr) {
            src.innerHTML = rslt;
        }
        src.setAttribute("href", atob("bWFpbHRvOg==") + rslt);
    }

     writeMail("#contactemail", "amVubnlAanhtLmZ5aQ==");
     writeMail("#introemail", "amVubnlAanhtLmZ5aQ==");
})();
