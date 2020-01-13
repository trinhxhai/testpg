coloring_rank();
function color_of(rank){
  switch(rank){
    case "newbie":
      return "gray"
    break;
    case "pupil":
      return "green"
    break;
    case "specialist":
      return "#03A89E"
    break;
    case "expert":
      return "#0000cc"
    break;
    case "candidate master":
      return "#a0a";
    break;
    
    default:
      return "orange"
    break;
  }
}

function coloring_rank() {
  var table, row;
  table = document.getElementById("ranking_table");
  //row = table.rows;//[1];
  //row[2].style.color = "green";
  //row[2].getElementsByTagName("TD")[2].style.color = "green";
  
  for (i = 1; i < table.rows.length; i++) {

        row = table.rows[i].getElementsByTagName("TD")[3]
        row.style.color = color_of(row.innerText) ;
  }


}

