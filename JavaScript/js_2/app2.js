/* 
isPerfectNumber(6);
function isPerfectNumber(number){

let toplam =0;
for (let i=2; i<=number/2 ; i++){//6 2ye bölünüyor mu =3
    if(number%i==0){
    toplam+=i; //4+1=5
    
    }
}
toplam+=1+number;//5+1=6+1=7
//sayı5+7=12 oldu burda
if(toplam==number*2){ //12=12
    console.log("mükemmel sayıdır");

}else {
    console.log("mükemmel sayı değildir");
}
}

 */

//10luk sayıyı 2li sisteme çevirme
/* convertDecimalToBinary(6);
function convertDecimalToBinary(number){//6
    let binary="";
    while(true){
        binary+=(number%2).toString()//6%2=3
        number =Math.floor(number/2);
        if(number==1){ //number==1 eşit olacak şu an üç tekrar dönecek bir olana kadar kalan 6 yı bölenleri bölecek
            binary+=1;//01 sondaki kalan (1de ekle) yannii 011
            break;

        }
    }
    let result= reverse(binary); //tersine çevirme
    console.log("sonuç= "+result);
}
function reverse (binary ){//011
    let reverseBinary="";
    for(let i =binary.lenght-1; i>=0;i--){
        reverseBinary+=binary.charAt(i);//110
    }
    return reverseBinary;// result daki kodu yazdır
} */

    //2 li sayıyı 10 luk sayıya çevirme
  /*   let binary ="1011";
    function convertDecimalToDecimal(binary){
        let toplam =0;
        let ust=0;

        for(let i=binary.lenght-1 ; i>=0; i--){
            toplam+= Number(binary.charAt(i))*Math.pow(2,ust);
            ust++;
        }
        console.log("Sonuç : "+ toplam);

    }
    convertDecimalToDecimal(binary); */

   /*  let dizi1=["enes","filiz"]; //
    let dizi=new Array("enes","filiz"); //nesne tabanlı bu 

    //FOREACH DÖNGÜSÜ 
    let name=["filiz","zeynep","serdar","hilal","ahmet","nilüfer"];
    
    isimler.forEach(function(name) {
        console.log(name);
    });

    //for dögüsü ile yazımı

    // for(let i=0; i<name.lenght ;i++)
    //     console.log(name[i]);


    //While Döngü

    let sayac =0;
    while(sayac<name.lenght){
        console.log(name[sayac]);
        sayac++;
    } */


        // DİZİ METOTLARI
  /*push : dizinin sonuna elaman ekle ,ayrıca dizinin uzunluğunu döner
   unshift : dizinin başına elaman ekler , eleman sayıısını geriye döner
   
   po : dizinin sonunsan eleman elamn sile, elelamn sayısını döner 
   shift  : dizinin başından eleman siler . elemaa sayısını döner 
   
   splice(index , incdex) : eleman eklemek silmek için kullanılır 
   
   toString : diziyi stringe çevirebilirisiniz 
   join . diziyi stringe cevir .Farkı ise araya elaman ekleemek
   
   concat : dizileri birleştirmek içi kullanılır 
   slice (dilimlemek) Ç diziyi istenilen yerden bölüp yeni br dizi oluşsturur
   lenght : dizinin uzunluounu verir 
   reversee  :  dizinin elemlarını terse çevirir
   split (bölmek) : belirili ifadeyi göre bölüp diziye çevirmek 
   indexOf : elemanın index numarsaını verir 
   includes : verilen elemanı içeriyor mu ona bakar 
   */      


/* let car =["car1 ","car2","car3","car4"];

let cartwo=["car5","car6"]

//PUSH METOD
console.log(car.length);
car.push("car2");
console.log(car);

 //UNSHİFT METOT

 car.unshift("car3");
 console.log(car);

 //POP METOT
 let deleteElement=car.pop();
 console.log(car);
 console.log(deleteElement);

 //SHİFT METOT
 let deleteElement =car.shift();
 console.log(car);
  console.log(deleteElement);

  //SPLİCE METOT 
  console.log(car)
  car.splice(3,0,"car2");
  console.log(car)

  car.splice(1,2);
  console.log(car);

  car.splice(2,2,"car2");
  console.log(car);

  //TOSTRİNG METOT
  console.log(typeof car);
let stringCar=car.toString();
console.log(typeof stringCar);
console.log(stringCar);


  //JOİN METOT 

  let stringCar= stringCar.join("?");
  console.log(stringCar);

  //CONCAT METOT
  let unitedArray = car.concat(cartwo);
  console.log(unitedArray);

  //SPLİCE METOT 
  console.log(car);
  let ayriDizi =car.slice(2);
  console.log(ayriDizi);

  //REVERSE METOT
  console.log(car);
  car.reverse();
  console.log(car);

  //SPLİT METOT 
   let name ="Filiz , Zeynep";
   let nameArray =name.split(",");
   console.log(typeof nameArray);

   //INDEXOF METOT
   let index =car.indexOf("car");
   if (index ==0){
    console.log("vardır");
   }else {
    console.log("yoktur");
   }


   //INCLUDES METOT

   let sonuc =car.includes("car123");
   if(sonuc){
    console.log("vardır")
        
    }else{

        console.log("yoktur");

    } */



//STRİNG METOTLARI 
/* 
charAt()
concat()
indexOf()
lastindexof()
toUpperCse()
toLowerCase()
trim()
slice()
substring()
replace()
split()
valueOf()
startsWith()
endsWith()



 */
let kurs ="Modern Web Geliştime Kursu";
let tarih = "2024";

/* 
CHAR METOT 
let karakter= karakter.charAt(1);
console.log(sonuc);


CONCCAT METOT
let sonuc = kurs.concat("",tarih ,"");
console.log();

İNDEXOF METOT 
let index = kurs.indexOf("K");
console.log(index);

let indes =kurs.lastIndexOf("w");
console.log(index);


TOUPPERCASE METOT
let sonuc = kurs.ToUpperCase();
console.log(kurs);
console.log(sonuc);

TULOWERCASE
let sonuc= kurs.toLowerCase();
console.log(sonuc);

SLİCE METOT 
let.console.log(kurs);
let.console(kurs.slice(22,28));

TRİM METOT
console.log(kurs.trim());

SUBSTRİNG METOT
console.log(kurs);
console.log(kurs.substring(0,6));

REPLACE METOT 
console.log(kurs);
console.log(kurs.replace("Modern","Güncel"));

SPLİT METOT
console.log(kurs);
let dizi =kurs.split(",");
console.log(dizi);

VALUEOF METOT
console.log(kursa.valueof());


STARTSWİTH METOT 
console.log(kurs);
console.log(kurs.startWith("M"));
if(kurs.startsWith("M")){
console.log ("M harfi ile başlamaktadır");
}

ENDSWİTH METOT
console.log(kurs);
console.log(kurs.endWith("Kursu")); //true false değer atar en sondaki ifade için
*/        



//MATH METOTLARI 
/* 
floor
ceil
round

max
min

random
abs : mutlak değer alamak için kullanılır 
sqrt : karakök almak için kullanılır 
pow : üssünü almak için kullanılır 

---> PI sayısı 


console.log(windiw);
let a 3.50;
let b = -12;

console.log(Math.floor(a))
console.log(Math.ceil(a))
console.log(Math.round(a))

console.log(math.max(1,2,3,4));
console.log(math.min(1,2,3,4));
console.log(math.abs(b));

console.log(math.sqrt(169))
console.log(math.pow(2,5))

console.log(math.PI)

let randomDeger =Math.random()
let sonuc= randomDeger*1000;
let sonucYubarla = math.floor(sonuc);


console.log(randomDeger);
console.log(sonuc);
console.log(sonucYuvarla);


//bir değişik yazımı :
console.log(math.floor(math.random()*100))
*/

 //DATE METOTLARI

 /* 
 let tarih = new Date (2000 ,08,06,00,50);
 console.log(typeof tarih )

 let tarih = new Date();
 console.log(tarih.tostring());
 console.log(typeof tarih.tostring())
console.log(tarih);

console.log(tarih.getFullYear());
console.log(tarih.getDate());
console.log(tarih.getDay());
console.log(tarih.getHours());
console.log(tarih.getMillisesecond());
console.log(tarih.getMinutes());
console.log(tarih.getMonth(+1));
console.log(tarih.getSecand());
console.log(tarih.toLocelDateString());
console.log(tarih.toLocalTimeString());
console.log(tarih.toLocalString());

SET METOTLARI

console.log(tarih);
tarih.setHours(15);
tarih.setDate(24);
tarih.setMoth(11);
tarih.SetMinutes(25);

tarih.setHours(tarih.grtHours()+2);
console.log(tarih);

 */
