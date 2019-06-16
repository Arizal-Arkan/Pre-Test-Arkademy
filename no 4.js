function minMax (array){
    var min = array[0];
    var minIndex = 0;
    var i;
    var y;
   
    for(i = 1; i < array.lenght; i++){
        
    	if(min > array[i]){
        	min = array[i];
            minIndex = i;
        }
    }
    
    var max = array[minIndex];
    
    for(y = minIndex; y<array.lenght; y++){
    	if(max < array[y]){
        	max = array[y];
        }
    var Ascending = array; 
      array.sort(max-min);
    }
  
  	var Descending = array;
  	  array.reverse(array);
    
  
  return [min,max];
}

minMax([32,7,4,65,1]);
