from database import SessionLocal, engine, Base
from models import Project, Experience

projects = [
    {
        "title": "AI-Powered Resume Evaluator",
        "description": "LLM-as-judge engine with Ollama (DeepSeek + Gemma)\n8 evaluation dimensions\n85% agreement with human reviewers\nValidated on 20+ real resumes\nRole-specific improvement suggestions",
        "tech_stack": "Python, Ollama, LangChain, FastAPI, React, PostgreSQL",
        "github_url": "https://github.com/shashanksh04/resume-evaluator",
    },
    {
        "title": "AI-Powered Finance Tracker",
        "description": "Full-stack finance platform\nJWT authentication\nMulti-account transaction management\nBill OCR with 94% accuracy\nReceipts processed in under 1.2s\nFinancial Copilot with Redis memory",
        "tech_stack": "React, Python, FastAPI, PostgreSQL, Celery, Redis, Ollama",
        "github_url": "https://github.com/shashanksh04/finance-tracker",
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
        "role": "Software Development Intern",
        "company": "Genworx AI",
        "duration": "Oct 2025 - Jan 2026",
        "description": "5-agent LLM pipeline\nAgents: orchestrator, genre, character, plot, writer\nStory generation: 3-4 hrs to under 15 min\nNarrative consistency across chapters\n30 story generation requests completed",
    },
    {
        "role": "Data Science Intern",
        "company": "Ether InfoTech",
        "duration": "Jan 2024 - Feb 2024",
        "description": "LSTM stock forecasting model\n10 years of OHLCV data across 15 tickers\nTest-set MAE: 2.8%\n31% improvement over moving-average baseline\n25% faster training time\n47 → 19 features via correlation selection",
    },
]


def seed():
    Base.metadata.create_all(bind=engine)
    db = SessionLocal()

    if db.query(Project).count() > 0:
        db.close()
        print("Database already seeded, skipping.")
        return

    for p in projects:
        db.add(Project(**p))
    for e in experiences:
        db.add(Experience(**e))
    db.commit()
    db.close()
    print("Database seeded.")


if __name__ == "__main__":
    Base.metadata.create_all(bind=engine)
    seed()
