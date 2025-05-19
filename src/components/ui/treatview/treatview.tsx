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
        {
            "id": "all",
            "name": "All Issues",
            "href": "/Archive/Issue/",
            "isFolder": false
        },
        {
            "id": "early",
            "name": "Early View",
            "href": "/Archive/EarlyView/",
            "isFolder": false
        },
        {
            "id": "vol-482",
            "name": "Year 2025 (Volume 33)",
            "items": [
                {
                    "id": "issue-280",
                    "name": "Issue-1",
                    "href": "/Archive/Issue/280"
                }
            ]
        },
        {
            "id": "vol-481",
            "name": "Year 2024 (Volume 32)",
            "items": [
                {
                    "id": "issue-276",
                    "name": "Issue-1",
                    "href": "/Archive/Issue/276"
                },
                {
                    "id": "issue-278",
                    "name": "Congress Supplement (Perinatal Medicine-2024)",
                    "href": "/Archive/Issue/278"
                },
                {
                    "id": "issue-277",
                    "name": "Issue-2",
                    "href": "/Archive/Issue/277"
                },
                {
                    "id": "issue-279",
                    "name": "Issue-3",
                    "href": "/Archive/Issue/279"
                }
            ]
        },
        {
            "id": "vol-480",
            "name": "Year 2023 (Volume 31)",
            "items": [
                {
                    "id": "issue-272",
                    "name": "Issue-1",
                    "href": "/Archive/Issue/272"
                },
                {
                    "id": "issue-273",
                    "name": "Issue-2",
                    "href": "/Archive/Issue/273"
                },
                {
                    "id": "issue-275",
                    "name": "Congress Supplement (Perinatal Medicine-2023)",
                    "href": "/Archive/Issue/275"
                },
                {
                    "id": "issue-274",
                    "name": "Issue-3",
                    "href": "/Archive/Issue/274"
                }
            ]
        },
        {
            "id": "vol-479",
            "name": "Year 2022 (Volume 30)",
            "items": [
                {
                    "id": "issue-269",
                    "name": "Issue-1",
                    "href": "/Archive/Issue/269"
                },
                {
                    "id": "issue-270",
                    "name": "Issue-2",
                    "href": "/Archive/Issue/270"
                },
                {
                    "id": "issue-271",
                    "name": "Issue-3",
                    "href": "/Archive/Issue/271"
                }
            ]
        },
        {
            "id": "vol-478",
            "name": "Year 2021 (Volume 29)",
            "items": [
                {
                    "id": "issue-266",
                    "name": "Issue-1",
                    "href": "/Archive/Issue/266"
                },
                {
                    "id": "issue-267",
                    "name": "Issue-2",
                    "href": "/Archive/Issue/267"
                },
                {
                    "id": "issue-268",
                    "name": "Issue-3",
                    "href": "/Archive/Issue/268"
                }
            ]
        },
        {
            "id": "vol-477",
            "name": "Year 2020 (Volume 28)",
            "items": [
                {
                    "id": "issue-263",
                    "name": "Issue-1",
                    "href": "/Archive/Issue/263"
                },
                {
                    "id": "issue-264",
                    "name": "Issue-2",
                    "href": "/Archive/Issue/264"
                },
                {
                    "id": "issue-265",
                    "name": "Issue-3",
                    "href": "/Archive/Issue/265"
                }
            ]
        },
        {
            "id": "vol-476",
            "name": "Year 2019 (Volume 27)",
            "items": [
                {
                    "id": "issue-260",
                    "name": "Issue-1",
                    "href": "/Archive/Issue/260"
                },
                {
                    "id": "issue-261",
                    "name": "Issue-2",
                    "href": "/Archive/Issue/261"
                },
                {
                    "id": "issue-262",
                    "name": "Issue-3",
                    "href": "/Archive/Issue/262"
                }
            ]
        },
        {
            "id": "vol-475",
            "name": "Year 2018 (Volume 26)",
            "items": [
                {
                    "id": "issue-257",
                    "name": "Issue-1",
                    "href": "/Archive/Issue/257"
                },
                {
                    "id": "issue-258",
                    "name": "Issue-2",
                    "href": "/Archive/Issue/258"
                },
                {
                    "id": "issue-259",
                    "name": "Issue-3",
                    "href": "/Archive/Issue/259"
                }
            ]
        },
        {
            "id": "vol-474",
            "name": "Year 2017 (Volume 25)",
            "items": [
                {
                    "id": "issue-254",
                    "name": "Issue-1",
                    "href": "/Archive/Issue/254"
                },
                {
                    "id": "issue-255",
                    "name": "Issue-2",
                    "href": "/Archive/Issue/255"
                },
                {
                    "id": "issue-256",
                    "name": "Issue-3",
                    "href": "/Archive/Issue/256"
                }
            ]
        },
        {
            "id": "vol-473",
            "name": "Year 2016 (Volume 24)",
            "items": [
                {
                    "id": "issue-251",
                    "name": "Issue-1",
                    "href": "/Archive/Issue/251"
                },
                {
                    "id": "issue-252",
                    "name": "Issue-2",
                    "href": "/Archive/Issue/252"
                },
                {
                    "id": "issue-253",
                    "name": "Issue-3",
                    "href": "/Archive/Issue/253"
                }
            ]
        },
        {
            "id": "vol-472",
            "name": "Year 2015 (Volume 23)",
            "items": [
                {
                    "id": "issue-248",
                    "name": "Issue-1",
                    "href": "/Archive/Issue/248"
                },
                {
                    "id": "issue-249",
                    "name": "Issue-2",
                    "href": "/Archive/Issue/249"
                },
                {
                    "id": "issue-250",
                    "name": "Issue-3",
                    "href": "/Archive/Issue/250"
                }
            ]
        },
        {
            "id": "vol-471",
            "name": "Year 2014 (Volume 22)",
            "items": [
                {
                    "id": "issue-245",
                    "name": "Issue-1",
                    "href": "/Archive/Issue/245"
                },
                {
                    "id": "issue-246",
                    "name": "Issue-2",
                    "href": "/Archive/Issue/246"
                },
                {
                    "id": "issue-247",
                    "name": "Issue-3",
                    "href": "/Archive/Issue/247"
                }
            ]
        },
        {
            "id": "vol-470",
            "name": "Year 2013 (Volume 21)",
            "items": [
                {
                    "id": "issue-242",
                    "name": "Issue-1",
                    "href": "/Archive/Issue/242"
                },
                {
                    "id": "issue-243",
                    "name": "Issue-2",
                    "href": "/Archive/Issue/243"
                },
                {
                    "id": "issue-244",
                    "name": "Issue-3",
                    "href": "/Archive/Issue/244"
                }
            ]
        },
        {
            "id": "vol-469",
            "name": "Year 2012 (Volume 20)",
            "items": [
                {
                    "id": "issue-239",
                    "name": "Issue-1",
                    "href": "/Archive/Issue/239"
                },
                {
                    "id": "issue-240",
                    "name": "Issue-2",
                    "href": "/Archive/Issue/240"
                },
                {
                    "id": "issue-241",
                    "name": "Issue-3",
                    "href": "/Archive/Issue/241"
                }
            ]
        },
        {
            "id": "vol-468",
            "name": "Year 2011 (Volume 19)",
            "items": [
                {
                    "id": "issue-236",
                    "name": "Issue-1",
                    "href": "/Archive/Issue/236"
                },
                {
                    "id": "issue-237",
                    "name": "Issue-2",
                    "href": "/Archive/Issue/237"
                },
                {
                    "id": "issue-238",
                    "name": "Issue-3",
                    "href": "/Archive/Issue/238"
                }
            ]
        },
        {
            "id": "vol-467",
            "name": "Year 2010 (Volume 18)",
            "items": [
                {
                    "id": "issue-233",
                    "name": "Issue-1",
                    "href": "/Archive/Issue/233"
                },
                {
                    "id": "issue-234",
                    "name": "Issue-2",
                    "href": "/Archive/Issue/234"
                },
                {
                    "id": "issue-235",
                    "name": "Issue-3",
                    "href": "/Archive/Issue/235"
                }
            ]
        },
        {
            "id": "vol-466",
            "name": "Year 2009 (Volume 17)",
            "items": [
                {
                    "id": "issue-230",
                    "name": "Issue-1",
                    "href": "/Archive/Issue/230"
                },
                {
                    "id": "issue-231",
                    "name": "Issue-2",
                    "href": "/Archive/Issue/231"
                },
                {
                    "id": "issue-232",
                    "name": "Issue-3",
                    "href": "/Archive/Issue/232"
                }
            ]
        },
        {
            "id": "vol-465",
            "name": "Year 2008 (Volume 16)",
            "items": [
                {
                    "id": "issue-227",
                    "name": "Issue-1",
                    "href": "/Archive/Issue/227"
                },
                {
                    "id": "issue-228",
                    "name": "Issue-2",
                    "href": "/Archive/Issue/228"
                },
                {
                    "id": "issue-229",
                    "name": "Issue-3",
                    "href": "/Archive/Issue/229"
                }
            ]
        },
        {
            "id": "vol-464",
            "name": "Year 2007 (Volume 15)",
            "items": [
                {
                    "id": "issue-224",
                    "name": "Issue-1",
                    "href": "/Archive/Issue/224"
                },
                {
                    "id": "issue-225",
                    "name": "Issue-2",
                    "href": "/Archive/Issue/225"
                },
                {
                    "id": "issue-226",
                    "name": "Issue-3",
                    "href": "/Archive/Issue/226"
                }
            ]
        },
        {
            "id": "vol-463",
            "name": "Year 2006 (Volume 14)",
            "items": [
                {
                    "id": "issue-220",
                    "name": "Issue-1",
                    "href": "/Archive/Issue/220"
                },
                {
                    "id": "issue-221",
                    "name": "Issue-2",
                    "href": "/Archive/Issue/221"
                },
                {
                    "id": "issue-222",
                    "name": "Issue-3",
                    "href": "/Archive/Issue/222"
                },
                {
                    "id": "issue-223",
                    "name": "Issue-4",
                    "href": "/Archive/Issue/223"
                }
            ]
        },
        {
            "id": "vol-459",
            "name": "Year 2005 (Volume 13)",
            "items": [
                {
                    "id": "issue-207",
                    "name": "Issue-1",
                    "href": "/Archive/Issue/207"
                },
                {
                    "id": "issue-208",
                    "name": "Issue-2",
                    "href": "/Archive/Issue/208"
                },
                {
                    "id": "issue-209",
                    "name": "Issue-3",
                    "href": "/Archive/Issue/209"
                },
                {
                    "id": "issue-210",
                    "name": "Issue-4",
                    "href": "/Archive/Issue/210"
                }
            ]
        }
    ]

    return (
        <div className="module-container p-4  mb-6 module-box rounded-sm shadow-sm border border-[#CFD2E9]">
            <div className="css-treeview ">
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
                                        <ul className="pl-6 mt-1 space-y-1 sub-branch">
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