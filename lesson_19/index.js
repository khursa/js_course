'use strict';

let authInfo = {isAuth: true};
let promise = new Promise(function(resolve_1, reject_1) {  
    setTimeout(() => {
        if(!authInfo.isAuth) {
          reject( null );
        } else {
        resolve_1( {name: 'Max'} );
      }
    }, 2000);
});

promise.then(user => {
    setTimeout(() => {
        console.log(user.name);
    }, 2000);
  }).catch(() => {

});