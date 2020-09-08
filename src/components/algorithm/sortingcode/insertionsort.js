export function insertionsort(item,cursorPointer){
    console.log("Inside the insertion sort function.")

    let sorted = item.slice(0,cursorPointer)
    let truncated = item.slice(cursorPointer)

    console.log(sorted)
    console.log(truncated)

    if(sorted.length===0){
        sorted.push(truncated[0])
        truncated.splice(0,1)
        console.log(sorted)
        console.log(truncated)

    }else{
        let splitted = truncated[0]
        for(let i=0;i<sorted.length;i++){
            if(splitted>=sorted[i]&&splitted<sorted[i+1]){
                let border = i + 1
                console.log('insert the number here '+border)
                let buffer = sorted.slice(border)
                console.log('sliced sorted array from the insertion point: ')
                console.log(buffer)

                sorted.splice(border)
                console.log('made space for insertion: ')
                console.log(sorted)

                sorted[i+1]=splitted
                console.log('sorted array after the insertion: ')
                console.log(sorted)
                sorted.push(...buffer)
                break
                
            }else if(splitted<sorted[0]){
                sorted.unshift(splitted)
                break
            }else if(splitted>=sorted[i]&&sorted[i+1]===undefined){
                sorted.push(splitted)
                break
            }
        }
        truncated.splice(0,1)
        // console.log(sorted)
        // console.log(truncated)
    }
    
    sorted.push(...truncated)
    item = sorted
    console.log(item)
    return item
}