import React, { useState } from 'react';

const DAOProposalComponent = () => {
  const [description, setDescription] = useState('');
  const [proposalId, setProposalId] = useState('');

  const createProposal = async () => {
    const response = await fetch('/api/dao/create_proposal', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ description })
    });

    if (response.ok) {
      alert('Proposal created successfully');
    } else {
      alert('Error creating proposal');
    }
  };

  const voteProposal = async () => {
    const response = await fetch('/api/dao/vote', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ proposalId })
    });

    if (response.ok) {
      alert('Voted successfully');
    } else {
      alert('Error voting on proposal');
    }
  };

  return (
    <div>
      <h2>Create Proposal</h2>
      <input type="text" placeholder="Proposal Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <button onClick={createProposal}>Create Proposal</button>

      <h2>Vote on Proposal</h2>
      <input type="text" placeholder="Proposal ID" value={proposalId} onChange={(e) => setProposalId(e.target.value)} />
      <button onClick={voteProposal}>Vote</button>
    </div>
  );
};

export default DAOProposalComponent;