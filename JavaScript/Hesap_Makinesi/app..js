
function hesapMakinesi(){

let sayi1 =Number(prompt("Lütfen 1.Sayıyı Giriniz :"));
let sayi2 =Number(prompt("Lütfen 2. Sayıyı giriniz :"));

if((isNaN(sayi1) || isNaN(sayi2))){
    alert("Lütfen geçerli sayı giriniz");
    return;
}

let islem =prompt("Lütfen bir işlem seçiniz : + , - , * , % ");
    if(!['+','-','*','%'].includes(islem)){
        alert("Lütfen geçerli işlem türü seçiniz!");
        return;
    }

    let sonuc ;
    switch (islem){
        case'+':
        let toplam =""
        alert(sayi1+sayi2);
    break;
    
    case '-':
    let cikarma =""
    alert(sayi1-sayi2);
    break;

    case'*':
    let carpma =""
    alert(sayi1*sayi2);
    break;

    case'%':
    let bolme =""
    alert(sayi1%sayi2);
    break;


    }





}
hesapMakinesi()
