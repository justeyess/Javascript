let yeniSatir ="\r\n"
let bakiye ="1000"

let metin ="1- Bakiye görüntüleme"+yeniSatir
+"2-Para Çekme"+yeniSatir
+"3-Para Yatırma"+yeniSatir
+"4-Çıkış" +yeniSatir
+"Lütfen Bir Değer Seçiniz"

alert (metin)
let secim =prompt(metin)

switch(secim){
case "1":
    alert("Bakiyeniz :"+bakiye)
    break;

case "2":
   let cekilecekTutar =Number(prompt("Çekmek İstediğiniz Tutar"))
if (bakiye>cekilecekTutar){
   bakiye= bakiye-cekilecekTutar
alert("Kalan Bakiye :"+bakiye)
}
else {
    alert("Bakiyenizden fazla para çekemezsiniz"+yeniSatir+ "Bakiyeniz :" +bakiye+"çekilecek tutar"+cekilecekTutar)

}break;
case "3":
    let yatirilanTutar=Number(prompt("Yatırmak İstediğiniz Tutar"))
    bakiye=bakiye+yatirilanTutar
    alert("Güncel Bakiye :"+bakiye)
    break;

    case "4":
    alert("Sistemden Çıkış Yapılmıştır")
    break;
    default:
        alert("Lütfen 1-4 arasında bir sayı seçiniz!")
break;
    }



    //50 den 1 e kadar sayıların toplamı
    let toplam =0;
    for(i=50; i>=1; i++)
        toplam=toplam+1;
    console.log(i);
    