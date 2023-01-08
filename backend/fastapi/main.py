# from sys import ps1
from typing import Union
from fastapi.middleware.cors import CORSMiddleware
from fastapi_utils.tasks import repeat_every
from fastapi_utils.session import FastAPISessionMaker
import sqlalchemy
from fastapi import FastAPI, HTTPException, Depends, status, Request, Response
from sqlalchemy.orm import Session

from database import SessionLocal, engine
import crud
import models
import schemas
from datetime import datetime, timedelta

from fastapi import Depends, FastAPI, HTTPException, status, Request, Response
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from pprint import pprint
from datetime import date

import pytz
from dateutil.relativedelta import relativedelta
import numpy as np




app = FastAPI()


# origins = [
#     "http://localhost:8080",
#     "http://127.0.0.1:8080",
# ]


origins = [
"*"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

models.Base.metadata.create_all(bind=engine)


async def get_db():
    db = SessionLocal()
    try:
        # print('db.yield()')
        yield db
    finally:
        # print('db.close()')
        db.close()




@app.get("/")
async def index():
    current_time = datetime.now(pytz.timezone('Asia/Bangkok'))
    return {"Welcome to": "vuetify-fastapi-framework %s" %current_time}



@app.post("/get_customer_list",response_model=schemas.customer_list)
def get_customer_list(db: Session = Depends(get_db)):
    customer_list = []
    res_list = {}
    try:
        res = crud.get_customer_list(db)
        for a in res:
            temp = {**a.__dict__ }
            customer_list.append(temp)
            
        res_list['customer_list'] = customer_list
        return  res_list

    except Exception as e: 
        print(e)
        return e



@app.post("/del_customer")
def del_customer(customer_del_id: schemas.customer_del_id, db: Session = Depends(get_db)):
    try:
        res = crud.del_customer(db, customer_del_id=customer_del_id) 
        return HTTPException(status_code=200, detail="del_done")
        
    except Exception as e: 
        print(e)
        return e



@app.post("/create_customer")
def create_customer(customer: schemas.customer, db: Session = Depends(get_db)):
    try:
        res = crud.create_customer(db, customer=customer) 
        if res:
           return HTTPException(status_code=200, detail="created")
            
   
    except Exception as e: 
        print(e)
        return e
