// import { getIssueData } from '@/lib/getIssueData';
import IntroductionCardSecond from '@/components/ui/IntroductionCard2/card';
import Link from 'next/link';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {

    return {
        title: "issue.title",
        description: "issue.description",
        icons: {
            icon: '/PMF logo yuvarlak trans.png'
        }
    };
}

export default async function IssuePage({ params }: { params: { id: string } }) {
    const res = await fetch(`/content/${params.id}.json`);
    const issue = await res.json();

    const FileTextIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="#28a745" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round" className="icon-file-text">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
            <polyline points="10 9 9 9 8 9" />
        </svg>
    );

    return (
        <div
        >
            <div className="Issue-Container">
                <IntroductionCardSecond
                    title={issue.title}
                    subtitle={issue.subtitle}
                    pageRange={issue.pageRange}
                    description={issue.description}
                    imageUrl={issue.imageUrl}
                />
                <h1 className="issue-table-of-contents bg-[#efefef] text-[#3d3d3d] text-[14pt] py-3 px-3 font-bold mt-2">
                    Table of Contents
                </h1>
                <ul className="issue-article-list">
                    {issue.articles.map((article: any) => (
                        <li key={article.id} className="mt-6 list-none">
                            <h1 className="article-item-title flex">
                                <FileTextIcon />{' '}
                                <Link className="pl-1 font-bold pr-2" href={`/Archive/Article/${article.id}`}>
                                    {article.title}
                                </Link>
                                <div className="article-item-pages text-right block ml-auto">
                                    <span className="badge badge-pages">{article.pages}</span>
                                </div>
                            </h1>
                            <div className="article-item-authors">{article.authors}</div>
                            <div className="article-item-serial">
                                <span className="badge badge-info">{article.type}</span>
                                <span><strong>Online publication date:</strong> {article.publicationDate}</span>
                                <span className="pl-3"><strong>DOI:</strong> {article.doi}</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
