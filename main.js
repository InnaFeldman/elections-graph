(function(){
    let ctx = document.getElementById('myChart').getContext('2d');
    let labels = ['22', '23', '24'];
    var data;
    var data_1 =  [10, 5, 2];
    const url='https://israel-elections-1.s3.eu-west-3.amazonaws.com/24/allResults.json';

    let election_24 = $.ajax({
        url: url,
        type: "GET",
        success: function(result) {
            getData(result)
        },
        error: function(error) {
            console.log(`Error ${error}`)
        }
    })
    
    
    function getData(result){
        data = result;
        console.log(data);
    }

    var chart = new Chart(ctx, {
        type: 'bar',
        data: {
           labels: labels,
              datasets: [{
                label: '3 last elections',
                backgroundColor: '#6a5acd',
                borderColor: 'rgb(255, 99, 132)',
                data: data_1,
              }]
        },
        options: {
            tooltips: {
                mode: 'index',
            }
        }
    })

})()