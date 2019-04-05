document.addEventListener('DOMContentLoaded', function () {
    Highcharts.chart('chart1', {
        chart: {
            type: 'line'
        },
        data: {
            // enablePolling: true,
            csvURL: 'https://raw.githubusercontent.com/Nelluk/EconGraphs/master/data/sp500_trend.csv'
        },
        title: {
            text: 'S&P500 Since 2007'
        },
        yAxis: {
            title: {
                text: 'Closing Price'
            }
        }
    });
});


// https://www.highcharts.com/studies/data.csv
// https://raw.githubusercontent.com/Nelluk/EconGraphs/master/data/chart1.csv