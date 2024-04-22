"""
***************************************************************
* file   : database.py
* about  : Conection to SQLite to fastapi aplication
* author : @alujan
***************************************************************
* @information
* Test Login Application
* Small implementation of a Fullstack app, based on
* React, FastAPI & SQLAlchemy
*
***************************************************************
"""

# SQLAlchemy dependencies: Creation and declaration of Base & Engine
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base

# SQLite Connection
URL_DATABASE = 'sqlite:///./users.db'

# Definition of Engine
engine = create_engine(URL_DATABASE, connect_args={"check_same_thread": False})

# Definition of session: behaviour
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()