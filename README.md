Little hobby project to practice some kind of web app with interactive graphs.

Intended to show graphs of a bunch of economic indicators with shading to represent performance under Obama and then Trump.

Only got to the stock market indicator before stalling out.

`scripts/stock_market_pricing.py` used AlphaVantage API to grab historical data and populate a SQLite database. API no longer works for stock indices
and would need to be replaced by something else if this is used again (maybe yfinance)

`scripts/stock_market_rows.py` just creates a CSV file from the database.

`charts/stock_market_trend.js` created the chart with Highcharts.js

Page is intended to be hosted on Github pages and just have the underlying CSVs changed on a schedule.
