const paymentSuccess = true;
const mark = 90;

function enroll(callback){
    console.log('enroll is progress');
    setTimeout(function(){
        if(paymentSuccess){
            callback();
        }else{
            console.log('unsuccess payment');
        }
    },2000);
}
function progress(callback){
    console.log('course on progress');
    setTimeout(() => {
        if(mark >= 80){
            callback();
        }else{
            console.log('you could not get enough mark for certificate');
        }
    }, 3000);
}
function getCertificate(){
    console.log('preparing your certificate');
    setTimeout(function(){
        console.log('congratulation your suceess');
    },4000)
}

/* 

enroll(progress);
progress(getCertificate) 


enroll is progress
course on progress

course on progress
preparing your certificate
Uncaught TypeError: callback is not a function

congratulation your suceess

*/

enroll(function(){
    progress(getCertificate);
}) 
/* 
enroll is progress
course on progress
preparing your certificate
congratulation your suceess
*/








