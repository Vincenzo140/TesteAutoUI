from fastapi import FastAPI, status, File, UploadFile
from fastapi.responses import JSONResponse
import joblib
from sentence_transformers import SentenceTransformer
import PyPDF2
from fastapi.middleware.cors import CORSMiddleware
from utils import lemmatize, texts_lemmatizado


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


clf = joblib.load('model.pkl')
embedder = SentenceTransformer('all-MiniLM-L6-v2') 


@app.get("/")
def nothing():
    return {"access": f"http://localhost:8000/docs"}

@app.post(
    "/analyze",
    status_code=status.HTTP_200_OK,
    
)

async def create_analyze(file: UploadFile = File(...)):
    contents = await file.read()
    text = ""
    
    if file.filename.endswith(".txt"):
        text= contents.decode("utf-8")
    elif file.filename.endswith(".pdf"):
        with open ("temp.pdf", "wb") as f:
            f.write(contents)
            
        reader = PyPDF2.PdfReader("temp.pdf")
    
        for page in reader.pages:
            text += page.extract_text() or ""
    else:
        return JSONResponse(
            status_code=400,
            content={"error": "Formato de arquivo não suportado. Use .txt ou .pdf"}
        )
        
    text = lemmatize(text)
    embedding = embedder.encode([text])
    pred = clf.predict(embedding)[0]
    
    category = "Produtivo" if pred == 1 else "Improdutivo"
    
    responses = {
        "Produtivo": f"Muito obrigado pelo aviso, iremos resolver o seu problema!",
        "Improdutivo": f"Sentimos muito por isso, possivelmente seu email, contém conteúdo irrelevante"
    }
    answer = responses[category]
    
   
    return {
        "filename": file.filename,
        "size": len(contents),
        "return": answer,
        "text_excerpt": text[:2000]  # Mostra só os primeiros 200 chars
    }
    
