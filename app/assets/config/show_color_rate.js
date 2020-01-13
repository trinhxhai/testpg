
var rank = document.getElementById("rank");
var color = color_of(rank.innerHTML.toLowerCase().trim());
rank.style.color = color;
document.getElementById("rating").style.color = color;
document.getElementById("user_name").style.color=color;
var m_rank = document.getElementById("m_rank");
color = color_of(m_rank.innerHTML.toLowerCase().trim());
console.log(m_rank.innerHTML);
m_rank.style.color = color;
document.getElementById("m_rating").style.color = color;

 

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