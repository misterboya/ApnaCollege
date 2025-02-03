var Browser;
(function (Browser) {
    Browser[Browser["Chrome"] = 0] = "Chrome";
    Browser[Browser["Firefox"] = 1] = "Firefox";
    Browser[Browser["Safari"] = 2] = "Safari";
    Browser[Browser["Edge"] = 3] = "Edge";
})(Browser || (Browser = {}));
console.log(Browser.Edge);
