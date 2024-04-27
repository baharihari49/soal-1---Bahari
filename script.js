function cekPalindrome(string) {
    string = string.toLowerCase().replace(/\s/g, '');
    
    var length = string.length;
    
    for (var i = 0; i < Math.floor(length / 2); i++) {
        if (string[i] !== string[length - 1 - i]) {
            return false; 
        }
    }
    return true; 
}

console.log(cekPalindrome("A")); 
console.log(cekPalindrome("ABA")); 
console.log(cekPalindrome("DEV")); 
console.log(cekPalindrome("KODOK"));
console.log(cekPalindrome("RUMAH"));
console.log(cekPalindrome("ADA"));
console.log(cekPalindrome("Ini"));
