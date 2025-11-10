/*******************************
   DATA SOAL EVALUASI
********************************/
let soalList = [

  // ✅ HOTS Penjumlahan & Pengurangan Pecahan
  { 
    soal: "Ibu menggunakan \\( \\frac{3}{8} \\) kg gula untuk membuat kue dan \\( \\frac{1}{4} \\) kg untuk membuat puding. Berapa kg gula yang digunakan seluruhnya?",
    img: "../assets/img/gula.jpg",
    opsi: ["\\( \\frac{5}{8} \\)","\\( \\frac{1}{2} \\)","\\( \\frac{7}{8} \\)","\\( \\frac{3}{4} \\)"],
    jawaban: "\\( \\frac{5}{8} \\)"
  },
  { 
    soal: "Sebuah pita panjangnya \\( 1\\frac{1}{2} \\) m. Telah digunakan \\( \\frac{3}{4} \\) m. Sisa pita adalah ...",
    
    opsi: ["\\( \\frac{3}{4} \\) m","\\( \\frac{5}{4} \\) m","\\( \\frac{1}{2} \\) m","\\( \\frac{2}{3} \\) m"],
    jawaban: "\\( \\frac{3}{4} \\) m"
  },
  { 
    soal: "Ayah membeli \\( \\frac{5}{6} \\) liter bensin. Sesampainya di rumah tersisa \\( \\frac{1}{3} \\) liter. Berapa liter bensin yang digunakan?",
    img: "../assets/img/Jerigen.webp",
    opsi: ["\\( \\frac{1}{6} \\)","\\( \\frac{1}{2} \\)","\\( \\frac{2}{3} \\)","\\( \\frac{3}{6} \\)"],
    jawaban: "\\( \\frac{1}{2} \\)"
  },

  // ✅ HOTS Perbandingan Situasional
  {
    soal: "Udin minum \\( \\frac{2}{5} \\) botol air. Budi minum \\( \\frac{3}{10} \\) botol air. Siapa yang lebih banyak dan berapa selisihnya?",
    
    opsi: [
      "Udin, selisih \\( \\frac{1}{10} \\)",
      "Udin, selisih \\( \\frac{1}{5} \\)",
      "Budi, selisih \\( \\frac{1}{10} \\)",
      "Sama banyak"
    ],
    jawaban: "Udin, selisih \\( \\frac{1}{10} \\)"
  },
  {
    soal: "Sebuah taman terisi air hingga \\( \\frac{7}{12} \\) bagian. Setelah disiramkan ke tanaman, tinggal \\( \\frac{1}{3} \\) bagian. Berapa bagian air yang digunakan?",
    
    opsi: [
      "\\( \\frac{1}{12} \\)",
      "\\( \\frac{1}{6} \\)",
      "\\( \\frac{3}{12} \\)",
      "\\( \\frac{1}{4} \\)"
    ],
    jawaban: "\\( \\frac{1}{4} \\)"
  },

  // ✅ HOTS Kontekstual Bertahap
  {
    soal: "Lina memiliki sebatang cokelat. Ia makan \\( \\frac{1}{4} \\) bagian pagi dan \\( \\frac{2}{8} \\) bagian sore. Berapa bagian cokelat yang tersisa?",
    img: "../assets/img/cokelat.jpg",
    opsi: [
      "\\( \\frac{1}{2} \\)",
      "\\( \\frac{3}{8} \\)",
      "\\( \\frac{4}{8} \\)",
      "\\( \\frac{5}{8} \\)"
    ],
    jawaban: "\\( \\frac{3}{8} \\)"
  },
  {
    soal: "Di perpustakaan ada \\( \\frac{2}{3} \\) rak berisi buku cerita. Setelah dipinjam siswa, tinggal \\( \\frac{1}{6} \\) rak. Bagian mana yang dipinjam siswa?",
    
    opsi: [
      "\\( \\frac{1}{2} \\)",
      "\\( \\frac{4}{6} \\)",
      "\\( \\frac{1}{3} \\)",
      "\\( \\frac{5}{6} \\)"
    ],
    jawaban: "\\( \\frac{1}{2} \\)"
  },
  {
    soal: "Rita membeli roti. Ia memberikan \\( \\frac{3}{10} \\) kepada adiknya dan \\( \\frac{2}{5} \\) kepada kakaknya. Berapa bagian roti yang sudah diberikan?",
    img: "../assets/img/Roti.avif",
    opsi: [
      "\\( \\frac{1}{2} \\)",
      "\\( \\frac{4}{10} \\)",
      "\\( \\frac{7}{10} \\)",
      "\\( \\frac{5}{10} \\)"
    ],
    jawaban: "\\( \\frac{7}{10} \\)"
  },

  // ✅ Kombinasi Pecahan & Makna Konteks
  {
    soal: "Sebuah kolam terisi air \\( \\frac{3}{5} \\) bagian. Jika dinyalakan pompa dan menguras air sebanyak \\( \\frac{1}{10} \\) bagian, berapa bagian yang tersisa?",
    
    opsi: [
      "\\( \\frac{2}{5} \\)",
      "\\( \\frac{4}{10} \\)",
      "\\( \\frac{1}{2} \\)",
      "\\( \\frac{1}{10} \\)"
    ],
    jawaban: "\\( \\frac{1}{2} \\)"
  },
  {
    soal: "Ibu membuat kue dan membagikannya: \\( \\frac{1}{3} \\) kepada tetangga dan \\( \\frac{1}{6} \\) kepada teman. Berapa bagian kue yang belum dibagikan?",
    img: "../assets/img/Kue.jpg",
    opsi: [
      "\\( \\frac{1}{2} \\)",
      "\\( \\frac{2}{6} \\)",
      "\\( \\frac{3}{6} \\)",
      "\\( \\frac{4}{6} \\)"
    ],
    jawaban: "\\( \\frac{1}{2} \\)"
  }
];


// Acak opsi tiap soal
function shuffle(arr){ return arr.sort(()=>Math.random()-0.5); }
soalList.forEach(s => s.opsi = shuffle(s.opsi));


let skor = 0;

/*******************************
   RENDER
********************************/
function renderSoal() {
  let html = "";
  soalList.forEach((item, i) => {
    html += `
      <div id="soal-${i}" class="section-box">
        <h6 class="fw-bold text-primary">Soal ${i + 1}</h6>
        <p>${item.soal}</p>

        ${item.img 
          ? `<div class="text-center mb-4">
               <img src="${item.img}" alt="Gambar Soal" 
                    class="img-fluid rounded shadow soal-img">
             </div>` 
          : ""
        }

        ${item.opsi.map((o) =>
          `<div>
            <label>
              <input type="radio" name="opsi-${i}" value="${o}">
              ${o}
            </label>
          </div>`
        ).join("")}

        <p class="mt-2 fw-bold text-danger d-none" id="kunci-${i}">
          ✅ Jawaban: ${item.jawaban}
        </p>
      </div>
    `;
  });

  document.getElementById("quiz-area").innerHTML = html;

  if (window.MathJax) {
    MathJax.typesetPromise();
  }
}



renderSoal();

/*******************************
   CEK JAWABAN
********************************/
function periksaSemua() {
  skor = 0;
  const audioBenar = document.getElementById("audioBenar");

  soalList.forEach((item, i) => {
    let selected = document.querySelector(`input[name="opsi-${i}"]:checked`);
    let box = document.getElementById(`soal-${i}`);

    document.getElementById(`kunci-${i}`).classList.remove("d-none");

    if (!selected) {
      box.classList.add("salah");
      item._benar = false;
      return;
    }

    if (selected.value === item.jawaban) {
      skor++;
      box.classList.add("benar");
      audioBenar.currentTime = 0;
      audioBenar.play();
      item._benar = true;
    } else {
      box.classList.add("salah");
      item._benar = false;
    }
  });

  let nilai = skor * 10;
document.getElementById("skorText").textContent = `Nilai Kamu: ${nilai}`;

// ✅ Pastikan suara tetap muncul meskipun salah semua
try {
  audioBenar.currentTime = 0;
  audioBenar.play();
} catch(e) {}

  // === TAMPILKAN REKAP ===
  tampilkanRekap();
}

function tampilkanRekap() {
  let body = "";
  let totalSkor = 0;

  soalList.forEach((item, i) => {
    let benar = item._benar ? "✅" : "❌";
    let skor = item._benar ? 10 : 0;
    let nilai = skor;
    totalSkor += skor;

    body += `
      <tr>
        <td>${i + 1}</td>
        <td>${item.jawaban}</td>
        <td>${skor}</td>
        <td>${nilai}</td>
      </tr>
    `;
  });

  document.getElementById("rekap-body").innerHTML = body;

  let nilaiAkhir = (totalSkor / 100) * 100;
  document.getElementById("nilaiAkhirTxt").textContent =
    "Nilai Akhir : " + nilaiAkhir;

  document.getElementById("rekap-container").classList.remove("d-none");

  // ✅ Render MathJax setelah update tabel
  if (window.MathJax) {
    MathJax.typesetPromise();
  }
}


