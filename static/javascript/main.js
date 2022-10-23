/*
    Email Obfuscation
    Author: Jenny McBride
*/

(function() {

    function findLink(selector) {
        return document.querySelector(selector);
    }

    function assembleMail(src) {
        //
        var tmp ="";
        for (var i = 0; i < src.length; i++) {
            tmp += src[i];
        }
        return tmp;
    }

    function writeMail(lnk, addr, wrtInnr = true) {
        // get the link
        var src = findLink(lnk);

        // Convert the string back to ascii
        var rslt = atob(addr);
        // The moment we've all been waiting for.
        if (wrtInnr) {
            src.innerHTML = rslt;
        }
        src.setAttribute("href", atob("bWFpbHRvOg==") + rslt);
    }

    writeMail("#contactemail", "amVubnlAamhhcnJpc29uLmNv");
})();
