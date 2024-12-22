let urun1={
    isim :"ACER Swift",
    kategori : "Teknoloji",
    fiyat :"6.200"

}
let urun2 ={
    isim :"ACER Nitro Swift",
    kategori : "Teknoloji",
    fiyat :"15.00",
}
let urun3= {
    isim :"ACER Gaming",
    kategori : "Teknoloji",
    fiyat :"16.200"

}

let urun4= {
    isim :"LENOVA ",
    kategori : "Teknoloji",
    fiyat :"2.200"

}

let urun5= {
    isim :"LENOVA Idepad",
    kategori : "Teknoloji",
    fiyat :"5.200"

}
let urunler =[urun1,urun2,urun3,urun4,urun5];
let filtreliUrunler =[];
let kullaniciUrunIsmi =prompt("bir ürün ismi giriniz ");

filtreliUrunleriDoldur[urunler];
filtreliUrunleriYazdir[filtreliUrunler];

function filtreliUrunleriDoldur(urunler){
    urunler.forEach(function(urun){ //urunleri yakala
        if (urun.isim.toUpperCase().includes(kullaniciUrunIsmi.toUpperCase(),0)){}
        filtreliUrunler.push(urun); //filtreliurunler içini dolduruyor
    
});
}
function filtreliUrunleriYazdir (urunler){
    urunler.forEach(function(urun){
console.log("--------------------------------");
console.log("|"+urun.isim +"|"+urun.fiyat+"|"+urun.kategori);
console.log("--------------------------------");
    });
}




