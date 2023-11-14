const API = 'https://islomapi.uz/api/present/day?region='




async function getData(region) {
  const request = await fetch(
    `https://islomapi.uz/api/present/day?region=${region}`
  );
  const response = await request.json();


  document.querySelector(".tong").textContent =
    "Tong:" + " " + response.times.tong_saharlik;
  document.querySelector(".quyosh").textContent =
    "Quyosh:" + " " + response.times.quyosh;
  document.querySelector(".peshin").textContent =
    "Peshin:" + " " + response.times.peshin;
  document.querySelector(".asr").textContent =
    "Asr:" + " " + response.times.asr;
  document.querySelector(".shom").textContent =
    "Shom:" + " " + response.times.shom_iftor;
  document.querySelector(".xufton").textContent =
    "Xufton:" + " " + response.times.hufton;


  let hour = new Date().getHours();
  console.log(hour);
  let minutes = new Date().getMinutes();
  console.log(minutes);
  let date = `${hour}:${minutes}`;
  console.log(date);
  
  if (date<response.times.asr && date>=response.times.peshin) {
    document.querySelector(".peshin").classList.add('blue');
  }else if (date>=response.times.asr && date<response.times.shom_iftor) {
    document.querySelector(".asr").classList.add('blue');
  }else if (date>=response.times.shom_iftor && date<response.times.hufton) {
    document.querySelector(".shom").classList.add('blue');
  }else if (date>=response.times.hufton && date<response.times.hufton) {
    document.querySelector(".hufton").classList.add('blue');
  }else if (date>=response.times.tong_saharlik && date<response.times.quyosh) {
    document.querySelector(".tong").classList.add('blue');
  } else if (date>=response.times.quyosh && date<response.times.peshin) {
    document.querySelector(".quyosh").classList.add('blue');
  }
  

  

  


  console.log(response);
}

getData("Toshkent");

document.getElementById("region").addEventListener("change", (e) => {
  getData(e.target.value);
});

