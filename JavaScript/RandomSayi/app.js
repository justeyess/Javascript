let randomSayi =Math.floor(Math.random()*100);
let tahmin ;


while(tahmin !== randomSayi){
    tahmin =parseInt(prompt("Lütfen 1 ile 100 arasında sayı seçiniz"));

if(tahmin<randomSayi){
   alert("Daha büyük sayı giriniz :");
   
}else if(tahmin>randomSayi){
    alert("Daha küçük sayı giriniz :");
    
}


}
alert("TEBRİKLER");