function indexOfMinAndMax (arr){
    var max = Number.MIN_SAFE_INTEGER;
    var min = Number.MAX_SAFE_INTEGER
    var minIndex;
    var maxIndex;
    for(var i = 0 ; i < arr.length ; i++)
    {
        if(arr[i] > max )
        {
            max = arr[i]
            maxIndex = i
        }
        if(arr[i] < min)
        {
            min = arr[i]
            minIndex = i
        }
    }
    console.log(`Min index is: ${minIndex} and Max index is: ${maxIndex}`);
    
}
indexOfMinAndMax([4,6,-5,9,9,6,555,445])