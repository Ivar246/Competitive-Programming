



function checkPalindrome(str) {
    if (str.length === 0 || str.length === 1) {
        return true;
    }
    else if (str[0] === str[str.length - 1]) {
        return checkPalindrome(str.slice(1, str.length - 1))
    }

    return false;
}

console.log(checkPalindrome("racecar"))  // true
console.log(checkPalindrome("madam"))    // true
console.log(checkPalindrome("programmer"))// false
console.log(checkPalindrome("abbbba"))    // true


/*
time complexity: O(n)
*/ 