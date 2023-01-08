from sqlalchemy import DateTime,Boolean, Column, ForeignKey, Integer, String, Float, Date, Time
from sqlalchemy.orm import relationship
from database import Base


class customer(Base):
    __tablename__ = "customer"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    status = Column(Integer)
