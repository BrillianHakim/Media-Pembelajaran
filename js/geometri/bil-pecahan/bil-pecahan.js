// Kalkulator 
function gcd(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function lcm(a, b) {
  return Math.abs(a * b) / gcd(a, b);
}

function sederhanakan(pembilang, penyebut) {
  if (penyebut === 0) {
    return { pembilang: 0, penyebut: 1, error: true };
  }
  
  let fpb = gcd(pembilang, penyebut);
  pembilang = pembilang / fpb;
  penyebut = penyebut / fpb;
  
  if (penyebut < 0) {
    pembilang = -pembilang;
    penyebut = -penyebut;
  }
  
  return { pembilang, penyebut, error: false };
}

function parsePecahan(str) {
  str = str.trim();
  
  if (str.includes('/')) {
    let parts = str.split('/');
    if (parts.length === 2) {
      let p = parseInt(parts[0]);
      let q = parseInt(parts[1]);
      if (!isNaN(p) && !isNaN(q)) {
        return { pembilang: p, penyebut: q, valid: true };
      }
    }
  }
  
  return { pembilang: 0, penyebut: 1, valid: false };
}

function hitungPecahan() {
  let f1Str = document.getElementById('f1').value;
  let f2Str = document.getElementById('f2').value;
  let operator = document.getElementById('op').value;
  
  let hasilDiv = document.getElementById('hasilPecahan');
  let langkahDiv = document.getElementById('langkahPecahan');
  
  let frac1 = parsePecahan(f1Str);
  let frac2 = parsePecahan(f2Str);
  
  if (!frac1.valid || !frac2.valid) {
    hasilDiv.innerHTML = '<span class="text-danger">❌ Format salah! Gunakan format a/b (contoh: 3/4)</span>';
    langkahDiv.innerHTML = '';
    return;
  }
  
  if (frac1.penyebut === 0 || frac2.penyebut === 0) {
    hasilDiv.innerHTML = '<span class="text-danger">❌ Penyebut tidak boleh 0!</span>';
    langkahDiv.innerHTML = '';
    return;
  }
  
  let p1 = frac1.pembilang;
  let q1 = frac1.penyebut;
  let p2 = frac2.pembilang;
  let q2 = frac2.penyebut;
  
  let kpk = lcm(q1, q2);
  let p1_baru = p1 * (kpk / q1);
  let p2_baru = p2 * (kpk / q2);
  
  let p_hasil = operator === '+' ? p1_baru + p2_baru : p1_baru - p2_baru;
  let q_hasil = kpk;
  
  let hasil = sederhanakan(p_hasil, q_hasil);
  
  let hasilHTML = `<span class="text-success">✅ Hasil: </span>`;
  
  if (hasil.pembilang === 0) {
    hasilHTML += `<span class="fs-4">\\( 0 \\)</span>`;
  } else if (hasil.penyebut === 1) {
    hasilHTML += `<span class="fs-4">\\( ${hasil.pembilang} \\)</span>`;
  } else {
    hasilHTML += `<span class="fs-4">\\( \\dfrac{${hasil.pembilang}}{${hasil.penyebut}} \\)</span>`;
  }
  
  hasilDiv.innerHTML = hasilHTML;
  langkahDiv.innerHTML = '';
  
  if (typeof MathJax !== 'undefined') {
    MathJax.typesetPromise([hasilDiv]).catch((err) => console.log(err));
  }
}

document.addEventListener('DOMContentLoaded', function() {
  ['f1', 'f2'].forEach(id => {
    let elem = document.getElementById(id);
    if (elem) {
      elem.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') hitungPecahan();
      });
    }
  });
});

/*******************************
  AUDIO
********************************/
const audioBenar = new Audio("/assets/BENAR.mp3");
const audioSalah = new Audio("/assets/SALAH.mp3");
audioBenar.volume = 1;
audioSalah.volume = 1;

/*******************************
   SOAL LATIHAN PECAHAN - LEVEL HOTS KELAS 6 SD
********************************/

// acak opsi
function shuffle(arr){
  return arr.sort(() => Math.random() - 0.5);
}

let soalList = [
  /********* LATIHAN 1 — HOTS PECAHAN PENJUMLAHAN (1–5) *********/
  {
    sub: "Latihan 1 — Pecahan Penjumlahan",
    soal: "Hasil dari \\( \\frac{2}{5} \\) + \\( \\frac{3}{10} \\) adalah...",
    opsi: shuffle(["\\( \\frac{7}{10} \\)", "\\( \\frac{1}{2} \\)", "\\( \\frac{9}{10} \\)", "\\( \\frac{5}{8} \\)"]),
    jawaban: "\\( \\frac{7}{10} \\)",
    img: "../assets/img/2.png"
  },
  {
    sub: "Latihan 1 — Pecahan Penjumlahan",
    soal: "Hasil dari 1\\( \\frac{1}{3} \\) + 2\\( \\frac{2}{5} \\) adalah...",
    opsi: shuffle(["3\\( \\frac{11}{15} \\)", "3\\( \\frac{7}{15} \\)", "3\\( \\frac{3}{5} \\)", "3\\( \\frac{2}{15} \\)"]),
    jawaban: "3\\( \\frac{11}{15} \\)"
  },
  {
    sub: "Latihan 1 — Pecahan Penjumlahan",
    soal: "Hasil dari \\( \\frac{7}{8} \\) + \\( \\frac{3}{4} \\) adalah...",
    opsi: shuffle(["\\( \\frac{13}{8} \\)", "\\( \\frac{5}{4} \\)", "\\( \\frac{7}{4} \\)", "\\( \\frac{11}{8} \\)"]),
    jawaban: "\\( \\frac{13}{8} \\)"
  },
  {
    sub: "Latihan 1 — Pecahan Penjumlahan",
    soal: "Sebuah pizza dimakan \\( \\frac{1}{3} \\) bagian oleh Ali dan \\( \\frac{1}{4} \\) bagian oleh Budi. Berapa bagian pizza yang telah dimakan?",
    opsi: shuffle(["\\( \\frac{7}{12} \\)", "\\( \\frac{1}{2} \\)", "\\( \\frac{2}{3} \\)", "\\( \\frac{5}{12} \\)"]),
    jawaban: "\\( \\frac{7}{12} \\)",
    img: "../assets/img/pizzamakan.jpg"
  },
  {
    sub: "Latihan 1 — Pecahan Penjumlahan",
    soal: "Jumlah dari \\( \\frac{3}{10} \\) + \\( \\frac{2}{5} \\) + \\( \\frac{1}{2} \\) adalah...",
    opsi: shuffle(["\\( \\frac{6}{5} \\)", "\\( \\frac{13}{10} \\)", "\\( \\frac{12}{10} \\)", "\\( \\frac{11}{10} \\)"]),
    jawaban: "\\( \\frac{13}{10} \\)"
  },

  /********* LATIHAN 2 — HOTS PECAHAN PENGURANGAN (6–10) *********/
  {
    sub: "Latihan 2 — Pecahan Pengurangan",
    soal: "Hasil dari \\( \\frac{5}{6} \\) - \\( \\frac{1}{4} \\) adalah...",
    opsi: shuffle(["\\( \\frac{7}{12} \\)", "\\( \\frac{3}{8} \\)", "\\( \\frac{5}{8} \\)", "\\( \\frac{2}{3} \\)"]),
    jawaban: "\\( \\frac{7}{12} \\)"
  },
  {
    sub: "Latihan 2 — Pecahan Pengurangan",
    soal: "Hasil dari 2\\( \\frac{3}{4} \\) - 1\\( \\frac{2}{5} \\) adalah...",
    opsi: shuffle(["1\\( \\frac{7}{20} \\)", "1\\( \\frac{3}{10} \\)", "1\\( \\frac{1}{4} \\)", "1\\( \\frac{9}{20} \\)"]),
    jawaban: "1\\( \\frac{7}{20} \\)"
  },
  {
    sub: "Latihan 2 — Pecahan Pengurangan",
    soal: "Hasil dari \\( \\frac{9}{10} \\) - \\( \\frac{3}{5} \\) adalah...",
    opsi: shuffle(["\\( \\frac{3}{10} \\)", "\\( \\frac{1}{5} \\)", "\\( \\frac{2}{5} \\)", "\\( \\frac{1}{2} \\)"]),
    jawaban: "\\( \\frac{3}{10} \\)"
  },
  {
    sub: "Latihan 2 — Pecahan Pengurangan",
    soal: "Ali memiliki \\( \\frac{7}{8} \\) liter air. Ia menggunakan \\( \\frac{3}{8} \\) liter untuk menyiram tanaman. Sisa air Ali adalah...",
    opsi: shuffle(["\\( \\frac{1}{2} \\) liter", "\\( \\frac{3}{4} \\) liter", "\\( \\frac{5}{8} \\) liter", "\\( \\frac{4}{8} \\) liter"]),
    jawaban: "\\( \\frac{1}{2} \\) liter"
  },
  {
    sub: "Latihan 2 — Pecahan Pengurangan",
    soal: "Hasil dari 5\\( \\frac{2}{3} \\) - 3\\( \\frac{3}{5} \\) adalah...",
    opsi: shuffle(["2\\( \\frac{1}{15} \\)", "2\\( \\frac{2}{5} \\)", "1\\( \\frac{4}{5} \\)", "1\\( \\frac{1}{15} \\)"]),
    jawaban: "2\\( \\frac{1}{15} \\)"
  },

  /********* LATIHAN 3 — HOTS PECAHAN CAMPURAN (PENJUMLAHAN & PENGURANGAN) (11–15) *********/
  {
    sub: "Latihan 3 — Pecahan Campuran",
    soal: "Hasil dari 2\\( \\frac{1}{2} \\) + \\( \\frac{3}{4} \\) - \\( \\frac{2}{5} \\) adalah...",
    opsi: shuffle(["2\\( \\frac{17}{20} \\)", "3\\( \\frac{1}{10} \\)", "3\\( \\frac{3}{20} \\)", "2\\( \\frac{7}{10} \\)"]),
    jawaban: "2\\( \\frac{17}{20} \\)"
  },
  {
    sub: "Latihan 3 — Pecahan Campuran",
    soal: "Hasil dari \\( \\frac{5}{6} \\) + \\( \\frac{3}{4} \\) - \\( \\frac{1}{2} \\) adalah...",
    opsi: shuffle(["\\( \\frac{13}{12} \\)", "\\( \\frac{9}{10} \\)", "\\( \\frac{11}{12} \\)", "\\( \\frac{7}{8} \\)"]),
    jawaban: "\\( \\frac{13}{12} \\)"
  },
  {
    sub: "Latihan 3 — Pecahan Campuran",
    soal: "Sebuah tangki diisi \\( \\frac{3}{5} \\) bagian air. Kemudian ditambah \\( \\frac{2}{10} \\) bagian lagi dan digunakan \\( \\frac{1}{5} \\) bagian. Sekarang tangki berisi...",
    opsi: shuffle(["\\( \\frac{1}{2} \\)", "\\( \\frac{4}{5} \\)", "\\( \\frac{3}{4} \\)", "\\( \\frac{7}{10} \\)"]),
    jawaban: "\\( \\frac{7}{10} \\)"
  },
  {
    sub: "Latihan 3 — Pecahan Campuran",
    soal: "Dari \\( \\frac{7}{8} \\) meter kain digunakan \\( \\frac{3}{10} \\) meter untuk membuat pita dan \\( \\frac{1}{4} \\) meter untuk menghias topi. Sisa kain adalah...",
    opsi: shuffle(["\\( \\frac{23}{40} \\) meter", "\\( \\frac{3}{8} \\) meter", "\\( \\frac{11}{40} \\) meter", "\\( \\frac{1}{2} \\) meter"]),
    jawaban: "\\( \\frac{23}{40} \\) meter"
  },
  {
    sub: "Latihan 3 — Pecahan Campuran",
    soal: "Hasil dari 4\\( \\frac{1}{3} \\) - 2\\( \\frac{1}{6} \\) + \\( \\frac{3}{4} \\) adalah...",
    opsi: shuffle(["3", "2\\( \\frac{11}{12} \\)", "3\\( \\frac{1}{2} \\)", "2\\( \\frac{5}{6} \\)"]),
    jawaban: "2\\( \\frac{11}{12} \\)"
  }
];


let currentLatihan = 1;
let skorTotal = 0;
let jawabanUser = Array(15).fill(null);       // untuk perbandingan (ternormalisasi)
let jawabanUserRaw = Array(15).fill(null);    // untuk ditampilkan (raw LaTeX)

/*******************************
   SISTEM LATIHAN BERURUTAN OTOMATIS
********************************/

function mulaiSemuaLatihan() {
  currentLatihan = 1;
  jawabanUser = Array(15).fill(null);
  jawabanUserRaw = Array(15).fill(null);
  skorTotal = 0;
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
    item.opsi.forEach((pil) => {
      // escape single quote in opsi just in case
      const safePil = pil.replace(/'/g, "\\'");
      opsiHTML += `
        <div class="form-check">
          <input class="form-check-input" type="radio" 
                 name="soal-${nomorSoal}" value="${pil}" 
                 onchange="simpanJawaban(${nomorSoal - 1}, '${safePil}')">
          <label class="form-check-label">${pil}</label>
        </div>`;
    });
    
    quizHTML += `
      <div class="section-box mb-4">
        <h6 class="fw-bold text-primary">${nomorSoal}. ${item.soal}</h6>
        ${imgHTML}
        <div class="mt-3">${opsiHTML}</div>
      </div>
    `;
  });
  
  // Tombol navigasi
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
  
  // Masukkan ke DOM
  document.getElementById("quiz-area").innerHTML = quizHTML;
  document.getElementById("skorText").innerText = "";

  // Render MathJax untuk soal & opsi
  if (window.MathJax) {
    MathJax.typesetPromise();
  }
}


function wrapForMathjax(s) {
  if (!s) return "-";
  // jika sudah mengandung \( atau \) atau $...$ jangan bungkus lagi
  if (/\\\(|\\\)|^\$.*\$/.test(s)) return s;
  return `\\(${s}\\)`;
}



function normalizeLatex(str) {
  if (!str) return "";
  return String(str)
    .replace(/\\\\+/g, "")      // hapus semua backslashes
    .replace(/\\\\\(|\\\\\)/g, "")
    .replace(/\$/g, "")
    .replace(/\s+/g, "")
    .replace(/[\{\}]/g, "")
    .replace(/frac/g, "frac") // keep token name consistent
    .replace(/[^a-z0-9]/gi, "") // hapus char selain alnum untuk strict match
    .trim()
    .toLowerCase();
}

function simpanJawaban(index, jawaban) {
  const raw = String(jawaban || "")
    .replace(/\\\(|\\\)|\$/g, "")   // hapus \( \) atau $
    .trim();

  jawabanUserRaw[index] = raw;
  jawabanUser[index] = normalizeLatex(raw);
}



function lanjutKeLatihan(latihanBerikutnya) {
  currentLatihan = latihanBerikutnya;
  renderLatihan(latihanBerikutnya);
}

function hitungHasilAkhir() {
  skorTotal = 0; // reset dulu agar tidak menumpuk jika tombol ditekan berkali-kali

  for (let i = 0; i < 15; i++) {
    const userNorm = normalizeLatex(jawabanUserRaw[i]);     // normalisasi jawaban user (raw)
    const benarNorm = normalizeLatex(soalList[i].jawaban); // normalisasi jawaban benar (dari soalList)

    // debug (bisa comment saat deploy)
    // console.log(i+1, userNorm, benarNorm);

    if (userNorm && userNorm === benarNorm) {
      skorTotal++;
    }
  }
  const persentaseTotal = Math.round((skorTotal / 15) * 100);
  let predikat = "";
  if (persentaseTotal >= 85) predikat = "🏆 Sangat Baik";
  else if (persentaseTotal >= 70) predikat = "👍 Baik";
  else if (persentaseTotal >= 60) predikat = "👌 Cukup";
  else predikat = "💪 Perlu Belajar Lagi";

  const skorLatihan1 = hitungSkorPerLatihan(1);
  const skorLatihan2 = hitungSkorPerLatihan(2);
  const skorLatihan3 = hitungSkorPerLatihan(3);

  // panggil fungsi hasil
  tampilkanDetailHasil(
    skorTotal,
    persentaseTotal,
    predikat,
    skorLatihan1,
    skorLatihan2,
    skorLatihan3
  );
}

function tampilkanDetailHasil(skorTotal, persentaseTotal, predikat, s1, s2, s3) {
  audioBenar.currentTime = 0;
  audioBenar.play().catch(() => {});

  let detailHTML = `
    <div id="hasilAkhir" class="section-box text-center">
      <h3 class="text-success mb-4">🎊 SELAMAT! 🎊</h3>
      <h5>Kamu telah menyelesaikan semua latihan!</h5>

      <div class="row mt-4">
        <div class="col-md-4"><div class="card bg-info text-white"><div class="card-body">
          <h6>Latihan 1</h6><div class="h4">${s1}/5</div>
        </div></div></div>
        <div class="col-md-4"><div class="card bg-primary text-white"><div class="card-body">
          <h6>Latihan 2</h6><div class="h4">${s2}/5</div>
        </div></div></div>
        <div class="col-md-4"><div class="card bg-warning text-dark"><div class="card-body">
          <h6>Latihan 3</h6><div class="h4">${s3}/5</div>
        </div></div></div>
      </div>

      <div class="mt-4 p-3 bg-light rounded">
        <h4 class="text-primary">${predikat}</h4>
        <div class="display-4 fw-bold ${persentaseTotal >= 70 ? 'text-success' : 'text-warning'}">
          ${skorTotal}/15
        </div>
        <div class="h5 mt-2">${persentaseTotal}%</div>
      </div>
    </div>
  `;

  detailHTML += `<div class="section-box mt-4"><h4 class="text-center mb-4">📝 Detail Jawaban</h4>`;

  for (let i = 0; i < 15; i++) {
    const item = soalList[i];
    const userRaw = jawabanUserRaw[i];
    const isCorrect = normalizeLatex(userRaw) === normalizeLatex(item.jawaban);
    const latihanKe = Math.floor(i / 5) + 1;
    const badge = !userRaw
      ? `<span class="badge bg-secondary">Tidak dijawab</span>`
      : isCorrect
      ? `<span class="badge bg-success">✅ Benar</span>`
      : `<span class="badge bg-danger">❌ Salah</span>`;

    detailHTML += `
      <div class="mb-4 p-3 ${isCorrect ? 'bg-success bg-opacity-10' : 'bg-danger bg-opacity-10'} rounded">
        <div class="d-flex justify-content-between mb-2">
          <h6 class="fw-bold mb-0">Soal ${i + 1} (Latihan ${latihanKe})</h6>${badge}
        </div>
        <p class="mb-2">${item.soal}</p>
        <div class="row">
          <div class="col-md-6">
  <small class="text-muted">Jawaban kamu:</small>
  <div class="fw-bold ${isCorrect ? 'text-success' : 'text-danger'}">
    ${userRaw ? wrapForMathjax(userRaw) : "-"}
  </div>
</div>
<div class="col-md-6">
  <small class="text-muted">Jawaban benar:</small>
  <div class="fw-bold text-success">
    ${wrapForMathjax(item.jawaban)}
  </div>
</div>
        </div>
      </div>`;
  }

  detailHTML += `</div>
    <div class="text-center mt-4">
      <button class="btn btn-primary btn-lg" onclick="mulaiSemuaLatihan()">🔄 Mulai Lagi dari Awal</button>
    </div>`;

  document.getElementById("quiz-area").innerHTML = detailHTML;
  document.getElementById("skorText").innerText = "";

  if (window.MathJax) MathJax.typesetPromise();
  setTimeout(() => {
    document.getElementById("hasilAkhir").scrollIntoView({ behavior: "smooth", block: "start" });
  }, 300);
}


function hitungSkorPerLatihan(latihanKe) {
  const startIndex = (latihanKe - 1) * 5;
  let skor = 0;
  
  for (let i = 0; i < 5; i++) {
    const indexSoal = startIndex + i;
    // bandingkan versi ternormalisasi dari user dan jawaban benar
    const userNorm = normalizeLatex(jawabanUserRaw[indexSoal]);
    const benarNorm = normalizeLatex(soalList[indexSoal].jawaban);
    if (userNorm && userNorm === benarNorm) {
      skor++;
    }
  }
  
  return skor;
}


/*******************************
   INISIALISASI
********************************/

// Langsung mulai latihan 1 saat halaman dimuat
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
