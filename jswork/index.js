// console.log("Hello Ji!")


// const a = 12;
// if(a>10){
//     let a=20;
//     a=40;
//     console.log(" a inside:" +a);
// }
// console.log("a outside:" +b);

// console.log("hello!");

// function fun(a,b){
// console.log("Hiiiiii!")
//     return a+b;
   
// }
//  const result = fun(23,12);
//  console.log(result);

const button=document.getElementById("btn");
console.dir(button);



function selectLanaguage(language){

    console.log("hi selsect lanagsuge");
    
    let data;
    if(language=='c' ){
    function cCompiler()
{
    return "C compiler";
}

data=cCompiler;
}
if(language=="java"){

function javaCompiler(){
return "java compiler";
}
data=javaCompiler
}
return data;

}
// function selectLanaguage(clbk){

// return "Hi you have selsected: "+clbk();

// }
//console.log(selectLanaguage(cCompiler));

 console.log(selectLanaguage("java"));