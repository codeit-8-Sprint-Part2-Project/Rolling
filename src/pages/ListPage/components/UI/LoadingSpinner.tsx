import React from 'react';

const LoadingSpinner: React.FC<{ className?: string }> = ({ className }) => {
    return (
        <div className={`flex items-center justify-center ${className}`}>
            <div className="text-center">
                <div className="inline-block relative w-12 h-12">
                    <div className="absolute top-3 left-0 w-3 h-3 rounded-full bg-purple-500 animate-ping"></div>
                    <div className="absolute top-3 left-3 w-3 h-3 rounded-full bg-purple-500 animate-ping"></div>
                    <div className="absolute top-3 left-6 w-3 h-3 rounded-full bg-purple-500 animate-ping"></div>
                    <div className="absolute top-3 left-9 w-3 h-3 rounded-full bg-purple-500 animate-ping"></div>
                </div>
            </div>
        </div>
    );
};

export default LoadingSpinner;
