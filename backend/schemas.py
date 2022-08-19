from typing import List, Union

from pydantic import BaseModel


class ItemBase(BaseModel):
    title: str
    description: Union[str, None] = None
    price: int
    stock: int
    image: str

class ItemCreate(ItemBase):
    pass


class Item(ItemBase):
    id: int
    owner_id: int
    image: str

    class Config:
        orm_mode = True


class UserBase(BaseModel):
    email: str


class UserCreate(UserBase):
    password: str
    access_key: str
    location_id: str


class User(UserBase):
    id: int
    is_active: bool
    items: List[Item] = []

    class Config:
        orm_mode = True
