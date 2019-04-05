# import peewee
import csv
from models import SP500, DowJones

price_history_sp500 = SP500.select().order_by(SP500.date).tuples()
price_history_dow = DowJones.select().order_by(DowJones.date).tuples()
with open('../data/stock_market_trend.csv', mode='w') as stock_market_trend_file:
    csv_writer = csv.writer(stock_market_trend_file, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)
    csv_writer.writerow(['Date', 'S&P500', 'Dow Jones'])
    for price_sp500, price_dow in zip(price_history_sp500, price_history_dow):
        csv_writer.writerow([price_sp500[1], price_sp500[2], price_dow[2]])
