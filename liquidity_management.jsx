import React, { useState } from 'react';
import axios from 'axios';

const LiquidityManagement = () => {
    const [tokenA, setTokenA] = useState('');
    const [tokenB, setTokenB] = useState('');
    const [amountA, setAmountA] = useState('');
    const [amountB, setAmountB] = useState('');

    const handleProvideLiquidity = async () => {
        try {
            const response = await axios.post('/api/liquidity/provide', {
                tokenA,
                tokenB,
                amountA,
                amountB
            });
            alert(response.data.status);
        } catch (error) {
            alert('Error providing liquidity');
        }
    };

    return (
        <div>
            <h1>Provide Liquidity</h1>
            <input type="text" placeholder="Token A" value={tokenA} onChange={(e) => setTokenA(e.target.value)} />
            <input type="text" placeholder="Token B" value={tokenB} onChange={(e) => setTokenB(e.target.value)} />
            <input type="number" placeholder="Amount A" value={amountA} onChange={(e) => setAmountA(e.target.value)} />
            <input type="number" placeholder="Amount B" value={amountB} onChange={(e) => setAmountB(e.target.value)} />
            <button onClick={handleProvideLiquidity}>Provide Liquidity</button>
        </div>
    );
};

export default LiquidityManagement;