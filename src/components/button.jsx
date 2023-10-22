import React, { useState } from 'react';

const Code = () => {
  const [code, setCode] = useState('');
  const [isLocked, setIsLocked] = useState(false);

  const handleCopyClick = () => {
    // Copy the code to the clipboard
    navigator.clipboard.writeText(code);
  };

  const handleSaveClick = () => {
    // Implement code saving logic here
    // You can save the code to a file or a server
    alert('Code saved!');
  };

  const handleLockClick = () => {
    // Toggle the lock/unlock state
    setIsLocked(!isLocked);
  };

  return (
    <div>
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        readOnly={isLocked}
      />
      <div>
        <button onClick={handleCopyClick}>Copy</button>
        <button onClick={handleSaveClick}>Save</button>
        <button onClick={handleLockClick}>
          {isLocked ? 'Unlock' : 'Lock'}
        </button>
      </div>
    </div>
  );
};

export default Code;
