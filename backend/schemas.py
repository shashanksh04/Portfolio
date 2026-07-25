from pydantic import BaseModel, EmailStr
from datetime import datetime


class ProjectOut(BaseModel):
    id: int
    title: str
    description: str
    tech_stack: str
    github_url: str | None
    created_at: datetime

    model_config = {"from_attributes": True}


class ExperienceOut(BaseModel):
    id: int
    role: str
    company: str
    duration: str
    description: str
    created_at: datetime

    model_config = {"from_attributes": True}


class ContactIn(BaseModel):
    name: str
    email: EmailStr
    message: str


class ContactOut(BaseModel):
    id: int
    name: str
    email: str
    message: str
    created_at: datetime

    model_config = {"from_attributes": True}


class MessageOut(BaseModel):
    id: int
    name: str
    email: str
    message: str
    created_at: datetime

    model_config = {"from_attributes": True}
