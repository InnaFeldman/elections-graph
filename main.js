(function(){
    let ctx = document.getElementById('myChart').getContext('2d');
    let labels = ['22', '23', '24'];
    let data =  [10, 5, 2];
    
    var chart = new Chart(ctx, {
        type: 'bar',
        data: {
           labels: labels,
              datasets: [{
                label: 'My First dataset',
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: data,
              }]
        },
        options: {
            tooltips: {
                mode: 'index',
            }
        }
    })
    
    // const Http = new XMLHttpRequest();
    // const url='https://israel-elections-1.s3.eu-west-3.amazonaws.com/22/allResults.json?v=0.18408311438933267';
    // Http.open("GET", url);
    // Http.send();
    
    // Http.onreadystatechange = (e) => {
    //   console.log(Http.responseText)
    // }
    const url='https://israel-elections-1.s3.eu-west-3.amazonaws.com/22/allResults.json?v=0.18408311438933267';
    $.ajax({
        url: url,
        type: "GET",
        success: function(result) {
            console.log(result.realResults)
        },
        error: function(error) {
            console.log(`Error ${error}`)
        }
    })
})()