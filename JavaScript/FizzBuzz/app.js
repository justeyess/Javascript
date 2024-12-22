

let sayi =prompt("Lütfen sayı giriniz :");

for(let i =1; i<=100; i++){
    if( i%3===0 || i%5==0){
        console.log("FİZZBUZZ")
    }
    
 else if (i%3===0){
     console.log("FİZZ");
     
 }
else if (i%5===0) {
    console.log("BUZZ") 
    break;
}else{
    console.log(i);
}
}

