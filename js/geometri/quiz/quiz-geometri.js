/*******************************
   DATA SOAL
********************************/
let soalList = [
  {
    soal: `Seorang siswa membuat hiasan kelas berbentuk kerucut dari karton. Jika jari-jari alas kerucut 7 cm dan garis pelukis 15 cm. Hitunglah luas selimut kerucut tersebut! (π = 22/7)`,
    opsi: ["330 cm²","350 cm²","440 cm²","210 cm²"],
    jawaban: "330 cm²",
    img :"../assets/img/715.png"
  },
  {
    soal: `Sebuah es krim berbentuk kerucut memiliki jari-jari alas 4 cm dan tinggi 12 cm. Karena meleleh, es krim hanya terisi 3/4 bagian dari volume penuh. Berapa volume es krim tersebut? (π = 3,14)`,
    opsi: ["200,96 cm³","150,72 cm³","100,48 cm³","75,36 cm³"],
    jawaban: "150,72 cm³"
  },
  {
    soal: `Ibu membeli sebuah topi ulang tahun berbentuk kerucut. Tinggi topi 18 cm dan jari-jari alas 6 cm. Untuk menghias tepi alas topi menggunakan pita, berapa panjang pita minimal yang diperlukan?`,
    opsi: ["12π cm","18π cm","24π cm","36π cm"],
    jawaban: "12π cm",
    img :"../assets/img/186.png"
  },
  {
    soal: `Di sekolah, sebuah kerucut digunakan sebagai corong air. Corong memiliki volume 314 cm³ dan jari-jari alas 5 cm. Berapa tinggi corong tersebut? (π = 3,14)`,
    opsi: ["6 cm","12 cm","15 cm","18 cm"],
    jawaban: "12 cm"
  },
  {
    soal: `Sebuah tenda kecil berbentuk kerucut memiliki jari-jari alas 3 m dan tinggi 4 m. Seluruh bagian luar tenda ingin dicat. Berapa luas permukaan tenda yang harus dicat? (π = 3,14)`,
    opsi: ["56,52 m²","47,1 m²","37,68 m²","28,26 m²"],
    jawaban: "56,52 m²",
    img :"../assets/img/cut.png"
  }
];


/* Acak opsi */
function shuffle(arr){ return arr.sort(()=>Math.random()-0.5); }
soalList.forEach(s=> s.opsi = shuffle(s.opsi) );

let skor = 0;

/*******************************
   RENDER
********************************/
function renderSoal(){
  let html = "";
  soalList.forEach((item,i)=>{
    html += `
      <div id="soal-${i}" class="section-box">
        <h6 class="fw-bold text-primary">Soal ${i+1}</h6>
        <p>${item.soal}</p>

        ${
          item.img
          ? `
          <div class="text-center mb-3">
            <img 
              src="${item.img}" 
              alt="gambar soal" 
              class="img-fluid rounded shadow"
              style="max-width: 220px; height: auto; object-fit: contain;"
            >
          </div>
          `
          : ""
        }

        ${item.opsi.map((o)=>
          `<label class="d-block my-1">
            <input type="radio" name="opsi-${i}" value="${o}"> ${o}
          </label>`
        ).join("")}
        
        <p class="mt-2 fw-bold text-danger d-none" id="kunci-${i}">
          Jawaban: ${item.jawaban}
        </p>
      </div>
    `;
  });

  document.getElementById("quiz-area").innerHTML = html;
}

/*******************************
   PERIKSA SEMUA
********************************/
function periksaSemua(){
  skor = 0;
  const audioBenar = document.getElementById("audioBenar");

  soalList.forEach((item,i)=>{
    let selected = document.querySelector(`input[name="opsi-${i}"]:checked`);
    let box = document.getElementById(`soal-${i}`);
    let kunci = document.getElementById(`kunci-${i}`);

    box.classList.remove("benar-anim","salah-anim");
    kunci.classList.remove("d-none");

    if(!selected){
      box.classList.add("salah-anim");
      return;
    }

    if(selected.value === item.jawaban){
      skor++;
      box.classList.add("benar-anim");
    } else {
      box.classList.add("salah-anim");
    }
  });

  let nilai = skor * 20;
  document.getElementById("skorText").textContent = `Nilai Kamu: ${nilai}`;

  // ✅ Putar suara meskipun salah semua
  audioBenar.currentTime = 0;
  audioBenar.play();
}

renderSoal();