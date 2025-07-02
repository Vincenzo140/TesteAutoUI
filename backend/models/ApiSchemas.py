from pydantic import BaseModel

"""
Basemodel onde garantimos a tipagem do objeto que sera utilizado em cada endpoint
 
"""


class AnalyzePost(BaseModel):
    name: str

class AnalyzeDelete(BaseModel):
    pass