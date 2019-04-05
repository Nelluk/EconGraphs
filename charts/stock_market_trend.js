document.addEventListener('DOMContentLoaded', function () {
    Highcharts.chart('stock_market_trend', {
        chart: {
            type: 'line'
        },
        plotOptions: {
            series: {
                color: '#0c0909'
            }
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
        },
        xAxis: {
            plotBands: [{
                color: '#d7dcef',
                from: Date.UTC(2008, 1, 20),
                to: Date.UTC(2017, 1, 19)
            },
            {
                color: '#edc4c4',
                from: Date.UTC(2017, 1, 20),
                to: Date.UTC(2024, 2, 4)
            }],
            tickInterval: 24 * 3600 * 1000, // one day
            type: 'datetime'
        },
    });
});


// https://www.highcharts.com/studies/data.csv
// https://raw.githubusercontent.com/Nelluk/EconGraphs/master/data/chart1.csv