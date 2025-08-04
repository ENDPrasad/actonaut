import { useState, type ChangeEvent } from 'react';

type FileUploadProps = {
  acceptedExtension?: string;
};

export default function FileUploadPreview({ acceptedExtension = ".txt" }: FileUploadProps) {
  const [fileContent, setFileContent] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setError(null);
    setFileContent(null);

    if (!file) return;

    const fileExt = file.name.split('.').pop()?.toLowerCase();
    if (fileExt !== acceptedExtension.replace('.', '')) {
      setError(`Only ${acceptedExtension} files are allowed.`);
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      if (!result.trim()) {
        setError("File is empty.");
        return;
      }
      setFileContent(result);
    };
    reader.onerror = () => {
      setError("Failed to read the file.");
    };
    reader.readAsText(file);
  };

  return (
    <div className="p-4 border rounded shadow max-w-xl mx-auto">
      <label className="block font-medium mb-2">Upload .txt File</label>
      <input
        type="file"
        accept={acceptedExtension}
        onChange={handleFileChange}
        className="mb-4 border-gray-300 border-2 p-2 rounded-sm cursor-pointer"

      />
      {error && <p className="text-red-600">{error}</p>}
      {fileContent && (
        <div className="bg-gray-100 p-3 rounded whitespace-pre-wrap">
          <h4 className="font-semibold mb-2">Preview:</h4>
          <p>{fileContent}</p>
        </div>
      )}
    </div>
  );
};

