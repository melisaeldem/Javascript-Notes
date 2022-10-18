// 08.10.2022 - CUMARTESİ

// INTRO TO OBJECT BAŞLANGIÇ
// Dizide değerlere isim veremiyoruz. Bunun için object tanımlıyoruz.
    // const muratDizisi = [
    //     "Murat",
    //     "Akdağ",
    //     2040-1986,
    //     "Öğretmen",
    //     ["kerem","tuğçe","bora"],
    // ]

// obje süslü parantezle başlıyoruz
    // const muratObje = {
    //     adı:"Murat",
    //     soyadı:"Akdağ",
    //     yaşı: 2040-1986,
    //     iş: "öğretmen",
    //     arkadaşlar:["kerem","tuğçe","bora"]
    // }

// Egzersiz -1 başlangıç
// Seçtiğiniz ülke için ülkem adında, "ülke","başkent","dil","nüfus" ve "komşular"
//  özelliklerini içeren bir nesne object oluşturun

    // const ülkem= {
    //     ülkem:"Türkiye",
    //     başkent:"Ankara",
    //     dil:"Türkçe",
    //     nüfus:84,
    //     komşular:["Azerbeycan","Bulgaristan"]
    // };
    // console.log(ülkem);
// Egzersiz -1 bitiş 

// Obje oluşturma;
    // const araba ={
    // marka:"audi",
    // model:"A5",
    // enYüksekHız:250,
    // beygirGücü:140,
    // renk:"Buzul Beyaz Metalik"
    // }

// Array
    // const arkadaş = ["engin","eda"]
    // const muratArray =["samet",arkadaş]
    // // arkadaş.push("burcu");
    // console.log(arkadaş); 
    // muratArray
    // console.log(muratArray);

// Obje oluşturma;
    // const muratObje = {
    // adı:"Murat",
    // soyadı:"Akdağ",
    // yaşı: 2040-1986,
    // iş: "öğretmen",
    // arkadaşlar:["kerem","tuğçe","bora"]
    // }
    // console.log(muratObje);

// Nesneyi tek çekme ;
    // console.log(muratObje.soyadı);
// Parantez ile gösterimi
    // console.log(muratObje["soyadı"]);

// adı tekrar ettiği için onu değişkene atadım
    // const isim = "adı";
    // console.log(muratObje["soy"+isim])
   
// ---------------------
    // const muratObje = {
    // adı:"Murat",
    // soyadı:"Akdağ",
    // yaşı: 2040-1986,
    // iş: "öğretmen",
    // arkadaşlar:["kerem","tuğçe","bora"]
    // }
    // console.log(muratObje);

    // const ilgili = prompt("murat hakkında ne bilmek istiyorsun ? ad,soyad,yaş,iş ve arkadaşlar arasından seçim yapın.")
    // // console.log(muratObje[ilgili]);

    // if(muratObje[ilgili]){
    //     console.log(muratObje[ilgili])
    // }else{
    //     console.log("Sadece adı,soyadı,yaşı,iş veya arkadaşlar olarak aratabilirsin..");
    // }

    // muratObje.konum="kadıköy";
    // console.log(muratObje);
    // console.log(muratObje[ilgili]);
    // // muratObje["twitter"] = "@muraty"
    // console.log(muratObje);
    // console.log(muratObje[ilgili]);

// ---------------------
// Egzersiz;
//Murat'ın üç arkadaşı var ve en iyi arkadaşının adı Kerem'dir.

    // const muratObje = {
    // adı:"Murat",
    // soyadı:"Akdağ",
    // yaşı: 2040-1986,
    // iş: "öğretmen",
    // arkadaşlar:["kerem","tuğçe","bora"]
    // }
    // console.log(muratObje);
    // // 
    // console.log(`${muratObje.adı}'ın ${muratObje.arkadaşlar.length} arkadaşı var ve en iyi arkadaşının
    // adı ${muratObje.arkadaşlar[0]}'dir.`)

// Egzersiz
// Öneceki atamadaki nesneyi kullanarak Türkiye'de 84 milyon 
    // Türkçe konuşan insan, 2 komşu ülkesi ve Ankara adında bir başkenti var. yazdır.
// nokta gösterimi kullanarak ülke nüfusunu iki milyon arttır ve ardından parantez gösterimi 
// kullanarak iki milyon azaltın.

    // const ülkem= {
    //     ülke:"Türkiye",
    //     başkent:"Ankara",
    //     dil:"Türkçe",
    //     nüfus:84,
    //     komşular:["Azerbeycan","Bulgaristan"]
    // };
    //     console.log(`${ülkem.ülke}'de ${ülkem.nüfus} milyon ${ülkem.dil} konuşan insan, ${ülkem.komşular.length} komşu ülkesi ve ${ülkem.başkent} adında bir başkenti var.`);
    // console.log(`${ülkem.ülke}'de ${ülkem.nüfus + 2 } ${ülkem["nüfus"] -2} milyon ${ülkem.dil} konuşan insan, ${ülkem.komşular.length} komşu ülkesi ve ${ülkem.başkent} adında bir başkenti var.`);

    // const obj ={
    //     a : 1,

    // }
    // const a = "a";
    // const b = "b";
    // const abc = "asd";
    // console.log(obj.a);      // 1. Nesneyi işaret ediyoruz.
    // console.log(obj["a"]);   // 1. Nesneyi işaret ediyoruz. Aynısının farklı gösterimi.
    // console.log(obj[a]);     // 1- Değişkende saklanan değeri okur. Yani a === obj[a] bize 1'i verir.
    // console.log(obj[b]);     //undefined => obj("b") === obj[b]
    // console.log(obj[abc]);  //Hata verir abc diye bir değişken yok.

// ---------------------

    // const restaurant = {
    //     isim: 'İtalyan Pizza',
    //     konum: 'Kadıköy BilgeAdam',
    //     kategoriler: ['İtalyan', 'Mantarlı', 'Peynirli', 'Organik'],
    //     açılışSaati: {

    //       perşembe: {
    //         açık: 12,
    //         kapalı: 22,
    //       },

    //       cuma: {
    //         açık: 11,
    //         kapalı: 23,
    //       },

    //       cumartesi: {
    //         açık: 0, // 24 saat açık
    //         kapalı: 24,
    //       },
    //     },
    //   }

    //   const {
    //     isim: lokantaİsmi,
    //     açılışSaati: saatler ,
    //     kategoriler: çeşitler
    //     } = restaurant

    //     const {cuma: friday} = saatler
    //     const{} = friday
    //     console.log(restaurant);
    //   const {bulunmayanÖzellik : mevcutOlmayan = "Bu yeni olmalı"} = restaurant

    //   let a = 10
    //   let b = 20
    //   a = 30
    //   b = 40

    //   let a = 111;
    //   let b = 999
    //   const nesne ={a:23,b:7,c:14,d:50}
    //   ({a,b} = nesne)


    // const murat = {
    // adı:"Murat",
    // soyadı:"Akdağ",
    // doğumYılı: 1986,
    // iş: "öğretmen",
    // arkadaşlar:["kerem","tuğçe","bora"],
    // ehliyetiVarMi: true,
    // // yasHesap: function(dogumYili){
    // //     return 2022-dogumYili;
    // // },

    // // yasHesap: function() {
    // //     // console.log(this);
    // //     return 2022 - this.doğumYılı;
    // // },

    // yasHesap: function() {
    //     // console.log(this);
    //     this.yas = 2022 - this.doğumYılı
    //     return this.yas;
    // },
    // };

    // console.log(murat.yasHesap());
    // console.log(murat.yas);
    // console.log(murat.yas);
    // console.log(murat.yas);


// CHALLENGE 
// Murat 54 yaşında öğretmendir ve ehliyeti var. yazdır.
// Bir tane nesne oluşturdum bu nesneye yasHesap diye fonksiyon oluşturdum
// o fonksiyonun içinde yas adında bir değişken oluşturdum ve objemin içerisindeki doğum yılından
// çıkarttım. tekrardan objemin içerisinde özet adında bir fonksiyon oluşturdum ve return ile
// istenilen metni yazdırdım ternary operatör kullandım.
// Çıktı için ise objemin içerisindeki iki fonksiyonuda çağırarak yazıyı yazdırdım.
// !Buradaki yasHesap ve özet isimleri nesne ismi gibi girilmiş console'da da belli oluyor.
// Function'da nesnenin değeri gibi..

    //     const murat = {
    //     adı:"Murat",
    //     soyadı:"Akdağ",
    //     doğumYılı: 1986,
    //     iş: "öğretmen",
    //     arkadaşlar:["kerem","tuğçe","bora"],
    //     ehliyetiVarMi: true,

    //     yasHesap: function() {
    //         // console.log(this);
    //         this.yas = 2022 - this.doğumYılı
    //         return this.yas;
    //     },
    //     özet: function(){
    //     return `${this.adı} ${this.yas} yaşında ${this.iş}'dir ve ehliyeti ${this.ehliyetiVarMi ? "var" : "yok."}`
    //     }
        
    // };

    //     console.log(murat.yasHesap());
    //     console.log(murat.özet());
    //     console.log(murat);

// CHALLENGE -2
// 1- ülkem nesnesine açıklama adlı bir yöntem ekleyin.Bu metot önceki atamada kaydedilen dizeye
// benzer şekilde konsola bir dize kaydeder. anca bu sefer this anahtar sözcüğü ile yaz.
// 2- açıklama yöntemi çağır
// 3- ülkem nesnesine adaKontrol adlı bir yöntem ekle bu method nesneye adaMı adı verilen yeni
// Bir özellik ayarlayacak adaMı komşu ülke yoksa doğru var ise false olacak özelliği için
// ternary üçlü operatörü kullan. 

const ülkem= {
    ülke:"Türkiye",
    başkent:"Ankara",
    dil:"Türkçe",
    nüfus:84,
    komşular:["Azerbeycan","Bulgaristan"],
    açıklama: function(){
        return `${this.ülke}'de ${this.nüfus} milyon ${this.dil} konuşan insan, ${this.komşular.length} komşu ülkesi ve ${this.başkent} adında bir başkenti var. Ve ${this.adaKontrol()}`
    },
    adaKontrol: function() {
        this.adaMi = this.komşular.length === 0 ? true : false;
    },
};
console.log(ülkem.açıklama());
console.log(ülkem.adaKontrol());
console.log(ülkem);

// console.log(ülkem.adaMi())

// INTRO TO OBJECT BİTİŞ