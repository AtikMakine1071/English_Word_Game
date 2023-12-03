let kelimeler = ["Car", "Pencil", "Guitar", "Computer", "Table", "Train", "Football", "Software", "Crocodile", "World", "North", "Argentina", "Greece", "Spain", "Spinach", "Garbage", "Watermelon", "Eagle", "Creative", "Pharmacy"];
let kelimelerCevap = ["Araba", "Kalem", "Gitar", "Bilgisayar", "Masa", "Tren", "Futbol", "Yazılım", "Timsah", "Dünya", "Kuzey", "Arjantin", "Yunanistan", "İspanya", "Ispanak", "Çöp", "Karpuz", "Kartal", "Yaratıcı", "Eczane"];
let ingKelime = document.getElementById("kelime");
let tahminBtn = document.getElementById("tahminBtn");
let devam = document.getElementById("devam");
let tahmin = document.getElementById("tahmin");
let result = document.getElementById("result1");
let skor = document.getElementById("skor");
let score = 1;


document.addEventListener('DOMContentLoaded', function(){
    kelimeGoster();
});

devam.addEventListener('click', function(){
    kelimeGoster();
});

tahminBtn.addEventListener('click', function(){
    kontrol();
    kelimeGoster();
});

function kelimeGoster(){
    let rastgeleIndex = Math.floor(Math.random() * kelimeler.length);
    ingKelime.textContent = kelimeler[rastgeleIndex];
    
}

function kontrol(){
    let dogruKelime = kelimelerCevap[kelimeler.indexOf(ingKelime.textContent)];
    
    if(dogruKelime.toLowerCase() === tahmin.value.toLowerCase()){
        result.textContent = "HARİKA!";
        skor.innerHTML = score++
    }else{
        result.textContent = "MAALESEF!";
        
    }
}

function select(){
    
    tahmin.select()
}