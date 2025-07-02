import React, { useState } from 'react';
import Header from './components/Header';
import FileUpload from './components/FileUpload';
import LoadingSpinner from './components/LoadingSpinner';
import Results from './components/Results';
import Footer from './components/Footer';
import { ThemeToggle } from './components/ThemeToggle';

interface AnalysisResult {
  filename: string;
  size: number;
  return: string;
  text_excerpt: string;
}

function App() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Configure your FastAPI backend URL here
  const API_BASE_URL = 'http://localhost:8000'; // Adjust this to your backend URL

  const handleFileSelect = (file: File) => {
    setSelectedFile(file);
    setResult(null);
    setError(null);
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    setResult(null);
    setError(null);
  };

  const handleAnalyze = async () => {
    if (!selectedFile) {
      setError('Por favor, selecione um arquivo primeiro.');
      return;
    }

    setIsLoading(true);
    setError(null);
    setResult(null);

    try {
      // logica para  a analise do documento enviado
      const formData = new FormData();
      formData.append('file', selectedFile);

      // 
      const response = await fetch(`${API_BASE_URL}/analyze`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Erro na análise: ${response.status} ${response.statusText}`);
      }

      const analysisResult: AnalysisResult = await response.json();
      setResult(analysisResult);
      
    } catch (err) {
      console.error('Erro ao analisar arquivo:', err);
      setError(
        err instanceof Error 
          ? err.message 
          : 'Erro desconhecido ao processar o arquivo. Verifique sua conexão e tente novamente.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
   
      
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Classificador Automático de E-mails
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Envie seus arquivos de texto ou PDF e descubra se o conteúdo é produtivo ou improdutivo 
              usando inteligência artificial.
            </p>
          </div>

          <div className="space-y-8">
            <FileUpload
              onFileSelect={handleFileSelect}
              selectedFile={selectedFile}
              onRemoveFile={handleRemoveFile}
              isLoading={isLoading}
            />

            
            {selectedFile && !isLoading && (
              <div className="text-center">
                <button
                  onClick={handleAnalyze}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Enviar para Análise
                </button>
              </div>
            )}

            {error && (
              <div className="max-w-2xl mx-auto">
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <p className="text-red-800 font-medium">Erro na análise</p>
                  </div>
                  <p className="text-red-700 mt-1">{error}</p>
                </div>
              </div>
            )}

            {isLoading && (
              <div className="max-w-2xl mx-auto">
                <LoadingSpinner />
              </div>
            )}

            {result && !isLoading && (
              <Results result={result} />
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;