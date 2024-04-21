"""
Creation of table
"""

from database import Base
from sqlalchemy import Column, Integer, String

class Transaction(Base):
    __tablename__ = 'users'

    id = Column(Integer, primary_key=True, index=True)

    Username = Column(String)
    password = Column(String)

    FirstName = Column(String)
    LastName = Column(String)

    email = Column(String)
    Position = Column(String)
    SkillSet = Column(String)
    SkillGrade = Column(String)
