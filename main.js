(function(){
    let ctx = document.getElementById('myChart').getContext('2d');
    let labels = ['22', '23', '24'];
    var newdata = [];

    for(let i = 0; i <= labels.length; i++){
        this["ajax_"+i] = {
        url: `https://israel-elections-1.s3.eu-west-3.amazonaws.com/${labels[i]}/allResults.json`,
        type: "GET",
        success: function(result) {
            if(result){
                let number = Object.keys(result.realResults).length;
                newdata.push(number);
                // console.log(newdata);
            }else {
                console.log('Error')
            }
        }
    }
    }

    const ajaxCalls = [ajax_0, ajax_1, ajax_2].filter(a => a !== null);

    (async ()=> {
 
        Promise.all(ajaxCalls.map(a =>jQuery.ajax(a)))
        .then(data => {
            console.log("all finished", data);

            new Chart(ctx, {
                type: 'bar',
                data: {
                labels: labels,
                    datasets: [{
                        label: 'Elections',
                        backgroundColor: '#6a5acd',
                        borderColor: 'rgb(255, 99, 132)',
                        data: newdata,
                    }]
                },
                options: {
                    tooltips: {
                        mode: 'index',
                    }
                }
            })
        }).catch(err=> {
            // something went wrong show error in console
            console.log(new Error(err));
        })
})();

})()