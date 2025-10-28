export function encode(str) {
    // First, encode the string to UTF-8 using encodeURIComponent
    // Then, convert the URI sequence to a binary string (Latin-1 compatible)
    // Finally, apply btoa()
    return btoa(
        encodeURIComponent(str).replace(
            /%([0-9A-F]{2})/g,
            function toSolidBytes(match, p1) {
                return String.fromCharCode('0x' + p1);
            }
        )
    );
}

export function decode(base64str) {
    // First, decode the Base64 string using atob()
    // Then, convert the binary string back to a URI sequence
    // Finally, decode the URI sequence to a UTF-8 string using decodeURIComponent
    return decodeURIComponent(
        atob(base64str)
            .split('')
            .map(function (c) {
                return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
            })
            .join('')
    );
}