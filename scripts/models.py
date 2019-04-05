from peewee import *

db = SqliteDatabase('data.db')


class BaseModel(Model):
    class Meta:
        database = db


class StockMarket(BaseModel):
    date = DateField(null=False, unique=True)
    close = FloatField(null=False)


class SP500(StockMarket):
    pass


class DowJones(StockMarket):
    pass


with db:
    db.create_tables([SP500, DowJones])
