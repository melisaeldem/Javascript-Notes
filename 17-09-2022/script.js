// ------------------  17-09-2022 - CUMARTESİ ------------------
// Noktalı bir şey kullanacğımız zaman ya iki farklı virgülü kullanacağız ya da kaçış operatörü.
    // console.log("kurt kırmızı başlıklı kıza:\"nereye gidiyorsun ? küçük kız\"demiş");

    // const ad = "Murat";
    // const is = "Öğretmen";
    // const dogumYili= 1986;
    // const yil = 2050;

    // const murat = "I'm " + ad + ",a " + (yil - dogumYili) + "years old " + is 
    //     // console.log(murat);

    // let str = "Hello";
    // str += " ";
    // str += "World";
    // str // Hello World olarak düzenlenir (Boşluklu)
    // console.log(str);

// Bu çok daha kolay ! değişken isimlerini ${} içerisine yazıyoruz.
//     const yeniMurat =`I'm ${ad} a ${yil - dogumYili} years old. ${is}'lik yapıyorum. `
//     console.log(yeniMurat);
// // Backtick ile Konsola yazdırabiliyoruz.
//     console.log(`Bu bir dizedir`);

// // Bu \n\ yapıldığı zaman bir alta geçiyor.
//     console.log('Bu birinci dize. \n\
//     Bu da ikinci dize. \n\
//     Buda üç :).');
// // Backtick ile \n\ yapmamıza gerek kalmıyor.
//     console.log(`Bu birinci satır
//     bu ikinci satır`);

// ------------------ EGZERSİZ - 7 ------------------
    // const ulke = "Türkiye";
    // // console.log(typeof ulke);
    // //    ulke = "Avrupa"; // HATA VERECEKTİR.
    // const kita = "Asya";
    // // console.log(typeof kita);
    // let nufus = 84000000;
    // // console.log(typeof nufus);
    // let dil 
    // // console.log(typeof dil);
    // dil = "konuşulan dil";
    // // console.log(dil);

// Alttaki örnekte backtick kullandık (``) bunlarına arasına değişken ismini girdiğimzide 
// Değişkene atanan veri geliyor.
        // const desciption = `${ulke} ${kita} kıtasında bulunuyor.
        //  Nüfusu ise ${nufus}. ${dil} ise Türkçe'dir.`

    // console.log(desciption);

// ------------------ IF & ELSE ------------------
// Birinin ehliyet alabiliyor mu alamıyor mu onu kontrol eden sistem.
//     Birinci seçenekte yaş uygunluğu için bir değişken oluşturduk. 
    // Oluşturduğumuz değişkeni if'in () içerisine yazdım.
        // let yas1 = 14;
        // const yasiUygunMu = yas1 >= 18;
        // if(yasiUygunMu){
        //     console.log("Ehliyet alabilir.");
        // }else{
        //     console.log("Ehliyet alamaz.");
        // }


    // İkinci seçenek'te ise direkt olarak değişkene yazdığımız 
    // işlemi if'in () içerisine yazdım.

        // const isim= "Melisa";
        // let yas = 14;
        // if(yas >= 18){
        //     console.log("Ehliyet alabilir.");
        // }else{
        //     const yilKaldi = 18 - yas;
        //     console.log(`Ehliyet almasına ${yilKaldi} yıl kaldı. ✌🤞`);
        // }

//  Doğum Yılı Değişkeni Kaçıncı Yüzyılda doğdu ?. Değişkenin ilk dışında yazılması gerekiyor.
        // const dogumYili1 = 2002;
        // let yuzYil;
        // if (dogumYili1 <2000){
        //     yuzYil = 20;
        // }else{
        //     yuzYil = 21;
        // }
        // console.log(yuzYil);

// ------------------ IF & ELSE CHALLENGE EGZERSİZ - 8 ------------------
//  const ulke = "Türkiye";
//  console.log(typeof ulke);
//     //    ulke = "Avrupa"; // HATA VERECEKTİR.
//  const kita = "Asya";
//     console.log(typeof kita);
//  let nufus = 34;
//     console.log(typeof nufus);
//  let dil 
//     console.log(typeof dil);
//  dil = "konuşulan dil";
//     console.log(dil);

// if(nufus > 33){
//     console.log(`${ulke}'nin nüfusu ortalamanın üstünde`);
// }else if(nufus >= 33){
//     console.log(`${ulke}'nin nüfusu ortalama`);
// }else{
//     console.log(`${ulke}'nin nüfusu ortalamanın ${33-nufus} altında`);
// }

// ------------------ BMI CHALLANGE EGZERSİZ - 9 ------------------
//     let agirlikMurat = 87.4;
//     let boyMurat = 1.87;
//     let agirlikEngin = 92;
//     let boyEngin = 1.95;

//     let muratBmi = agirlikMurat / boyMurat **2;
//     let enginBmi = agirlikEngin / boyEngin **2;
//     console.log(muratBmi,enginBmi);
//     let buyukBmı = muratBmi > enginBmi;
//     console.log(muratBmi,enginBmi,buyukBmı);

// if(muratBmi > enginBmi){
//     console.log(`Murat'ın Bmi ${parseInt(muratBmi)} , Enginin Bmi'sından ${parseInt(enginBmi)} büyüktür`);
// }else{
//     console.log(`Engin'in BMI ${enginBmi} Muratın BMI'sından yüksek.`);
//     }

// ------------------ TÜR DÖNÜŞTÜRME & ZORLAMA / Type conversion & Coercion BAŞLANGIÇ ------------------
// Type Conversion -> Tür dönüştürme
    // let girisYili ='1986';
    // console.log(Number(girisYili), girisYili); // Number olarak yazdığımız birinci girisYili number değerini veriken normal yazdığımız ise string olarak karşımıza çıkar.
    // console.log(Number(girisYili)+ 18); //Number ile yazdığımız için 18' de number türüne sahip toplama işlemi gerçekleşir. //2004
    // console.log(Number("Murat")); //Nan değeri gelir.
    // console.log(typeof Nan); //undefined
    // console.log(String(23),23); //string olarak yazdığımız 23 string değerini verirken diğer 23 number'i verecektir.

// ------------------ Type Coercion -> Zorlama ------------------
    // console.log('Ben '+ 36 +' yasindayım');
    // console.log('Ben '+ String(36)+ ' yasindayim.');
    // console.log('36'- '10' - 3); //?
    // console.log('36'+'10'+ 3); //?
    // console.log('36' * '2');

    // let n = "1" + 1 //11
    // n = n -1; //10
    // console.log(n);

    // let x = '9' - '5'; //4
    // console.log(x);
    // let xx = '19' - '13' + '17'; //617  + operatoru aşırı yüklenmiştir. İşleme girenlerden biri string bir değerse ikisini de string yapmaya zorlar ve string birleştirme işlemi gerçekleştirir.
    // xx = '19' - '13' + 17; //23
    // xx = 5 + 6 + '4' + 9 - 4 -2; //1143  + operatoru aşırı yüklenmiştir. İşleme girenlerden biri string bir değerse ikisini de string yapmaya zorlar ve string birleştirme işlemi gerçekleştirir.
    // console.log(xx);


// ------------------ TRUTHY & FALSEY BAŞLANGIÇ ------------------
// 5 tane falsey değer var: 0,"",undefined,NaN,null.

    // console.log(Boolean(0)); // False
    // console.log(Boolean(undefined)); //False
    // console.log(Boolean('Murat')); //True
    // console.log(Boolean({})); //True
    // console.log(Boolean('')); //False

// ------------------ EGZERSİZ - 10 ????? ------------------
    // const money = 100;
    // console.log(Boolean(0));
    // if(money){
    //     console.log('Sakın Harcama.');
    // }else{
    //     console.log('İş Bulmalısın.');
    // }

    // let yukseklik = 0; //false
    // if(yukseklik){
    //     console.log('Yükseklik Tanımlanmıştır.');
    // }else{
    //     console.log('Yükseklik yok.');
    // }
    
// ------------------ TRUTHY & FALSEY BİTİŞ ------------------

// ------------------ EŞİTLİK OPERATÖRLERİ BAŞLANGIÇ ------------------
    //  benzer türde olmayan değerler için yanlış döndüren katı bir eşitlik karşılaştırma operatörüdür. 
    // Bu operatör, eşitlik için tür atama gerçekleştirir. === kullanarak 2'yi "2"
    //  ile karşılaştırırsak, bu durumda yanlış bir değer döndürür.
    // const yas = '18';
    // if(yas === 18) console.log(`Yeni yetişken oldun(katı,strict)`); //Tür bakımından eşit değil false.
    // if(yas == 18) console.log('Yeni yetişken oldun(gevşek,loose)'); //Tür bakımından aynı ekkranda gözükecek bu.

// ------------------ EGZERSİZ - 11 ------------------
    // const favoriNumaram = Number(prompt('En sevdiğin numara ?')); //promt değer girilebilen bir alert gibi.
    // if (favoriNumaram === 23){
    //     // 22 === 23 //False
    //     // 23 === 23
    //     console.log('23 bir sayıdır.');
    // }
    // else if (favoriNumaram === 7) {
    //     console.log('7 şanslı numaram.');
    // } 
    // else if (favoriNumaram === 9) {
    //     console.log('9 fena değil');
    // }
    // else{
    //     console.log('sayı 23,9 ve 7 değil.');
    // }

// ------------------ EŞİTLİK OPERATÖRLERİ BİTİŞ ------------------

// ------------------ KOMŞU SAYISI CHALLENGE BAŞLANGIÇ EGZERSİZ -12 ------------------
// const numNeighbours = prompt('Ülkenizin kaç komşusu var');

    // const numNeighbours = Number(prompt('Ülkenizin kaç komşusu var ?'));

    // if (numNeighbours === 1) {
    //     //"1" == 1
    //     console.log('Sadece bir komşu');
    // }else if(numNeighbours > 1){
    //     console.log('Komşu sayısı birden fazla.');
    // }else{
    //     console.log('Komşu yok.');
    // }

// ------------------ KOMŞU SAYISI CHALLENGE BİTİŞ ------------------ 


    // NaN = NaN
    // console.log(typeof NaN);

    // x === y ;
    // x - y === 0 ;
    // console.log(NaN - NaN);

    // favoriNumaram === NaN;
    // isNaN(favoriNumaram);

    // if(isNaN(favoriNumaram)){
    //     // NaN olup olmadığını kontrol eder.
    //     console.log('Lütfen bir sayı giriniz..');
    // }