export function sortedCheck(item){
    let len = item.length
    for(let j=0;j<len;j++){
        if(item[j]>item[j+1]){
            console.log('checked, NOT SORTED')
            console.log(j)
            return false
        }
    }
    return true
}
