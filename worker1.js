// import React from "react";

onmessage = function (e) {
  let a =0
  for (let index = 0; index < 5550; index++) {
      a=a+index;
  }
  postMessage(a);
}

// addEventListener('message', (event) => {
//   let a =0
//   for (let index = 0; index < 500; index++) {
//       a=a+index;
//   }
//   postMessage(a);
// });
