from database import SessionLocal, engine, Base
from models import Project, Experience

projects = [
    {
        "title": "Finance Tracker",
        "description": "Eight-module finance platform serving 150+ users\nPostgreSQL-backed financial data with AI analysis and goal tracking\nEight-node LangGraph copilot with SSE streaming and parallel retrieval\nUnder 100ms API response latency\nBill scanning with PaddleOCR, EasyOCR and LLM extraction\nOffline-first SQLite synchronization",
        "tech_stack": "React, Python, FastAPI, PostgreSQL, LangGraph, PaddleOCR, EasyOCR, SQLite, Redis",
        "github_url": "https://finance.shashankakumar.com/",
    },
    {
        "title": "Password Manager",
        "description": "Deployed on a Raspberry Pi 5 (8 GB RAM, 256 GB SSD)\nBrowser-side vault encryption\nServer-side encrypted synchronization\np95 API metadata latency under 300ms\nLocal search under 100ms across 1,000 vault items",
        "tech_stack": "Python, SQLite, Encryption, Raspberry Pi, Cloudflare Tunnel",
        "github_url": "https://password.shashankakumar.com/",
    },
    {
        "title": "AI-Powered Resume Evaluator",
        "description": "LLM-as-judge engine with Ollama (DeepSeek + Gemma)\n8 evaluation dimensions\n85% agreement with human reviewers\nValidated on 20+ real resumes\nRole-specific improvement suggestions",
        "tech_stack": "Python, Ollama, LangChain, FastAPI, React, PostgreSQL",
        "github_url": "https://github.com/shashanksh04/resume-evaluator",
    },
    {
        "title": "Multi-Agent Autonomous Story Generation Engine",
        "description": "5-agent LLM pipeline with LangGraph & LangChain\nAgents: genre analyzer, character creator, chapter title generator, content writer\nInter-agent context passing with structured validation\nNarrative consistency across multi-chapter outputs\nStory generation: 3-4 hrs to under 15 min",
        "tech_stack": "Python, LangChain, LangGraph, FastAPI, React, Ollama",
        "github_url": "",
    },
    {
        "title": "Deep Research Autonomous Agent",
        "description": "Autonomous research system with RAG pipelines\nDynamic research step planning\nMulti-source data scraping and synthesis\nSelf-correcting evaluation loop in LangGraph\nAutonomous query refinement and source verification",
        "tech_stack": "Python, LangGraph, RAG, Ollama, FastAPI, PostgreSQL",
        "github_url": "",
    },
]

experiences = [
    {
        "role": "Research Software Engineer",
        "company": "MD Anderson Cancer Center",
        "duration": "Sept 2026 - Present",
        "description": "Built a PostgreSQL and FastAPI platform ingesting seven EEG recordings from four participants and 24,494 music-feature rows with SHA-256 file integrity checks and repeatable transactional imports\nDeveloped researcher-reviewed quality screening, MNE-Python preprocessing and band power/asymmetry extraction; preserved source timestamps, excluded intervals, and analysis provenance\nEstablished 211 passing tests covering ingestion, numerical behaviour, migrations, permissions, and concurrent retries; validated preprocessing with synthetic signals and imported 4,080 synthetic feature observations",
    },
    {
        "role": "Software Development Intern",
        "company": "Genworx AI",
        "duration": "Oct 2025 - Jan 2026",
        "description": "Built an ingestion and LLM extraction service for medical claims, invoices, and vendor contracts across unstructured PDFs, scanned images, and text files\nAchieved 92% F1 on unseen document templates; added confidence scoring and typed JSON validation to route uncertain results for human review\nReduced manual data entry and review time by 85%; used asynchronous processing and batching to support 10,000+ documents per day and reduce average API latency by 40%",
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
