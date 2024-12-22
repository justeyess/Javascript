// document write ile cıktı verme 

// document.writeln("hello"); //lie satır demek yan yana yazmaz 
// document.write("filizz");

// let a =5;
// let b=10;
// console.log("iki sayının toplamı =" , a+b );

// alert (uyarı) popu ile çıktı verme işlemleri

// let a=10;
// let b =15;

// alert ("iki sayının toplamı :"+ (a+b)) //sayfa mesajı

/* 
better comments
? bu bir biligilnedirme yorumu
!burası çok önemlidir dikkat et
TODO :burası şöyle yapılıyır
*/
//   function selamver(){
//     var selam ="herkese selam"; //function scope
//     if (true){
//         const b =10;
    

//     }
//     console.log(b);
//     console.log(selam);
//   }

// let vize1 =Number(prompt("Vize 1 Notunuzu Giriniz:"));
// let vize2 = Number (prompt("Vize2 Notunuzu Giriniz :"));

// let final = Number(prompt("Final Notunuzu Giriniz:"));

// let ortalama =((vize1*0.3)+(vize2*0.3)+(final*0.4));

// if(ortalama>=60){
//     alert("Dersten geçtiniz tebrikler :)"+ortalama);
//     console.log("Dersten geçtiniz tebrikler");

// }else{
//     alert("Kaldınız,geçmiş olsun:( "+ ortalama);
//     console.log("Kaldınız , geçmiş olsun");
// }
// let secilenYol =prompt ("LÜTFEN GİTMEK İSTEDİĞİNİZ YOLU SEÇİNİZ:");

// if (secilenYol ==1){
//     alert( "Seçilen yol"+secilenYol +". Yoldur");

// }
// else if (secilenYol== 2){
//     alert ("Seçilen yol"+secilenYol+". Yoldur");

// }
// else if(secilenYol==3){
//     alert("Seçilen yol"+secilenYol+". Yoldur");
// }
// else{
//     alert ("Lütfen Geçerli Yol Giriniz!!!");
// }

// let ad =prompt("İsminiz Giriniz: ");
// let tckn =prompt("TCKN Giriniz :");

// function kontrolEt(ad,tckn){
//     if(ad!=""){
//         if(tckn.lenght==11){
//             console.log("İsim ve tckn problemsiz girildi");

//         }else{
//             console.log("Lütfen tc nizi 11 Karakter giriniz");

//         }
        
//     }else{
//         console.log("Lütfen isim alanın boş bırakmayoınız");
//     }

// }

// let ad =prompt("İsminiz Giriniz: ");
// let tckn =prompt("TCKN Giriniz :");

// function kontrolEt2(ad,tckn){
//     if(ad=""){
//         console.log("Lütfen isim alanını boş bırakmayınız!!");
// return;
//         }
//         if(tckn.lenght!==11){
//             console.log("Lütfen tc nizi 11 Karakter giriniz");
// return;
//         }
        
//     }
//         console.log("isim ve tckn problemsiz girildi");
    


//switch case


// let sayi = prompt("Lütfen 1 ile 5 arasında sayı seçiniz");
// switch(sayi)
// {
// case "1":
// console.log("Girilen sayı 1'dir");
// break;

// case "2":
// console.log("girilen sayı 2'dir");
// break;

// case "3":
//     console.log("Girilen sayı 3!tür");
//     break;

//     case"4":
//     console.log("Girilen sayı 4'tür");
//     break;

//     case "5":
//     console.log("Girilen sayı 5'tir ");
//     break;

//     default:
//         console.log("Girielen sayı 1 ile 5 arasında olmalıdır");
//         break;
// }

// let yeniSatir ="\r\n";
// let metin="1-Pazartesi"+yeniSatir
// +"2-Salı"+yeniSatir
// +"3-Çarşamba"+yeniSatir
// +"4-Perşembe"+yeniSatir
// +"5-Cuma"+yeniSatir
// +"6-Cumartesi"+yeniSatir
// +"7-Pazar"+yeniSatir
// +"Lütfen bir seçim yapınız";


// let deger =prompt(metin);
// switch(deger){
//     case "1":
//         console.log("Pazartesi Günü");
//         break;

//         case "2":
//             console.log("Salı Günü");
//             break;

//             case "3":
//                 console.log("Çarşamba Günü");
//                 break;
//                 case "4":
//                     console.log("Perşembe Günü");
//                     break;
//                     case "5":
//                         console.log("Cuma Günü");
//                         break;
//                     case "6":
//                 console.log("Cumartes Günü");
//                 break;

//                     case "7":
//                     console.log("Pazar Günü");
//                     break;
// default:
//     console.log("Lütfen geçerli bit değer giriniz");
// }




//---ATM uYGULAMASI--------

// let yeniSatir ="\r\n";
// let bakiye= 1000;

// let metin ="1- bakiye görüntüleme" +yeniSatir
// +"2-Para çekme"+yeniSatir
// +"3-Para yatırma"+yeniSatir
// +"4-Çıkış"+yeniSatir
// +"Lütfen bir değer seçiniz.";

// //alert(metin)
// let secim =prompt(metin);
// switch(secim){
//     case "1":

//     alert("Bakiyeniz :"+bakiye);
//     break;

//     case "2":
//           let cekilecekTutar =Number(prompt("Çekmek istediğiniz tutarı giriniz:"));
//         if(cekilecekTutar <bakiye){
//             bakiye= bakiye -cekilecekTutar;
//             alert("kalan bakiye :" + bakiye);
//         }
// else{
//     alert ("bakiyenizden fazla para çekemzsiniz" + yeniSatir
//         +"Bakyeniz :"+ bakiye + ""+"çekilecek tutar :" +cekilecekTutar);
        
// }break;
// case "3":
// let yatiralacakTutar =Number(prompt("Ytaıralan tutarı giriniz:"));
// bakiye = bakiye +yatiralacakTutar;
// alert("güncel bakiyeniz:" +bakiye);
// break;
// case"4" :
// alert("sistemden çıkış yapılmıştır..");
// break;
// default:
//     alert ("lütfen 1-4 arasına değer giriniz!");
//     break;
//         }

//  string veri tipinden number veri tipi dönüştürme
// let a =5;
// let b = Number ("10");
// console.log(a+b);

// let c =Number(b);
// console.log (typeof c);
// console.log(a+c);
//!parseInt() bir dize argümanını ayrıştıran ve belirtilen bir taban (matematiksel sayı sistemlerinde taban) değerinde bir tam sayı 
           //!döndüren JavaScript'teki bir fonksiyondur. 

// console.log(window);
// let a =8;
// let b= parseFloat("12,5");
// console.log(b);
// console.log(typeof b );


// //number tipinden string veri tipine dönüştrmek
// let x =String(55);
// let x =(55).toString();
// console.log(typeof x);
// console.log(x);

// let sonuc = String(true);
// console.log(typeof sonuc);

// let a =  Number("B");
// console.log(a);
// //NaN Not a numberr demek
// let rakamlar =String([1,2,3,4,5]);
// console.log(typeof rakamlar);

// let rakamlar = Number([1,2,3,4,5]);
// console.log(rakamlar); //Nan

// //1 den 10 a lkadar yazdıralım
// for(let i=1; i<=10; i++);{
//     console.log(i);
// }

// //1 den 10 a kadar çiftler yazdıralım
// for (let i =0; i<=10; i=i+2){
//     console.log(i);

// }

// //teklerde 
// for (let i =1; i<=10; i=i+2){
//     console.log(i);}


/**
 * filiz
 * muşuk
 * filiz
 * muşuk
 */

// for (let i= 1; i<=10 ;i++){
//     if (i%2==1){
//     console.log("filiz")

//     }else 
//     {
//         console.log("muşuk");
//     }
// }

//50 den 1 e kadar gidelim ve toplamlarını bulalım

// let toplam =0;
// for(let i =50; i>=1;i--){
//     toplam=toplam+i;
//     console.log(i);
// }
// console.log("toplam :" , toplam);
  // 1 den 10 a kadar yazalım
//   let sayac=1;
//   while(sayac<=10){
//     console.log(sayac);
//     sayac++;

// //1 den 10 kadar tek çiftleri yazdırma 
// let sayac =1;
// while(sayac<=10){ 
//     if(sayac%2==0){//sayac%==1 tek olur
//         console.log(sayac);
//     }
//     sayac++;
// }
//   }

//1 den 20 ye kadar olan tek sayıların toplamını bulalım

// let sayac=1;
// let toplam =0;
//     do{
//         if (sayac%2==1)
// {
//     toplam==sayac;
// }   
// sayac++;
//     }while(sayac<=20);
//     console.log("toplam :",toplam);



//ÇARPIM TABLOSU
// for (let i =1 ; i<=10; i++){
//   for(let j=1; j<=10; j++){
//     console.log(i+"x"+j+"="+(i*j));
//   }
//   console.log("------------------------------");
// }

//ASAL SAYI BULMA UYGULAMSI
// let sayi =Number(prompt("lütfen bir sayı giriniz: "));
// let sonuc =true;
// for(let i=2; i<=Math.floor(sayi/2);i++){
//   if (sayi%i==0){
//     //asal değildir
//     sonuc=false;
//     break;
//   }
// }
// if (sonuc){
//   alert(sayi + " asaldır.");
// }else{
//   alert(sayi+" asal değildir!");
// }


//FAKTÖRİYEL HESAPLAMA
// let sayi=Number(prompt("Lütfen sayı giriniz ."));
// let carpim =1;
// for(i=1; i<=sayi; i++){
// carpim=carpim*i
// }
// alert( "sonuç : " +carpim);


//ARMSTRONG SAYILARI 153 - 370 - 407 
// let sayi =prompt("sayı giriniz :");
// let toplam =0;
// for(let i=0; i<sayi.length; i++){
//   let rakam =sayi.charAt(i);
// toplam+=rakam*rakam*rakam;
// }
// if(Number(sayi)==toplam){
//   alert("armstrong sayısıdır :");
  

// }else{
//   alert("armstrong sayısı değildir");
// }

// //PARAMETRESİZ METOD
// function yazdir(){
//   ///kpdlarr yazılacak
// }
// //hazırladığımız metodu...
// function yazdir(){
//   debugger;
//   console.log("filiz");
// }
// debugger;
// yazdir();

// topla();
// function topla(sayi1, sayi2){
//   console.log(5+7);
// }

 //APAARAMETRELİ METOD
//  function yazdir(isim , soyisim){
//   debugger;
//   console.log(isim+""+soyisim);

//  }
//  debugger;
//  yazdir("filiz","muşuk");
//   yazdir("zeynep","tunçer");

// let yas =Number(prompt("Lütfen yaşınızı giriniz :"));

// kontrolEt();
// function kontrolEt (yas){
//   if(yas>18){
//     console.log("Ehliyet alamazsınız");
//   }else{
//     console.log("ehliyeti alamazsınız");

//   }
// }

//RETURN
// let donenDeger=cube (2);
// kareAl(donenDeger);

// function kareAl (sayi){
//   let sonuc =sayi*sayi;
//   console.log(sonuc);


// }
// function cube(sayi){
//   let sonuc =sayi*sayi*sayi;
//   return sonuc; //returnden sonra kod çalışmaz erişilmez
// }

//!VOİD: GERİYE DÖNDÜRMEYEN METOD