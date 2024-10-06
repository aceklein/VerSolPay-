import React, { useEffect } from 'react';

const PWDSupport = () => {
    
    const handleVoiceCommand = (command) => {
        if (command === 'check balance') {
            // Logic to check balance
        }
        // Add more commands as necessary
    };

    useEffect(() => {
        // Example of how to listen for voice commands (using Web Speech API)
        const recognition = new window.SpeechRecognition();
        recognition.onresult = (event) => {
            const command = event.results[0][0].transcript;
            handleVoiceCommand(command);
        };
        recognition.start();

        return () => {
            recognition.stop();
        };
    }, []);

    return (
        <div style={{ fontSize: '1.5em' }}> {/* Larger text for accessibility */}
            PWD Support Enabled. Listening for commands...
        </div>
    );
};

export default PWDSupport;