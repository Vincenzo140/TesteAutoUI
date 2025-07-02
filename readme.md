# 🤖 Classificador Automático de E-mails

Este projeto consiste em uma aplicação web Full Stack projetada para analisar o conteúdo de arquivos de texto (`.txt`) ou PDF (`.pdf`), classificando-os como **"Produtivo"** ou **"Improdutivo"** com base em um modelo de Machine Learning. A aplicação oferece uma interface intuitiva para o upload de arquivos e exibe o resultado da análise, juntamente com uma resposta automática sugerida.

<br>



---

### ✨ Funcionalidades Principais

*   **📥 Upload de Arquivos:** Suporte para arrastar e soltar (drag-and-drop) ou selecionar arquivos nos formatos `.txt` e `.pdf`.
*   **🧠 Análise com IA:** Classificação do conteúdo utilizando um modelo treinado com `scikit-learn` e embeddings de `sentence-transformers`.
*   **📊 Visualização de Resultados:** Interface clara que exibe a classificação, uma resposta sugerida e um trecho do texto analisado.
*   **🌓 Tema Dark/Light:** Interface com alternância de tema para uma melhor experiência do usuário.

---

### 🛠️ Tecnologias Utilizadas

Este projeto foi construído com as seguintes tecnologias:

| Categoria | Tecnologia                                                                                                                                                                                                                                                                                                                         |
| :-------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Backend**   | ![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white) ![FastAPI](https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi&logoColor=white) ![Scikit-learn](https://img.shields.io/badge/scikit--learn-%23F7931E.svg?style=for-the-badge&logo=scikit-learn&logoColor=white) |
| **Frontend**  | ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white) ![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E) ![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)          |
| **NLP**       | ![Hugging Face](https://img.shields.io/badge/Sentence_Transformers-2A3C5B?style=for-the-badge&logo=hugging-face&logoColor=white) ![spaCy](https://img.shields.io/badge/spaCy-09A3D5?style=for-the-badge&logo=spacy&logoColor=white)                                                                                              |

---

### 📋 Pré-requisitos

Antes de iniciar, certifique-se de que possui os seguintes softwares instalados em seu sistema:

*   [Python 3.9+](https://www.python.org/downloads/)
*   [Node.js v18+](https://nodejs.org/)
*   `pip` (gerenciador de pacotes do Python)
*   `npm` ou `yarn` (gerenciador de pacotes do Node.js)

---

### 🚀 Guia de Instalação e Execução

Para executar o projeto localmente, siga os passos abaixo.

#### 1. Clonar o Repositório

Primeiramente, clone este repositório para a sua máquina local:
```bash
git clone https://github.com/Vincenzo140/TesteAutoUI.git
cd TesteAutoUI
```

#### 2. Configuração do Backend

O backend é responsável pela API e pela lógica de análise dos arquivos. **Execute estes comandos em um terminal.**

1.  **Navegue até a pasta do backend:**
    ```bash
    cd backend
    ```

2.  **Crie e ative um ambiente virtual:**
    *   **Windows:**
        ```bash
        python -m venv venv
        .\venv\Scripts\activate
        ```
    *   **Linux / macOS:**
        ```bash
        python3 -m venv venv
        source venv/bin/activate
        ```

3.  **Instale as dependências:**
    O arquivo `requirements.txt` contém todas as bibliotecas necessárias, incluindo o modelo de linguagem `spaCy`. A instalação pode levar alguns minutos.
    ```bash
    pip install -r requirements.txt
    ```

#### 3. Configuração do Frontend

O frontend é a interface com a qual o usuário interage. **Abra um segundo terminal** e execute os seguintes comandos.

1.  **Navegue até a pasta do frontend:**
    ```bash
    cd frontend
    ```

2.  **Instale as dependências do Node.js:**
    ```bash
    npm install
    ```

#### 4. Executando a Aplicação

Com ambos os ambientes configurados, vamos iniciar os servidores.

1.  **No terminal do Backend (dentro da pasta `backend`):**
    Inicie o servidor da API com `uvicorn`. O `--reload` fará com que o servidor reinicie automaticamente após qualquer alteração no código.
    ```bash
    uvicorn main:app --reload
    ```
    A API estará em execução e acessível em `http://localhost:8000`.

2.  **No terminal do Frontend (dentro da pasta `frontend`):**
    Inicie o servidor de desenvolvimento com Vite.
    ```bash
    npm run dev
    ```
    A aplicação web estará disponível em `http://localhost:5173` (ou outra porta indicada no terminal).

---

### ▶️ Como Utilizar

1.  Abra seu navegador e acesse o endereço fornecido pelo Vite (ex: `http://localhost:5173`).
2.  Arraste e solte um arquivo `.txt` ou `.pdf` na área designada, ou clique para selecioná-lo.
3.  Clique no botão **"Enviar para Análise"**.
4.  Aguarde o processamento e o resultado será exibido na tela, indicando a classificação e uma resposta sugerida.

---

### 👨‍💻 Autor

Feito com ❤️ por **Vincenzo Amendola**

*   [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/vincenzo-amendola-9aab38264/)
*   [![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Vincenzo140)