import React from 'react';
import { CheckCircle, XCircle, FileText, Info } from 'lucide-react';

interface AnalysisResult {
  filename: string;
  size: number;
  return: string;
  text_excerpt: string;
}

interface ResultsProps {
  result: AnalysisResult;
}

const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes';
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return `${(bytes / Math.pow(1024, i)).toFixed(2)} ${sizes[i]}`;
};

const Results: React.FC<ResultsProps> = ({ result }) => {
  const retorno = result.return.toLowerCase();
  const isProductive = /\bproblema\b/.test(retorno) && !/\bimprodutivo\b/.test(retorno);

  const status = {
    icon: isProductive ? <CheckCircle className="h-8 w-8 text-green-600" /> : <XCircle className="h-8 w-8 text-red-600" />,
    bgColor: isProductive ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200',
    titleColor: isProductive ? 'text-green-800' : 'text-red-800',
    textColor: isProductive ? 'text-green-600' : 'text-red-600',
    message: isProductive
      ? 'Este e-mail contém conteúdo produtivo e relevante'
      : 'Este e-mail foi classificado como improdutivo ou spam'
  };

  return (
    <div className="w-full max-w-4xl mx-auto mt-8">
      <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
        
        <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
            <FileText className="h-5 w-5" />
            Resultado da Análise
          </h2>
        </div>

        <div className="p-6 space-y-6">
          {/* Arquivo */}
          <div className="flex items-center justify-between bg-gray-50 rounded-lg p-4">
            <div>
              <h3 className="font-medium text-gray-900">{result.filename}</h3>
              <p className="text-sm text-gray-500">{formatFileSize(result.size)}</p>
            </div>
          </div>

          {/* Classificação */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900 flex items-center gap-2">
              <Info className="h-5 w-5" />
              Classificação
            </h3>

            <div className={`rounded-lg p-6 border-2 ${status.bgColor}`}>
              <div className="flex items-center gap-3">
                {status.icon}
                <div>
                  <h4 className={`text-xl font-semibold ${status.titleColor}`}>
                    {result.return}
                  </h4>
                  <p className={`text-sm ${status.textColor}`}>
                    {status.message}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Prévia do conteúdo */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900">Prévia do Conteúdo</h3>
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <p className="text-gray-700 text-sm leading-relaxed font-mono whitespace-pre-wrap">
                {result.text_excerpt}
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Results;
