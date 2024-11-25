export function deleteElementArray (array:Array<any>,index:number): Array<any>{ 
    
    if (index == array.length-1){
        array.pop();
        return array;
    }
    else if (index == 0){
        array.shift();
        return array;
    }
    else{
        const array_1 = array.slice(0,index);
        const array_2 = array.slice(index+1);
        return array_1.concat(array_2);
    }
        
    
}
