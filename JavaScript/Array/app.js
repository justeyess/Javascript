let array =[1,2,3,4];
let toplam =0;


for(i=0; i<array.length; i++){
    toplam+=array[i];
}

let ortalama = toplam/array.length;
console.log("Toplam :"+toplam);
console.log("Ortalama :"+ortalama);