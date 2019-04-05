import setup
import requests
import peewee
from models import SP500, DowJones

symb_sp500 = '^GSPC'
symb_dow = '.DJI'

if not setup.alphavantage_key:
    print('Could not load alphavantage_key from config.ini')
    exit(1)

payload = {'function': 'TIME_SERIES_DAILY',
            'symbol': symb_dow,
            'outputsize': 'full',  # 'full' for all history or  'compact' for last 100 data points
            'apikey': setup.alphavantage_key}

base_url = 'https://www.alphavantage.co/query'

print(payload)

r = requests.get(base_url, params=payload)

try:
    response_data = r.json()
except ValueError:
    print(f'Error parsing response. Status code {r.status_code} from request url {r.url}')
    exit(1)

for key, value in response_data['Time Series (Daily)'].items():
    # print(key, value['4. close'])
    if int(key[:4]) < 2007:
        continue  # skip close dates prior to 2007

    DowJones.replace(date=key, close=value['4. close']).execute()
