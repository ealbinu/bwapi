from typing import Optional

from fastapi import FastAPI

from pydantic import BaseModel

from fastapi.staticfiles import StaticFiles

from fastapi.middleware.cors import CORSMiddleware

from dbprogramas import programas
from dbpromociones import promos
from dbusuarioprogramas import usuarioprogramas



app = FastAPI()

origins = [
    "*",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.mount("/static", StaticFiles(directory="static"), name="static")
app.mount("/pwa", StaticFiles(directory="pwa"), name="pwa")

class Item(BaseModel):
    name: str
    price: float
    is_offer: Optional[bool] = None






@app.get("/")
def read_root_and_hello_world():
    return {"Hello": "World"}


@app.get("/programas")
def listar_programas():
    return programas

@app.post("/usuario/programas")
def listar_programas_de_usuario():
    return usuarioprogramas


@app.post("/programas/promociones")
def listar_promociones():
    return dbpromociones






################
@app.get("/items/{item_id}")
def read_item(item_id: int, q: Optional[str] = None):
    return {"item_id": item_id, "q": q}


@app.put("/items/{item_id}")
def update_item(item_id: int, item: Item):
    return {"item_name": item.name, "item_id": item_id}
