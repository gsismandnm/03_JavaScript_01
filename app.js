/* GENEL BİLGİLER
  console.log 'Merhaba Kursiyerler'

    var data =12;
    var mesaj ="Hos geldiniz."
    data =34;
    Console ekrana yazdırmak için göstermek için kullanılır.
    console.log("Değişkenimizin Değeri =" + data + " " + mesaj)
    iki string değeri toplarkende matematik işlemlerde de + işareti kullanılıyor.

    Javascript büyük küçük harf duyarlılığı vardır.
    console yazarken mutlaka ne yazdıysanız onu yazmanız lamız.
    var name= "Murat";
    console.log (name);
    
    CAMEL CASE yazılım kuralı. ilk harf küçük sonraki kelimeler büyük
    ÖRNEK : var fetchUserNameFromService
*/

/*  ARİTMATİK OPERATÖRLER : 
    +   TOPLAMA
    -   ÇIKARMA
    /   BÖLME
    *   ÇARPMA
*/

/*  KARŞILAŞTIRMA OPERATÖRLERİ:
    ==  EŞİT İSE
    === VERİ TİPİ DAHİL EŞİT İSE
    !=  EŞİT DEĞİL İSE 
    !== VERİ TİPİ DAHİL EŞİT DEĞİLSE
    >   BÜYÜKTÜR
    <   KÜÇÜKTÜR
    >=  BÜYÜK EŞİT
    <=  KÜÇÜK EŞİT
*/

/*  MANTIKSAL KARŞILAŞTIRMA OPERATÖRLERİ
    &&  VE
    ||  VEYA

    ÖRNEK:
    var num1 = 1;
    var num2 = 2;
    var num3 = 3;
    bunlar şu şekilde de yazılabilir 
    var num1 = 1; num2 = 2; num3 = 3; 
    Aşağıdaki şekilde de yazılabilir. Aralara , en sonuna ; konulması gerekir.
    var num1 = 1,
        num2 = 2,
        num3 = 3;
    yazılabilir.
    
    concole.log(num1) yazarsak 1 sonucu çıkar
    concole.log ((num1 == 1 && num2 == 2) || num3 = 4);

*/

/*  DÖNGÜLER
    FOR DÖNGÜSÜ 
        belli sayıda işlemi tekrar için kullanılır.
        for (var i = 0; i<= 10; i++){
        console.log ("Sayımızın degeri= " + i)
        }
    WHILE DÖNGÜSÜ
    
        var i = 1, name = "Murat"
        while (i<20){
        console.log ("Sayımızın degeri= " + i)    
        i++}
    
    DO WHILE DÖNGÜSÜ
        var i = 1;
        do{
            console.log ("Sayımızın değeri =" + i)
        i++;
        while (i < 3);
        }
*/

/*  IF ELSE Conditions
    ŞAYET DEĞERİM BUNA EŞİTSE ŞUNU YAP DEĞİLSE BUNU YAP.
    var str = "Hava güzel mi?";
    if (str == "Hava güzel mi?"){
        console.log ("O zaman dışarı çık.")
    } 
    else{
        console.log ("Evinde otur. Yemek yap.");
        }
    } 
*/

/*  FONKSİYONLAR

    var num1 =5, num2 =10

function topla (){
    console.log ("Toplam= " + (num1 + num2))
    }
    topla(3 + 5)

function cikar (sayi_1, sayi_2){
    return sayi_1 + sayi_2;
    console.log ("Toplam= " + (num1 - num2))
    }
    BAŞKA BİR ÖRNEK 3 VE 5 SAYISINI TOPLAMA
    function topla (sayi1, sayi2){
    console.log ("Toplam= " + (sayi1 + sayi2))
    }
    topla(3 + 5)

    BAŞKA BİR ÖRNEK KOMPLEX İŞLEM YAPILABİLİR
    console.log ("Sonuc : "+(topla (7, 3) * cikar(4, 2)));
    sonuç : 20 çıkar.
*/