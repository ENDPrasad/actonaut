import { useState } from 'react';
import { TextField, Typography } from '@mui/material';

const HtmlEditorPreview: React.FC = () => {
  const [htmlCode, setHtmlCode] = useState<string>(
    `<h1>Hello World</h1><p>Edit HTML on the left!</p>`
  );

  return (
    <div className="flex flex-col md:flex-row gap-6 w-full p-4">
      {/* Editor Section */}
      <div className="w-full md:w-1/2">
        <Typography variant="h6" gutterBottom>
          HTML Editor
        </Typography>
        <TextField
          value={htmlCode}
          onChange={(e) => setHtmlCode(e.target.value)}
          multiline
          minRows={20}
          fullWidth
          variant="outlined"
          placeholder="Write HTML code here..."
        />
      </div>

      {/* Preview Section */}
      <div className="w-full md:w-1/2">
        <Typography variant="h6" gutterBottom>
          Live Preview
        </Typography>
        <div className="border rounded-md shadow-md h-[500px]">
          <iframe
            title="HTML Preview"
            srcDoc={htmlCode}
            className="w-full h-full"
            sandbox=""
          />
        </div>
      </div>
    </div>
  );
};

export default HtmlEditorPreview;
