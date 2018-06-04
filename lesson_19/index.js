
'use strict';

let promise = new Promise(function(resolve_1, reject_1) {
 if (!authInfo.isAuth) {
  reject_1(null);
 } else {
  resolve_1(
   setTimeout(function(resolve_2, reject_2) {
       if ({isAuth: true}) {
         resolve_2(setTimeout(() => {
         ( {name: 'Max'} );
       }, 2000));
       }
     }, 2000)
   );
 }
});

promise.then((resolve_1) => {
    console.log(user.name);
 }).catch(() => {

 });