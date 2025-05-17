// components/ModuleBox.tsx
import React from 'react';

type ModuleBoxProps = {
    title: string;
    icon?: React.ReactNode;
    children: React.ReactNode;
};

const ModuleBox = ({ title, icon, children }: ModuleBoxProps) => {
    return (
        <div className=" overflow-hidden mb-6 module-box">
            <div className="flex items-center gap-2  text-[#0b5486] text-sm font-bold px-4 py-2 border-b border-[#CFD2E9] module-title">
                {icon && <span className="text-base">{icon}</span>}
                {title}
            </div>
            <div className="p-2 pl-4">
                {children}
            </div>
        </div>
    );
};

export default ModuleBox;


