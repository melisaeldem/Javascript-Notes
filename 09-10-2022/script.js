// 09-10-2022 - PAZAR
// ---------------------
    // const murat = {
    //     mAd: "Murat",
    //     mSoyad:"Akdağ",
    //     mKilo:78,
    //     mBoy: 1.69,
    //     bmiHesap: function(){
    //         let muratBmi = this.mKilo / this.mBoy **2 ;
    //         return muratBmi
    //     },
    // };
    // console.log(murat.bmiHesap());
    // console.log(murat);
    // const engin ={
    //     eAd: "Engin",
    //     eSoyad:"Derin",
    //     eKilo:92,
    //     eBoy:1.95,
    //     bmiHesap: function(){
    //         let enginBmi = this.eKilo / this.eBoy **2 ;
    //         return enginBmi
    //     },
    // };
    // // console.log(engin.bmiHesap());
    // // console.log(engin);
    // console.log(`${murat.bmiHesap > engin.bmiHesap ? 
    // `${murat.mAd}ın ${murat.bmiHesap()} ${engin.eAd}'inkinden 
    // ${engin.bmiHesap()} daha yüksek.` : `${engin.bmiHesap()} ${murat.mAd}'inkinden 
    // ${murat.bmiHesap()} daha yüksek.`}`);
    // // clg kısmını tek backtick ile yazabiliyoruz.
    // if(murat.bmiHesap > engin.bmiHesap) {
    //     console.log(`${murat.ad} ${murat.mSoyad}'ın BMI (${murat.bmiHesap()}) ${engin.eAd} ${engin.eSoyad}'in BMI (${engin.bmiHesap()}'ından büyüktür.)`);
    // }else if(engin.bmiHesap > murat.bmiHesap){
    //     console.log(`${engin.eAd} ${engin.eSoyad}'ın BMI (${engin.bmiHesap()}) ${murat.mAd} ${murat.mSoyad}'in BMI (${murat.bmiHesap()}'ından büyüktür.)`);
    // }

    // console.log(`${murat.mAd}'ın BMI (${murat.bmiHesap()}) ${murat.bmiHesap > engin.bmiHesap ? "Büyük" : "Küçük"} ${engin.eAd} ${engin.bmiHesap()}'dan`);

// INTRO TO OBJECT BİTİŞ

//LOOP BAŞLANGIÇ => DÖNGÜLER
// Normal yazdırma işlemi 
// Koşul doğru iken for döngüsü çalışmaya devam eder.
// console.log("ağırlık kaldırmak 1.tekrar");
// console.log("ağırlık kaldırmak 2.tekrar");
// console.log("ağırlık kaldırmak 3.tekrar");
// console.log("ağırlık kaldırmak 4.tekrar");
// console.log("ağırlık kaldırmak 5.tekrar");
// console.log("ağırlık kaldırmak 6.tekrar");
// console.log("ağırlık kaldırmak 7.tekrar");
// console.log("ağırlık kaldırmak 8.tekrar");
// console.log("ağırlık kaldırmak 9.tekrar");
// console.log("ağırlık kaldırmak 10.tekrar");
// For yani döngü ile yazdığımız işlem
    // for(let tekrar = 5; tekrar <= 10; tekrar++){
    // console.log(`ağırlık kaldırmak ${tekrar}.tekrar`);
    // }

// EGZERSİZ BAŞLANGIÇ
// Amacınız 1'den 10'a kadar bir tamsayı olan sayı için çarpım tablosunu döndürmektir.
// Örneğin, sayı == 5 için bir çarpım tablosu (string) aşağıdaki gibi görünür:
// 1 * 5 = 5// 2 * 5 = 10// 3 * 5 = 15// 4 * 5 = 20// 5 * 5 = 25// 6 * 5 = 30// 7 * 5 = 35// 8 * 5 = 40// 9 * 5 = 45// 10 * 5 = 50
// P. S. sonraki satıra atlamak için Dizede \n kullanabilirsiniz

// function çarpımTablosu(){
    //     let str = ''
    //     for(let input= 1; input<= 10;input++){
    //         str += `${input} * 5 = ${input*5}\n`
    //     }
    // return str;
    // }
    // console.log(çarpımTablosu());
// EGZERSİZ BİTİŞ

// CHALLENGE BAŞLANGIÇ
// Ülkemizde seçim var. Küçük bir köyde sadece 50 seçmen var 50 kişinin oy vermesini simüle etmek için
// bunun gibi bir dizede konsola kaydederek for döngüsü kullan ve şu yazsın
// ('1-50 numaralı seçmen şu anda oy kullanıyor)

    // for(let koy = 1; koy <= 50; koy++){
    //     console.log(`${koy} Numaralı seçmen şu anda oy kullanıyor.`);
    // };
// CHALLENGE BİTİŞ

// ARRAY DÖNGÜLER
// Egzersiz 1 Başlangıç
// const muratDizisi = [
// "Murat",
// "Akdağ",
// 2022-1986,
// "Öğretmen",
// ["kerem","tuğçe","bora"],
// true,
// 23,
// ];
// const türler = []
// console.log(muratDizisi); //uzunluk 5 ancak index 0'dan başlıyor.

// console.log(muratDizisi[0]);
// console.log(muratDizisi[1]);
// console.log(muratDizisi[2]);
// console.log(muratDizisi[3]);
// console.log(muratDizisi[4]);

// Muratdizi[i] yazmamızın sebebi dönsün diye
    // for(let i = 0; i< muratDizisi.length ;i++){
// console.log(muratDizisi[i], typeof muratDizisi[i]);

// Türler dizisini doldurduk.
    // türler[i] = typeof muratDizisi[i]
// Push ile de yazabiliriz.
    // türler.push(typeof muratDizisi[i])
// }
    // console.log(türler);
// Egzersiz 1 Bitiş

// Egzersiz 2 Başlangıç
    // const yıllar =[1974,1986,200,2004];
    // const yaşlar = []
    // for(let i = 0; i < yıllar.length; i++){
    //     yaşlar.push(2022 - yıllar[i]);
    // }
    // console.log(yaşlar);
    // console.log(yıllar);
// Egzersiz 2 Bitiş

// Continue & Break
    // const muratDizisi = [
    // "Murat",
    // "Akdağ",
    // 2022-1986,
    // "Öğretmen",
    // ["kerem","tuğçe","bora"],
    // true,
    // 23,
    // ];
    // // const türler = []
    // console.log(muratDizisi); //uzunluk 5 ancak index 0'dan başlıyor.

    // console.log("------Sadece Stringler Gelecek------")
    // for(let i = 0; i< muratDizisi.length ;i++){
    // if(typeof muratDizisi[i] !== 'string') continue
    // // if(typeof muratDizisi[i] === 'number') numbersa yazdır dedik continue gerek kalmıyor.
    // console.log(muratDizisi[i], typeof muratDizisi[i]);
    // }
    // // ---------------------
    // console.log("------Number Break------")
    // for(let i = 0; i< muratDizisi.length ;i++){
    // if(typeof muratDizisi[i] === 'number') break // murat string akdağ string numberi gördüğü 
    //                     // an döngüyü orada sonlandırdı alttaki string ifadeleride yazdırmadı.
    // console.log(muratDizisi[i], typeof muratDizisi[i]);
    // }
// ---------------------
// EGZERSİZ Başlangıç

// diziye aranan 4 popülasyon değerini içerecek'yüzdeler2' adlı yeni bir dizi oluşturmak için
// for döngüsünü kullan.Yüzdelerini hesaplamak için önceden oluşturulan dünyanınyüzdesi3 fonksiyonunu kullan
// yüzdeler2'nin bir önceki atamada manuel olarak oluşturulan 'yüzdeler' dizisi ile tam olarak aynı değerleri içerdiğini doğrula.

    // const dünyanınYüzdesi3 =(population) =>(population/7900) * 100;
    // const population =[10,144,80,123];

    // const yüzdeler2 = [];
    // for(let i = 0; i<population.length; i++){
    //     yüzdeler2.push(dünyanınYüzdesi3(population[i]));
    // }
    // console.log(yüzdeler2);
// EGZERSİZ Bitiş

// ---------------------

    // const bird =[
    //     "serçe",
    //     "martı",
    //     30,
    //     ["Doğan","Şahin","Kartal","Atmaca","Baykuş"],
    // ]
    // for(let i = 0; i <bird.length; i++){
    //     if(typeof bird[i] === "object"){
    //         console.log(bird[i]);
    //     }
    // }
    // for(let i = 0; i <bird.length; i++){
    //     if(Array.isArray(bird[i])){
    //         console.log(bird[i]);
    //     }
    // }
// ---------------------

// Tersten yazdırma
    // const muratDizisi = [
    // "Murat",
    // "Akdağ",
    // 2022-1986,
    // "Öğretmen",
    // ["kerem","tuğçe","bora"],
    // ];
    // for(let i = muratDizisi.length -1; i >= 0; i--){
    //     console.log(i,muratDizisi[i]);
    // }
// ---------------------
// İç içe döngü
    // for(let egzersiz = 1; egzersiz < 4; egzersiz++){
    //     console.log(`${egzersiz} numaralı egzersiz`)
    //     for(let tekrar = 1; tekrar <=5; tekrar++){
    //         console.log(`${egzersiz}. egzersiz Ağırlık kaldırma ${tekrar}`);
    //     }
    // }

// ---------------------
// Egzersiz 
// 
// const komşularınListesi = [['Kanada', 'Meksika'], 
// ['İspanya'], 
// ['Norveç', 'İsveç','Rusya']
// ];

// for(let i = 0; i < komşularınListesi.length; i++){
//     for(let y = 0; y < komşularınListesi[i].length;y++){
//         console.log(`Komşular: ${komşularınListesi[i][y]}`);
//     }
// }


//LOOP BİTİŞ

