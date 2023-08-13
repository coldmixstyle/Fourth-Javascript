const string_type = "Selam 123 +% fdhg";
const number_type = 545.245;
const boolean_type = true; // veya false;
const array_type =[3,5, "selam" , true];

const ogrenci_1 = {   // Süslü parantes ile açıyoruz key value işleme dayalı obje işlemi.
isim:"Canberk",            
                             // İSİM - KEY olarak kullanılır , CANBERK ise VALUE demek!
soyisim:"Beren",          
                            //her satıra FİELD denir , (=) operatörü kullnma !!
Yaş: 26,
mezun:true
};

console.log(ogrenci_1.soyisim)

const ogrenciler = [
    {
    isim:"Canberk",
    soyisim:"Beren",
    age: 26                             //JSON - JAVASCRIPT OBJECT NOTATION
    },
   {
    isim:"Ahmet",
    soyisim:"Kaya",
    age: 30 
   },
   {
    isim:"Ayse",
    soyisim:"Yildirim",
    age: 36
   },
   {
    isim:"Fatma",
    soyisim:"Naz",
    age: 13
   }
]

const filtered_array = ogrenciler.filter(ogrenci => ogrenci.age > 35)
console.log("Yasi 35' ten daha buyuk ogrenciler: " ,filtered_array)


const nested_object = {
    isim:"Ali",
    soyisim:"Yagiz",
    yas: 29,                             // NESTED daha iç içe geçen obje demek!!!
    notlar: {
        matematik: 100,
        fizik: 100,
        kimya: 95,
    }
}

console.log("nested object(İc ice gecmis obje)" , nested_object);
console.log("fizik notu: ",nested_object.notlar.fizik)



const ogrenciler2 = [
{
    isim:"Sevgi",
    soyisim:"Ak",
    yas:20,
    boy:167,
    kilo:55,
    notlar:{
        matematik: 30,
        fizik: 40,
        kimya: 20,
    }
},
{
    isim:"Mustafa",
    soyisim:"Kara",
    yas:30,
    boy:170,
    kilo:80,
    notlar:{
        matematik: 90,
        fizik: 100,
        kimya: 100,
    }
},
{
isim:"Aleyna",
soyisim:"Tilki",
yas:20,
boy:150,
kilo:40,
notlar:{
    matematik: 100,
    fizik: 100,
    kimya: 100,
    }
}
]

console.log(ogrenciler2);

const filtered_ogrenciler2 = ogrenciler2.filter(ogrenci => ogrenci.notlar.matematik < 50);




