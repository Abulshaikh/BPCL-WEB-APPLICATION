import React, { useState } from 'react';
import './Documents.scss';

const Documents = () => {
  const [activeTab, setActiveTab] = useState('M');
  const M = Array.from({ length: 18 }, (_, i) => `M${i + 1}`);
  const O = Array.from({ length: 18 }, (_, i) => `O${i + 1}`);
  const Q = Array.from({ length: 18 }, (_, i) => `Q${i + 1}`);

  const renderDocs = (docs) => (
    <div className="document-grid">
      {docs.map((doc) => (
        <div key={doc} className="doc-card">
          <div className="doc-icon">📄</div>
          <h4>{doc}</h4>
          <a
            href={`/Images/${doc}.pdf`} // You can also use .jpg, .pdf, etc.
            target="_blank"
            rel="noopener noreferrer"
            className="view-link"
          >
            View
          </a>
        </div>
      ))}
    </div>
  );

  return (
    <div className="document-tabs">
      <div className="tab-header">
        {['M', 'O', 'Q'].map((tab) => (
          <button
            key={tab}
            className={activeTab === tab ? 'active' : ''}
            onClick={() => setActiveTab(tab)}
          >
            {tab} Documents
          </button>
        ))}
      </div>

      {activeTab === 'M' && renderDocs(M)}
      {activeTab === 'O' && renderDocs(O)}
      {activeTab === 'Q' && renderDocs(Q)}
    </div>
  );
};

export default Documents;