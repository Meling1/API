var request = new XMLHttpRequest();

// endpoint data: https://xsmilex007.github.io/JS-API-example/mydata.json

// otvaramo konekciju prema endpointu, koristimo GET metodu izvrsavanja
// jer zelimo dohvatiti podatke (samo dohvacamo podatke)
request.open(
  "GET",
  "https://xsmilex007.github.io/JS-API-example/mydata.json",
  true
);

// iniciramo GET request prema endpointu
request.send();

// ovdje implementiramo događaj nakon sto smo dohvatili podatke
// isparsat cemo JSON, pretvorit ga u objekt te ga
// prikazati na stranici
request.onload = function (result) {
  console.log(result.currentTarget.response);

  const obj = JSON.parse(result.currentTarget.response);

  let grad = obj.request.query; // San Francisco, United states of America
  console.log("isparsani grad = " + grad);

  let country = obj.location.country;
  let regija = obj.location.region;
  let temp = obj.current.temparature;
  let uv = obj.current.uv_index;

  console.log(
    `country:${country}|regija:${regija}|temperatura:${temp}|UV index:${uv}`
  );

  document.getElementById("grad").value = grad; // input field pa koristimo value

  document.getElementById("country").textContent = country;
  document.getElementById("regija").textContent = regija;
  document.getElementById("uvindex").textContent = uv;
  document.getElementById("temp").textContent = temp;
};
