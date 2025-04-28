import { useState, useEffect } from 'react';
import Editor from 'react-simple-wysiwyg';
import './Story.css';

export const Story = ({ setStory, uploaded, story }) => {
  const [html, setHtml] = useState(story || '<p style="color: #999;">Write your story here...</p>');

  useEffect(() => {
    setHtml(story || '<p style="color: #999;">Write your story here...</p>');
  }, [story]);

  useEffect(() => {
    if (uploaded) {
      setHtml('<p style="color: #999;">Write your story here...</p>');
    }
  }, [uploaded]);

  return (
    <div className="dark-editor-container">
      <Editor
        value={html}
        onChange={(e) => {
          setHtml(e.target.value);
          setStory(e.target.value);
        }}
        containerProps={{
          className: 'dark-wysiwyg-container'
        }}
      />
    </div>
  );
};