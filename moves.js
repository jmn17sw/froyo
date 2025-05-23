


// const flavors = {
//     vanilla: 'Vanilla',
//     chocolate: 'Chocolate',
//     strawberry: 'Strawberry',
//     coffee: 'Coffee',
//     pistachio: 'Pistachio',
//     cherry: 'Cherry',
//   };

//   // const takeOrder = prompt(`Welcome! Want to place an order?`, `yes`, `no`);
//   // if (takeOrder) {
//   //   console.log(`Please choose from the following ${flavors.name}`)
//   // }
//   // for(option in flavors) {
//   //   console.log[option];
//   // };

//   let text;
// let takeOrder = prompt(`Welcome to Fast Froyo! what'll it be?`)
// switch(takeOrder) {
//   case `vanilla`:
//     text = `everyone loves vanilla! anything else?`;
//     break;
//   case `choclate`:
//     text = `who can say "no" to chocolate? anything else?`;
//     break;
//   case `strawberry`:
//     text = `straawberry froyo forever! anything else?`;
//     break;
//   case `coffee`:
//     text = `feeling jittery yet? anything else?`;
//     break;
//   case `pistachio`:
//     text = `I amore that one too! anything else?`;
//     break;
//   case `cherry`:
//     text = `my all time favorite!! anything else?`;
//     break;    
      
// }

//   for(let i = 0; i < flavors.length; i++) {
//     const takeOrder = flavors[option];
//     finalOrder = takeOrder    
//     const i = takeOrder.split(',');
//   };

//   const flavorsOrder = (arrayOfFlavors) => {
//   let flavorsOrder = {};
//   console.log(arrayOfFLavors);
//   for(let i = 0; i < arrayOfFlavors.length; i++) {
//     if(flavorsOrder[arrayOfFlavors[i]] === (undefined){
//       flavorsOrder[arrayOfFlavors[i]] =1;
//     } else (flavorsOrder[arrayOfFlavors[i]] === flavorsOrder[arrayOfFlavors]){
//       flavorsOrder[flavors] = flavorsOrder[flavors] +1;
//     }
//   }
// return flavorsOrder
//   }
// //  
// //  flavors.sort();
// // const totals =[];
// // for(let i = 0; i < flavors.length; i++) {
// //   let counter = 1;
// //     for(let j = 1; j <= flavors.length; j++) {
// //       if (flavors[i] === flavors[j]) {
// //         counter ++;
// //       }
// //     }
// //   }
// //     takeOrder.flavor = flavors[i];





// let finalOrder = 0 
// for(finalOrder in flavors) { 
//   const takeOrder = flavors[finalOrder]
//   finalOrder = finalOrder + takeOrder;
//   console.log(finalOrder)
// }




// const gamePoints = [100, 50, 10, 75, 90];

// const pointsRemaining = gamePoints.reduce((pointsRemaining, pointsScored) => {

//   return pointsRemaining - pointsScored;
// }, 500);



const cars =  [`ferrari`, `aston martin`, `ferrari`, `bmw`, `mazda`, `bmw`, `bmw`];

//reduce down to one object with the keys being the car and the values being how many

const garage = cars.reduce((totalObjects, currentCar) => {
  //totalObjects: {}, currentCar: `ferrari`

  if(totalObjects[currentCar] === undefined) {
    totalObjects[currentCar] = 1;
  } else{
    totalObjects[currentCar] = totalObjects[currentCar] + 1;
  }

  return totalObjects;
}, {} );

console.log(garage);