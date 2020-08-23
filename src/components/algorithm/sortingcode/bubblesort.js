//sole purpose is sorting arrays here
export function bubblesort(item,cursorPointer){
    
    console.log('Cursor pointer is '+ cursorPointer)

    let sorted = false
    let len = item.length

    // for(let j=0;j<len;j++){
    //     if(item[j]>item[j+1]){
    //         console.log('checked, NOT SORTED')
    //         sorted = false
    //         break
    //     }else{
    //         sorted = true
    //     }
    // }

    // if(sorted===false){

        /* "You gotta tell me I am losing my mind"
            for (let i=cursorPointer;i<len;i++){
                let temp = item[i]
                console.log(i+'th element')
                if(item[i]>item[i+1]){
                    item[i]=item[i+1]
                    item[i+1]=temp
                    return item
                }
            }
        */

        let temp = item[cursorPointer]
        if(item[cursorPointer]>item[cursorPointer+1]){
            item[cursorPointer]=item[cursorPointer+1]
            item[cursorPointer+1]=temp
        }
        return item
        
    // }
    // else{
    //     console.log('Sorted!!----!----!----!')
    //     return item
    // }
        
}