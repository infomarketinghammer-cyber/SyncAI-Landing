from typing import Dict

from fastapi import FastAPI

app = FastAPI(title="SyncAI API", version="0.1.0")


@app.get("/api/health")
async def health_check() -> Dict[str, str]:
    return {"status": "ok"}
