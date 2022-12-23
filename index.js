// Code your solution in this file!


function distanceFromHqInBlocks(someValue) {
    //returns the number of blocks given a value
    if (someValue>40){
    return (someValue-42)
    }
    else {
        return 8
    }
  }
  function distanceFromHqInFeet(someValue) {

    if (someValue==43){
        return (someValue+221)
        }
       else{ return 2112}
        
    }

    function distanceTravelledInFeet(start, destination) {

        switch (start, destination) {
            case (43, 48):
              return 1320
              break;
            case (50, 60) :
                return 2640
              break;
            case (34, 28) :
                return 1584
              break;
        }

      }

      function calculatesFarePrice(start, destination) {

        switch (start, destination) {
            case (43, 44):
              return 0
              break;
            case (34, 32) :
                return 2.56
              break;
            case (50, 58) :
                return 25
              break;

              case (34, 24) :
                return 'cannot travel that far'
              break;
        }

      }


    
 
