//sole purpose is sorting arrays here
export function bubblesort(item,cursorPointer){
    console.log('Cursor pointer is '+ cursorPointer)

        let temp = item[cursorPointer]
        if(item[cursorPointer]>item[cursorPointer+1]){
            item[cursorPointer]=item[cursorPointer+1]
            item[cursorPointer+1]=temp
        }
        
    return item
}