// Load google charts
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

// Draw the chart and set the chart values
function drawChart() {
  var tags = document.getElementsByClassName('analy_tags')[0].getElementsByClassName("analy_tag_name");
  //console.log(tags[0].getAttribute('data-temp'));
  var arr=[["Tags","Times"]];

  for (var i = 0;i<tags.length;i++){
      tag = tags[i].getAttribute('data-temp');
      times = tags[i].getElementsByClassName("analy_tag_times")[0].getAttribute('data-temp');
      arr.push([tag,parseInt(times)]);
  }
  //console.log(arr);

  var data = google.visualization.arrayToDataTable(arr);

  // Optional; add a title and set the width and height of the chart
  var options = {'title':'Tags', 'width':850, 'height':700};

  // Display the chart inside the <div> element with id="piechart"
  var chart = new google.visualization.PieChart(document.getElementById('piechart'));
  chart.draw(data, options);
}