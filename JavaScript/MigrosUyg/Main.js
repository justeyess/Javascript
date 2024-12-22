let mesaj = 
`
MİGROS'A HOŞGELDİNİZ
MONEY KARTINIZ VAR MI ?
1-EVET
2-HAYIR


`

const urunler =[
    {
        urunIsmi : "süt", //obje olarak tanımlanıd
        fiyat :15,
    },
    {
        urunIsmi : "kuşbaşı",
        fiyat :225,
    },
    {
        urunIsmi : "bebek bezi",
        fiyat :100,
    }
]

//true -false
let sonuc = confirm(mesaj);
let odenecekTutar;
if(sonuc){
    //money kartı vardır,
    let isim = prompt("adınızı giriniz :");
    let soyisim =prompt("soyisminiz giriniz :");

    const musteri = new Musteri(isim ,soyisim,sonuc,urunler);
    odenecekTutar=musteri.hesapla();

    alert(
        `Müşteri Bilgileri : ${isim}${soyisim}
        Ödenecek Tutar : ${odenecekTutar}

        `
    );

}else {
    const musteri = new Musteri (nul ,nul ,sonuc,urunler);
    odenecekTutar=musteri.hesapla();
    alert (`Ödenecek Tutar : ${odenecekTutar}`);
}
