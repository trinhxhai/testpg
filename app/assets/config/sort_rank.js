sort_by_rating();
function getR( s ){
    
    var b=0;
    var i = s.length-1;

    while(s[i]!='/'){
      b = s[i] + b;
      i--;
    }
    i--;
    var a=0;
    while(i>=0){
      a = s[i] + a ;
      i--;
    }
    //return parseInt(b);
    return parseFloat(a)/parseFloat(b);
}



function sort_by_rating() {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("ranking_table");
  switching = true;
  while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("TD")[2];
      y = rows[i + 1].getElementsByTagName("TD")[2];
      if (parseInt(x.innerText)< parseInt(y.innerText)) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}



function sort_by_subs() {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("ranking_table");
  switching = true;
  while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("TD")[4];
      y = rows[i + 1].getElementsByTagName("TD")[4];
      if (getR(x.innerText)< getR(y.innerText)){
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}
