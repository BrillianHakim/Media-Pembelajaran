/*******************************
   DATA SOAL EVALUASI
********************************/
let soalList = [

  // PENJUMLAHAN & PENGURANGAN
  { soal: "12/15 + 2/15 = …", opsi: ["10/15","13/15","14/15","15/15"], jawaban: "14/15" },
  { soal: "17/20 + 1/20 = …", opsi: ["9/10","18/20","19/20","20/20"], jawaban: "9/10" },
  { soal: "9/18 + 4/24 = …", opsi: ["12/18","11/24","2/3","5/6"], jawaban: "2/3" },
  { soal: "19/21 − 7/21 = …", opsi: ["13/21","12/21","4/7","2/3"], jawaban: "4/7" },
  { soal: "16/25 − 4/25 = …", opsi: ["10/25","11/25","12/25","13/25"], jawaban: "12/25" },
  { soal: "15/20 − 6/15 = …", opsi: ["7/20","1/2","2/5","3/5"], jawaban: "7/20" },

  // SOAL CERITA
  { soal: "Toples berisi 12/18 permen stroberi & 5/18 anggur. Total = …", opsi: ["15/18","16/18","17/18","18/18"], jawaban: "17/18" },
  { soal: "Deni membaca 9/15 pagi & 6/20 malam. Total = …", opsi: ["3/5","9/10","5/6","7/8"], jawaban: "9/10" },
  { soal: "Tangki berisi 18/24 air, berkurang 5/24. Sisa = …", opsi: ["10/24","11/24","12/24","13/24"], jawaban: "13/24" },
  { soal: "Pedagang punya 14/21 ton, jual 6/18 ton. Sisa = …", opsi: ["1/4 Ton","1/3 Ton","1/2 Ton","2/3 Ton"], jawaban: "1/3 Ton" },

];

// Acak opsi tiap soal
function shuffle(arr){ return arr.sort(()=>Math.random()-0.5); }
soalList.forEach(s => s.opsi = shuffle(s.opsi));


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

        ${item.opsi.map((o)=>
          `<div>
            <label>
              <input type="radio" name="opsi-${i}" value="${o}">
              ${o}
            </label>
          </div>`
        ).join("")}

        <!-- jawaban muncul setelah selesai -->
        <p class="mt-2 fw-bold text-danger d-none" id="kunci-${i}">
          ✅ Jawaban: ${item.jawaban}
        </p>
      </div>
    `;
  });

  document.getElementById("quiz-area").innerHTML = html;
}

renderSoal();

/*******************************
   CEK JAWABAN
********************************/
function periksaSemua(){
  skor = 0;
  const audioBenar = document.getElementById("audioBenar");

  soalList.forEach((item,i)=>{
    let selected = document.querySelector(`input[name="opsi-${i}"]:checked`);
    let box = document.getElementById(`soal-${i}`);

    document.getElementById(`kunci-${i}`).classList.remove("d-none");

    if(!selected){
      box.classList.add("salah");
      item._benar = false;
      return;
    }

    if(selected.value === item.jawaban){
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

  // === TAMPILKAN REKAP ===
  tampilkanRekap();
}


function tampilkanRekap() {
  let body = "";
  let totalSkor = 0;

  soalList.forEach((item, i) => {
    let benar = (item._benar) ? "✅" : "❌";
    let skor = (item._benar) ? 10 : 0;
    let nilai = skor;

    totalSkor += skor;

    body += `
      <tr>
        <td>${i+1}</td>
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
}
