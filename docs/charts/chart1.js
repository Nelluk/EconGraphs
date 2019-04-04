document.addEventListener('DOMContentLoaded', function () {
    Highcharts.chart('chart1', {
        chart: {
            type: 'column'
        },
        data: {
            // enablePolling: true,
            csvURL: 'https://www.highcharts.com/studies/data.csv'
        },
        title: {
            text: 'Fruit Chart'
        },
        yAxis: {
            title: {
                text: 'Units'
            }
        }
    });
});


// https://www.highcharts.com/studies/data.csv