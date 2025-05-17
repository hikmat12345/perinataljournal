"use client"
import { useState } from 'react';
import Link from 'next/link';
import { FiFolder, FiFolderPlus, FiFile, FiChevronRight, FiChevronDown } from 'react-icons/fi';

const ArchiveTree = () => {
    const [expandedFolders, setExpandedFolders] = useState<any>({
        'vol-482': true, // Default to open the current year
        'vol-481': true, // Also open previous year by default
    });

    const toggleFolder = (folderId: string) => {
        setExpandedFolders((prev: any) => ({
            ...prev,
            [folderId]: !prev[folderId]
        }));
    };

    const archiveData = [
        { id: 'all', name: 'All Issues', href: '/Archive/Issue/', isFolder: false },
        { id: 'early', name: 'Early View', href: '/Archive/EarlyView/', isFolder: false },
        {
            id: 'vol-482',
            name: 'Year 2025 (Volume 33)',
            items: [
                { id: 'issue-280', name: 'Issue-1', href: '/Archive/Issue/280' }
            ]
        },
        {
            id: 'vol-481',
            name: 'Year 2024 (Volume 32)',
            items: [
                { id: 'issue-276', name: 'Issue-1', href: '/Archive/Issue/276' },
                { id: 'issue-278', name: 'Congress Supplement (Perinatal Medicine-2024)', href: '/Archive/Issue/278' },
                { id: 'issue-277', name: 'Issue-2', href: '/Archive/Issue/277' },
                { id: 'issue-279', name: 'Issue-3', href: '/Archive/Issue/279' }
            ]
        },
        // Add more years as needed following the same pattern
        {
            id: 'vol-459',
            name: 'Year 2005 (Volume 13)',
            items: [
                { id: 'issue-207', name: 'Issue-1', href: '/Archive/Issue/207' },
                { id: 'issue-208', name: 'Issue-2', href: '/Archive/Issue/208' },
                { id: 'issue-209', name: 'Issue-3', href: '/Archive/Issue/209' },
                { id: 'issue-210', name: 'Issue-4', href: '/Archive/Issue/210' }
            ]
        }
    ];

    return (
        <div className="module-container p-4">
            <div className="css-treeview">
                <ul className="space-y-1 
                    list-none">
                    {archiveData.map((item) => (
                        <li key={item.id} className="pl-2">
                            {item.items ? (
                                // Folder item
                                <div className="flex flex-col">
                                    <div
                                        className="flex items-center cursor-pointer hover:bg-gray-100 rounded p-1"
                                        onClick={() => toggleFolder(item.id)}
                                    >
                                        {/* Chevron icon for expand/collapse */}
                                        {expandedFolders[item.id] ? (
                                            <FiChevronDown className="text-gray-500 mr-1" size={14} />
                                        ) : (
                                            <FiChevronRight className="text-gray-500 mr-1" size={14} />
                                        )}
                                        {/* Folder icon */}
                                        {expandedFolders[item.id] ? (
                                            <FiFolderPlus className="text-blue-500 mr-2" size={16} />
                                        ) : (
                                            <FiFolder className="text-blue-500 mr-2" size={16} />
                                        )}
                                        <span className="text-sm">{item.name}</span>
                                    </div>

                                    {/* Folder contents */}
                                    {expandedFolders[item.id] && (
                                        <ul className="pl-6 mt-1 space-y-1">
                                            {item.items.map((issue) => (
                                                <li key={issue.id} className="flex items-center group">
                                                    <FiFile className="text-gray-400 mr-2 group-hover:text-blue-500" size={14} />
                                                    <Link href={issue.href} className="text-sm text-gray-700 hover:text-blue-600">
                                                        {issue.name}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            ) : (
                                // Single link item
                                <div className="flex items-center hover:bg-gray-100 rounded p-1 group">
                                    <FiFile className="text-gray-400 mr-2 group-hover:text-blue-500" size={14} />
                                    <Link href={item.href} className="text-sm text-gray-700 hover:text-blue-600">
                                        {item.name}
                                    </Link>
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ArchiveTree;