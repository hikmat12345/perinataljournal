'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '@/components/ui/Layout/layout';
import ArchiveTree from '@/components/ui/treatview/treatview';
import ModuleBox from '@/components/ui/modulebox/modulebox';


export default function ArticleTabs() {
    const [activeTab, setActiveTab] = useState('info');
    const orchidIcon = "/images/orcid.logo.icon.svg";

    const tabs = [
        { id: 'info', label: 'Information' },
        { id: 'abstract', label: 'Abstract' },
        { id: 'fulltext', label: 'Full Text' },
        { id: 'references', label: 'References' },
        { id: 'appendix', label: 'Appendix' },
    ];

    return (
        <Layout
            sidebar={
                <div>
                    <div>
                        <ArchiveTree />
                    </div>

                    <ModuleBox
                        title="Journal Information"
                        icon={<i className="icon-info-sign"></i>}
                    >
                        <p><strong>Online ISSN</strong> <br className="br" /> 1305-3124</p>
                        <p><strong>Established</strong> <br className="br" />1993</p>
                        <p><strong>Editors-in-Chief</strong> <br className="br" /> Cihat Şen,  Nicola Volpe</p>
                        <p><strong>Editors</strong> <br className="br" />Cecilia Villalain, Daniel Rolnik, M. Mar Gil</p>
                        <p><strong>Managing Editors</strong> <br className="br" />Murat Yayla</p>
                        <p><strong>Statistics Editor</strong> <br className="br" />Resul Arısoy</p>
                        <div className="text-center" style={{ margin: '15px 0' }}>
                            <img src="/open-access.png" alt="Open Access" />
                            <img src="/doaj.jpg" alt="DOAJ" />
                            <img src="/google-scholar.jpg" alt="Google Scholar" />
                            <img src="/ebsco.jpg" alt="EBSCO" />
                            <img src="/ulakbim.jpg" alt="Ulakbim" />
                            <img src="/scopus-logo.jpg" alt="Scopus" />
                        </div>
                    </ModuleBox>
                </div>
            }
        >
            <div className='w-full h-20 flex'>
                <div className="home-body-text w-[73%] px-3 ">
                    <div className="  mx-auto px-4 py-1">
                        <div className="journal-Container"></div>
                        <h1 className="article-info-title">Post-immunization evaluation in infants of Hepatitis B carrier mothers</h1>
                    </div>

                    <div className="mb-6 text-sm flex gap-4.5">
                        <div className="flex items-center space-x-2">
                            <Link href="https://orcid.org/0000-0002-5681-3647" target="_blank">
                                <Image
                                    src={orchidIcon}
                                    alt="ORCID"
                                    width={16}
                                    height={16}
                                    className="inline ml-1"
                                />
                            </Link>
                            <Link href="/Archive/Search/?s=InAuthors&q=Sema Tanriverdi" className="underline text-blue-600 relative top-[1.5px]">
                                Sema Tanriverdi
                            </Link>
                        </div>
                        <div className="flex items-center space-x-2 mt-1">
                            <Link href="https://orcid.org/0000-0002-8503-7915" target="_blank">
                                <Image
                                    src={orchidIcon}
                                    alt="ORCID"
                                    width={16}
                                    height={16}
                                    className="inline ml-1"
                                />
                            </Link>
                            <Link href="/Archive/Search/?s=InAuthors&q=Özge Özalp Berkarda" className="underline text-blue-600 relative top-[1.5px] ">
                                Özge Özalp Berkarda
                            </Link>
                        </div>
                        <div className="flex items-center space-x-2 mt-1">
                            <Link href="https://orcid.org/0000-0003-2634-7136" target="_blank">
                                <Image
                                    src={orchidIcon}
                                    alt="ORCID"
                                    width={16}
                                    height={16}
                                    className="inline ml-1"
                                />
                            </Link>
                            <Link href="/Archive/Search/?s=InAuthors&q=Esra Arun Özer" className="underline text-blue-600 relative top-[1.5px]">
                                Esra Arun Özer
                            </Link>
                        </div>
                    </div>

                    {/* Tabs */}
                    <ul className="flex border-b mb-4">
                        {tabs.map((tab) => (
                            <li key={tab.id} className="mr-6 list-none">
                                <button
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`py-2 px-4 font-medium ${activeTab === tab.id
                                        ? 'border-b-2 border-gray-500 text-[#5bc0de]'
                                        : 'text-gray-600 hover:text-[#5bc0de]'
                                        }`}
                                >
                                    {tab.label}
                                </button>
                            </li>
                        ))}
                    </ul>

                    {/* Tab Content */}
                    <div className="text-gray-800 text-sm leading-relaxed">
                        {activeTab === 'info' && (
                            <div>
                                <h2 className="font-semibold text-lg mb-2">Article Info</h2>
                                <p>
                                    Perinatal Journal 2025;33(1):1-4 <div className="br" />
                                    DOI: 10.59215/prn.25.0331001
                                </p>

                                <h3 className="mt-4 font-semibold">Correspondence</h3>
                                <p>
                                    Sema Tanriverdi, Manisa Celal Bayar University, Department of Pediatrics,
                                    Division of Neonatology, Manisa, Türkiye <div className="br" />
                                    <a href="mailto:drsemarala@yahoo.com" className="text-blue-600 underline">
                                        drsemarala@yahoo.com
                                    </a>
                                </p>

                                <h3 className="mt-4 font-semibold">Publication History</h3>
                                <ul className="list-disc pl-5">
                                    <li>Received: October 04, 2024</li>
                                    <li>Accepted: December 19, 2024</li>
                                    <li>Early View: December 29, 2024</li>
                                    <li>Published: April 28, 2025</li>
                                </ul>

                                <h3 className="mt-4 font-semibold">Conflicts of Interest</h3>
                                <p>No conflicts declared.</p>
                            </div>
                        )}

                        {activeTab === 'abstract' && (
                            <div>
                                <h2 className="font-semibold text-lg mb-2">Abstract</h2>
                                <p>
                                    Although postnatal hepatitis B vaccine and hepatitis B immunoglobulin are administered to infants of hepatitis B carrier mothers...
                                </p>
                                {/* Add full abstract content here as needed */}
                            </div>
                        )}

                        {activeTab === 'fulltext' && (
                            <div>
                                <h2 className="font-semibold text-lg mb-2">Full Text</h2>
                                <p>[Insert full text content here]</p>
                            </div>
                        )}

                        {activeTab === 'references' && (
                            <div>
                                <h2 className="font-semibold text-lg mb-2">References</h2>
                                <p>[Insert references here with proper citation links]</p>
                            </div>
                        )}

                        {activeTab === 'appendix' && (
                            <div>
                                <h2 className="font-semibold text-lg mb-2">Appendix</h2>

                                <table className="table table-bordered table-striped">
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>File/Description</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="pull-center"><i className="icon-file icon-2x"></i></td>
                                            <td><strong><a href="/Files/Archive/en-US/Attachments/14369/PF-2024-10-07-120403.docx" target="_blank">Table 1 <i className="icon-share"></i></a></strong> <div className="br" />Demographic Characteristics of the Study Group</td>
                                        </tr>
                                    </tbody>
                                </table>

                            </div>
                        )}
                    </div>
                </div>

                <div className="home-body-right-sidebar w-[25%]">
                    <div className="home-body-right-sidebar-inner">
                        <table className="table table-bordered article-info-table">
                            <tbody>
                                <tr>
                                    <td>
                                        <span className="badge badge-important">Early View</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <strong>Article's type</strong><br />
                                        Original Article
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <strong>Pages</strong><br />
                                        -
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <strong>Article info</strong><br />
                                        <span>
                                            <strong>Online publication date:</strong> May 05, 2025
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span>
                                            Perinatal Journal 2025; 33 (2)
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <strong>DOI</strong><br />
                                        <a href="https://dx.doi.org/10.59215/prn.25.0332001">10.59215/prn.25.0332001</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        {/* AddThis Button BEGIN */}
                                        <div className="addthis_toolbox addthis_default_style ">
                                            <a className="addthis_button_preferred_1"></a>
                                            <a className="addthis_button_preferred_2"></a>
                                            <a className="addthis_button_preferred_3"></a>
                                            <a className="addthis_button_preferred_4"></a>
                                            <a className="addthis_button_compact"></a>
                                            <a className="addthis_counter addthis_bubble_style"></a>
                                        </div>
                                        <script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=xa-51fa3d1b4514e367"></script>
                                        {/* AddThis Button END */}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Layout >
    );
}
