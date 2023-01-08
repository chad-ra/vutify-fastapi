from wsgiref.simple_server import demo_app
from sqlalchemy.orm import Session
import models, schemas
from fastapi import HTTPException
from datetime import datetime,timedelta
from sqlalchemy import and_,or_
from datetime import date
from selenium import webdriver 
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.firefox.options import Options
from selenium.webdriver.firefox.firefox_profile import FirefoxProfile
from requests.structures import CaseInsensitiveDict
import base64
from sqlalchemy import Date, cast
from datetime import date
from random import randint

def get_customer_list(db: Session):
    res = db.query(models.customer).all()
    return res


def del_customer(db: Session, customer_del_id: schemas.customer_del_id):

    try:
        db.query(models.customer).filter(models.customer.id == customer_del_id.id).delete()
        db.commit()
        return True

    except Exception as e: 
        print(e)
        raise  HTTPException(status_code=400, detail=e)



def create_customer(db: Session, customer: schemas.customer):
    status = randint(0, 1) #set default status
    try:
        db_create_customer = models.customer(    
                                                name=customer.name,
                                                status=status,
        )
        db.add(db_create_customer)
        db.commit()
        return True

    except Exception as e: 
        print(e)
        raise  HTTPException(status_code=400, detail=e)

