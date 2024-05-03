(function(){
    const ans=1;
    console.log(ans+1);
    const arrowFunction=(a,b)=>{console.log(`${a}+${b}=${a+b}`)};
    arrowFunction(56,76);
    const arrowFunction1=a=>a*2;
    console.log(arrowFunction1(8));
})();