export function selectionsort(item,cursorPointer){
    console.log('Cursor pointer is '+ cursorPointer)
    //loop through the whole array and find the element with the lowest value
    let lowest = 100;
    let lowest_index = 0;
    let truncated = item.slice(cursorPointer)
    let sorted = item.slice(0,cursorPointer);

    for(let i=0;i<truncated.length;i++){
        if(truncated[i]<=lowest){
            lowest = truncated[i]
            lowest_index = i
        }
    }

    sorted.push(lowest);
    truncated.splice(lowest_index,1)

    console.log(sorted)
    console.log(truncated)
    sorted.push(...truncated)

    item = sorted
    console.log(item)


    return item
}