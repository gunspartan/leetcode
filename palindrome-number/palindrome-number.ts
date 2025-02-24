function isPalindrome(x: number): boolean {
    // Base case
    // Negative number cannot be a palindrome
    // X cannot be a pallindrome if x ends in a 0
    if (x < 0 || (x !== 0 && x % 10 === 0)) return false

    // Convert to string
    // const converted = x.toString()

    // return converted === converted.split('').reverse().join('') ? true : false

    // Reverse the number
    let reversed = 0

    while (x > reversed) {
        reversed = reversed * 10 + x % 10
        x = Math.floor(x/10)
    }

    return reversed === x || Math.floor(reversed / 10) === x
};

