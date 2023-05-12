
function createGraph() {
  // Get the input values from the form
  var s1n1 = document.getElementById("s1n1").value;
  var s1n2 = document.getElementById("s1n2").value;
  var s1n3 = document.getElementById("s1n3").value;

  var s2n1 = document.getElementById("s2n1").value;
  var s2n2 = document.getElementById("s2n2").value;
  var s2n3 = document.getElementById("s2n3").value;

  // Create the chart
  var ctx = document.getElementById("myChart").getContext("2d");
  var myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: ["Number 1", "Number 2", "Number 3"],
      datasets: [
        {
          label: "Section 1",
          data: [s1n1, s1n2, s1n3],
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 2,
          fill: false
        },
        {
          label: "Section 2",
          data: [s2n1, s2n2, s2n3],
          borderColor: "rgba(54, 162, 235, 1)",
          borderWidth: 2,
          fill: false
        }
      ]
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true
            }
          }
        ]
      }
    }
  });
}
