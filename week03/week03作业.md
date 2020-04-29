### 1. convertStringToNumber

```javascript
function convertStringToNumber(string, x) {
    var chars = string.split('')
    var number = 0
    var i = 0
    while(i < chars.length && chars[i] != '.') {
        number = number * x
        number += chars[i].codePointAt(0) - '0'.codePointAt(0)
        i++
    }
    if(chars[i] === '.') {
        i++
    }
    while(i < chars.length) {
        number = number / x
        number += chars[i].codePointAt(0) - '0'.codePointAt(0)
        i++
    }
    return number
}
```

### 2. convertNumberToString

```javascript
function convertNumberToString(number, x) {
    var integer = Math.floor(number)
    var fraction = number - integer
    var string = ''
    while(integer > 0) {
        string = integer % x + string
        integer = Math.floor(integer / x)
    }

    if(fraction) {
        string += '.'
    }

    while(fraction) {
        string += Math.floor(fraction * x)
        fraction = fraction * x - Math.floor(fraction * x)
    }

    return string
}
```

