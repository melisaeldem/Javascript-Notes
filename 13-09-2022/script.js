
// ------------------ EGZSERSİZ - 1 DEĞER ve DEĞİŞKENLER ----------------
    // let ulke = "Türkiye";
    // let kita = "Asya";
    // let nufus = 84;

    // console.log(ulke);
    // console.log(kita);
    // console.log(nufus);

    // String
        //let firstName1 = "Melisa";

    // Number 
        //let age = 36;

    // Boolean true,false 
        //let fullAge = true;

    // Undefined değer atanmadığı zaman tanımsız yani boş değer diyebiliriz.
        //let children 

    // Null

// ------------------ BOOLEAN ÖRNEKLERİ ------------------
    //true;
    //console.log(true);

    //let jsHarika = true;
    //console.log(jsHarika);

// TYPEOF -> Bir değerin türünü göstermek için kullanılır.

    //console.log(typeof true); // Boolean
    //console.log(typeof jsHarika); // Boolean
    //console.log(typeof 36); // Number 
    //console.log(typeof "Melisa"); //String

// Değişken değerini değiştirmek için let yazmamıza gerek yok. 
// Direkt Değişken ismini ve değiştirmek istediğimiz değeri giriyoruz.
// ❗
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

// NULL ->
    // console.log(typeof null);    

// ------------------ EGZERSİZ - 2 VERİ TÜRLERİ ------------------
// Veri türlerini göster. Dil değişkenine değer atama.
    // Veri türleri typeof ile gösterilir.

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

// ------------------ LET , CONST , VAR ------------------

// LET -> bildirim yaptığımız değişkeni yeniden yazmamıza gerek yok değeri yazabiliriz.
    // Boş bir değişkenide bu şekilde atayabiliriz.
    // 
        // let age = 36;
        // age = 37;
        // console.log(age);

// CONST -> Değişmesini istemediğimiz değerleri bu şekilde yazıyoruz.
        // const birthYear = 2001;
        // birthYear = 2002; //Hata verecek. Sabit bir değişkeni değiştirmek istiyorsun.
        // console.log(birthYear);
    //Başlangıç değerine bir değer atamalısın. Hata verir.
        // const job;

// VAR -> Değişkenlerin tanımlanmada çok eski. Fonksiyonda kullanılıyor.
        // var job = "Mühendis";
        // job = "Aşçı";
        // console.log(job);

    // Değişken yazmadığımızda 'VAR' olarak atar. BÖYLE YAZMA.
        // lastName ="Eldem";
        // console.log(lastName);

// ------------------ EGZERSİZ -3  ------------------    
// Dil değerini (undefined) seçtiğiniz ülkede konuşulan dile ayarla.
// Hangi değişkenlerin const değişken olması gerektiğini düşün.
    // (Hangi değerler asla değişmez hangileri değişebilir.)
// Değiştirilen değişkenlerden birini değiştirmeye çalış ve ne olduğunu gör.
   
    // const ulke = "Türkiye";
    // console.log(typeof ulke);
        // ulke = "Avrupa"; // HATA VERECEKTİR.
    // const kita = "Asya";
    // console.log(typeof kita);
    // let nufus = 84;
    // console.log(typeof nufus);
    // let dil 
    // console.log(typeof dil);
    // dil = "Türkçe";
    // console.log(dil);
    // let adaMi = true;
    // console.log(typeof adaMi);
    // console.log(adaMi);

// OPERATÖRLER -> Değerleri dönüştürmemize veya birleştirmemize yarıyor.
// 2050 yılını tekrar etmemek adına değişkene atadık ve 2050 yazan yerlere
    // Değişken ismini yazdığımızda da çalışacaktır. 
    // Matematik işlemleri: ->
        // const emeklilik = 2050;
        // const yasMelisa = emeklilik - 2001;
        // const yasNamik = emeklilik - 1974;
    // İki farklı değeri yazdırabiliyoruz.
        // console.log(yasMelisa , yasNamik);
        // console.log(yasMelisa * 2, yasMelisa / 2**3);

    // Çift tırnak koyarak araya boşluk yaptık iki değeri birleştirdik.
        // const ad = "Melisa";
        // const soyad = "Eldem";
        // console.log(ad+' '+soyad);

// ATAMA İŞLEMLERİ: ->
    // TOPLAMA ' X ' 15 değerini taşıyor.
        // let x = 10 + 5; // 15
        // x += 10; // x(15) = x(15) + 10 = 25
        // x *= 4; // x(25) = x(25) * 4 = 100
        // x ++ // x = x +1 = 101 birer birer arttır.
        // x -- // x = x -1 = 100 birer birer eksiltir.
        // console.log(x);

// KARŞILAŞTIRMA OPERATÖRLERİ: ->
    // Melisa'nın yaşı Namık'ın yaşından büyük mü booleon olarak cevap vercektir. FALSE.
        // console.log(yasMelisa > yasNamik); // < , > , <= , >= 
        // // Namık'ın yaşı 18'den büyük mü ? TRUE
        // console.log(yasNamik >= 18);
        // console.log(emeklilik - 2001 > emeklilik - 1974);
        // const resitMi = yasNamik >= 18;


// ------------------ EGZERSİZ - 4 OPERATÖRLER ------------------ 
    // const ulke = "Türkiye";
    // console.log(ulke);

    // const kita = "Asya";
    // console.log(typeof kita);

    // let nufus = 84;
    // console.log(nufus);

    // dil = "konuşulan dil";
    // console.log(dil);

    // Ülkenin nüfusunu yarıya böl.
    //     nufus = 84 / 2;
    // // Ülkenin nüfüsunu 1 arttır.
    //     nufus ++;
    // // Finlandiya nüfusu 6 milyon. Seçtiğim ülkeden daha fazlası mı yaşıyor?
    //     let finNufus = 6;
    //     console.log(nufus > finNufus);
    //     console.log(nufus);
    //     console.log(finNufus);
    // // Bir ülkenin ortalama nüfusu 33 m'dir. Seçtiğin ülke ortalama nüfustan fazla mı?
    //     let xUlke = 33;
    //     console.log(xUlke);
    //     console.log(nufus > xUlke);
    // Oluşturduğum değişkenlere bağlı olarak yeni bir 'açıklama' değişkeni oluştur.
    // Bu formatta bir dize oluştur. Kendi girdiğim değerleri gir

// ------------------ BAŞKA BİR ÖRNEK ------------------
    // let aciklama= ulke+' '+kita+' '+84;
    //     const aciklama1 = 
    //     ulke +
    //     kita +
    //     " ' da " +
    //     ' ve ' +
    //     nufus +
    //     ' milyon ' +
    //     ' insan ' +
    //     dil +
    //     ' konuşuyor.';

    //     console.log(aciklama1);
        // console.log(aciklama);

// ----------------------------


// const emeklilik = 2050;
// const yasMelisa = emeklilik - 1986;
// const yasNamik = emeklilik - 2033;
// console.log(emeklilik - 1986 > emeklilik - 2033);

//Değer sağdan sola doğru verilir.

    // console.log(35 - 10 - 5);
    // let x,y
    // x = y = 35 - 10 - 5; // x = y = 20
    // console.log(x,y);

// // Namık'ın yaşı 2'ye bölünecek ve melisaya bölünen değer eklenecek.
    // const ortalamaYas =  (yasMelisa + yasNamik) / 2;
    // console.log(ortalamaYas); 
    // console.log(yasMelisa, yasNamik);

 // ------------------ EGZERSİZ - 5  ------------------
//BMI HESAPLAMA = ağırlık / boy **2 YA DA kütle / (boy* boy) formülünü kullan.

//GÖREVLER
    // Murat ve Engin'in kilosunu ve boyunu değişkenlerde saklayın.
    // Formülü kullanarak her ikisinin de BMI'sini hesapla. (ağırlık ve boy metre olacak)
    //Murat'ın Engin'den yüksek bir BMI'ya sahip olup olmadığını hakkında booleon olarak bul.

// TEST VERİSİ
    // Murat 71 kg ağırlığında ve 1.87 boyunda. Engin ağrılığı 92 kg ve boyu 1.95 m

    // MURAT
    // const kisiBir = "Murat";
    // let kisiBirKilo = 71;
    // let kisiBirBoy = 1.87;
    // // ENGİN
    // const kisiIki = "Engin";
    // let kisiIkiKilo = 92;
    // let kisiIkiBoy = 1.95;
    // // MURAT BMI
    // let BMI1 = kisiBirKilo / kisiBirBoy** 2;
    // console.log(BMI1);
    // // ENGİN BMI
    // let BMI2 = kisiIkiKilo / kisiIkiBoy** 2;
    // console.log(BMI2);
    // // DİZE
    // console.log(kisiBir+' '+ kisiBirKilo+' '+'kg ağırlığında ve'+' '+ kisiBirBoy+' '+'m boyunda.'+' '+ kisiIki+' '+'ağırlığı'+' '+kisiIkiKilo+' '+'kg ve boyu'+' '+ kisiIkiBoy+' '+'m');
    // // 
    // let muratBuyukBMI = BMI1 > BMI2;
    // console.log(muratBuyukBMI);
