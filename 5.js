function penghitung(kata, cari){
	var i;	
  	var counter=0;
 	for(i = 0; i<kata.length; i++){
    	if(kata.charAt(i) == cari){
         	counter++;
        }
    
    }
	return counter;
}
//panggil
penghitung("bananana", "n");
