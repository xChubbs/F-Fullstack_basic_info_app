"""
Creation of table
"""

from database import Base
from sqlalchemy import Column, Integer, String

class Transaction(Base):
    __tablename__ = 'users'

    id = Column(Integer, primary_key=True, index=True)

    username = Column(String)
    password = Column(String)

    first_name = Column(String)
    last_name = Column(String)

    email = Column(String)
    position = Column(String)
    skills = Column(String)
    skill_grades = Column(String)
