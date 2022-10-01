//  ------------------ 24-07-2022 - CUMARTESİ  ------------------ 
//------------------ Kaplan/Kobra Challenge Switch Başlangıç ------------------ 

// Kaplanlar ve Kobralar olmak üzere iki jimnastik takımı var. 3 kez yarışıyolar. en yüksek ortalama puanı alan bir takım kupa alacak.
    // GÖREVLER;
    // 1- Aşağıdaki test verilerini kullanarak her takımın ort puanını hesapla.
    // 2- Yarşmanın kazananını belirlemek için takımların ort puanlarını karşılaştır. Beraberlik olabileceğini unutma. Bunu için test et. Ortalama karşılaştır.

        // Veri 1- kaplan 96,108,89 kobra 88,91,110
            // let kaplanV1 = (96+108+89)/3;
            // let kobraV1 = (88+91+110)/3;
            //     console.log(kaplanV1,kobraV1);
            //     console.log(kaplanV1 >= kobraV1);

            // let winner;
            // if(kaplanV1 > kobraV1 && kaplanV1 >= 100){
            //     winner="kaplan";
            // }else if(kaplanV1 < kobraV1 && kobraV1 >= 100){
            //     winner="kobra";
            // }else if(kaplanV1 === kobraV1 && kaplanV1 >= 100){
            //     winner="both";
            // }
// Yukarıdaki if/else örneğini switch olarak yaz.

    //  switch(winner){
    //             case "kaplan":
    //                 console.log("kaplan kazandı");
    //                 break
    //             case "kobra":
    //                 console.log("kobra kazandı");
    //                 break
    //             case "both":
    //                 console.log("her ikiside kazandı");
    //                 break
    //         }

// EGZERSİZ ~

  // Swith İfadesi
    // 1. 'dil' değişkeni için switch ifadesi kullanın:
    // Çince veya mandarin: 'çok fazla konuşuluyor'
    // İspanyolca: 'anadili olarak dünyada 2. sırada
    // İngilizce: 3. sırada
    // Hintçe: 4. sırada
    // Arapça: ' en çok konuşulan 5. dil'
    // Diğerleri için sadece 'harika dil' yazsın.

    // let dil ="türkçe";
    // switch(dil){
    //     case "çince":
    //     case "mandarin":
    //     console.log("Çok fazla konuşuluyor");
    //     break;
    //     case "ispanyolca":
    //     console.log("Anadil olarak dünyada 2. sırada");
    //     break;
    //     case "ingilizce":
    //     console.log("3.sırada");
    //     break;
    //     case "hintçe":
    //     console.log("4. sırada");
    //     break;
    //     case "arapça":
    //     console.log("en çok konuşulan 5. dil");
    //     break;
    //     default:
    //     console.log("harika diller dostum üzülme");
    // }


// ------------------ STATEMENT && EXPRESSİON BAŞLANGIÇ (AÇIKLAMALAR - İFADELER)  ------------------ 
//     Expression bir değer üreten kod parçasına denir.

// EXPRESSION ÖRNEKLERİ
//     3 + 4 Bir expressiondur çünkü bir değer üretecektir.
//     1986' da Bir değerdir.
//     True && False && !false

// STATMENT ÖRNEKLERİ
    // Tam cümleler gibi..
    // if(23>10){
    //     const str = "23 büyük";
    // }

    // Bunu kabul etmez çünkü JS'nin bunu bir statment olduğunu bilir.
    // Expression yazmamızı beklerdi.

    //     console.log(`Ben ${2037 - 1986} yaşındayım. ${  if(23>10){
    //         const str = "23 büyük";
    //     }}`);

    //     const ben ="Melisa";
    //     console.log(`Ben ${ben} ${2037 - 1986} yaşındayım`);

// ------------------ STATEMENT && EXPRESSİON BİTİŞ (AÇIKLAMALAR - İFADELER) -----------------

// ------------------ TERNARY OPERATÖR BAŞLANGIÇ ------------------

    // IF & ELSE'in kısaltılmış hali gibi düşünebilirim. tek satıra üç tane şey giriyoruz.
        // const yas = 15;
        // 1- İlk değişken atadık
        // 2- ? işareti koyup consol'a ne yazdıracaksak onu yazdık
        // 3- : iki nokta üst üste koyarak diğer console değerini girdik
        // yas >= 18 ? console.log("Araba kullanabilir") : console.log("Yan koltuk benim");

        // const yas = 14;
        // const arabaKullanabilirMi = yas >= 18 ? "Araba kullanabilir": "Yan koltuk benim";
        // console.log(arabaKullanabilirMi);

        // const yas = 18;
        // const arabaKullanabilirMi = yas >= 18 ? "Araba kullanabilir": "Yan koltuk benim";
        // console.log(arabaKullanabilirMi);


// 1- Seçtiğiniz ülkenin nüfusu 33 milyondan fazlaysa üçlü operatörü kullanın
// konsole şöyle bir string yazdırın: 'italya'nın nüfusu ortalamanın üzerinde.'
// Aksi takdirde 'italya'nın nüfusu ortalamanın altında' yaz.
// Sadece nasıl olduğuna dikkat et. bu iki cümle arasında sadece bir kelime değişiyor.

// 2- Sonucu kontrol ettikten sonra popülasyonu 13 ve ardından 130 yap.
// Farklı sonuçları gör ve popülasyonu örjinaline geri ayarlayın.

    // let ulke = "İtayla";
    // let nufus = 34;

    // const aciklama = (`${ulke}'nın ortalaması ${nufus >= 33 ? "üzerinde" : "altındadır"}`);
    // console.log(aciklama);

// ------------------ EGZERSİZ - 19 - KOŞULLU (ÜÇlü) OPERATÖR  BİTİŞ ------------------

// IF & ELSE YAZIM ŞEKLİ BU ŞEKİLDEDİR.
//     const age = 61;
//     if ( age > 18) {
//         console.log("Kola");
//     }else if(age > 58){
//         console.log("Kolayı Bırakmalısın.");
//     }else{
//         console.log("Su iç.");
//     }

// Koşullu yaz
    // const age = 15;
    // const icebilirMi = (age >= 18 ? "Kolayı severim iç" : 
    // age >=16 ?
    // "Kolayı Bırakmalısın":
    // age >=10 ?
    // "şekerli içecek severim":
    // age >=8 ?
    // "meyve suyu severim":
    // "Süt içmeyi severim"
    // );

    // console.log(icebilirMi);

// ------------------ EGZERSİZ - 20 - BAHŞİŞ HESAPLAMA ------------------
    // Engin ne zaman restorana gitse kullanacağı çok basit bir bahşiş
    // hesaplayıcısı yapmak istiyor. Hesap 50 ile 300 arasındaysa %15 bahşiş verecek.
    // Değer farklıysa bahşiş % 20'dir.

    // GÖREVLER
    // 1- Fatura değerine bağlı olarak 'bahşiş' adlı bir değişken oluştur.
    // 2- Konsola fatura değeri bahşiş ve son değeri içeren bir dize yazdır.
    // (fatura + bahşiş) Örnek "Fatura 275 bahşiş 41.25" ve toplam değer "316,25"

    // TEST VERİSİ
    // Veri 1: 275, 40 ve 430 fatura değerleri için test

    // const fatura = 275;
    // let bahsis = (fatura >= 50 || fatura <=300 ? fatura *0.15 : fatura *0.20) ;
    // console.log(`fatura ${fatura} bahşiş ${bahsis} ve toplam değer ${fatura + bahsis}`);

    // let bahsis;
    // let fatura = 40;
    // console.log(`Fatura Değeri ${50 <= fatura <= 400 ? bahşiş = fatura * 0.15 : bahşiş = fatura * 0.20}`);

    // 50 <= fatura <= 400 
    // 50 <= fatura ------> false
    // false <= 400
    // 0 <= 400
    // true Fark etmeden false olan değeri true yapıyoruz.
// ------------------ TERNARY OPERATÖR BİTİŞ ------------------

// ------------------ USE STRICT MODE BAŞLANGIÇ ------------------
    // Hata ayıklama gibi düşünebiliriz. Değişken adını yanlış yazdığımızda console'da hata verir.
    // Doğrusunu değişken ismine geldiğimizde gösterir.
    //     let ehliyetiVarMi = false;
    //     const testiGecti = true;
    //     if (testiGecti) ehliyetiVarMi = true; (Ehliyetvarmı değişkenini ilk yanlış yazdım bana uyarı verdi. )
    //     if (ehliyetiVarMi) console.log("araba kullanabilirim.");
    // Daha sonradan kullanılacak isimler;
    //     interface, private gibi gibi..
// ------------------ USE STRICT MODE BİTİŞ ------------------
