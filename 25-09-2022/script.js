// ------------------ FONKSİYONLAR BAŞLANGIÇ ------------------

    // function logger(){
    //     console.log("benim adım melisa");
    // }
    //     // Calling Func. / Running Func. Invoking Function başka yerde de karşılaşacağız.
//     // Foknsiyonu ne kadar yazarsak o kadar gelecektir.
//     logger();
//     logger();
//     logger();

// // 25-09-2022 - PAZAR
// // Verileri fonksiyonlara atabiliyoruz.
// // Açıklayıcı fonksiyon isimleri kullanmamız gerekiyor.
// // Parantez içi parametreleri oluşturduğumuz yer bu sadece bu fonskiyona özel bir parametredir.
// // Parametreler virgül ile ayrılıyor.

    // function meyveIsleme (elmaSayisi,portakalSayisi){
    //     // console.log(elmaSayisi, portakalSayisi);
    // const meyveSuyu = `${elmaSayisi} elma ve ${portakalSayisi} portakal`;
    // return meyveSuyu
    // }
    // const elmaSuyu = meyveIsleme(5,0);
    // console.log(elmaSuyu);
    // console.log(meyveIsleme(5,0));

    // const atom = meyveIsleme(2,4)
    // console.log(atom);

// Number' da bir fonksiyondur.
    // const num = Number("23");
    // console.log(num);


// EGZERSİZ - 21 ÜLKENİ TANIMLA

// 'ulke' ,'nufus','baskent' girdilerine dayanarak üç parametre alan
// 'ülkeniTanımla' adında bir fonksiyon yaz.
// Fonksiyon şu dizeyi döndürsün 'Finlandiya'da 6 milyon insan var ve başkant helinski'dir.
// Bu işlevi 3 farklı ülke için dene

    // function ulkeniTanimla (ülke,nüfus,başkent){
    //     const dondur = `${ülke}, ${nüfus} milyon insan var ve ${başkent}'dir.`;
    //     return dondur
    // }
    // const ulken = ulkeniTanimla("Finlandiya",6,"Helinski");
    // console.log(ulkeniTanimla("Finlandiya",6,"Helinski"));
    // console.log(ulkeniTanimla("Türkiye",84,"Ankara"));  
    // console.log(ulkeniTanimla("İtalya",33,"Roma")); 

// return yazmazsak console'da ne döndüreceğini bilmediği için undefinde yazacaktır. 
// Return yazmadığımızda let meyve değişkeni sönük kalır.Oradan anlayabilirim.
// Return fonksiyonu bitirme gibi switchte'ki break gibi.
    // function meyveSuyu(elma,portakal){
    //     let meyve = `${elma} elma ve ${portakal} portakal `;
    //     return meyve;
    // }
    // console.log(meyveSuyu(3,5));

// Return ile birlikte altındaki işlemleri ciddiye almayacaktır
// a + b ' ye kadar alır.c = d + e çalışmaz.
    // function(){
    //     return a + b;
    //     const c = d + e;
    // }

    // function birşeyHesaplama(){
    //     return 2;
    // }
    // function birşeyHesaplama2(){
    //     return "merhaba";
    // }
    // console.log(birşeyHesaplama2());


    // function birşeyHesaplama3(){
    //     if(Math.random()> 0.5){
    //         return 2;
    //     }else{
    //         return "merhaba";
    //     }
    // }
    // console.log(birşeyHesaplama3());

    // function birşeyHesaplama4(){
    //     console.log("Bir şey yapıyor");
    // }

    // function birşeyHesaplama5(sayi){
    //     if(sayi === 42){
    //         return;
    //     }
    //     while(true){
    //         başkabirşeyYap();
    //     }
    // }


    // function başkaHesaplama(sayı){
    //     if(sayı===42){
    //         return;
    //     }
    //     if(Math.random()> 0.5){
    //         return 2;
    //     }else{
    //         return 'merhaba';
    //     }
    // }

    // let x = başkaHesaplama(2); // 2 olabilir, "merhaba"
    // let y = başkaHesaplama(42);


// dışarda oluşturduğumuz ley meyve değişkeni fonksiyonun içinde de aynı 
// değişken ismine sahip. fakat bunlar birbirini etkilemiyorlar
// fonksiyon içindeki fonksiyona özeldir. karışmazlar.
// örnekte consola yazdırırken elma parametresine 10 değerini verdim
// portakal parametresine ise dışarda tanımladığım meyve değişkenini verdim oda bana 5'i verdi.
    // let meyve= 5;
    // function meyveSuyu(elma,portakal){
    //     // console.log(elma,portakal);
    //     let meyve = `${elma} elma ve ${portakal} portakal `;
    //     return meyve;
    // }
    // // const meyveler = meyveSuyu(10,5);
    // console.log(meyveSuyu(10,meyve));
    // console.log(meyve);
  
    // function meyve(elma,muz){
    //     const muzSuyu = `${muz} muz suyu hazırlayın`;
    //     const elmaSuyu =`${muz} elma suyu hazırlayın`;
    //     return [muzSuyu,elmaSuyu]
    // }
    // console.log(meyve(20,5));
    // const sonuc = meyve(20,5);
    // console.log("muz suyu:", sonuc[0])

    // TEKRARDA BURADAYIM
    
    // FUNCTION DECLARATION && EXPRESSION

    // FUNCTION DECLARATION/ Bu bir fonksiyon bildirimi
    // const yas1 = yasHesap1(1986);

    // function yasHesap1(dogumYili){
    //     return 2040 - dogumYili;
    // }
    // // console.log(yasHesap1(1986));

    // // FUNCTION EXPRESSION/ İfadesi
    // // function ismi vermedik bi const içine aldık.
    // const yasHesap2 = function(dogumYili){
    //     return 2040 - dogumYili;
    // }
    // const yas2 = yasHesap2(1986);
    // console.log(yas1,yas2);

    // const donusYok = function (){
    //     //no return;
    // }


    //     console.log(donusYok()); // Mükemmel çalışır
    //     // ------
    //     bildirildiFunc() 
    //     function bildirildiFunc(){
    //         console.log("bildirildim");
    //     }

    //     ifadeFunc (); // Büyük hata  altına yazılmalı
    //     const ifadeFunc = function (){
    //     console.log("ifade edildim");
    // }

// EGZERSİZ
// dünya nüfusu 7900 Nüfus yüzdesi hesaplama(popülasyon/7900)*100 !popülasyona yazılan değeri biz belirliyoruz.
// dünyanınYüzdesi1 olarak adlandırılan 'popülasyon' parametresi alan fonksiyon oluştur
// Girilen popülasyon değeri dünya nüfusunun yüzdesi olarak dönsün
// Seçtiğin 3 ülke nüfusu için 'dünyanınyüzdesi1 çağırın

// FUNCTION DECLARATION
    // function dünyanınYüzdesi1(popülasyon,ülke){
    //     return [(popülasyon/7900)*100, ülke]
    // }
    // console.log(dünyanınYüzdesi1(100,"Türkiye"));
    // console.log(dünyanınYüzdesi1(90,"İtalya"));
    // console.log(dünyanınYüzdesi1(74,"ABD"));

// FUNCTION EXPRESSION
    // const dünyanınYüzdesi2 = function(popülasyon,ülke){
    //     return [(popülasyon/7900)*100, ülke]
    // }
    // console.log(dünyanınYüzdesi2(100,"ABD"));
    // console.log(dünyanınYüzdesi2(90,"Türkiye"));
    // console.log(dünyanınYüzdesi2(74,"İtalya"));



    // const yasHesap2 = function(dogumYili){
    //      return 2040- dogumYili;
    // }

    
// ARROW FUNCTION BAŞLANGIÇ
// This alamaz.
// Fonksiyon ifadesini daha kısa yazmamıza yarıyor.Açıkça retrun dememize gerek kalmadan
// otomatik retrun'u var.

    // const yasHesap3 = (dogumYili) => 2040 - dogumYili;
    // const yas3 = yasHesap3(1986); 
    //     //yasHesap3(1986) ===(1986) => 2040 - 1986 === 54 === yasHesap3(1986) === yas3
    // console.log(yas3);

// Birden fazla degisken varsa return yazmak lazım
    // const emekliligeKalanSure = (dogumYili,isim) => {
    //     const yas = 2040 - dogumYili;
    //     const emeklilik = 60 - yas;
    //     // return emeklilik;
    //     return `${isim} ${emeklilik} yıl içerisinde emekli oluyor.`;
    // }
    // console.log(emekliligeKalanSure(1986,"Murat"));
    // console.log(emekliligeKalanSure(1980,"Namık"));
