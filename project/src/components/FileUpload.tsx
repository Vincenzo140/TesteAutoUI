import React, { useRef, useState } from 'react';
import { Upload, File, X } from 'lucide-react';

interface FileUploadProps {
  onFileSelect: (file: File) => void;
  selectedFile: File | null;
  onRemoveFile: () => void;
  isLoading: boolean;
}

const FileUpload: React.FC<FileUploadProps> = ({
  onFileSelect,
  selectedFile,
  onRemoveFile,
  isLoading
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragOver, setIsDragOver] = useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && (file.type === 'text/plain' || file.type === 'application/pdf')) {
      onFileSelect(file);
    } else {
      alert('Por favor, selecione apenas arquivos .txt ou .pdf');
    }
  };

  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (event: React.DragEvent) => {
    event.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault();
    setIsDragOver(false);
    
    const file = event.dataTransfer.files[0];
    if (file && (file.type === 'text/plain' || file.type === 'application/pdf')) {
      onFileSelect(file);
    } else {
      alert('Por favor, selecione apenas arquivos .txt ou .pdf');
    }
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div
        className={`relative border-2 border-dashed rounded-xl p-8 text-center transition-all duration-300 ${
          isDragOver
            ? 'border-blue-500 bg-blue-50'
            : selectedFile
            ? 'border-green-300 bg-green-50'
            : 'border-gray-300 hover:border-gray-400'
        } ${isLoading ? 'opacity-50 pointer-events-none' : ''}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept=".txt,.pdf"
          onChange={handleFileChange}
          className="hidden"
          disabled={isLoading}
        />

        {selectedFile ? (
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-3">
              <File className="h-8 w-8 text-green-600" />
              <div className="text-left">
                <p className="font-medium text-gray-900">{selectedFile.name}</p>
                <p className="text-sm text-gray-500">{formatFileSize(selectedFile.size)}</p>
              </div>
              <button
                onClick={onRemoveFile}
                className="ml-2 p-1 hover:bg-red-100 rounded-full transition-colors duration-200"
                disabled={isLoading}
              >
                <X className="h-5 w-5 text-red-500" />
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <Upload className="mx-auto h-12 w-12 text-gray-400" />
            <div>
              <h3 className="text-lg font-medium text-gray-900">
                Envie seu arquivo para análise
              </h3>
              <p className="text-gray-500 mt-1">
                Arraste e solte ou clique para selecionar
              </p>
              <p className="text-sm text-gray-400 mt-2">
                Suporta arquivos .txt e .pdf (máx. 10MB)
              </p>
            </div>
            <button
              onClick={() => fileInputRef.current?.click()}
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
              disabled={isLoading}
            >
              <Upload size={18} />
              Selecionar Arquivo
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FileUpload;