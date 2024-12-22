let kullanici =prompt("Lütfen kıllanıcı adınızı giriniz :");
let sifre=prompt("Lütfen şifrenizi giriniz: ");


 let kalanHak =3;
while(kalanHak>0)
if(kullanici==="admin"|| sifre ==="12345"){
    alert("Giriş Başarılı");

    break;
}else{
    kalanHak--;
    if (kalanHak>0){
        alert("Hatalı giriş! Kalan Hakkınız :"+kalanHak);
        kullanici=prompt("Kullanıcı adınızı tekrar giriniz");
        sifre =prompt("Şifreyi tekrar giriniz ");
    }else{
        alert(" Tüm giriş hakkınız tükendi ...");
        
    }


    
    console.log("Giriş başarısız")

}

