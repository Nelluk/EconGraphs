import configparser

config = configparser.ConfigParser()
config.read('config.ini')

alphavantage_key = config['DEFAULT'].get('alphavantage_key', None)
obama_date_inaug = '2009-01-20'
trump_date_inaug = '2017-01-20'
