/*******************************
   DATA SOAL
********************************/
let soalList = [
  {
    soal: "3/8 + 2/8 = …",
    opsi: ["4/8","5/8","6/8","7/8"],
    jawaban: "5/8"
  },
  {
    soal: "5/6 − 2/6 = …",
    opsi: ["2/6","3/6","4/6","5/6"],
    jawaban: "3/6"
  },
  {
    soal: "Sinta mempunyai 2/5 bagian kue coklat, lalu membeli lagi 3/10 bagian. Total = …",
    opsi: ["4/10","5/10","7/10","8/10"],
    jawaban: "7/10"
  },
  {
    soal: "Ibu mempunyai 3/4 liter minyak, dipakai 1/8 liter. Sisa = …",
    opsi: ["2/8","4/8","5/8","6/8"],
    jawaban: "6/8"
  },
  {
    soal: "7/12 + 5/6 = …",
    opsi: ["13/12","14/12","15/12","17/12"],
    jawaban: "15/12"
  }
];

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
      <div id="soal-${i}" class="quiz-card section-box mb-3">
        <h6 class="fw-bold text-primary">Soal ${i+1}</h6>
        <p>${item.soal}</p>

        ${item.opsi.map((o,idx)=>
          `<div class="form-check">
              <input class="form-check-input" type="radio" 
                     name="opsi-${i}" value="${o}"
                     id="opsi-${i}-${idx}">
              <label class="form-check-label" for="opsi-${i}-${idx}">
                ${o}
              </label>
           </div>`
        ).join("")}

        <p class="mt-2 fw-bold text-success d-none" id="kunci-${i}">
          ✅ Jawaban Benar: ${item.jawaban}
        </p>
      </div>
    `;
  });

  document.getElementById("quiz-area").innerHTML = html;
}

renderSoal();

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

    // reset animasi (biar bisa dipakai lagi)
    box.classList.remove("benar-anim","salah-anim");

    // tampilkan kunci
    kunci.classList.remove("d-none");

    if(!selected){
      box.classList.add("salah-anim");
      return;
    }

    if(selected.value === item.jawaban){
      skor++;
      box.classList.add("benar-anim");
      audioBenar.currentTime = 0;
      audioBenar.play();
    } else {
      box.classList.add("salah-anim");
    }
  });

  let nilai = skor * 20;
  document.getElementById("skorText").textContent = `Nilai Kamu: ${nilai}`;
}

