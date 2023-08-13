console.log ("Hello World")

/* ----------------FİND ve FİND İNDEX---------------*/

const ages = [ 15,11,18,27,39,55,20,6,13];  // 15 numara 0 array , 11 numara 1 array

console.log(ages);

const finded_age = ages.find(age => age > 20);  // 20 yaşından daha buyuk eleman neyse onu gösterir.

const finded_index = ages.findIndex(y => y > 20); //


console.log("ages arrayi : " + ages);
console.log("20 den buyuk olan ilk eleman" , finded_age);
console.log("20 den buyuk olan ilk eleman in indexi:", finded_index);

/*################    SOME METODU  #################*/

const names = ["Ali", "Ahmet" ,"Ayse" ,"Mehmet" ,"Mustafa" , 15];

const areAllString = names.some (z => typeof z === 'number')    //Number yani eğer rakam varsa o zaman sonuc doğru olacak çunku son eleman number tipinde.

const isBiggerThen18 = ages.some(yas => yas > 18); // 18 yaşindaki eleman varsa doğru olacak.

console.log("some methodu sonucu:" , areAllString);
console.log("18 den buyuk eleman var mi", isBiggerThen18)

/*################    EVERY METODU  #################*/

const everyCheck = names.every (i => typeof i === 'string');  // elemanlarin hepsi yazdığımız şartı sağlıyor ise true dönecek.  
console.log("hepsi string tipinde mu? ",everyCheck)


/*################      FİLTER         #################*/

const new_ages = ages.filter(a => a > 18)    // şarti sağlaytan elemanları yeni array içerisinde toplar (Tek eleman bile olabilir)
console.log ("18 den buyuk olan elemanlar" ,new_ages) 

ages.filter(b => b > 15).map(b => console.log("eleman" , b))   // map komutu gezinip kontrol eder

/*const first_name = names [0];
console.log("ilk eleman", first_name)
                                             // bu uzun versiyon
const second_name = names [1];
console.log("ikinci eleman", second_name)*/

let [first_name,,, fourth_name] = names;  // array deki elemanlara erişmek için bu kısayol
console.log("Dorduncu eleman" , fourth_name);



/*const ages = [ 15,11,18,27,39,55,20,6,13];*/

let [first_number, second_number ,third_number,...rest] = ages; //
console.log(first_number,second_number,third_number,rest);