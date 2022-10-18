// 01-10-2022 - Cumartesi
// Dünyanınyüzdesi3 adında bir arrow function oluştur.
    // tek parametreli
    // const dunyanınYuzdesi3 = populasyon => (populasyon/7900) * 100;
    // const portekizYuzdesi = dunyanınYuzdesi3(15);
    // console.log(portekizYuzdesi);

    // Çoklu parametre
    // const dunyanınYuzdesi3 = (populasyon,ulke) => {
    //     return[(populasyon/7900)*100,ulke]
    // }
    // console.log(dunyanınYuzdesi3(1000,"Türkiye"));

// ARROW FUNCTION BİTİŞ



// İç içe Fonksiyonlar

// İç içe fonksiyon kullanma çok yaygın kullanılıyor 
// Her fonksiyonda değiştirmek yerine bir yerdeki değeri değiştirmek ile kolaylık sağlıyor.
    // function meyveleriParcala(meyve){
    //     return meyve * 3;
    // }


// iki fonksiyonu birbirine bağlayan meyveleriParçala fonkisyonudur.
// biz o fonksiyonu meyveişleme fonksiyonunun içine yazdık
// İkisi birbirini döndürüyor.



    // function meyveleriParcala(meyve,adet){
    //     return meyve === "elmalar" ? adet *4 : adet * 3;
    // }

    // function meyveİsleme(elmalar,portakallar){
    // const elmaParcalari= meyveleriParcala("elmalar",elmalar);
    // const portakalParcalari= meyveleriParcala("portakallar",portakallar);
    // const meyveSuyu = `${elmaParcalari} elma ve ${portakalParcalari} portakal sayısı`;
    // return meyveSuyu;
    // }
    // console.log(meyveİsleme(2,3)); 
// ------------
    // const toplama = (a,b) => a+ b;
    // const cikarma = (a,b) => a-b;

    // const hesap = function(sayi1,sayi2,islem){
    //     return islem(sayi1,sayi2);
    // }

    // const ekle =hesap(10,3,toplama);
    // const cikar =hesap(10,3,cikarma);
    // console.log(`toplama ${ekle}`);
    // console.log(`çıkarma ${cikar}`);



// EGZERSİZ
// 1- nüfusuTanimla adli bir işlev oluştur. 
// İstediğin işlevi kullan . Bu işlevin iki parametresi olsun
// Ülke ve nüfus ve şunun gibi bir dize döndürür;
// Çinde 1441 milyon insan var, ki buda dünyanın yaklaşık %18,2'sidir

// 2- Yüzde hesaplamak için 'nüfusutanımla' içinde daha önce oluşturduğumuz 'dünyayüzdesi1' çağır.

    // function dünyanınYüzdesi1(popülasyon){
    // return (popülasyon/7900)*100;
    // }

    // Birinci seçenek expression şekilde
    // const nufusTanimla= function(ulke,nufus){
    //    const yüzdesi= dünyanınYüzdesi1(nufus);
    //    const aciklama =`${ulke}'de ${nufus} milyon insan var ve buda yaklaşık ${yüzdesi}'dir.`;
    //    console.log(aciklama);
    // }
    // nufusTanimla("Çin",1441);
    // nufusTanimla("ABD",350);
    

// İkinci örnek arrow function şeklinde yazdık.
    // const nufusTanimla=(ulke,nufus) => {
    //     const dunyanınNufusu = dünyanınYüzdesi1(nufus);
    //     return `${ulke} ${nufus} milyon insan var ki buda dünyanın yaklaşık ${dunyanınNufusu}'dur.`;
    // }
    // console.log(nufusTanimla("Çin",1441));

// const yasHesap = function(yil){
//     return 2040 -yil;
// }

// const emekliligeKalanSure = function(dogumYili,ad){
//     const yas = yasHesap(dogumYili);
//     const emeklilik =60 - yas;
//     // return `${ad} ${emeklilik} yıl içinde emekli oluyor.`;
//     if(emeklilik > 0){
//         console.log(`${ad} ${emeklilik} yıl içinde emekli oluyor.`);
//         return emeklilik;
//     }else{
//         console.log('✌🎁👍');
//         return -1;
//     }
// }


// const emekliligeKalanSure = function (dogumYili,ad){
//     const emeklilik = 60 - (2022 - dogumYili);
//     return`sayın ${ad},${
//         emeklilik > 0 
//         ? `${emeklilik} yıl içerisinde oluyor`
//         : `emekli oldunuz`}
// }`

// console.log(emekliligeKalanSure(2001,"Melisa"));
// console.log(emekliligeKalanSure(1986,"Melisa"));
// console.log(emekliligeKalanSure(1970,"Melisa"));
// emekliligeKalanSure(2001,"Melisa");


    // const yas1 = yasHesap1(1986);

    // function yasHesap1(dogumYili){
    //     console.log();
    //     return 2060- dogumYili;
    // }


// Örnekler
// 1-

// let a = 5;
// function bizimFunction(sonuc){
//     console.log(sonuc);
// }
// bizimFunction(a > 2 ? "Büyük" : "Küçük");

// 2-

// const matHesap = function(sayi1,sayi2){
//     const birinci = sayi1 * 10;
//     const ikinci = sayi2 * 20;
//     return birinci,ikinci; //virgüllü ifadelerde sonuncusunu alır.
// }
// console.log(matHesap(5,7));


// EGZERSİZ -TEKRAR BAK!
// Javascript temelleri - bölüm 2 challenge başlangıç

    // const ortHesap = (a,b,c) => (a + b + c) / 3
    // // console.log(ortHesap(3,4,5));    

    // let kaplanSkor = ortHesap(44,23,71);
    // let kobraSkor = ortHesap (65,54,49);
    // // console.log(kaplanSkor,kobraSkor);

    // const kazananKim = function (ortKaplanlar,ortKobralar){
    //     if(ortKaplanlar >= 2 * ortKobralar){
    //         console.log(`Kaplanlar kazandı.(${ortKaplanlar} vs. ${ortKobralar})`);
    //     }else if(ortKobralar >= 2* ortKaplanlar){
    //         console.log(`Kobralar kazandı.(${ortKobralar} vs. ${ortKaplanlar})`);
    //     }else{
    //         console.log(`Kazanan yok`);
    //     }
    // }
    // kazananKim(kaplanSkor,kobraSkor);
    // kazananKim(234,567);

    // kaplanSkor = (85,54,41);
    // kobraSkor = (23,34,27);
    // console.log(kaplanSkor,kobraSkor)
    // kazananKim(kaplanSkor,kobraSkor);

// ternary ile yazımı
    // function ortHesap(x,y,z){
    //     return (x+y+z)/3;
    // }
    // const  ortKaplanlar = ortHesap(44,23,71);
    // const ortKobralar = ortHesap(65,54,49);

    // function kazananKim(ortKaplanlar,ortKobralar){
    //     return ortKaplanlar >= 2 * ortKobralar 
    //     ? console.log(`Kaplanlar kazandı.(${ortKaplanlar} vs. ${ortKobralar})`) 
    //     : ortKobralar >= 2* ortKaplanlar
    //     ? console.log(`Kobralar kazandı.(${ortKobralar} vs. ${ortKaplanlar})`)
    //     : console.log(`kimse kazanamadı`);
    // }
    // const kimKazandı = kazananKim(ortKaplanlar,ortKobralar);
// Javascript temelleri - bölüm 2 challenge bitiş
// ------------------ FONKSİYONLAR BİTİŞ ----------------------



// INTRO TO ARRAYS BAŞLANGIÇ DİZİLER
// Eskiden bilinen bilgiyle şu şekilde yazdırırdık.

        // const arkadas1 = "Melisa";
        // const arkadas2 = "Gül";
        // const arkadas3 = "Uğur";
    // // Bunların hepsini böyle yazmamız mümkün değil.
        // const arkadas = ["Namık","Engin","Eda"];
        // console.log(arkadas.length); //dizinin uzunluğunu döndürür. Köşeli parantez index sayısı olarak alır.
        // console.log(arkadas[1]);
        // console.log(arkadas[arkadas.length -1]);   //Arkadas.lenght toplamda 3 oluyor biz 
        // - 1 dediğimzde eda değeri gelecek çünkü 3-1 demiş oluyoruz -2 deseydik 
        // 3-2 ' den engin gelecekti.

        // arkadas[2] = "Ayşe"; //Eda yerine artık Ayşe yazacak.
        // console.log(arkadas);

        // Dizide hepsini değiştiremiyoruz içeriğini değiştirebiliyoruz.
        // consta yazıldı
        // arkadas [1] = "Melisa";
        // arkadas = ["Sema","Ali"]; //TypeError
        // console.log(arkadas);
    

        // const isim = "Murat";
        // const murat = [isim,"Akdağ",2040- 1986,"Öğretmen",arkadas];
        // console.log(murat);

        // Fonksiyon
        // const yasHesap = function(dogumYili){
        //     return 2040 - dogumYili;
        // }
        // Dizi
        // const yillar = [1986,1967,2002,2010,2018];
        // yazdırdık
        // const yas1 = yasHesap(yillar[0]);
        // const yas2 = yasHesap(yillar[1]);
        // const yas3 = yasHesap(yillar[yillar.length -1]);
        // console.log(yas1,yas2,yas3);

        // const yaslar =
        // [yasHesap(yillar[0]),
        // yasHesap(yillar[1]),
        // yasHesap(yillar[yillar.length -1])];
        // console.log(yaslar);


        // const yeniVar = [1,2,3,4];
        // yeniVar = 6; YAPAMAYIZ kutunun içeriğini değişebiliriz bütün kutuyu değiştiremem
        // yeniVar[2] = 44; GİBİ kutu içeriğini değiştirebilrim.


        // const arr = [1,2,3];
        // arr.push(4); //Mutasyon yaptık orj. diziye yeniden atayamıyoruz hafızada 1,2,3 duruyor.
        // console.log(arr);

// EGZERSİZ
// Seçitğiniz 4 ülkenin 4 nüfus değerini içeren bir dizi oluştur.
// Buu diziyi popülasyonlar adı verilen değişkende saklayın.
// Dizinin 4 elemanı olup olmadığını(true / false) konsolsa yazdır
// Bu 4 nüfus değeri için dünya nüfusu yüzdelerini içeren 'yüzdeler' adında bir dizi
// oluştur. 4 ülkenin her biri için yüzde değerlerii hesaplamak için daha önceden yapılan
// Dünyanınyüzdesi1 fonksiyonunu .

// BENİM YAPTIĞIM
    // const dunyanınYuzdesi3 = populasyon => (populasyon/7900) * 100;
        
    // const nufuslar = [1000,500,840,200];
    // const ulkeler = ["Abd","Afganistan","Türkiye","İtalya"];
    // const populasyonlar = [
    //     dunyanınYuzdesi3(nufuslar[0]),
    //     dunyanınYuzdesi3(nufuslar[1]),
    //     dunyanınYuzdesi3(nufuslar[2]),
    //     dunyanınYuzdesi3(nufuslar.length -1)
    // ];
    // console.log(populasyonlar);

    // console.log(`Ülke ${ulkeler[0]} ve ${nufuslar[0]} nüfusuna sahip dünyanın yüzdesi ise ${populasyonlar[0]}'dır.`);
    // console.log(`Ülke ${ulkeler[1]} ve ${nufuslar[1]} nüfusuna sahip dünyanın yüzdesi ise ${populasyonlar[1]}'dır.`);
    // console.log(`Ülke ${ulkeler[2]} ve ${nufuslar[2]} nüfusuna sahip dünyanın yüzdesi ise ${populasyonlar[2]}'dır.`);
    // console.log(`Ülke ${ulkeler[3]} ve ${nufuslar[3]} nüfusuna sahip dünyanın yüzdesi ise ${populasyonlar[3]}'dır.`);

// HOCAYLA YAPTIĞIM
// const populations = [10,122,1441,80];
// console.log(populations.length === 4);
// const yuzdeler =[
//     dunyanınYuzdesi3(populations[0]),
//     dunyanınYuzdesi3(populations[1]),
//     dunyanınYuzdesi3(populations[2]),
//     dunyanınYuzdesi3(populations[3])
// ];
// console.log(yuzdeler);
// EGZERSİZ BİTİŞ


// ARRAY METHODS 
// Dizilerde kullandığımız işlevler.
// Sayısız birçok işlev var

// const arkadas = ["Namık","Engin","Eda"];
// // PUSH sona ekleme
// const yeniUzunluk= arkadas.push("Ayşe"); //array'e yeni element ekler sonuncu olarak ekler.YEni uzunluğu döndürür.
// console.log(arkadas); //orijinal diziyi mutasyona uğrattık.
// console.log(yeniUzunluk);
// UNSHIFT öne ekleme
// arkadas.unshift("Yavuz"); //Array'in başlangıcına yazılan değeri koyar.
// console.log(arkadas);

// ELEMENT KALDIRMA;

// POP -> push yönteminin tam tersi sondaki öğeyi kaldırır.
// const kaldiliranElement = arkadas.pop(); //içine bir şey yazmamıza gerek yok. Mantık olarak en sondakini silecek 👍
// console.log(kaldiliranElement);
// console.log(arkadas);
// SHIFT öndeki elemanı kaldırıyor.
// arkadas.shift();
// console.log(arkadas); //Yazvuz gitti.
//INDEXOF
// console.log(arkadas.indexOf("Engin")); //Enginin arkadas dizisindeki yerini göster diyoruz. (1)
// console.log(arkadas.indexOf("Fatih")); //arkadas diziinde fatih yok -1 döner.

// INCLUDES içerir mi ? Boolean değeri döndürme eleman dizide mi değil mi gibisinden
// console.log(arkadas.includes("Eda")); //True döndü.
// console.log(arkadas.includes("Fatih")); //False döndü.

// if(arkadas.includes("Engin")){
//     console.log("Engin Burada.");
// }else{
//     console.log("Engin Burda Değil.");
// }

// EGZERSİZ
// Seçtiğiniz ülkenin tüm komşu ülkelerini içeren bir dizi oluştur
// en az 2 veya 3 komşusu olan bir ülke seç diziyi komşular adlı bir değişkende sakla
// Seçtiğiniz ülkenin yanında ütopya adlı bir ülke doğdu. onu komşular dizisinin sonuna ekle
// Ne yazık ki bir süre sonra yeni ülke dağıldı sondan geri sil
// komşular dizi "almanya" ülkesini içermiyorsa muhtemelen avp ülkesi dğeil yazsın
// komşu ülkenizden birinin adını değiş bunu yapmak için komşular dizisinden istediğinin index
// numarasını yaz ve değiş
// Örneğin isveç var mı bak ve ardından işveç cumh. ile değiş

// Benim yaptığım
    // const komsular = ["Arjantin","Bolivya","Kolombiya"];
    // komsular.push("Ütopya");
    // console.log(komsular);
    // komsular.pop();
    // console.log(komsular);

    // if(komsular === "Almanya"){
    //     console.log("Evet içeriyor");
    // }else{
    //     console.log("Muhtemelen bir orta Avrupa ülkesi değil");
    // }

    // komsular[1] = "İsveç";
    // console.log(komsular);

    // if(komsular.includes("İsveç")){
    //     komsular[komsular.indexOf("İsveç")] = "İsveç Cumhuriyeti";
    //     console.log("var");
    // }else{
    //     console.log("yok");
    // }
    // console.log(komsular);

// Hocayla yaptığım
    // const komsular = ["Norveç","İsveç","Rusya"];
    // komsular.push("Ütopya");
    // console.log(komsular);
    // komsular.pop();
    // console.log(komsular);
    // if(!komsular.includes("Almanya")){ //Not işareti ile false değeri true değere dönüştürdük.
    //     console.log("Muhtemelen bir orta Avrupa ülkesi değil..");
    // }
    // komsular[komsular.indexOf("İsveç")] = "İsveç Cumhuriyeti";
    // console.log(komsular);


// EGZERSİZ
// Engin daha önce olduğu gibi aynı kuralları kullanarak hala bahşiş hesaplayıcısını oluşturmaya 
// devam ediyor. Fatura değeri 50 ile 300 arasında ise %15 değer farklıysa %20
// GÖREVLERİNİZ
// herhangi bir fatura değerini girdi olarak alan ve ilgili değeri yukarıdaki kurallara göre hesaplayıp
// döndüren "bahşişhesap" işlevi yaz. 100'lük bir fatura değeri kullanarak test et
// 2- şimdi dizileri kullanalım. Bu nedenle aşağıdaki test verilerini içeren fatura dizi oluştur.
// 3- her bir fatura için daha önce oluşturduğunuz fonksiyondan hesaplanmış bahşiş değerini içeren
// bahşişler dizisi oluşturun
// bonus toplam değerleri (fatura + bahşiş ) içeren toplam dizisi oluşturun
// test verileri 125,555,44


    // Kendi yaptığım

    // let fatura = 125;
    // function bahsis(fatura){
    //     let yuzdehesapla =((fatura >=50 &&  fatura <= 300 ) ? fatura * 0.15 : fatura *0.2);
    //     return yuzdehesapla;
    // }
    // let faturalar = [125,555,44];
    // const bahsisler = [
    //     bahsis(faturalar[0]),
    //     bahsis(faturalar[1]),
    //     bahsis(faturalar[2])
    // ];
    // console.log(`Fatura değeriniz ${faturalar[0]} bahşiş ${bahsisler[0]} ve toplam değeriniz ${faturalar[0] + bahsisler[0]}'tir.`);
    // console.log(`Fatura değeriniz ${faturalar[1]} bahşiş ${bahsisler[1]} ve toplam değeriniz ${faturalar[1] + bahsisler[1]}'tir.`);
    // console.log(`Fatura değeriniz ${faturalar[2]} bahşiş ${bahsisler[2]} ve toplam değeriniz ${faturalar[2] + bahsisler[2]}'tir.`);

    // Hocayla yaptığım

    // const bahsisHesap = function(fatura){
    //     return fatura >= 50 && fatura <= 300 ? fatura * 0.15 : fatura * 0.2;
    // }
    //     // Ok fonksiyonu
    //     const bahsisHesap1 = (fatura) =>
    //     fatura >= 50 && fatura <= 300 ? fatura * 0.15 : fatura * 0.2;
    // const fatura = [125,555,44];

    // const bahisisler = [
    //     bahsisHesap(fatura[0]),
    //     bahsisHesap(fatura[1]),
    //     bahsisHesap(fatura[2]),
    // ];
    // console.log(fatura,bahisisler);
    // const toplam = [
    // fatura[0] + bahisisler[0],
    // fatura[1] + bahisisler[1],
    // fatura[2] + bahisisler[2]
    // ];
    // console.log(toplam);

// Haftaya nesne çağırma yöntem obje methodları Nesnelere giriş 

// // Array işlemini çağırdık. Array'e çeviriyor. new anahtar kelimesini kullanmamız gerekiyor.
// Bundansa yukarıdaki gibi köşeli parantezle kullanacağız.

    // const yil = new Array(1986,1999,2002,2012,2022);
    // console.log(yil);


// ARRAY DESTRUCTURE
// İç içe dizileri parçalama
// const testArray = [10,20,30,40,[41,42,43,44]];
// console.log(testArray);
// [a,b,c,d,e] = tesetArray

// INTRO TO ARRAYS BİTİŞ DİZİLER
