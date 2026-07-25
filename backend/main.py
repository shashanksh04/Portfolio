from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session

from database import engine, Base, get_db
from models import Project, Experience, ContactMessage
from schemas import ProjectOut, ExperienceOut, ContactIn, ContactOut, MessageOut

Base.metadata.create_all(bind=engine)

app = FastAPI(title="Portfolio API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://localhost:3000", "http://localhost:80", "http://localhost"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/api/projects", response_model=list[ProjectOut])
def get_projects(db: Session = Depends(get_db)):
    return db.query(Project).order_by(Project.id).all()


@app.get("/api/experience", response_model=list[ExperienceOut])
def get_experience(db: Session = Depends(get_db)):
    return db.query(Experience).order_by(Experience.id).all()


@app.post("/api/contact", response_model=ContactOut)
def submit_contact(data: ContactIn, db: Session = Depends(get_db)):
    msg = ContactMessage(name=data.name, email=data.email, message=data.message)
    db.add(msg)
    db.commit()
    db.refresh(msg)
    return msg


@app.get("/api/messages", response_model=list[MessageOut])
def get_messages(db: Session = Depends(get_db)):
    return db.query(ContactMessage).order_by(ContactMessage.id.desc()).all()
