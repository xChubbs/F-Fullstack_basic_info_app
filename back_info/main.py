"""
***************************************************************
* file   : main.py
* about  : Main Process for SQLite application
* author : @alujan
***************************************************************
* @information
* Test Login Application
* Small implementation of a Fullstack app, based on
* React, FastAPI & SQLAlchemy
*
***************************************************************
"""

# Import of FASTAPI Dependencies
from fastapi import FastAPI, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware

# Import of SQLALchemy Dependencies
from sqlalchemy.orm import Session

# Import of other dependencies: typing and external
from typing import Annotated, List
from pydantic import BaseModel

# Import of internal Model & Base
from database import SessionLocal, engine, Base
from models import Transaction

# Initialization of FastAPI app
app = FastAPI()

# External origin: Front-end
origins = ["http://localhost:3000", ]

# Addition of external calls
app.add_middleware(CORSMiddleware, 
                   allow_origins=origins,
                   allow_credentials=True,
                   allow_methods = ['*'],
                   allow_headers = ['*'])

# Definition of Base Transaction (pydentic): Typing validation
class TransactionBase(BaseModel):
    email: str
    Username: str
    FirstName: str
    LastName: str
    Position: str
    SkillSet: str
    SkillGrade: str
    password: str

# Definition of Model Transaction (pydentic): Id indexing
class TransactionModel(TransactionBase):
    id: int

    # 
    class Config:
        from_attributes = True

# Getter definition: Dependency inyection
def get_db():
    db = SessionLocal()

    # Control of open of db: Always closed after request completed
    try:
        yield db
    finally:
        db.close()

# Dependency Definition
db_dependency = Annotated[Session, Depends(get_db)]

# Creation of database with the initialization of the API
Base.metadata.create_all(bind=engine)

# Post Function definition: Communication with Front-end
@app.post("/users/", response_model=TransactionModel)
async def create_transaction(transaction: TransactionBase, db: db_dependency):
    db_transaction = Transaction(**transaction.model_dump())
    db.add(db_transaction)
    db.commit()
    db.refresh(db_transaction)
    return db_transaction

# Get Function definition: Communication with Front-end
@app.get("/users/", response_model=List[TransactionModel])
async def read_transactions(db:db_dependency, skip:int = 0, limit: int=100):
    users = db.query(Transaction).offset(skip).limit(limit).all()
    return users