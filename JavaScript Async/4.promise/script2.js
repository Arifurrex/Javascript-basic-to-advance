
//! normal function
function add1(a,b){
  return a + b;
}
console.log(add1(4,6)); //10


//! async
async function add(a,b){
  return a + b;
}
console.log(add(4,6)); // Promise {<fulfilled>: 10}
//jokon amra async dei promise return korche


/* 
promise amader kob somai banate hoi.promise er jonne onek
function abong library ache ja amder promise diye dei 
promise amader banate hobe kob kom
but promise kivabe handle korte hobe ta amader jante hobe
promise theke kivabe data pabo ta jante hobe

*/

//! promise  
async function sum(a,b){
  return a + b;
}
sum(3,6)
 .then(function(s){
    console.log(s); // 9
 })
 .catch(function(err){
     console.log(err);
 })


// ! promise reject hole
async function sum1(a,b){
  // return a + b;
  if(a < 10){
    return Promise.reject('a is smaller than 10')
  } 
  return Promise.resolve(a + b);
}
sum1(3,6)
 .then(function(s){
    console.log(s); // 9
 })
 .catch(function(err){
     console.log(err); // a is smaller than 10
 })



//!  HOW TO UNDERSTAND PROMISE GOES TO IN PENDING 
async function go(){
  return new Promise(function(resolve,rej){
    setTimeout(function(){
      resolve('i will go');
    },3000);
  })
}
console.log(go()); //Promise {<pending>}


//!  HOW TO UNDERSTAND PROMISE GOES TO IN PENDING 
async function went(){
  return new Promise(function(resolve,rej){
    setTimeout(function(){
      resolve('i went');
    },3000);
  })
}
went()
 .then(function(s){console.log(s)}) // i will go
 .catch(function(err){console.log(err);})



 //!  handle by async await 
async function gone(){
  return new Promise(function(resolve,rej){
    setTimeout(function(){
      resolve('i gone');
    },3000);
  })
}

async function init(){
  let pendingg =  await gone();
  console.log(pendingg); // i gone
}
init();



//!directly function call 
async function goes(){
  return new Promise(function(resolve,rej){
    setTimeout(function(){
      resolve('i goes'); 
    },3000);
  })
}

(async function(){
  let pendin =  await goes();
  console.log(pendin); // i goes
})();

//! why need need last function 
async function left(){
  return new Promise(function(resolve,rej){
    setTimeout(function(){
      resolve('i left');
    },3000);
  })
}

  let pendin =  await left();
  console.log(pendin);  
  await is only valid in async functions

  //! try catch 
  async function have(){
    return new Promise(function(resolve,rej){
      setTimeout(function(){
        resolve('i have');
      },3000);
    })
  }

  (async function(){
    try{
      let data = await have();
      console.log(data);
    }catch(err){
       console.log(err); // i have
    }
  })()