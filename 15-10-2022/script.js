// 15-10-2022 - CUMARTESİ

// While Loop Başlangıç
    // while için koşul gerekli ve true dönmesi gerekiyor. Sayaçla ilişkili olmasına gerek yok.
// For
    // for(let tekrar = 1; tekrar<= 10; tekrar++){
    //     console.log(`for ile ağırlık kaldırma ${tekrar} tekrar`)
    // }

// While
    // let tekrar = 1;
    // while(tekrar<=10){
    //     console.log(`while ile ağırlık kaldırma ${tekrar} tekrar`)
    //     tekrar++;
    // }

// Egzersiz math.random()
// Math.trunc kesir kısmını keser. 

// let zar = Math.trunc(Math.random() * 6) + 1;
// console.log(zar);

// while(zar !== 6){ // () içerisine yazılan koşul false olana kadar döndürür.
//     console.log(`${zar} rakamını attın.`);
//     zar = Math.trunc(Math.random() * 6) + 1;
//     if(zar === 6){
//         console.log("loop bitmek üzere",zar);
//     }
// }

// Egzersiz
// Daha önce oluşturduğumuz 'popülasyon' dizisini while döngüsü kullanarak 
// yüzdeler3 olarak yeni diziye çağır

    // const populations = [10,122,1441,80];
    // const yüzdeler3 = [];
    // const dünyanınYüzdesi3 = (populations) => (populations / 7900) * 100;
    // let i = 0;

    // while(i <populations.length){
    //     const yüzde = dünyanınYüzdesi3(populations[i]);
    //     yüzdeler3.push(yüzde);
    //     i++;
    // }
    // console.log(yüzdeler3);

// Son egzersiz 
// const bahsisHesap1 = (fatura) => fatura >= 50 && fatura <= 300 ? fatura * 0.15 : fatura * 0.2;
// const fatura = [22, 295, 176, 440, 37, 105, 10, 1100, 86 , 52];
// const bahsisler = [];
// const toplamlar = [];

// for(let i = 0;i<fatura.length; i++){
//     const bahsis = bahsisHesap1(fatura[i]);
//     bahsisler.push(bahsis)
//     toplamlar.push(bahsis + fatura[i]);
// }

// Benim yaptığım..
// for(let i = 0; i < fatura.length; i++){
// bahsisler.push(bahsisHesap1(fatura[i]))
// console.log(`bahsisler ${bahsisler[i]}`)
// toplamlar.push(bahsisler[i]+fatura[i])
// console.log(`toplam ${toplamlar[i]}`);
// }
// Benim yaptığım bitiş..

// console.log(fatura,bahsisler,toplamlar);

// Bonus
    // const ortHesap = function(arr){
    //     let toplam = 0;
    //     for(let i = 0; i<arr.length; i++){
    //         // toplam = toplam + arr[i]
    //         toplam += arr[i]
    //     }
    //     // console.log(toplam)
    //     return toplam/arr.length
    // }
    // console.log(ortHesap(toplamlar))
    // console.log(ortHesap(bahsisler))
// While Loop Bitiş



// DEBUGGING Başlangıç
// reverse([1,3,5,6] ==> [5,1,7,3])

// const ölçümKelvin = function (){
//     const ölçüm = {
//         tür: "sıcaklık",
//         birim: "santigrat",
//         // c- Hatayı düzeltmek
//         değer: Number(prompt("Santigrat derece: ")), //promt her zaman string döndürür.
//     }
//     // console.log(ölçüm.değer)
//     console.log(ölçüm)
//     console.table(ölçüm)
//     // console.warn(ölçüm.değer)
//     // console.error(ölçüm.değer)
//     const kelvin =ölçüm.değer + 273
//     return kelvin
// }
// a- Hatayı tanımlamak
// b- Hatayı bulmak

// console.log(ölçümKelvin()); //10273 geldi 10'u string yazdı.

// Egzersiz drawio 181

// Sorunu Anlamak 
// dizi,array, dizeye dönüştürülmüş ve üç nokta ile ayrılmış
//  X günler nedir ? => index + 1
// Alt problemlere böl
// Diziyi(array) bir diziye dönüştürmek
// her bir öğeyi dize için celcius ile dönüştürelim.
// dizenin gün içermesi gerekiyor (index + 1)
// Elementlerin arasında ve dizenin sonunda üç noktayı eklememiz gerekiyor.


// HATALI HOCADAN AL BU KISMI
    // const data1 =[17,21,23];
    // const data2= [12,5,-5,0,4];
    // console.log(`...${data1[0]}C...${data1[1]}C...${data1[2]}...`);
    // const havaTahmini = function(arr){
    //     let str= "";
    //     for (let i =0; i<arr.length; i++){
    //         str += str+`${i + 1}günde  ${arr[i]}C...`
    //     }
    //     console.log('...'+ str);
    // }
    // havaTahmini(data1)

// DEBUGGING Bitiş
