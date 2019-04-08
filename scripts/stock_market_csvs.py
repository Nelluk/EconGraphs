# import peewee
import csv
from models import SP500, DowJones

price_history_sp500 = SP500.select().order_by(SP500.date).tuples()
price_history_dow = DowJones.select().order_by(DowJones.date).tuples()
price_baseline_sp500 = price_history_sp500[0][2]
price_baseline_dow = price_history_dow[0][2]

with open('../data/sp500_trend.csv', mode='w') as stock_market_trend_file:
    csv_writer = csv.writer(stock_market_trend_file, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)
    # csv_writer.writerow(['Date', 'S&P500 Price', 'S&P500 Return', 'Dow Jones Price', 'Dow Jones Return'])
    # csv_writer.writerow(['Date', 'S&P500 Price', 'Dow Jones Price'])
    csv_writer.writerow(['Date', 'S&P500 Price'])
    for price_sp500, price_dow in zip(price_history_sp500, price_history_dow):
        # csv_writer.writerow([price_sp500[1], price_sp500[2], price_sp500[2] / price_baseline_sp500, price_dow[2], price_dow[2] / price_baseline_dow])
        # csv_writer.writerow([price_sp500[1], price_sp500[2], price_dow[2]])
        csv_writer.writerow([price_sp500[1], f'${price_sp500[2]}'])
