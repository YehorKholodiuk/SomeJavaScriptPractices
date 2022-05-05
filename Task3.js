Array.prototype.includes = function(el) {
    const elLower = el.toLowerCase();
    for (let i = 0; i < this.length; i++){
        if (this[i].toLowerCase() === elLower)
            return true;
    }
    return false;
}
console.log(['hELlo','HELLO'].includes('HELLO'))
