/* function yazdir(){
    console.log("merhaba")
}
yazdir()

//AROOW FUNCTİON
const yazdir ()=>{
    console.log("merhaba")
}
yazdir() */

// const yazdir =(firstName,lastName)=>   {
//     console.log ("merhaba",firstName,lastName)
//     let a =5
//     console.log(a)
//     console.log("filiz")
// }
// yazdir("filiz","muşuk")


// const kupAl = x=> x*x*x
// console.log("değer",kupAl(3))


//DESTRUCTİNG KULLANIMI 
/* let langs =["c#","c++","javascript","python"]
let lang1 ,lang2,lang3,lang4

//lang1=langs[0]
//lang2=langs[1]
//lang3=langs[2]
//ang4=langs[3]

[lang1 ,lang2,lang3,lang4]=langs //yukardakie gerek yok bunu yapabilirsin

console.log(lang1,lang2,lang3,lang4)


const hesapla =(a,b)=>{ //10,2
    const toplam =a+b
    const cıkar = a-b
    const carp = a*b
    const bol =a/b

    const dizi =[toplam ,cıkar,carp,bol ]
    return dizi
}
let [a,b,c,d]=hesapla (10,2)//=dizi 
console.log(a,b,c,d) */

/* const person ={
    firstName :"filiz",
    lastName :"muşuk",
    salary :2500,
    age:24
}
    //let isim ,soyisim ,maas ,yas
    //isim =person.firstName
    //soyisim =person.firstName
    //gibi gbi yapmayala uğraşmaaa!!!!

    let {firstName:isim,lastName: soyisim, salary:maas,age:yas}=person
    console.log(isim,soyisim,maas,yas)


    //SPREAD OPERATÖRÜ

    let numbers =[10,20,30,40]
    function add(a,b,c,d){
        console.log(a+b+c+d)
    }

    //eski yöntem
  //  add(numbers[0],numbers[1],numbers[2],numbers[3])
 
  //yeni yöntem
  add(...numbers)

  //...numbers --->numbers[0],numbers[1],numbers[2],numbers[3]

  const diller1=["java","c#"]
 // const diller =["php","pyhton" ,diller1[0],diller1[1]]
  const diller2 =["php", "pyhton", ...diller1]
 console.log(diller2)




 const numbers = [1,2,3,4,5,6,7,8,9]
 let [a,b, ...kalanSayilar]= numbers
 console.log(a,b, ...kalanSayilar)



 const array1 =["1","2","3","4"]
 let array2 =[]

 array2 =[...array1]
 console.log(array2) */

 //FOR İN - FOR OF DÖNGÜLERİ 

let names =["filiz","zeynep","seren","nil"];

// names.forEach(function(name){
//     console.log(name)

// })
names.forEach(name=>console.log(name))//kolay yazım ablaaa

//FOR İN DÖNGÜSÜ

//degiskenTanimlama,in,diziİsmi
for(let  name in names){
    console.log(name,name[name])
}

//FOR OF DÖNGÜSÜ
for (let isim of  names){
    console.log (isim ,names.indexOf(isim))//filiz 0 : filizin indeiyle yaz
}