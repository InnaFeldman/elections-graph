(function(){
    let ctx = document.getElementById('myChart').getContext('2d');
    let labels = ['24', '23', '22'];
    var data = ['1'];

    for(let i = 0; i <= labels.length-1; i++){

        $.ajax({
            url: `https://israel-elections-1.s3.eu-west-3.amazonaws.com/${labels[i]}/allResults.json`,
            type: "GET",
            success: function(result) {
                if(result){
                    let number = Object.keys(result.realResults).length;
                    console.log(number);
                    data.push(number);
                }else {
                    console.log('Error')
                }
            }
        })
    }

   console.log(data);
    
    var chart = new Chart(ctx, {
        type: 'bar',
        data: {
           labels: labels,
              datasets: [{
                label: '3 last elections',
                backgroundColor: '#6a5acd',
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

})()