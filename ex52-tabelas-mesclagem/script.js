function calcu() {
  let qu1 = window.document.getElementById("q1");
  let qu2 = window.document.getElementById("q2");
  let uni1 = window.document.getElementById("unit1");
  let uni2 = window.document.getElementById("unit2");
  let tota1 = window.document.getElementById("total1");
  let tota2 = window.document.getElementById("total2");
  

  let q1 = Number(qu1.value);
  let q2 = Number(qu2.value);
  let u1 = Number(uni1.value);
  let u2 = Number(uni2.value);

  tota1.innerHTML = q1 * u1;
  tota2.innerHTML = q2 * u2;

}
function calcu2() {
  let tota1 = window.document.getElementById("total1");
  let tota2 = window.document.getElementById("total2");
  let totalfina = window.document.getElementById("totalfinal");
  let to1 = Number(tota1.value);
  let to2 = Number(tota2.value);

  totalfina.innerHTML = to1 + to2;
}
