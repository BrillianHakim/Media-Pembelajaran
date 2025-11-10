/*******************************
   DATA SOAL
********************************/
/*******************************
   DATA SOAL HOTS Pecahan + Gambar
********************************/
let soalList = [
  {
    soal: "Ani makan \\( \\frac{2}{3} \\) bagian kue. Beni makan \\( \\frac{1}{4} \\) bagian kue yang sama. Berapa bagian kue yang dimakan mereka berdua?",
    opsi: [
      "\\( \\frac{7}{12} \\)",
      "\\( \\frac{8}{12} \\)",
      "\\( \\frac{11}{12} \\)",
      "\\( \\frac{5}{6} \\)"
    ],
    jawaban: "\\( \\frac{11}{12} \\)"
  },
  {
    soal: "Di kebun, \\( \\frac{3}{5} \\) bagian lahan ditanami sayur. Dari lahan tersebut, \\( \\frac{1}{3} \\) ditanami tomat. Berapa bagian seluruh lahan yang ditanami tomat?",
    opsi: [
      "\\( \\frac{1}{4} \\)",
      "\\( \\frac{1}{5} \\)",
      "\\( \\frac{3}{15} \\)",
      "\\( \\frac{1}{6} \\)"
    ],
    jawaban: "\\( \\frac{1}{5} \\)"
  },
  {
    soal: "Sebuah tangki berisi \\( \\frac{4}{7} \\) liter minyak. Setelah digunakan \\( \\frac{2}{7} \\) liter, sisa minyak adalah ...",
    img: "../assets/img/tangki.png",
    opsi: [
      "\\( \\frac{1}{7} \\)",
      "\\( \\frac{2}{7} \\)",
      "\\( \\frac{3}{7} \\)",
      "\\( \\frac{6}{7} \\)"
    ],
    jawaban: "\\( \\frac{2}{7} \\)"
  },
  {
    soal: "Dalam sebuah lomba, peserta pertama menempuh \\( \\frac{5}{8} \\) lintasan dan peserta kedua menempuh \\( \\frac{1}{4} \\) lintasan. Selisih jarak mereka adalah ...",
    
    opsi: [
      "\\( \\frac{1}{8} \\)",
      "\\( \\frac{2}{8} \\)",
      "\\( \\frac{3}{8} \\)",
      "\\( \\frac{7}{8} \\)"
    ],
    jawaban: "\\( \\frac{3}{8} \\)"
  },
  {
    soal: "Ibu membeli \\( \\frac{7}{9} \\) kilogram gula. Digunakan \\( \\frac{2}{9} \\) untuk membuat kue dan \\( \\frac{1}{9} \\) untuk minuman. Sisa gula adalah ...",
    img: "../assets/img/gula.jpg",
    opsi: [
      "\\( \\frac{5}{9} \\)",
      "\\( \\frac{4}{9} \\)",
      "\\( \\frac{3}{9} \\)",
      "\\( \\frac{6}{9} \\)"
    ],
    jawaban: "\\( \\frac{4}{9} \\)"
  }
];

/* acak opsi */
function shuffle(arr){ return arr.sort(()=>Math.random()-0.5); }
soalList.forEach(s=> s.opsi = shuffle(s.opsi) );



/* acak opsi */
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