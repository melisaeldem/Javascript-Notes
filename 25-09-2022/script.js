// function mesajGoster(){
//     console.log("Merhaba millet,  bu bizim fonksiyonlardaki ilk yazımız.Tebrikler!.");
// }
// mesajGoster();
// mesajGoster();


// Yerel Değişkenler
// Fonksyion içinde tanımlanan değişkene sadece o fonksiyon içerisinde erişilebilir.
    // function mesajGoster1 (){
    //     let mesaj= "Merhabalar ikinci örnek." //Yerel değişken 
    //     console.log(mesaj);
    // }
    // mesajGoster1();
// console.log(mesaj); // Hata mesaj değişkenini fonksiyon içinde oluşturduğum için
// dışında yazamam.

// Dış Değişkenler
// Fonksiyon kendi dışında oluşturulmuş değişkenlere erişebilir.
    // let kullaniciAdi = "Melisa";
    // function mesajGoster () {
    //     let mesaj = 'hello ' + kullaniciAdi;
    //     console.log(mesaj);
    // }
    // mesajGoster();

// Fonksiyon dışarda bulunan değişkenlere tam kontrol sağlar hatta değiştirilebilir.
    // let kullaniciAdi = "Melisa";

    // function mesajGoster ( ){
    //     kullaniciAdi = "Melisa Eldem";
    //     let mesaj = "Merhaba " + kullaniciAdi;
    //     console.log(mesaj);
    // }
    // mesajGoster();

// Bazen aynı isimde değişkenler olabilir fakat konumları oldukça önemlidir.
// Örneğin birisi yerel birisi dıştaki değişken ise karışıklık olmaz
// İçerideki değişkene bir şey yaptırırken dıştaki değişken etkilenmez.

    // let kullaniciAdi = "Melisa";
    // function mesajGoster(){
    //     let kullaniciAdi = "Melisa Eldem"; //Yerel değişken tanımladım.
    //     let mesaj = "Merhaba " + kullaniciAdi; //Melisa Eldem.
    //     console.log(mesaj);
    // }
    // // buradaki fonksiyon kendi değişkenini yaratacak ve onu kullanacak.
    // mesajGoster(); //Merhaba melisa eldem
    // console.log(kullaniciAdi); //melisa

//------------ PARAMETRELER --------------

// Parametrelere isteğe bağlı olarak veri paslanabilir. Bunlara fonksiyon argümanı da denir.
// Örneğin;

    // function mesajGoster(gonderen, metin){ //Gönderen ve metin burada argümandır.
    //     console.log(gonderen + ':' + metin);

    // }
    // mesajGoster("Melisa ", "Akşam buluşuyor muyuz ?");
    // mesajGoster("Gül " ,"Evet buluşuyoruz.");

// Varsayılan Değer
// Eğer fonksiyon argümanına bir değer gönderilmemişse fonksiyon içerisinde bu değişken undefined olur.
// Bu bi hata değildir örnekteki gibi de yazabiliriz.
// Eğer metin değeri paslanmazsa 'metin gönderilemedi' çıktısı alınır.
    // function mesajGoster(gonderen, metin = "Metin gönderilemedi."){
    //     console.log(gonderen + ':' + metin);
    // }
    // mesajGoster("Melisa");


//------------ DEĞER DÖNDÜRME --------------
// Fonksiyon çağırıldığı yere değer döndürebilir.
// Örneğin;
    // function toplama (a, b){
    //     return a + b ;
    // }
    // let sonuc = toplama(1,4);
    // console.log(sonuc);

// return fonksiyon içerisinde her yerde kullanılabilir. Kod return satırına eriştiğinde fonksiyon
// duru ve değer fonksiyonunun çağırıldığı yere geri gönderilir.
// Alttaki örnekte birden fazla return örneğim var;

    // function yasKontrolu(yas){
    //     if(yas > 18){
    //         return true;
    //     }else{
    //         return confirm('Ebeveyn izni var mı ?');
    //     }
    // }

    // let yas = prompt("kaç yaşındasın ?",18);

    // if(yasKontrolu(yas) ){
    //     alert("izin verildi");
    // }else{
    //     alert("reddedildi");
    // }

// TERNARY OPERATORLER
// const yas = 145;
//     // const arabaKullanabilirMi = yas >=18 ? "araba kullanabilir": "araba kullanamaz.";
//     // console.log(arabaKullanabilirMi);

//     // let araba2;
//     // if ( yas >= 18){
//     //     araba2="bmw";
//     // }else{
//     //     araba2="oyuncak";
//     // }
//     // console.log(araba2);

//     const araba = yas >= 18 ?  "Araba kullanabilir." : "Arka koltuk online.";
//     console.log(araba);
//     console.log(`Bu yaşta ${yas >= 18 ? "araba kullanabilir." : "Araba kullanamaz."}`);

// 1- Seçtiğiniz ülkenin nüfusu 33 milyondan fazlaysa üçlü operatörü kullanın
// konsole şöyle bir string yazdırın: 'italya'nın nüfusu ortalamanın üzerinde.'
// Aksi takdirde 'italya'nın nüfusu ortalamanın altında' yaz.
// Sadece nasıl olduğuna dikkat et. bu iki cümle arasında sadece bir kelime değişiyor.

// 2- Sonucu kontrol ettikten sonra popülasyonu 13 ve ardından 130 yap.
// Farklı sonuçları gör ve popülasyonu örjinaline geri ayarlayın.

    // let ulke = "italya";
    // let nufus = 33;
    // console.log(`${ulke}'nın nüfusu ortalamanın ${nufus >= 33 ? "üzerinde" : "altında"}`);

    
// IF & ELSE YAZIM ŞEKLİ BU ŞEKİLDEDİR.
//     const age = 61;
//     if ( age > 18) {
//         console.log("Kola");
//     }else if(age > 58){
//         console.log("Kolayı Bırakmalısın.");
//     }else{
//         console.log("Su iç.");
//     }
// Koşullu yazmayı dene
    // const age = 18;
    // let drink = 
    // age >= 18 ? "kolayı severim":
    // age >=16 ? "Sodayı severim":
    // age >= 10 ? "Meyvesuyu severim":
    // age >8 ? "Şekerli içecek severim":
    // "su içerim";
    // console.log(drink);

// KENDİNDE BAK!!!!
    // Engin ne zaman restorana gitse kullanacağı çok basit bir bahşiş
    // hesaplayıcısı yapmak istiyor. Hesap 50 ile 300 arasındaysa %15 bahşiş verecek.
    // Değer farklıysa bahşiş % 20'dir.

    // GÖREVLER
    // 1- Fatura değerine bağlı olarak 'bahşiş' adlı bir değişken oluştur.
    // yapamıyosan
    // İf/else ifadesi ile başla ve ardından onu bir üçlüye dönüştürmeyi dene.

    // 2- Konsola fatura değeri bahşiş ve son değeri içeren bir dize yazdır.
    // (fatura + bahşiş) Örnek "Fatura 275 bahşiş 41.25" ve toplam değer "316,25"

    // TEST VERİSİ
    // Veri 1: 275, 40 ve 430 fatura değerleri için test

// let fatura = 275;
// let bahsis = fatura >=50 && fatura <=300 ? fatura * 0.15 : fatura * 0.2;
// console.log(`Faturanız ${fatura} ve bahşiş tutarı ${bahsis} toplam ödenecek değer ${fatura + bahsis}'dir.`);

    // function logger(){
    //     console.log("benim adım melisa");
    // }
    // console.log(logger());

// Verileri fonksiyonlara atabiliyoruz.
// Açıklayıcı fonksiyon isimleri kullanmamız gerekiyor.
// Parantez içi parametreleri oluşturduğumuz yer bu sadece bu fonskiyona özel bir parametredir.
// Parametreler virgül ile ayrılıyor.
    // function meyveIsleme ( elmaSayisi, portakalSayisi){
    //     console.log(elmaSayisi,portakalSayisi);
    //     const meyveSuyu = `${elmaSayisi} elma ve ${portakalSayisi} portakal`;
    //     return meyveSuyu;
    // }
    // const elmaSuyu = meyveIsleme(5,0);
    // console.log(elmaSuyu);


// 'ulke' ,'nufus','baskent' girdilerine dayanarak üç parametre alan
// 'ülkeniTanımla' adında bir fonksiyon yaz.
// Fonksiyon şu dizeyi döndürsün 'Finlandiya'da 6 milyon insan var ve başkant helinski'dir.
// Bu işlevi 3 farklı ülke için dene

    // function ulkeniTanimla(ulke,nufus,baskent){
    // const dondur =(`${ulke}'da ${nufus} milyon insan var ve başkenti ${baskent}'dir.`);
    // return dondur;
    // }
    // console.log(ulkeniTanimla("Türkiye",61,"Ankara"));

    // function meyveSuyu(elma,portakal){
    //     let meyve = `${elma} elma ve ${portakal} portakal sayısı`;
    //     return meyve;
    // }
    // console.log(meyveSuyu(4,5)); 

    // EGZERSİZ
    // dünya nüfusu 7900 Nüfus yüzdesi hesaplama(popülasyon/7900)*100 !popülasyona yazılan değeri biz belirliyoruz.
    // dünyanınYüzdesi1 olarak adlandırılan 'popülasyon' parametresi alan fonksiyon oluştur
    // Girilen popülasyon değeri dünya nüfusunun yüzdesi olarak dönsün
    // Seçtiğin 3 ülke nüfusu için 'dünyanınyüzdesi1 çağırın

//     function dunyanınYuzdesi1 (populasyon,isim){
//         const dunyaYuzdesi = `${(populasyon/7900)*100} popülasyon ve ${isim} Nüfusu bu şekildedir.`;
//         // return [(populasyon/7900)*100,isim]
//     }
//    console.log( dunyanınYuzdesi1(9000,"Türkiye"));
//    console.log( dunyanınYuzdesi1(2000,"Abd"));
//    console.log( dunyanınYuzdesi1(2500,"İtalya"));

//    const dunyanınYuzdesi2 = function (populasyon,isim){
//     return[(populasyon/7900)*100,isim];
//    }
//    console.log(dunyanınYuzdesi2(100,"ABD"));


// ARROW FUNCTION
// Parametresiz Arrow Funciton bu şekilde yazılıyor.
    // const hosgeldin = () => "sitemize hoş geldiniz";
    // console.log (alert(hosgeldin()));
// Parametreli Arrow Function bu şekilde yazılıyor.
    // const merhaba = (isim) =>  "merhabalar sayın," + isim;
    // console.log(merhaba("Melisa"));



    // DEĞİŞKEN 1
    // var hesapA = {
    //     ad : 'melisa eldem',
    //     hesapNo : '12345678',
    //     bakiye: 2000,
    //     ekHesap: 1000,
    // }

    // DEĞİŞKEN 2
    // var hesapB ={
    //     ad:'gul Eldem',
    //     hesapNo: '1234567789',
    //     bakiye: 3000,
    //     ekHesap:2000,
    // }
    
    // function paraCek(hesap,miktar){
    //     console.log(`Merhaba ${hesap.ad}`);
    //     if(hesap.bakiye>= miktar){
    //         console.log("Paranızı alabilirsiniz.");
    //     }else{
    //         var toplam = hesap.bakiye + hesap.ekHesap;
    //         if(toplam >=miktar){
    //             if(confirm('ek Hesabınızı kullanmak ister misiniz')){
    //                 console.log("paranızı alabilirsiniz.");
    //             }else{
    //                 console.log(`${hesap.hesapNo} nolu hesabınızda ${miktar} bulunmamaktadır.`);
    //             }
    //         }else{
    //             console.log("üzgünüz bakiye yetersiz");
    //         }
    //     }
    // }
    // paraCek(hesapA,3000);
    // paraCek(hesapB,2000);