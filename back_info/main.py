from fastapi import FastAPI, HTTPException, Depends
from typing import Annotated, List
from sqlalchemy.orm import Session
from pydantic import BaseModel

from database import SessionLocal, engine, Base

from models import Transaction

from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Enable curse
origins = ["http://localhost:3000", ]

# Origin added
app.add_middleware(CORSMiddleware, 
                   allow_origins=origins,
                   allow_credentials=True,
                   allow_methods = ['*'],
                   allow_headers = ['*'])

class TransactionBase(BaseModel):
    email: str
    Username: str
    FirstName: str
    LastName: str
    Position: str
    SkillSet: str
    SkillGrade: str
    password: str

class TransactionModel(TransactionBase):
    id: int

    class Config:
        from_attributes = True

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

db_dependency = Annotated[Session, Depends(get_db)]

Base.metadata.create_all(bind=engine)

@app.post("/users/", response_model=TransactionModel)
async def create_transaction(transaction: TransactionBase, db: db_dependency):
    db_transaction = Transaction(**transaction.model_dump())
    db.add(db_transaction)
    db.commit()
    db.refresh(db_transaction)
    return db_transaction


@app.get("/users/", response_model=List[TransactionModel])
async def read_transactions(db:db_dependency, skip:int = 0, limit: int=100):
    transactions = db.query(Transaction).offset(skip).limit(limit).all()
    return transactions