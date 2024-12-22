//map

const map1 =new Map();

//set
map1.set(34,"istanbul")
map1.set(74,"bartın")
map1.set(6,"ankara")

//get
console.log(map1.get(6))

//size
value =map1.size;

//delete
value =map1.delete(34)
console.log(map1.size)
console.log(value);

//has=>true ,false
console.log(map1.has(6))

//For Of map üzerinde dönebiliriz

for(let [key,value] of map1){//destructing
    console.log(key,value)
}

//let array =[34,istsnbul]
//let[a,b]=array;
//console.log(a,b)

const keys =Array.from(map1.keys())//arraya tanımla ki foreach çalışsın 
keys.forEach((key)=>{
    console.log(key,map1get(key))
})
//keyler farklı şekilde de yazılır(sadece key istersek)

for(let key of map1.keys()){
    console.log(key)
}
//sadece value yazdırmak istersek
for (let value of map1.values()){
    console.log(value)
}
//mapten arraya e çevirmek 
const array =Array.from(map1);
array.forEach((value)=>{
    console.log(value[0].value[1])
    
})

//arrayden map e çevirme
cosnt array2=[
    [34,"istanbul"],
    [74,"bartın"],
    [6,"ankara"]

]
const myMap = new Map(array2);
//cosole.log(myMap)

const myArray =Array.from(myMap);
console.log(myArray)
    


//REFERANS TİPLER E DİKKAT ET

let key =[1,2,3];
map1.set(34,"istanbul")
map1.set(74,"bartın")
map1.set(6,"ankara")
map1.set(key,"Array") //bunu let key = diye tanımlamazsan undisined olarak gelir console a refars tipler ÖNEMLİ!!

console.log(map1.get(key))


    console.log(value)



//SET KULLANIMI

const set = new Set();
//add metodu

set.add(true)
set.add("filiz")
set.add(3.14)
set.add({usarname :"filiz", passwor:"2"});
set.add([1,2,3,4])
//size
console.log(set.size);//kaç tane set olduğunu ekrana yazdırır 5 tane size vardır

//delete 
set.delete("filiz")
console.log(set.size)

//has
console.log(set.has("ALİ")) //SETLERDE ALİ İSMİNDE DEĞİŞKEN VARSA TRUE YOKSA FALSE CONSOLE YAZDIRR


//FOR OF 
for(let value of set){
    console.log(value)
}
const values =Array.from(set);
values.forEach((value)=>{
    console.log(value)
})

//SET DEN ARRAYA ÇEVİRME
const  values =Array.from(set);

//ARRAYDEN SET OLUŞTURMA

let array =[1,"filiz",true,"ali",[1,2,3,4]]
const newSet = ne Set(array);
console.log(newSet)


//template literals
function write (firstName ,lastName){
    console.log("isim :" + firstName +""+"soyisim:"+""+lastName)
    //alt gr +iki kez noktalı virgl tuşu
    console.log(`isim :${firstName},soyisim :${lastName}`)

}
write("filiz","muşuk")
