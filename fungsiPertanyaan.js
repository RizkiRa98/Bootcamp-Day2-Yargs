const fs  = require('fs');
var validator = require('validator');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

//buat folder dan file
//buat variabel untuk menyimpan lokasi penyimpanan
const dirPath = './data';
const dataPath = './data/contacts.json';

//cek folder sudah ada atau tidak, jika tidak buat folder
//fungsi inisiasi data
function initData(){
  if (!fs.existsSync(dirPath)){
    fs.mkdirSync(dirPath);
  }
  //cek file sudah ada atau tidak, jika tidak buat file
  if(!fs.existsSync(dataPath)){
    fs.writeFileSync(dataPath, '[]', 'utf-8');
  }
}

//buat fungsi dengan variabel pertanyaan
const pertanyaan = (question) =>{
  return new Promise((resolve, reject) =>{
   readline.question(question, (answer)=>{
     resolve(answer);
   })
  })
}

//buat fungsi dengan variabel saveJawaban menggunakan arrow fungsi =>
 const saveJawaban = (name, email, mobile) => {
    const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8',));
    data.push({name, email, mobile});
    fs.writeFileSync(dataPath, JSON.stringify(data));
    readline.close();
    console.log("Data Tersimpan")
 }

//export fungsi agar bisa digunakan diluar file
 module.exports = {
  pertanyaan,
  saveJawaban,
  initData,
 }