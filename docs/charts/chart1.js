Highcharts.chart('chart1', {
    chart: {
        type: 'column'
    },
    data: {
        // enablePolling: true,
        csvURL: 'file:///Users/cbsteven/Documents/ProgrammingProjects/TrumpsEconomy/docs/data/chart1.csv'
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