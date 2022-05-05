function includes(arr,el){
    const elLower = el.toLowerCase();
    for (let i = 0; i < arr.length; i++){
    if (arr[i].toLowerCase() === elLower)
        return true;
    }
    return false;
}
console.log(includes(['hELlo','HELLO'],'HELLO'))
