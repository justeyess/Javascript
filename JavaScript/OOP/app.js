//NESNE PROGRAMLAMA 
/* 
class Person{
    /* 
    1-özellikler
    2- yapıcı metotlar 
    3-function
    
    */

  /*   constructor (name,surname,age,salary){//YAPICI METOT
        this.name=name;
        this.surname=surname;
        this.age= age;
        this.salary=salary;
    }
    showInformation(){
        console.log(
            `Name : ${this.name}
            Surname :${this.surname}
            Age :${this.age}
            Salary : ${this.salary}
            `
        )
    }
}
const person1 =new Person ("filiz","muşuk","24","28000");//NESNE OLUŞTUR
const person2= new Person ("seren","yılmaz","22","10000");

person1.showInformation()
person2.showInformation()
 */

//!STATİC NEDİR ?

//!Bir function veya özellik static ise CLASS'a özgüdür
//!değilse nesneye özgüdür.

// class StringUtil{
//     static  isNull(){
  
//       }
//       static getCharacterLength(){
  
//       } 
//   }
  
  // class Insan{
  
  //     static languagesCount=10;
  
  //     constructor(firstName , lastName, salary){
  //         this.firstName = firstName;
  //         this.lastName=lastName;
  //         this.salary = salary;
  //     }
  
  
  //     writeInfo(){
  //         console.log(this.firstName,this.lastName,
  //             this.salary,this.languagesCount)
  //     }
  // }
  
  // // const insan1 = new Insan("Enes","Bayram","10000");
  // // insan1.writeInfo();
  
  // console.log(Insan.languagesCount);
  
  
  // class Matematik{
  
  //    static topla(a,b){
  //         console.log(a+b)
  //     }
  
  //     cikar(a,b){
  //         console.log(a-b)
  //     }
  
  //    static carp(a,b){
  //         console.log(a*b)
  //     }
  
  //     bol(a,b){
  //         console.log(a/b)
  //     }
      
  // }
  // //TypeScript
  
  // const matematik = new Matematik();
  // matematik.topla(10,5);
  // matematik.carp(5,7)
  
  //!Static olarak tanımlanmamışsa NESNE üzerinden erişilir.
  //!Static ise CLASS İSMİ üzerinden erişilir.
  
  
  
  //! const stringUtil = new StringUtil();
  
  
  
  //!INHERİTANCE (MİRAS ALMA) KAVRAMI


//this

//!Inheritance ile hayatımıza giren kelimeler.
//super : Üst sınıfı gösterir.
//super()


class Person {

    constructor(firstName , lastName , salary){
        this.firstName  = firstName;
        this.lastName=lastName;
        this.salary = salary;
    }

    writeInfo(){
        console.log(this.firstName , this.lastName,this.salary)
    }
  
}


class Student extends Person{
    
    constructor(firstName , lastName, salary){
        super(firstName,lastName,salary);
    }

    writeInfo(){
        super.writeInfo();
    }
    
}

class Engineer extends Person{
    constructor(firstName , lastName,salary){
        super(firstName,lastName,salary);
    }
    writeInfo(){
        super.writeInfo();
    }
}




const student1 = new Student("Enes","Bayram",10000);
const engineer1 = new Engineer("Aysun","Meral", 14000);

student1.writeInfo();
engineer1.writeInfo();
