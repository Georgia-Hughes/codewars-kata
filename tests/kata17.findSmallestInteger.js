class SmallestIntegerFinder {
    findSmallestInt(num) {
    let temp;
      for (let i=0; i<num.length; i++){
          if(num[i] <= num[0]){
            num[0]  = num[i];    
            temp = num[i];
          }
        }
      return temp;
    }
}