export function md5(s){s=toUtf8(s==null?'':String(s));return hex(md51(s))}function toUtf8(s){let r=[];for(let i=0;i<s.length;i++){let c=s.charCodeAt(i);if(c<0x80)r.push(c);else if(c<0x800)r.push(0xc0|(c>>6),0x80|(c&0x3f));else if(0xd800<=c&&c<=0xdbff){i++;let c2=s.charCodeAt(i);let cp=((c-0xd800)<<10)+(c2-0xdc00)+0x10000;r.push(0xf0|(cp>>18),0x80|((cp>>12)&0x3f),0x80|((cp>>6)&0x3f),0x80|(cp&0x3f))}else r.push(0xe0|(c>>12),0x80|((c>>6)&0x3f),0x80|(c&0x3f))}return r}function md51(m){let n=m.length,s=[1732584193,-271733879,-1732584194,271733878],i;for(i=64;i<=n;i+=64)md5cycle(s,md5blk(m.slice(i-64,i)));m=m.slice(i-64);let t=new Array(16).fill(0);for(let j=0;j<m.length;j++)t[j>>2]|=m[j]<<((j%4)*8);t[m.length>>2]|=0x80<<((m.length%4)*8);if(m.length>55){md5cycle(s,t);t.fill(0)}t[14]=n*8;md5cycle(s,t);return s}function md5blk(a){let b=[];for(let i=0;i<64;i+=4)b[i>>2]=a[i]|(a[i+1]<<8)|(a[i+2]<<16)|(a[i+3]<<24);return b}function r32(a,b){return (a<<b)|(a>>>(32-b))}function cmn(q,a,b,x,s,t){return (r32((a+q+x+t)|0,s)+b)|0}function ff(a,b,c,d,x,s,t){return cmn((b&c)|(~b&d),a,b,x,s,t)}function gg(a,b,c,d,x,s,t){return cmn((b&d)|(c&~d),a,b,x,s,t)}function hh(a,b,c,d,x,s,t){return cmn(b^c^d,a,b,x,s,t)}function ii(a,b,c,d,x,s,t){return cmn(c^(b|~d),a,b,x,s,t)}function md5cycle(s,x){let[a,b,c,d]=s;a=ff(a,b,c,d,x[0],7,-680876936);d=ff(d,a,b,c,x[1],12,-389564586);c=ff(c,d,a,b,x[2],17,606105819);b=ff(b,c,d,a,x[3],22,-1044525330);a=ff(a,b,c,d,x[4],7,-176418897);d=ff(d,a,b,c,x[5],12,1200080426);c=ff(c,d,a,b,x[6],17,-1473231341);b=ff(b,c,d,a,x[7],22,-45705983);a=ff(a,b,c,d,x[8],7,1770035416);d=ff(d,a,b,c,x[9],12,-1958414417);c=ff(c,d,a,b,x[10],17,-42063);b=ff(b,c,d,a,x[11],22,-1990404162);a=ff(a,b,c,d,x[12],7,1804603682);d=ff(d,a,b,c,x[13],12,-40341101);c=ff(c,d,a,b,x[14],17,-1502002290);b=ff(b,c,d,a,x[15],22,1236535329);a=gg(a,b,c,d,x[1],5,-165796510);d=gg(d,a,b,c,x[6],9,-1069501632);c=gg(c,d,a,b,x[11],14,643717713);b=gg(b,c,d,a,x[0],20,-373897302);a=gg(a,b,c,d,x[5],5,-701558691);d=gg(d,a,b,c,x[10],9,38016083);c=gg(c,d,a,b,x[15],14,-660478335);b=gg(b,c,d,a,x[4],20,-405537848);a=gg(a,b,c,d,x[9],5,568446438);d=gg(d,a,b,c,x[14],9,-1019803690);c=gg(c,d,a,b,x[3],14,-187363961);b=gg(b,c,d,a,x[8],20,1163531501);a=gg(a,b,c,d,x[13],5,-1444681467);d=gg(d,a,b,c,x[2],9,-51403784);c=gg(c,d,a,b,x[7],14,1735328473);b=gg(b,c,d,a,x[12],20,-1926607734);a=hh(a,b,c,d,x[5],4,-378558);d=hh(d,a,b,c,x[8],11,-2022574463);c=hh(c,d,a,b,x[11],16,1839030562);b=hh(b,c,d,a,x[14],23,-35309556);a=hh(a,b,c,d,x[1],4,-1530992060);d=hh(d,a,b,c,x[4],11,1272893353);c=hh(c,d,a,b,x[7],16,-155497632);b=hh(b,c,d,a,x[10],23,-1094730640);a=hh(a,b,c,d,x[13],4,681279174);d=hh(d,a,b,c,x[0],11,-358537222);c=hh(c,d,a,b,x[3],16,-722521979);b=hh(b,c,d,a,x[6],23,76029189);a=hh(a,b,c,d,x[9],4,-640364487);d=hh(d,a,b,c,x[12],11,-421815835);c=hh(c,d,a,b,x[15],16,530742520);b=hh(b,c,d,a,x[2],23,-995338651);a=ii(a,b,c,d,x[0],6,-198630844);d=ii(d,a,b,c,x[7],10,1126891415);c=ii(c,d,a,b,x[14],15,-1416354905);b=ii(b,c,d,a,x[5],21,-57434055);a=ii(a,b,c,d,x[12],6,1700485571);d=ii(d,a,b,c,x[3],10,-1894986606);c=ii(c,d,a,b,x[10],15,-1051523);b=ii(b,c,d,a,x[1],21,-2054922799);a=ii(a,b,c,d,x[8],6,1873313359);d=ii(d,a,b,c,x[15],10,-30611744);c=ii(c,d,a,b,x[6],15,-1560198380);b=ii(b,c,d,a,x[13],21,1309151649);a=ii(a,b,c,d,x[4],6,-145523070);d=ii(d,a,b,c,x[11],10,-1120210379);c=ii(c,d,a,b,x[2],15,718787259);b=ii(b,c,d,a,x[9],21,-343485551);s[0]=(s[0]+a)|0;s[1]=(s[1]+b)|0;s[2]=(s[2]+c)|0;s[3]=(s[3]+d)|0}function hex(a){const h="0123456789abcdef";let o="";for(let i=0;i<a.length;i++)for(let j=0;j<4;j++){let b=(a[i]>>(j*8))&0xff;o+=h[b>>4]+h[b&15]}return o}

export function base64_encode(str) {
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

export function base64_decode(base64str) {
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