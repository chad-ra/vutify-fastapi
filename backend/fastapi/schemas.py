from typing import List, Optional,Dict
from xmlrpc.client import DateTime
from pydantic import BaseModel
from datetime import date, datetime, time, timedelta


class customer(BaseModel):
    id : Optional[int]
    name: Optional[str]
    status: Optional[int]

class customer_del_id(BaseModel):
    id : int

class customer_list(BaseModel):
    customer_list: List[customer]

