// components/ModuleBox.tsx
import React from 'react';

type ModuleBoxProps = {
    title: string;
    icon?: React.ReactNode;
    children: React.ReactNode;
};

const ModuleBox = ({ title, icon, children }: ModuleBoxProps) => {
    return (
        <div className="border rounded-t-md shadow-sm overflow-hidden mb-6">
            <div className="flex items-center gap-2 bg-gradient-to-b from-[#e1e7ea] to-white text-[#0b5486] text-sm font-bold px-4 py-2 border-b border-[#CFD2E9]">
                {icon && <span className="text-base">{icon}</span>}
                {title}
            </div>
            <div className="p-4">
                {children}
            </div>
        </div>
    );
};

export default ModuleBox;


