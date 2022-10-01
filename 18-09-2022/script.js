// 18.09.2022 PAZAR

    // const age = Number(prompt(`Please enter your age:`));
    // if(age===100){;
    //     console.log('Congrats you have reached the age of 100');
    // }
    // else if (age>=18) {
    //         console.log(`You are eligible to vote`);
    // }else console.log(`You can apply for voting in${18 - age}`);

// ------------------ BOOLEAN LOGIC BAŞLANGIÇ ------------------
// AND , OR , NOT 

// A. Murat'ın ehliyeti var.
// B. Murat gözlük kullanıyor.

// AND;
// And operatöründe her ikisininde true döndürmesi gerekiyor.
    // Bir tanesi bile false olsa sonuç falsedir.
//Murat'ın ehliyeti var. AND Murat gözlük kullanıyor.

// OR;
// Or operatöründe değişkenlerden bir tanesinin true döndürmesi yeterli.
//Murat'ın ehliyeti var. OR Murat gözlük kullanıyor.

// NOT;
// !A verdiği değer //true ise -> false , false ise -> true'dur.

// yas = 16;   
    // a yasin 20'den büyük veya esit olmasi -> false
    // b yasin 30'dan az olmasi -> true
    // ---
    // !a -> true yaş ne 20'ye eşit ne büyük 
    // !b -> false yaş 30'dan az fakat '!' tam tersini alıyor.

    // A OR B -> True gelir.

    //!A and B -> True gelir. A false iken önüne ! koyduğumuz için tam tersini alacaktır.

    //A OR !B -> Her ikiside false olduğu için cevap False.
    
    // Not operatörü and ve or operatörüne göre daha öncelikli 
    // Değerler ilk terse çevrilir daha sonra and,or işlemi yapılır. 

        // const ehliterVarMi = true; //A
        // const GorusuVarMi = true; //B
        // const yorgunDegilse = false; //C

    // console.log(ehliterVarMi || GorusuVarMi || yorgunDegilse);
    // console.log(ehliterVarMi && GorusuVarMi && yorgunDegilse);

    // AND &&
        // console.log(ehliterVarMi && GorusuVarMi); //false
    // OR ||
        // console.log(ehliterVarMi || GorusuVarMi); //true
    // NOT !
        // console.log(!ehliterVarMi); //false
        // console.log(!GorusuVarMi); //false

        // const kullanabilirMi = ehliterVarMi && GorusuVarMi;
        // if(kullanabilirMi){
        //     console.log("Murat araç kullanabilir.");
        // }else{
        //     console.log("Murat araç kullanamaz.");
        // }
        // const kullanabilirMi = ehliterVarMi && GorusuVarMi && !yorgunDegilse;
        // if(kullanabilirMi){
        //     console.log("Murat araç kullanabilir.");
        // }else{
        //     console.log("Murat araç kullanamaz.");
        // }

// EGZERSİZ - 13

// Engin yeni bir ülke arıyor. 
// 1- İngilizce konuşan, 
// 2- Nüfusu 50 milyondan az olan, 
// 3- ve ada olmayan,
// Koşullu bir if ifadesi yaz.
// Doğru ülkeyse 'türkiye'de yaşamalısın :)' yanlış ise 'türkiye kriterlerinizi karşılamıyor :(' yazsın.
// Seçtiğiniz ülke tüm kriterleri karşılamıyor ise koşulu doğru yapmak için 
// bazı değişkenleri değiştir.

//     const ulke = 'Türkiye';
//     console.log(typeof ulke)
//     //   ulke = "Avrupa"; // HATA VERECEKTİR.
//     const kita = 'Asya';
//     console.log(typeof kita);
//     let nufus =14;
//     console.log(typeof nufus);
//     let dil;
//     console.log(typeof dil);
//     dil = 'ingilizce';
//     console.log(dil);
//     let adaMi = false;
//     console.log(typeof adaMi);
//     console.log(adaMi);

// if(dil === "ingilizce" && nufus <= 50 && !adaMi){
//     console.log("Türkiyede yaşamalısın");
// }else{
//     console.log("Türkiyede yaşama");
// }


// ------------------ BOOLEAN LOGIC BİTİŞ ------------------

// EGZERSİZ - 14

// Kaplanlar ve Kobralar olmak üzere iki jimnastik takımı var. 3 kez yarışıyolar. 
// en yüksek ortalama puanı alan bir takım kupa alacak.
// GÖREVLER;
// 1- Aşağıdaki test verilerini kullanarak her takımın ort puanını hesapla.
// 2- Yarşmanın kazananını belirlemek için takımların ort puanlarını karşılaştır. 
// Beraberlik olabileceğini unutma. Bunu için test et. Ortalama karşılaştır.

// Veri 1- kaplan 96,108,89 kobra 88,91,110
    // let kaplanV1 = (96+108+89)/3;
    // let kobraV1 = (88+91+110)/3;
    // console.log(kaplanV1,kobraV1);
    // console.log(kaplanV1 >= kobraV1);

    // if(kaplanV1 > kobraV1){
    //     console.log(`Kaplanlar ${parseInt(kaplanV1)}puan ile kazandı`);
    // }else if(kobraV1 > kaplanV1){
    //     console.log(`Kobralar ${parseInt(kobraV1)}puan ile kazandı`);
    // }else if(kaplanV1 === kobraV1){
    //     console.log(`İki takımında puanları eşit, Beraberlik!`);
    // }else{
    //     console.log(`Kimse kazanamadı`);
    // }

// BONUS1: 3- Minimum 100 puan şartı içerir. 
// Bu kuralla, Takım sadece diğer takımdan daha yüksek bir puana sahipse ve aynı zamanda 
// en az 100 p. varsa kazanır.
// İpucu: Minimum değeri test etmek için mantıksal bir operatörün yanı sıra çoklu else-if blok kullan.
// BONUS-1
// Veri 2- kaplan 97,112,101 kobra 109,95,123
    // let kaplanV2 = (97+112+101) / 3;
    // let kobraV2 = (109+95+123) / 3;
    // let min = 100;
    // console.log((parseInt (kaplanV2)) , kobraV2);

    // if(kaplanV2 > kobraV2 && kaplanV2 >= 100){
    //     console.log(`Kaplan takımı hem 100 puanı hemde kobra takımını geçti!`);
    // }else if(kobraV2 > kaplanV2 && kobraV2 >= 100){
    //     console.log(`Kobra takımı hem 100 puanı hemde kaplan takımını geçti!`);
    // }else if(kaplanV2 === kobraV2 && kaplanV2 >= 100 && kobraV2 >= 100){
    //     console.log(`İki takımda 100 puan üstü ve eşitler. Berabere ! `);
    // }else{
    //     console.log(`kimse kazanamadı`);
    // }


// BONUS -2 Minimum puan beraberlik için de geçerli! her ikisininde 100 den büyük veya
// eşit puan ise geçerli yoksa iki takımda kazanamz.
// BONUS-2 
// Veri 3- kaplan 97,112,101 kobra 109,95,106
    // let kaplanV3 =(97+112+101)/3;
    // let kobraV3 = (109+95+106)/3;
    // // console.log(kaplanV3,kobraV3);
    // let min3 = 100;
    
    // if(kaplanV3 >= kobraV3 && kaplanV3 > min3 && kobraV3 > min3){
    //     console.log("İki takımın puanlarıda eşit.");
    // }else{
    //     console.log("İki takımda kazanamadı.");
    // }


// ------------------ SWITCH STATEMENT BAŞLANGIÇ ------------------
    // Break koymadığımız zaman alttaki maddeleride alır.
    // case değer console.log ne yapacağına bakabilirsin / break kesme işareti gibi
    // const gun ="pazartesi";
    // switch(gun){ 
    //     case"pazartesi" : // Gün === "pazartesi" kod doğruya iki console devreye girer.
    //     console.log("Kurs planlaması yap.");
    //     console.log("Sabah toplantısı.");
    //     break
    //         case"salı" :
    //         console.log("Spora git.");
    //     break
    //         case"çarşamba":
    //         case"perşembe":
    //      console.log("Yemek yap.");
    //     break
    //         case"cuma":
    //         console.log("Dinlen.");
    //         break
    //         case"cumartesi":
    //         case"pazar":
    //      console.log("Haftasonunun keyfini çıkart.");
    //     break
    //     default: 
    //     console.group("Geçerli bir gün değil.");
    // }
// ------------------ SWITCH STATEMENT BİTİŞ ------------------
// Yukarıdaki Switch ifadesini if / else ile yaz.
    // let gun = "pazar";
    // console.log(gun);

    // if(gun === "pazartesi"){
    //     console.log("Kurs planlaması yap.");
    //     console.log("Sabah toplantısı.");
    // }else if( gun === "salı"){
    //     console.log("Spora git.");
    // }else if(gun === "çarşamba" || gun =="perşembe"){
    //     console.log("Yemek yap.");
    // }else if(gun === "cuma"){
    //     console.log("Dinlen.");
    // }else if( gun === "cumartesi" || gun === "pazar"){
    //     console.log("Haftasonunun keyfini çıkart.");
    // }else{
    //     console.log("Böyle bir gün yok dostum");
    // }
