import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="relative">

        <div className="w-16 h-16 border-4 border-blue-200 rounded-full animate-spin">
          <div className="absolute top-0 left-0 w-4 h-4 bg-blue-600 rounded-full"></div>
        </div>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-3 h-3 bg-blue-600 rounded-full animate-pulse"></div>
        </div>
      </div>
      
      <div className="mt-6 text-center">
        <h3 className="text-lg font-medium text-gray-900">
          Processando seu arquivo...
        </h3>
        <p className="text-gray-500 mt-1">
          Analisando conteúdo e classificando
        </p>
      </div>
    </div>
  );
};

export default LoadingSpinner;