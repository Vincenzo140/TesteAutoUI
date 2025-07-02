from sentence_transformers import SentenceTransformer
from sklearn.linear_model import LogisticRegression
import joblib
import spacy


nlp = spacy.load("pt_core_news_sm")

def lemmatize(text):
    doc = nlp(text)
    return " ".join([token.lemma_ for token in doc if not token.is_stop and not token.is_punct])



# Lista de exemplos de e-mails categorizados
texts = [
    # PRODUTIVO
    "Preciso de ajuda para acessar minha conta.",
    "Solicito suporte técnico urgente.",
    "Pode me enviar uma atualização do caso 12345?",
    "Gostaria de saber o status da minha solicitação.",
    "Há previsão para resolver o meu chamado?",
    "Por favor, atualize o andamento do meu pedido.",
    "Tenho dúvidas sobre o funcionamento do sistema.",
    "Poderiam verificar um problema que estou enfrentando?",
    "Favor confirmar o recebimento do documento.",
    "Preciso reagendar o atendimento, como faço?",
    "Como posso alterar meus dados cadastrais?",
    "Solicito retorno sobre a proposta enviada.",
    "Gostaria de abrir um novo chamado de suporte.",
    "Preciso saber quando o serviço será restabelecido.",
    "Podem me passar mais detalhes sobre o procedimento?",

    # IMPRODUTIVO
    "Obrigado pela atenção de sempre.",
    "Desejo a todos um ótimo dia!",
    "Parabéns pelo excelente trabalho de vocês.",
    "Agradeço pelo atendimento prestado.",
    "Feliz aniversário a toda equipe!",
    "Muito obrigado pela ajuda.",
    "Tenham uma excelente semana.",
    "Bom feriado a todos.",
    "Agradeço de coração pelo suporte.",
    "Desejo sucesso para toda equipe.",
    "Parabéns pelo evento realizado.",
    "Agradeço pela resposta rápida.",
    "Bom final de semana para todos.",
    "Obrigado por tudo.",
    "Meus parabéns pelo ótimo atendimento!"
]

# Labels correspondentes: 1 = Produtivo, 0 = Improdutivo
labels = [
    # PRODUTIVO = 1 
    1, 1, 1, 1, 1,
    1, 1, 1, 1, 1,
    1, 1, 1, 1, 1,

    # IMPRODUTIVO = 0
    0, 0, 0, 0, 0,
    0, 0, 0, 0, 0,
    0, 0, 0, 0, 0
]

## lemmatiza

texts_lemmatizado = [lemmatize(t) for t in texts]

# Carrega modelo leve para gerar embeddings
embedder = SentenceTransformer('all-MiniLM-L6-v2')

# Gera embeddings dos textos
X = embedder.encode(texts)

# Treina classificador simples
clf = LogisticRegression()
clf.fit(X, labels)

# Salva modelos
joblib.dump(clf, 'model.pkl')
embedder.save('embedder_model')
print("")
