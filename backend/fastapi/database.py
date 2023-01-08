from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from urllib.parse import quote_plus as urlquote 



SQLALCHEMY_DATABASE_URL = "mysql+mysqlconnector://root:%s@localhost:3306/vuetify_fastapi" % urlquote('72sqsPassw@rd')


# mysql+pymysql -> not work
# mysql -> not work



engine = create_engine(
    SQLALCHEMY_DATABASE_URL  ,pool_pre_ping=True
)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine,)

Base = declarative_base()
