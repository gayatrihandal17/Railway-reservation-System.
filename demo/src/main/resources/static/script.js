// ================= TRAIN DATA =================

const trains = [

{
  name: "Rajdhani Express",
  route: ["Mumbai","Surat","Vadodara","Delhi"],
  depart: "16:00",
  arrive: "08:00",
  fare: 1500
},

{
  name: "Duronto Express",
  route: ["Pune","Solapur","Hyderabad","Chennai"],
  depart: "18:00",
  arrive: "07:00",
  fare: 1200
},

{
  name: "Deccan Express",
  route: ["Pune","Lonavala","Kalyan","Mumbai"],
  depart: "07:00",
  arrive: "11:00",
  fare: 500
},

{
  name: "Intercity Express",
  route: ["Pune","Mumbai","Surat","Ahmedabad"],
  depart: "10:00",
  arrive: "18:00",
  fare: 800
},

{
  name: "Shatabdi Express",
  route: ["Mumbai","Vadodara","Ahmedabad"],
  depart: "06:00",
  arrive: "12:00",
  fare: 1000
},

{
  name: "Garib Rath",
  route: ["Delhi","Agra","Gwalior","Bhopal","Nagpur"],
  depart: "20:00",
  arrive: "10:00",
  fare: 700
},

{
  name: "Konkan Express",
  route: ["Mumbai","Ratnagiri","Madgaon","Mangalore"],
  depart: "15:00",
  arrive: "09:00",
  fare: 900
},

{
  name: "Goa Express",
  route: ["Pune","Satara","Kolhapur","Madgaon"],
  depart: "14:00",
  arrive: "22:00",
  fare: 600
},

{
  name: "Vidarbha Express",
  route: ["Mumbai","Nashik","Bhusawal","Nagpur"],
  depart: "19:00",
  arrive: "08:00",
  fare: 850
},

{
  name: "Chennai Mail",
  route: ["Mumbai","Pune","Solapur","Chennai"],
  depart: "13:00",
  arrive: "11:00",
  fare: 1100
},

{
  name: "Hyderabad Express",
  route: ["Mumbai","Pune","Hyderabad"],
  depart: "21:00",
  arrive: "09:00",
  fare: 950
}

];

// ================= INDEX PAGE =================
function searchTrain() {
  let from = document.getElementById("from").value.trim();
  let to = document.getElementById("to").value.trim();

  if (from === "" || to === "") {
    alert("Enter stations");
    return;
  }

  localStorage.setItem("from", from);
  localStorage.setItem("to", to);

  window.location.href = "train.html"; // ✅ SAME NAME
}


// ================= TRAINS PAGE =================
function loadTrains() {

  let from = localStorage.getItem("from");
  let to = localStorage.getItem("to");

  let container = document.getElementById("trainList");

  if (!container) return; // page safety

  container.innerHTML = `<h2>Trains from ${from} to ${to}</h2>`;

  let found = false;

  trains.forEach(train => {

    // check route match
    if (train.route.includes(from) && train.route.includes(to)) {

      found = true;

      container.innerHTML += `
        <div class="train-card">
          <h3>${train.name}</h3>
          <p>Route: ${train.route.join(" → ")}</p>
          <p>Departure: ${train.depart} | Arrival: ${train.arrive}</p>
          <p>Fare: ₹${train.fare}</p>
          <button onclick="selectTrain('${train.name}', ${train.fare})">
            Select
          </button>
        </div>
      `;
    }
  });

  if (!found) {
    container.innerHTML += "<p>No trains available for this route</p>";
  }
}

function selectTrain(name, fare) {
  console.log("Clicked:", name);   // 👈 add this

  localStorage.setItem("train", name);
  localStorage.setItem("fare", fare);

  window.location.href = "passenger.html";
}


// ================= PASSENGER PAGE =================
function loadPassengerInfo() {

  let train = localStorage.getItem("train");
  let fare = localStorage.getItem("fare");

  let info = document.getElementById("trainInfo");

  if (!info) return;

  info.innerHTML = `
    <h2>${train}</h2>
    <p>Fare: ₹${fare}</p>
  `;
}

function goPayment() {
  window.location.href = "payment.html";
}


// ================= PAYMENT PAGE =================
function loadPayment() {

  let train = localStorage.getItem("train");
  let fare = localStorage.getItem("fare");

  let payDiv = document.getElementById("paymentInfo");

  if (!payDiv) return;

  payDiv.innerHTML = `
    <h2>Payment Details</h2>
    <p>Train: ${train}</p>
    <p>Total Fare: ₹${fare}</p>
  `;
}

function payNow() {
  window.location.href = "confirmation.html";
}


// ================= CONFIRMATION PAGE =================
function loadConfirmation() {

  let train = localStorage.getItem("train");
  let fare = localStorage.getItem("fare");

  let conf = document.getElementById("confirmInfo");

  if (!conf) return;

  conf.innerHTML = `
    <h2>✅ Booking Confirmed</h2>
    <p>Train: ${train}</p>
    <p>Amount Paid: ₹${fare}</p>
    <p>Thank you for booking with us!</p>
  `;
}