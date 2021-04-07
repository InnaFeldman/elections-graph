(function(){
    let ctx = document.getElementById('myChart').getContext('2d');
    let labels = ['22', '23', '24'];
    var data = ['10', '5', '7'];


    for(let i = 0; i <= labels.length; i++){

        this["ajax_"+i] = {
        url: `https://israel-elections-1.s3.eu-west-3.amazonaws.com/${labels[i]}/allResults.json`,
        type: "GET",
        success: function(result) {
            if(result){
                let number = Object.keys(result.realResults).length;
                console.log(number);
            }else {
                console.log('Error')
            }
        }
    }
    }


    const ajaxCalls = [ajax_0, ajax_1, ajax_2].filter(a => a !== null);

    Promise.all(ajaxCalls.map(a =>jQuery.ajax(a)))
    .then(data => {
        console.log("all finished", data);//used fro debug//* This is for DEBUG!.
        
    }).catch(err=> {
        // something went wrong show error in console
        console.log(new Error(err));//* This is for DEBUG!.
    })



    
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