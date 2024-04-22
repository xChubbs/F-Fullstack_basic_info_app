"""
***************************************************************
* file   : models.py
* about  : Creation of table with SQLite
* author : @alujan
***************************************************************
* @information
* Test Login Application
* Small implementation of a Fullstack app, based on
* React, FastAPI & SQLAlchemy
*
***************************************************************
"""

# Import of SQLAlchemy dependencies: Typing needed
from sqlalchemy import Column, Integer, String

# Import of internal Base
from database import Base

# Transaction class definition: Table definition
class Transaction(Base):

    # Definition of Table attributes & Columns typing
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
