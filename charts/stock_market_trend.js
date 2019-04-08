var stock_chart = new Highcharts.StockChart('stock_market_trend', {
        chart: {
            type: 'line',
            zoomType: 'x'
        },
        plotOptions: {
            series: {
                color: '#0c0909',
                compare: 'percent'
            }
        },
        data: {
            // enablePolling: true,
            // csvURL: 'https://raw.githubusercontent.com/Nelluk/EconGraphs/master/data/stock_market_trend.csv',
            csvURL: 'https://raw.githubusercontent.com/Nelluk/EconGraphs/master/data/sp500_trend.csv',
        },
        title: {
            text: 'Mark Indices Since 2007'
        },
        yAxis: {
            title: {
                text: 'Closing Price'
            }
        },
        xAxis: {
            plotBands: [{
                color: colorCodes.red_band,
                from: Date.UTC(2005, 1, 1),
                to: Date.UTC(2009, 1, 20)
            },
            {
                color: colorCodes.blue_band,
                from: Date.UTC(2009, 1, 20),
                to: Date.UTC(2017, 1, 20)
            },
            {
                color: colorCodes.red_band,
                from: Date.UTC(2017, 1, 20),
                to: Date.UTC(2024, 2, 4)
            }],
            type: 'datetime'
        },
        // series: [{
        //     visible: false
        // },
        // {
        //     visible: false
        // },
        // {
        //     visible: false
        // },
        // {
        //     visible: false
        // }]
    });

console.log('test')

// https://www.highcharts.com/studies/data.csv
// https://raw.githubusercontent.com/Nelluk/EconGraphs/master/data/chart1.csv