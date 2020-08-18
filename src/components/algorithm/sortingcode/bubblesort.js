//sole purpose is sorting arrays here
export function bubblesort(item){
    console.log(item.length)
    for (let i=0;i<item.length;i++){
        if(item[i]>item[i+1]){
            let cursor = item[i+1]
            item[i+1]=item[i]
            item[i]=cursor
            console.log(item)
            return item
        }else{
            //already been sorted
            return item
        }
        
    }

}