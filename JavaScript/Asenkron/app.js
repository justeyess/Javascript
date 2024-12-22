/* 
1- js senkron çalışan bir yapıdır 

--asenkron bazı durumlarda çalışır--
1-TİMİNİG
2-EVENT(OLAY)
3-HTTP İSTEKLERİNDE**

---CALLBACK--PROMİSE--ASYNC--AWAIT---
---> ASENKRON yaplarını senkrona çevirip yönetiyoruz...

SENKRON 
selamla()
console.log("1")
console.log("2")

function selamla(){
console.log("selam")
}
*/

//asenkron 

/* console.log("filiz");

setTimeout(() => {
    console.log("1000ms süre doldu ve çalıştı")
}, 1000);

setTimeout(() => {
    console.log("500ms süre doldu ve çalıştı")
}, 500);

setTimeout(() => {
    console.log("750ms süre doldu ve çalıştı")
}, 750);

console.log("muşuk");
 */
// çalışma süreleine göre çalışır sıraaya (senkron) olarak çalışmaz



//ASENKRON PROBLEMİ 
//HTTP İSTEKLERİ 
/* 
const users =[
    {
        userId:5,
        post :"filiz Post 1"
    },
    {
        userId:5,
        post :"filiz Post 2"
    },
    {
        userId:5,
        post :"filiz Post 3"
    },
    {
        userId:6,
        post :"kerem Post 1"
    },
    {
        userId:7,
        post :"ali  Post 1"
    }
    
]
//user id 
//post by user id

//senkrona çevireceğiz
//calback ,promise ,async.await
 function getUserId(callback){
    setTimeout(() => {
          //servise gittik ve cevabı aldık 
    //return 5;
    let userId =5;
    //return userId;
    callback(userId);
    }, 1000);
}

function getPostByUserId(userId){
    //console.log(userId)
    //gerçek bir rest api ye istek atacaksınız
    setTimeout(() => {
        users.forEach((user)=>{
            if (user.userId===userId){
                console.log(user.post);
            }
        })
        
    }, 500);
}

getUserId(getPostByUserId);
 */
// let userId = getUserId();
// getPostUserId(userId);

//CALLBACK NEDİR ?

// timing - event - http istekleri

//callback - promise - async await

//Callback : bir fonksiyonu bir fonksiyona parametre geçerek 
//asenkron yapıyı senkrona çeviririz.

/* function getName(callback) {
    setTimeout(() => {
        //servisten ismimi getirdi.
        let name = "Enes"; //web servisten geldi.
        callback(name);
    }, 1000);
}

function getSurname(name, callback) {
    setTimeout(() => {
        let surname = "Bayram"; // name 'e göre soyismi buldu.
        callback(surname)
    }, 500);
}

const a = () => {

}

function getAge(name, surname, callback) {
    setTimeout(() => {
        let age = 23; //ismi Enes ve Soyisimi Bayram olanı servisten yaşını getirdi.
        callback(age);
    }, 300);
}
// getName(getSurname)
getName((name) => {
    getSurname(name, (surname) => {
        getAge(name, surname, (age) => {
            console.log(name, surname, age);
        })
    })
}) */



// getName();
// getSurname();

//AJAX NEDİR 
/* function prepareURL(url ,id){
    if (id ===null){
        return url ;

    }
    return`${url}?postId=${id}`
}
function getComments(url ,id){
    let newURL = prepareURL (url,id);
    const xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange",()=>{
        if(xhr.readyState===4 && xhr.status===200){
        console.log(JSON.parse(xhr.responseText));
        }
    })

xhr.open("GET",newURL)
xhr.send();
}
getComments("https://jsonplaceholder.typicode.com/comments",1)

let check = false; //true ya false alır ona göre çalışır
const promise1= new Promise((resolve, reject) => {
    if (check) {
        resolve("işlem başarılı");
    } else {
        reject("işlem başarısız");
    }
});
console.log(promise1); */

/* let check = true;
function creatPromise(){
    return new Promise((resolve,reject)=>{
        if (check){
            resolve("Promisete herhangi bir sıkıntı yok ")
        }else{
            reject("Sıkıntı var");
        }
    })
    

}
creatPromise()
.then((response)=>{
    console.log(response); //true d açalışır 
})
.catch((error)=>{
    console.log(error); //false da çalışır 
})
.finally(()=>console.log("işlem bitti")); //her zaman çalışır  */
/* 
//? PROMİSE +xmlhttprequest

function readStudents(url){
    return new Promise((resolve,reject)=>{
        const xhr = new XMLHttpRequest();
        try {
            xhr.addEventListener("readystatechange",()=>{
                if(xhr.readyState===4 && xhr.status===200){
                    resolve(JSON.parse(xhr.responseText));
                }
            })
        
            
        } catch (error) {
            reject(error);
            
        }
        xhr.open("GET",url);
        xhr.send();
    })
}readStudents("students.json")
.then((data)=>console.log(data))
.catch((error)=>console.log(error))  */


/* function getUsers(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.addEventListener("readystatechange", () => {
            try {
                
            if (xhr.readyState === 4 && xhr.status === 200) {
                resolve(JSON.parse(xhr.responseText));
            }
        } catch (error) {
                reject(error);
        }
        })
        xhr.open("GET", url);   
        xhr.send();

    })
}
getUsers("https://jsonplaceholder.typicode.com/users")
.then((data)=>
    {
        console.log(data)
        console.log("daha sonra farklı asenkron işlemler yapılabilir")
    })    
.catch((error)=>console.log(error)) 
.finally(()=>console.log("işlem bitti")); */

/* const p1= Promise.resolve("Başarılı");
const p2= Promise.reject("Başarılı");
const p3 = new Promise((resolve,reject)=>{
    resolve("üçüncü promise başarılı")


})

const p4= Promise.reject("başarısız");
Promise.all([p1,p2,p3])//dizi çekmek
.then((res)=>{ //true;
    //console.log(res);
    for(let value of res){
        console.log(value);
    }
})
.catch((err)=>console.log(err))//false


//fetch api daha kolay 
//fetch api ile promise yapısı kullanılır
//fetch api ile http istekleri yapılır
//fetch api ile json verileri alınır
//fetch api ile hata yakalanır
//fetch api ile async await yapısı kullanılır    

function getStudents(url){
    fetch(url)
    .then((response)=>{
        return response.json();
})
.then((data)=>console.log(data))
.catch((error)=>console.log(error))
}
getStudents("students.json");



function getData(url){
    return fetch(url)
    .then((response)=>response.json())
    .then((data)=> console.log(data))
    .catch((error)=>console.log(error))
}
getData("students.json");


function saveStudent(data){
    fetch("https://jsonplaceholder.typicode.com/posts",{
        method:"POST",
        body:JSON.stringify(data),
        headers:{
            "Content-type":"application/json"
        },
        body : JSON.stringify(data) 
    })
} */


//ASYNC AWAIT
//ASYNC AWAIT YAPISI İLE PROMİSE YAPISI DAHA KOLAY KULLANILIR

document.querySelector("#btn").addEventListener("click",()=>{
    fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response)=>response.json())
    .then((post)=>{
        console.log(post);
        fetch(`https://jsonplaceholder.typicode.com/users/"+post.userId=${post.id}`)
   .then((response)=>response.json())
.then((comments)=>console.log(comments)  ) 
    })

})

//asyn await ile yapılışı 
/* document.querySelector("#btn").addEventListener("click",async()=>{
    const responsePost = await fetch("https://jsonplaceholder.typicode.com/posts/1")
    const post = await responsePost.json();
    
    const responseComments = await fetch(`https://jsonplaceholder.typicode.com/users/"+post.userId=${post.id}`) 
    const comments = await responseComments.json();
    console.log(comments);

}) */

    //daha kısa
    document.querySelector("#btn").addEventListener("click",async()=>{
        const post = await( await fetch("https://jsonplaceholder.typicode.com/posts/1")).json();
        const comments =await( await fetch(`https://jsonplaceholder.typicode.com/users/"+post.userId=${post.id}`) ).json();
       console.log(post,comments)
    })