import peewee
import csv
from models import SP500, DowJones

price_history = SP500.select().order_by(SP500.date).tuples()
with open('../data/sp500_trend.csv', mode='w') as sp500_file:
    csv_writer = csv.writer(sp500_file, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)
    for price in price_history:
        csv_writer.writerow([price[1], price[2]])
