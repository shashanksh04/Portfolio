from database import SessionLocal, engine, Base
from models import Project, Experience

projects = [
    {
        "title": "Finance Tracker",
        "description": "Eight-module finance platform with PostgreSQL-backed data for AI analysis and goal tracking\nEight-node LangGraph copilot with specialized routing, SSE streaming and parallel retrieval\nBill scanning with PaddleOCR, EasyOCR and LLM extraction; offline-first SQLite sync",
        "tech_stack": "React, Python, FastAPI, PostgreSQL, LangGraph, SQLite, Redis",
        "github_url": "https://finance.shashankakumar.com/",
    },
    {
        "title": "Password Manager",
        "description": "Deployed on a Raspberry Pi 5 (8 GB RAM, 256 GB SSD)\nBrowser-side vault encryption with server-side encrypted synchronization\np95 metadata latency under 300 ms; local search under 100 ms across 1,000 items",
        "tech_stack": "Python, SQLite, Encryption, Raspberry Pi, Cloudflare Tunnel",
        "github_url": "https://password.shashankakumar.com/",
    },
    {
        "title": "AI-Powered Resume Evaluator",
        "description": "LLM-as-judge engine with Ollama (DeepSeek + Gemma)\nEight evaluation dimensions, validated on real resumes\nRole-specific improvement suggestions",
        "tech_stack": "Python, Ollama, LangChain, FastAPI, React, PostgreSQL",
        "github_url": "https://github.com/shashanksh04/resume-evaluator",
    },
    {
        "title": "Multi-Agent Story Generation Engine",
        "description": "Five-agent LLM pipeline with LangGraph & LangChain\nInter-agent context passing with structured validation\nNarrative consistency across multi-chapter outputs",
        "tech_stack": "Python, LangChain, LangGraph, FastAPI, React, Ollama",
        "github_url": "",
    },
    {
        "title": "Deep Research Autonomous Agent",
        "description": "Autonomous research system with RAG pipelines\nDynamic research step planning and multi-source synthesis\nSelf-correcting evaluation loop in LangGraph",
        "tech_stack": "Python, LangGraph, RAG, Ollama, FastAPI, PostgreSQL",
        "github_url": "",
    },
]

experiences = [
    {
        "role": "Research Software Engineer",
        "company": "MD Anderson Cancer Center",
        "duration": "Sept 2026 - Present",
        "description": "Built a PostgreSQL and FastAPI research platform indexing 7.26M timestamped sample frames across seven physiological recordings\nOrganized 146 recording-channel entries across EEG and multimodal recordings; stored 24,494 music-feature rows across six datasets for time-window queries\nDeveloped MNE-Python preprocessing with researcher-reviewed quality screening, band power/asymmetry extraction, and preserved provenance\nBuilt synchronized EEG/ECG/HR/HRV displays for up to four participants (verified with synthetic streams); registered 303 assets for traceable I/O",
    },
    {
        "role": "Software Development Intern",
        "company": "Genworx AI",
        "duration": "Oct 2025 - Jan 2026",
        "description": "Built an ingestion and LLM extraction service for medical claims, invoices and vendor contracts across PDFs, scans and text\nReached 92% F1 on held-out templates; confidence scoring and typed JSON validation route uncertain results to human review\nCut manual data-entry and review time by 85% in internal measurement; async batching designed for 10,000+ documents per day",
    },
]


def seed():
    Base.metadata.create_all(bind=engine)
    db = SessionLocal()

    db.query(Project).delete()
    db.query(Experience).delete()

    for p in projects:
        db.add(Project(**p))
    for e in experiences:
        db.add(Experience(**e))
    db.commit()
    db.close()
    print("Database synced.")


if __name__ == "__main__":
    seed()
