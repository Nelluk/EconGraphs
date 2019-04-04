document.addEventListener('DOMContentLoaded', function () {
    Highcharts.chart('chart1', {
        chart: {
            type: 'column'
        },
        data: {
            // enablePolling: true,
            csvURL: 'https://raw.githubusercontent.com/Nelluk/EconGraphs/master/docs/data/chart1.csv'
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
// https://raw.githubusercontent.com/Nelluk/EconGraphs/master/docs/data/chart1.csv