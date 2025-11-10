/*******************************
   KALKULATOR KERUCUT
********************************/
function hitungKerucut() {
  const r = parseFloat(document.getElementById("r").value);
  const t = parseFloat(document.getElementById("t").value);
  const s = parseFloat(document.getElementById("s").value);
  const PI = 3.14;
  if (!r || r <= 0) {
    return alert("Masukkan jari-jari (r) dengan benar");
  }
  let hasil = "";
  // Volume → 1/3 × π × r² × t
  if (t) {
    const volume = (1/3) * PI * r * r * t;
    hasil += `Volume = ${volume.toFixed(2)} cm³<br>`;
  }
  // Luas permukaan → π × r (r + s)
  if (s) {
    const luas = PI * r * (r + s);
    hasil += `Luas Permukaan = ${luas.toFixed(2)} cm²<br>`;
  }
  document.getElementById("hasilKerucut").innerHTML = hasil;
}

/*******************************
   SOAL LATIHAN (PG) - DIUPDATE UNTUK KELAS 6 SD
********************************/

// acak opsi
function shuffle(arr){
  return arr.sort(() => Math.random() - 0.5);
}

let soalList = [
  /********* LATIHAN 1 — LUAS KERUCUT (1-5) *********/
  {
    sub: "LKPD 1 — Luas Kerucut",
    soal: "Rumus untuk menghitung luas permukaan sebuah kerucut (gabungan dari luas alas dan selimut) yang benar adalah...",
    opsi: shuffle([
      "π × r × (r + s)",
      "π × r² × t",
      "2 × π × r",
      "\\( \\frac{1}{2} \\) × π × r²"
    ]),
    jawaban: "π × r × (r + s)"
  },
  {
    sub: "LKPD 1 — Luas Kerucut",
    soal: "Sebuah kerucut memiliki jari-jari 7 cm dan garis pelukis 10 cm. Jika digunakan kertas untuk menutup seluruh permukaannya, luas kertas minimal yang dibutuhkan adalah... (π = 3.14)",
    opsi: shuffle(["373,66 cm²", "314 cm²", "471 cm²", "220 cm²"]),
    jawaban: "373,66 cm²",
    img: "../assets/img/tt.png"
  },
  {
    sub: "LKPD 1 — Luas Kerucut",
    soal: "Seorang siswa ingin menghias topi ulang tahun berbentuk kerucut hanya pada bagian selimutnya. Rumus yang digunakan untuk mencari luas selimut adalah...",
    opsi: shuffle(["π × r × s", "π × r²", "\\( \\frac{1}{2} \\) × π × r × s", "2 × π × r × t"]),
    jawaban: "π × r × s",
    img: "../assets/img/TopiUltah.png"
  },
  {
    sub: "LKPD 1 — Luas Kerucut",
    soal: "Jika jari-jari kerucut 10 cm dan garis pelukis 15 cm, berapa luas kertas yang diperlukan untuk menutupi seluruh sisi selimutnya? (π = 3.14)",
    opsi: shuffle(["471 cm²", "314 cm²", "706,5 cm²", "235,5 cm²"]),
    jawaban: "471 cm²",
    img: "../assets/img/Sr.png"
  },
  {
    sub: "LKPD 1 — Luas Kerucut",
    soal: "Sebuah kerucut memiliki luas alas 154 cm² dan luas selimut 308 cm². Jika bagian alas akan dicat warna biru dan selimut warna merah, berapakah total luas permukaan yang akan dicat?",
    opsi: shuffle(["462 cm²", "154 cm²", "308 cm²", "616 cm²"]),
    jawaban: "462 cm²",
    img: "../assets/img/308.png"
  },

  /********* LATIHAN 2 — VOLUME KERUCUT (6-10) *********/
  {
  sub: "LKPD 2 — Volume Kerucut",
  soal: "Sebuah kerucut memiliki diameter 14 cm dan tinggi 12 cm. Volume kerucut tersebut adalah ... cm³ (π = 22/7)",
  opsi: shuffle([
    "616",
    "924", 
    "1.232",
    "1.848"
  ]),
  jawaban: "616"
},
  {
    sub: "LKPD 2 — Volume Kerucut",
    soal: "Sebuah kerucut memiliki jari-jari 7 cm dan tinggi 14 cm. Jika kamu ingin membuatnya dari pasir, berapa banyak pasir yang dibutuhkan? (Gunakan π = 3.14)",
    opsi: shuffle(["718,67 cm³", "1.078 cm³", "359,33 cm³", "2.156 cm³"]),
    jawaban: "718,67 cm³",
    img: "../assets/img/14.png"
  },
  {
    sub: "LKPD 2 — Volume Kerucut",
    soal: "Volume sebuah kerucut adalah hasil dari \\( \\frac{1}{3} \\) luas alas dikalikan tinggi. Jika jari-jari 3 cm dan tinggi 4 cm, maka volume kerucut tersebut adalah... (π = 3.14)",
    opsi: shuffle(["37,68 cm³", "113,04 cm³", "75,36 cm³", "18,84 cm³"]),
    jawaban: "37,68 cm³",
    img: "../assets/img/sip.png"
  },
  {
    sub: "LKPD 2 — Volume Kerucut",
    soal: "Sebuah wadah berbentuk kerucut dapat menampung air sebanyak 1.570 cm³. Jika jari-jarinya 10 cm, tentukan tinggi wadah tersebut! (π = 3.14)",
    opsi: shuffle(["15 cm", "10 cm", "20 cm", "5 cm"]),
    jawaban: "15 cm"
  },
  {
    sub: "LKPD 2 — Volume Kerucut",
    soal: "Volume kerucut adalah \\( \\frac{1}{3} \\) dari volume tabung dengan ukuran sama. Jika volume tabung 1.200 cm³, maka volume kerucut tersebut adalah...",
    opsi: shuffle(["400 cm³", "600 cm³", "800 cm³", "1.200 cm³"]),
    jawaban: "400 cm³"
  },

  /********* LATIHAN 3 — SOAL CERITA CAMPURAN (11-15) *********/
  {
    sub: "LKPD 3 — Soal Cerita Campuran",
    soal: "Andi membuat topi ulang tahun berbentuk kerucut dari karton. Jika jari-jari alas 7 cm dan garis pelukis 10 cm, berapa luas karton yang dibutuhkan untuk satu topi?",
    opsi: shuffle(["373,66 cm²", "314 cm²", "220 cm²", "471 cm²"]),
    jawaban: "373,66 cm²",
    img: "../assets/img/11 Topi Ulang Tahun.webp"
  },
  {
    sub: "LKPD 3 — Soal Cerita Campuran",
    soal: "Sebuah corong air berbentuk kerucut memiliki jari-jari 3 cm dan tinggi 4 cm. Jika corong tersebut penuh air, berapa banyak air (dalam cm³) yang dapat ditampung?",
    opsi: shuffle(["37,68 cm³", "50 cm³", "75 cm³", "100 cm³"]),
    jawaban: "37,68 cm³",
    img: "../assets/img/sip.png"
  },
  {
    sub: "LKPD 3 — Soal Cerita Campuran",
    soal: "Tenda berbentuk kerucut memiliki diameter 6 meter dan garis pelukis 4 meter. Jika bagian bawah tidak tertutup, berapa luas kain yang dibutuhkan untuk membuat tenda?",
    opsi: shuffle(["37,68 m²", "28,26 m²", "56,52 m²", "75,36 m²"]),
    jawaban: "37,68 m²",
    img: "../assets/img/TendaKerucut.png"
  },
  {
    sub: "LKPD 3 — Soal Cerita Campuran",
    soal: "Sebuah kerucut pasir memiliki volume 1.570 cm³ dan jari-jari 10 cm. Jika tinggi bertambah dua kali lipat, berapa volume baru yang terbentuk?",
    opsi: shuffle(["3.140 cm³", "1.570 cm³", "2.355 cm³", "4.710 cm³"]),
    jawaban: "3.140 cm³",
    img: "../assets/img/Kecut.png"
  },
  {
    sub: "LKPD 3 — Soal Cerita Campuran",
    soal: "Dua kerucut memiliki jari-jari sama tetapi tinggi berbeda. Jika tinggi kerucut A dua kali tinggi kerucut B, maka volume kerucut A dibanding B adalah...",
    opsi: shuffle(["2 : 1", "1 : 2", "4 : 1", "3 : 1"]),
    jawaban: "2 : 1",
    img: "../assets/img/KerucutAB.png"
  }
];


let currentLatihan = 1;
let jawabanUser = Array(15).fill(null);

/*******************************
   SISTEM LATIHAN BERURUTAN OTOMATIS
********************************/

function mulaiSemuaLatihan() {
  currentLatihan = 1;
  jawabanUser = Array(15).fill(null);
  renderLatihan(1);
}

function renderLatihan(latihanKe) {
  // Tampilkan 5 soal sesuai latihan yang dipilih
  const startIndex = (latihanKe - 1) * 5;
  const soalLatihan = soalList.slice(startIndex, startIndex + 5);
  
  let quizHTML = `
    <div class="text-center mb-4">
      <h4 class="text-primary">${soalLatihan[0].sub}</h4>
      <p class="text-muted">Jawablah 5 soal berikut!</p>
      <div class="progress mb-3" style="height: 8px;">
        <div class="progress-bar" role="progressbar" style="width: ${(latihanKe-1)*33}%"></div>
      </div>
    </div>
  `;
  
  soalLatihan.forEach((item, index) => {
    const nomorSoal = (latihanKe - 1) * 5 + index + 1;
    let imgHTML = "";
    
    if (item.img) {
  imgHTML = `
    <div class="text-center mb-3">
      <img 
        src="${item.img}" 
        alt="gambar soal" 
        class="img-fluid rounded shadow"
        style="max-width: 220px; height: auto; object-fit: contain;"
      >
    </div>
  `;
}

    
    let opsiHTML = "";
    item.opsi.forEach((pil, idx) => {
      opsiHTML += `
        <div class="form-check">
          <input class="form-check-input" type="radio" 
                 name="soal-${nomorSoal}" value="${pil}" 
                 onchange="simpanJawaban(${nomorSoal - 1}, '${pil}')">
          <label class="form-check-label">${pil}</label>
        </div>`;
    });
    
    quizHTML += `
      <div class="section-box mb-4">
        <h6 class="fw-bold text-primary">${nomorSoal}. ${item.soal}</h6>
        ${imgHTML}
        <div class="mt-3">
          ${opsiHTML}
        </div>
      </div>
    `;
  });
  
  // Tombol lanjut (tanpa tombol periksa)
  quizHTML += `
    <div class="text-center">
      ${latihanKe < 3 ? `
        <button class="btn btn-primary btn-lg" onclick="lanjutKeLatihan(${latihanKe + 1})">
          ⏭️ Lanjut ke Latihan ${latihanKe + 1}
        </button>
      ` : `
        <button class="btn btn-success btn-lg" onclick="hitungHasilAkhir()">
          🏆 Selesai & Lihat Hasil
        </button>
      `}
    </div>
  `;
  
  document.getElementById("quiz-area").innerHTML = quizHTML;
  document.getElementById("skorText").innerText = "";
renderMath();
  
}

function simpanJawaban(index, jawaban) {
  jawabanUser[index] = jawaban;
}

function lanjutKeLatihan(latihanBerikutnya) {
  currentLatihan = latihanBerikutnya;
  renderLatihan(latihanBerikutnya);
}

function hitungHasilAkhir() {
  let skorTotal = 0;
  
  // Hitung semua jawaban yang benar
  for (let i = 0; i < 15; i++) {
    if (jawabanUser[i] === soalList[i].jawaban) {
      skorTotal++;
    }
  }
  
  const persentaseTotal = Math.round((skorTotal / 15) * 100);
  
  let predikat = "";
  if (persentaseTotal >= 85) predikat = "🏆 Sangat Baik";
  else if (persentaseTotal >= 70) predikat = "👍 Baik"; 
  else if (persentaseTotal >= 60) predikat = "👌 Cukup";
  else predikat = "💪 Perlu Belajar Lagi";

  // Hitung skor per latihan
  const skorLatihan1 = hitungSkorPerLatihan(1);
  const skorLatihan2 = hitungSkorPerLatihan(2);
  const skorLatihan3 = hitungSkorPerLatihan(3);

  // Tampilkan hasil dengan detail jawaban
  tampilkanDetailHasil(skorTotal, persentaseTotal, predikat, skorLatihan1, skorLatihan2, skorLatihan3);
}

function tampilkanDetailHasil(skorTotal, persentaseTotal, predikat, skorLatihan1, skorLatihan2, skorLatihan3) {
  audioBenar.currentTime = 0; // mulai dari awal
  audioBenar.play().catch(err => {
    console.warn("Audio tidak bisa diputar otomatis:", err);
  });
  let detailHTML = `
    <div id="hasilAkhir" class="section-box text-center ">
      <h3 class="text-success mb-4">🎊 SELAMAT! 🎊</h3>
      <h5>Kamu telah menyelesaikan semua latihan!</h5>
      
      <div class="row mt-4">
        <div class="col-md-4 mb-3">
          <div class="card bg-info text-white">
            <div class="card-body">
              <h6>Latihan 1 - Luas</h6>
              <div class="h4">${skorLatihan1}/5</div>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-3">
          <div class="card bg-primary text-white">
            <div class="card-body">
              <h6>Latihan 2 - Volume</h6>
              <div class="h4">${skorLatihan2}/5</div>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-3">
          <div class="card bg-warning text-dark">
            <div class="card-body">
              <h6>Latihan 3 - Cerita</h6>
              <div class="h4">${skorLatihan3}/5</div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="mt-4 p-3 bg-light rounded">
        <h4 class="text-primary">${predikat}</h4>
        <div class="display-4 fw-bold ${persentaseTotal >= 70 ? 'text-success' : 'text-warning'}">
          ${skorTotal}/15
        </div>
        <div class="h5 mt-2">${persentaseTotal}%</div>
        <p class="mt-2">Kamu menjawab ${skorTotal} dari 15 soal dengan benar</p>
      </div>
    </div>
  `;

  // Tambahkan detail setiap soal
  detailHTML += `<div class="section-box mt-4"><h4 class="text-center mb-4">📝 Detail Jawaban</h4>`;
  
  for (let i = 0; i < 15; i++) {
    const item = soalList[i];
    const userAnswer = jawabanUser[i];
    const isCorrect = userAnswer === item.jawaban;
    const latihanKe = Math.floor(i / 5) + 1;
    
    let statusHTML = "";
    if (userAnswer === null) {
      statusHTML = `<span class="badge bg-secondary">Tidak dijawab</span>`;
    } else if (isCorrect) {
      statusHTML = `<span class="badge bg-success">✅ Benar</span>`;
    } else {
      statusHTML = `<span class="badge bg-danger">❌ Salah</span>`;
    }
    
    detailHTML += `
      <div class="mb-4 p-3 ${isCorrect ? 'bg-success bg-opacity-10' : 'bg-danger bg-opacity-10'} rounded">
        <div class="d-flex justify-content-between align-items-start mb-2">
          <h6 class="fw-bold mb-0">Soal ${i + 1} (Latihan ${latihanKe})</h6>
          ${statusHTML}
        </div>
        <p class="mb-2">${item.soal}</p>
        <div class="row">
          <div class="col-md-6">
            <small class="text-muted">Jawaban kamu:</small>
            <div class="fw-bold ${isCorrect ? 'text-success' : 'text-danger'}">
              ${userAnswer || "-"}
            </div>
          </div>
          <div class="col-md-6">
            <small class="text-muted">Jawaban benar:</small>
            <div class="fw-bold text-success">${item.jawaban}</div>
          </div>
        </div>
      </div>
    `;
  }
  
  detailHTML += `</div>`;
  
  // Tombol mulai lagi
  detailHTML += `
    <div class="text-center mt-4">
      <button class="btn btn-primary btn-lg" onclick="mulaiSemuaLatihan()">
        🔄 Mulai Lagi dari Awal
      </button>
    </div>
  `;
  
  document.getElementById("quiz-area").innerHTML = detailHTML;
  document.getElementById("skorText").innerText = "";

 renderMath();

  setTimeout(() => {
  document.getElementById("hasilAkhir").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}, 300);
}

function hitungSkorPerLatihan(latihanKe) {
  const startIndex = (latihanKe - 1) * 5;
  let skor = 0;
  
  for (let i = 0; i < 5; i++) {
    const indexSoal = startIndex + i;
    if (jawabanUser[indexSoal] === soalList[indexSoal].jawaban) {
      skor++;
    }
  }
  
  return skor;
}

/*******************************
   INISIALISASI
********************************/

// AUDIO
const audioBenar = new Audio("/assets/BENAR.mp3");
const audioSalah = new Audio("/assets/SALAH.mp3");

audioBenar.volume = 1;
audioSalah.volume = 1;

mulaiSemuaLatihan();


//memanggil mathjax yang eror / gagal muat der 

function renderMath() {
  // Cek apakah MathJax sudah dimuat
  if (window.MathJax && window.MathJax.typesetPromise) {
    MathJax.typesetClear(); // Bersihkan render sebelumnya
    MathJax.typesetPromise()
      .then(() => console.log("✅ MathJax dirender ulang"))
      .catch(err => console.error("❌ Gagal render MathJax:", err));
  } else {
    console.warn("⚠️ MathJax belum dimuat di halaman ini.");
  }
}