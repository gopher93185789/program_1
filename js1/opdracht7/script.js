function berekenInhoud() {
  let lengte = window.prompt("Voer de lengte in (in cm):");
  let breedte = window.prompt("Voer de breedte in (in cm):");
  let hoogte = window.prompt("Voer de hoogte in (in cm):");

  if (isNaN(lengte) || isNaN(breedte) || isNaN(hoogte)) {
    alert("allen nummers zijn geldig");
    return;
  }

  let inhoud = lengte * breedte * hoogte;
  document.getElementById("result").innerHTML =
    "De inhoud is " + inhoud + " cm³";
}

berekenInhoud();
