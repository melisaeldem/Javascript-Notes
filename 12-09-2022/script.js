
// let js = "harika" -> 'tırnak içerisinde yazıldı' (String)
// if (js === "harika") alert("Js harika");
// console.log(40 + 3 + 10 - 3);


// ------------------ DEĞİŞKENLER ------------------
// Değerler veri parçalarıdır.Değişken bir değeri deoplayabileceğimiz bir kutu.

    // console.log("Melisa");
    // console.log(23);
    // firstName isimli bir değişken oluşturduk ve melisa değerini depoladık.
    // let firstName = "Eldem";
    // Değişkene atanan ismi consolde'da göstermek için değişkene atadığımız ismi kullanıyoruz.
    // console.log(firstName);
    // console.log(firstName);
    // console.log(firstName);


    // Değişken isimleri açıklayıcı olmalı ↓
    // let ilkIsim = "Mühendis";
    // let mevcutIsim = "Öğretmen";

    // Invalid or unexpected token hatası aldım. Çünkü sayı ile başladı.
    // let 3yıl =


//------------------ ADLANDIRMA KURALLARI ------------------
    //----Sayı ile başlayamaz. 
    //----Türkçe karakter kullanılamaz 
    //----Rezerve kelimeler kullanılamaz. 
    //----Boşluk bırakılamaz.
    //----Büyük harf ile başlanmamalı. Kural değil genel kullanış.
    //----Pi sayısının ismini büyük yazabiliriz. 'PI' Çünkü sabit bir değer.
    //----Değişken adları belirgin, sade olmalı.

    // EGZERSİZ
// 3 değişken ata:
    // 1- Ülke, 2- Kıta, 3-Nüfus
// Typeoflarına bak.

        // let ulke = "Türkiye";
        // let kita = "Asya";
        // let nufus = 84;

        // console.log(ulke);
        // console.log(kita);
        // console.log(nufus);


    // DATA TYPE

        //let me= {name: "Melisa",}
    // String
        //let firstName1 = "Melisa";

    // Number 
        //let age = 36;

    // Boolean true,false 
        //let fullAge = true;

    // Undefined değer atanmadığı zaman tanımsız yani boş değer diyebiliriz.
        //let children 

    // Null

// Boolean Örnekleri
// Boolean bize ture,false verir.
        // true;
        // console.log(true);
        // let jsHarika = true;
        // console.log(jsHarika);

// TYPEOF -> Bir değerin türünü göstermek için kullanılır.
        // console.log(typeof true); // Boolean
        // console.log(typeof jsHarika); // Boolean
        // console.log(typeof 36); // Number 
        // console.log(typeof "Melisa"); //String

// Değişken değerini değiştirmek için let yazmamıza gerek yok. 
// Direkt Değişken ismini ve değiştirmek istediğimiz değeri giriyoruz.
// ❗

        //let jsHarika = true;
        // jsHarika = "evet";
        // console.log(typeof jsHarika);

// UNDEFINED -> Ne zaman boş bir değer görürse undefined der.
// Daha sonrasında kullanabilmek için depolar. Değer atadığımızda
// Onu döndürür.   
        // let year; //DEĞİŞKENİ YAPTIK FAKAT BOŞ BİR DEĞER
        // console.log(year);
        // console.log(typeof year);
        // year = 1998;
        // console.log(typeof year);


// EGZERSİZ -2 
// Veri türlerini göster. Dil değişkenine değer atama.
        // let ulke = "Türkiye";
        // console.log(typeof ulke);
        // let kita = "Asya";
        // console.log(typeof kita);
        // let nufus = 84;
        // console.log(typeof nufus);
        // let dil 
        // console.log(typeof dil);
        // let adaMi = true;
        // console.log(typeof adaMi);
        // console.log(adaMi);

// LET , CONST , VAR
// LET -> bildirim yaptığımız değişkeni yeniden yazmamıza gerek yok değeri yazabiliriz.
// Boş bir değişkenide bu şekilde atayabiliriz.
        // let age = 36;
        // age = 37;   YAŞI BURADA GÜNCELLEDİK
        // console.log(age);

// CONST -> Değişmesini istemediğimiz değerleri bu şekilde yazıyoruz.
     // const birthYear = 2001;
        // birthYear = 2002; //Hata verecek. Sabit bir değişkeni değiştirmek istiyorsun.
        // console.log(birthYear);
    //Başlangıç değerine bir değer atamalısın. Hata verir.
        // const job;

// VAR --> Değişkenlerin tanımlanmada çok eski. Fonksiyonda kullanılıyor. Let ve Const kullanmaya özen göstermeliyim.
// var job = "Mühendis";
        // job = "Aşçı";
        // console.log(job);

// Değişken yazmadığımızda 'VAR' olarak atar. BÖYLE YAZMA. ❗
        // lastName ="Eldem";
        // console.log(lastName);

// EGZERSİZ 

// Dil değerini (undefined) seçtiğiniz ülkede konuşulan dile ayarla.
// Hangi değişkenlerin const değişken olması gerektiğini düşün.
// (Hangi değerler asla değişmez hangileri değişebilir.)
        // Değiştirilen değişkenlerden birini değiştirmeye çalış ve ne olduğunu gör.
        // const ulke = "Türkiye";
        // const kita = "Asya";
        // let nufus = 84000000;
        // let dil 
        // dil = "ingilizce";
        // let adaMi = true;
