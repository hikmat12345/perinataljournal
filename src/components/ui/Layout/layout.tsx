// components/Layout.tsx
import React from 'react';

type LayoutProps = {
    sidebar: React.ReactNode;
    children: React.ReactNode;
};

const Layout = ({ sidebar, children }: LayoutProps) => {
    return (
        <div className="flex w-full">
            <aside className="w-[23%] min-w-[200px] bg-gray-100 p-4">
                {sidebar}
            </aside>
            <main className="w-[74%] p-4">
                {children}
            </main>
        </div>
    );
};

export default Layout;
