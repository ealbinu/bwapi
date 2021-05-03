from typing import Optional

from fastapi import FastAPI

from pydantic import BaseModel

app = FastAPI()

class Item(BaseModel):
    name: str
    price: float
    is_offer: Optional[bool] = None

programas = [
    {
        "name": "Club Diablos",
        "id": "clubdiablos",
        "bg": "#D5001C",
        "front": "#fff"
    },
    {
        "name": "Club Modelorama",
        "id": "clubmodelorama",
        "bg": "#1A2837",
        "front": "#FFBB00"
    },
]

@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/programas")
def read_root():
    return programas


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Optional[str] = None):
    return {"item_id": item_id, "q": q}


@app.put("/items/{item_id}")
def update_item(item_id: int, item: Item):
    return {"item_name": item.name, "item_id": item_id}
