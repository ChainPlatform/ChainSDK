export function versionCompare(v1, v2) {
    const a = v1.split('.').map(Number);
    const b = v2.split('.').map(Number);

    const len = Math.max(a.length, b.length);

    for (let i = 0; i < len; i++) {
        const x = a[i] || 0;
        const y = b[i] || 0;
        if (x > y) return 1;
        if (x < y) return -1;
    }
    return 0;
}

/**
 * version_compare(versionString, "0.0.1", ">=")
 * 
 * @param {*} v1 
 * @param {*} v2 
 * @param {*} operator 
 * @returns 
 */
export function version_compare(v1, v2, operator) {
    const cmp = versionCompare(v1, v2);

    switch (operator) {
        case '>': return cmp > 0;
        case '>=': return cmp >= 0;
        case '<': return cmp < 0;
        case '<=': return cmp <= 0;
        case '==': return cmp === 0;
        case '!=': return cmp !== 0;
    }
    return false;
}
