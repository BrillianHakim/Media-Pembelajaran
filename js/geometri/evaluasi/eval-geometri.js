/*******************************
 * DATA SOAL + KUNCI + PENYELESAIAN (MathJax)
 *******************************/
const soalList = [
  {
    soal: "1) Sebuah kerucut memiliki jari-jari alas 7 cm dan garis pelukis 10 cm. Hitung luas selimut kerucut! \\( \\pi = \\dfrac{22}{7} \\)",
    jawaban: 220,
    solusi: `Penyelesaian :
\\( \\text{Luas selimut} = \\pi \\times r \\times s \\)
\\( = \\dfrac{22}{7} \\times 7 \\times 10 \\)
\\( = 22 \\times 10 = 220\\,\\text{cm}^2 \\)`
  },

  {
    soal: "2) Sebuah kerucut memiliki jari-jari alas 6 cm dan garis pelukis 10 cm. Hitung luas permukaan! \\( \\pi = 3.14 \\)",
    jawaban: 301.44,
    solusi: `Penyelesaian :
\\( L = \\pi r (r + s) \\)
\\( = 3.14 \\times 6 (6 + 10) \\)
\\( = 3.14 \\times 6 \\times 16 \\)
\\( = 3.14 \\times 96 = 301.44\\,\\text{cm}^2 \\)`
  },

  {
    soal: "3) Sebuah kerucut memiliki jari-jari alas 7 cm. Jika luas selimut kerucut 308 cm², tentukan panjang garis pelukis s! \\( \\pi = \\dfrac{22}{7} \\)",
    img: "../assets/img/ppp.png",
    jawaban: 14,
    solusi: `Penyelesaian :
\\( L = \\pi \\times r \\times s \\)
\\( 308 = \\dfrac{22}{7} \\times 7 \\times s \\)
\\( 308 = 22s \\)
\\( s = \\dfrac{308}{22} = 14\\,\\text{cm} \\)`
  },

  {
    soal: "4) Sebuah kerucut memiliki jari-jari alas 7 cm dan tinggi 9 cm. Hitung volume kerucut! \\( \\pi = \\dfrac{22}{7} \\)",
    jawaban: 462,
    solusi: `Penyelesaian :
\\( V = \\dfrac{1}{3} \\pi r^2 t \\)
\\( = \\dfrac{1}{3} \\times \\dfrac{22}{7} \\times 7^2 \\times 9 \\)
\\( = \\dfrac{1}{3} \\times \\dfrac{22}{7} \\times 49 \\times 9 \\)
\\( = \\dfrac{1}{3} \\times 22 \\times 7 \\times 9 \\)
\\( = \\dfrac{1}{3} \\times 1386 \\)
\\( = 462\\,\\text{cm}^3 \\)`
  },

  {
    soal: "5) Sebuah kerucut memiliki jari-jari 6 cm dan tinggi 12 cm. Hitung volumenya \\( \\pi = 3.14 \\)",
    img: "../assets/img/612.png",
    jawaban: 452.16,
    solusi: `Penyelesaian :
\\( V = \\dfrac{1}{3} \\pi r^2 t \\)
\\( = \\dfrac{1}{3} \\times 3.14 \\times 6^2 \\times 12 \\)
\\( = \\dfrac{1}{3} \\times 3.14 \\times 36 \\times 12 \\)
\\( = \\dfrac{1}{3} \\times 1354.56 \\)
\\( = 452.16\\,\\text{cm}^3 \\)`
  },

  {
    soal: "6) Sebuah kerucut memiliki jari-jari 5 cm dan volumenya 261.67 cm³. Hitung tinggi kerucutnya! \\( \\pi = 3.14 \\)",
    jawaban: 10,
    solusi: `Penyelesaian :
\\( V = \\dfrac{1}{3} \\pi r^2 t \\)
\\( 261.67 = \\dfrac{1}{3} \\times 3.14 \\times 25 \\times t \\)
\\( 261.67 = 26.1667 t \\)
\\( t = \\dfrac{261.67}{26.1667} = 10\\,\\text{cm} \\)`
  },

  {
    soal: "7) Rani membuat topi ulang tahun berbentuk kerucut. \\( r = 7\\,\\text{cm}, s = 10\\,\\text{cm} \\). Hitung luas permukaan! \\( \\pi = \\dfrac{22}{7} \\)",
    img: "../assets/img/UltahKerucut.png",
    jawaban: 374,
    solusi: `Penyelesaian :
\\( L = \\pi r (r + s) \\)
\\( = \\dfrac{22}{7} \\times 7 (7 + 10) \\)
\\( = 22 \\times 17 = 374\\,\\text{cm}^2 \\)`
  },

  {
    soal: "8) Sebuah topi kerucut memiliki jari-jari 7 cm. Luas permukaan topi = 374 cm². Tentukan panjang s! \\( \\pi = \\dfrac{22}{7} \\)",
    jawaban: 10,
    solusi: `Penyelesaian :
\\( L = \\pi r (r + s) \\)
\\( 374 = \\dfrac{22}{7} \\times 7 (7 + s) \\)
\\( 374 = 22 (7 + s) \\)
\\( 7 + s = \\dfrac{374}{22} = 17 \\)
\\( s = 17 - 7 = 10\\,\\text{cm} \\)`
  },

  {
    soal: "9) Sebuah tenda berbentuk kerucut \\( r = 4\\,\\text{m}, t = 9\\,\\text{m} \\). Hitung volume! \\( \\pi = 3.14 \\)",
    img: "../assets/img/TendaKerucut.avif",
    jawaban: 150.72,
    solusi: `Penyelesaian :
\\( V = \\dfrac{1}{3} \\pi r^2 t \\)
\\( = \\dfrac{1}{3} \\times 3.14 \\times 4^2 \\times 9 \\)
\\( = \\dfrac{1}{3} \\times 3.14 \\times 16 \\times 9 \\)
\\( = \\dfrac{1}{3} \\times 452.16 \\)
\\( = 150.72\\,\\text{m}^3 \\)`
  },

  {
    soal: "10) Sebuah kerucut tanah liat \\( r = 5\\,\\text{cm}, V = 261.67\\,\\text{cm}^3 \\). Hitung tinggi! \\( \\pi = 3.14 \\)",
    jawaban: 10,
    solusi: `Penyelesaian :
\\( V = \\dfrac{1}{3} \\pi r^2 t \\)
\\( 261.67 = \\dfrac{1}{3} \\times 3.14 \\times 25 \\times t \\)
\\( 261.67 = 26.1667 t \\)
\\( t = \\dfrac{261.67}{26.1667} = 10\\,\\text{cm} \\)`
  }
];

/*******************************
 * RENDER SOAL
 *******************************/
function renderSoal() {
  const area = document.getElementById('quiz-area');
  let html = '';

  soalList.forEach((it, idx) => {
    html += `
      <div id="soal-${idx}" class="section-box">

        <p class="fw-bold mb-2">${it.soal}</p>

        ${it.img ? `
        <div class="text-center mb-3">
          <img src="${it.img}" class="img-fluid rounded shadow soal-img">
        </div>` : ''}

        <input id="jawab-${idx}" 
               class="form-control" 
               placeholder="Masukkan jawaban (angka saja)">

        <div id="sol-${idx}" class="sol-box d-none"></div>
      </div>`;
  });

  area.innerHTML = html;

  if (window.MathJax) MathJax.typesetPromise();
}


renderSoal();

/*******************************
 * UTILITAS DAN PEMERIKSAAN (tetap sama)
 *******************************/
function nearlyEqual(a,b,relTol=0.01){
  if(typeof a!=='number'||typeof b!=='number')return false;
  const diff=Math.abs(a-b);
  return diff<=Math.abs(b)*relTol+1e-9;
}

function periksaSemua(){
  let skor = 0;
  const audioBenar = document.getElementById('audioBenar');
  const rekap = [];

  soalList.forEach((item, i) => {
    const input = document.getElementById(`jawab-${i}`);
    const box = document.getElementById(`soal-${i}`);
    const sol = document.getElementById(`sol-${i}`);

    const raw = (input.value || '').trim().replace(',', '.');
    const val = parseFloat(raw);
    const isNum = !Number.isNaN(val);
    const benar = isNum && nearlyEqual(val, item.jawaban, 0.01);

    sol.classList.remove('d-none');
    sol.innerHTML = item.solusi;
    MathJax.typesetPromise([sol]);

    box.classList.remove('benar', 'salah');
    if (benar) {
      skor += 10;
      box.classList.add('benar');
    } else {
      box.classList.add('salah');
    }

    rekap.push({
      no: i + 1,
      kunci: item.jawaban,
      skor: benar ? 10 : 0,
      nilai: benar ? 10 : 0,
      solusi: item.solusi
    });
  });

  document.getElementById('skorText').textContent = `Nilai Kamu: ${skor}`;

  // ✅ Suara tetap berbunyi meskipun semua salah
  try {
    audioBenar.currentTime = 0;
    audioBenar.play();
  } catch(e) {}

  tampilkanRekap(rekap, skor);
}



function tampilkanRekap(rows,totalSkor){
  const tbody=document.getElementById('rekap-body');
  let html='';
  rows.forEach(r=>{
    html+=`
      <tr>
        <td>${r.no}</td>
        <td>${r.kunci}</td>
        <td>${r.skor}</td>
        <td>${r.nilai}</td>
        
      </tr>`;
  });
  tbody.innerHTML=html;
  MathJax.typesetPromise([tbody]);
  document.getElementById('nilaiAkhirTxt').textContent=`Nilai Akhir: ${totalSkor} / 100`;
  document.getElementById('rekap-container').classList.remove('d-none');
  document.getElementById('rekap-container').scrollIntoView({behavior:'smooth'});
}