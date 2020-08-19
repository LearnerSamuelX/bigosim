//sole purpose is sorting arrays here
export function bubblesort(item){
    
    let sorted = true

    let len = item.length
    for(let j=0;j<len;j++){
        
        if(item[j]>item[j+1]){
            console.log('checked, NOT SORTED')
            sorted = false
            break
        }else{
            sorted = true
        }
        
    }

    if(sorted===false){
        for (let i=0;i<item.length;i++){
            if(item[i]>item[i+1]){
                let cursor = item[i+1]
                item[i+1]=item[i]
                item[i]=cursor
                console.log(item)
                return item
            }
        }
    }else{

        console.log('Sorted!!----!----!----!')
        return item
    }
    
    
}