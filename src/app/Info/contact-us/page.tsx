import Layout from '@/components/ui/Layout/layout'
import ModuleBox from '@/components/ui/modulebox/modulebox'
import Link from 'next/link'
import React from 'react'
import { FaThLarge, FaSearch, FaUserAlt, FaShareSquare } from "react-icons/fa";
import { FaShareFromSquare } from "react-icons/fa6";
import { RiInformation2Fill } from "react-icons/ri";
import { GrLink } from "react-icons/gr";

export default function page() {
      const editorialPolicies = [
    {
      id: "Mailing Address",
      title: "Mailing Address",
      content:
        (
            <>
                Perinatal Journal, Perinatal Medicine Foundation
                <br/>
                Phone: +90 542 442 87 36
                <br/>
                <a
                href="mailto:office@perinatalmedicine.org"
                className="text-[#0B5486] text-[14px] font-normal hover:underline"
                >
                Send e-mail
                </a>
            </>
        )    
    },
    {
      id: "Principal Contact",
      title: "Principal Contact",
      content: (
        <>
          Prof. Dr. Cihat Şen, Editor- in-Chief
          <br/>
            <a
            href="mailto:office@perinatalmedicine.org"
            className="text-[#0B5486] text-[14px] font-normal hover:underline"
            >
            Send e-mail
            </a>
        </>
      ),
    },
    {
      id: "Publisher",
      title: "Publisher",
      content: (
        <>
          Perinatal Medicine Foundation
          <br/>
            Phone: +90 542 442 87 36
            <br/>
            office@perinatalmedicine.org
            <br/>
            <a
            href="mailto:office@perinatalmedicine.org"
            className="text-[#0B5486] text-[14px] font-normal hover:underline"
            >
            Send e-mail
            </a>
        </>
      ),
    },
    {
      id: "Advertising Contact",
      title: "Advertising Contact",
      content: (
        <>
          Yasemin Guzel (Mrs.)
          <br/>
            Perinatal Medicine Foundation
            <br/>
            Phone: +90 542 442 87 36
            <br/>
            <a
            href="mailto:office@perinatalmedicine.org"
            className="text-[#0B5486] text-[14px] font-normal hover:underline"
            >
            Send e-mail
            </a>
        </>
      ),
    },
    {
      id: "Publication Service",
      title: "Publication Service",
      content: (
        <>
          Cetus Publishing
          <br/>
            info@perinatalmedicine.org
            <br/>
            <a
            href="mailto:info@perinatalmedicine.org"
            className="text-[#0B5486] text-[14px] font-normal hover:underline"
            >
            Send e-mail
            </a>
        </>
      ),
    }
  ];
    return (
        <div>
            <Layout
                sidebar={
                    <div>
                        <ModuleBox
                            title="Archive"
                            icon={<FaThLarge />}
                        >
                            <ul>
                                <li><a href="/Info/about-perinatal-journal">About Perinatal Journal</a></li>
                                <li><a href="/Info/editorial-board">Editorial Board</a></li>
                                <li><a href="/Info/author-guidelines">Author Guidelines</a></li>
                                <li><a href="/Info/article-processing-charge">Article Processing Charge</a></li>
                                <li><a href="/Info/editorial-policies">Editorial Policies</a></li>
                                <li><a href="/Info/publication-ethics">Publication Ethics</a></li>
                                <li><a href="/Info/contact-us">Contact Us</a></li>
                            </ul>
                        </ModuleBox>
                        <ModuleBox
                            title="Be a Member"
                            icon={<FaUserAlt />}
                        >
                            <p>You can be a member of the journal and log in quickly. Therefore you can enjoy and benefit with scientific papers, news, opinions, editorials, guidelines and all scientific media.</p>
                            <Link href="/User/SignIn" className='flex justify-end mt-2'>
                                <button className="btn btn-success text-right">Be a Member</button>
                            </Link>

                        </ModuleBox>
                        <ModuleBox
                            title="Links"
                            icon={<GrLink />}
                        >
                            <ul>
                                <li><a href="https://www.perinatalmedicine.org" target="_blank"><i className="icon-share"></i> Perinatal Medicine Foundation</a></li>
                                <li><a href="https://meet.perinatalmedicine.org/" target="_blank"><i className="icon-share"></i> World School of Perinatal Medicine</a></li>
                                <li><a href="http://www.worldperinatal.org" target="_blank"><i className="icon-share"></i> World Association of Perinatal Medicine</a></li>
                            </ul>
                        </ModuleBox>
                        <ModuleBox
                            title="Search"
                            icon={<FaSearch />}
                        >
                            <form method="get" action="/Archive/Search/">
                                <p>You can search published articles.</p>
                                <select className="input-block-level" id="s" name="s">
                                    <option value="All">All fields</option>
                                    <option value="InDoi">DOI</option>
                                    <option value="InTitle">Article title</option>
                                    <option value="InAuthors">Author name</option>
                                    <option value="InAbstract">Abstract</option>
                                    <option value="InBody">Content</option>
                                </select>
                                <input type="text" className="input-block-level" name="q" id="q" />
                                <input type="submit" className="btn btn-success" value="Search" />
                            </form>
                            <div className="clearfix"></div>
                        </ModuleBox>
                        <ModuleBox
                            title="Archive"
                            icon={<FaThLarge />}
                        >
                            <ul>
                                <li><a href="/Archive/Latest/">Current Issue</a></li>
                                <li><a href="/Archive/EarlyView/">Early View</a></li>
                                <li><a href="/Archive/Issue/">All Issues</a></li>
                            </ul>
                        </ModuleBox>
                        <ModuleBox
                        title="Submission"
                        icon={<FaShareFromSquare />}
                        >
                        <ul>
                            <li><a href="/Submission/">New Submission</a></li>
                            <li><a href="/Info/about-perinatal-journal">About Perinatal Journal</a></li>
                            <li><a href="/Info/author-guidelines">Author Guidelines</a></li>
                        </ul>
                        </ModuleBox>
                        <ModuleBox
                            title="Journal Information"
                            icon={<RiInformation2Fill />}
                        >
                            <p><strong>Online ISSN</strong><br />1305-3124</p>
                            <p><strong>Established</strong><br />1993</p>
                            <p><strong>Editors-in-Chief</strong><br />&ZeroWidthSpace;Cihat Şen, &ZeroWidthSpace;Nicola Volpe</p>
                            <p><strong>Editors</strong><br />Cecilia Villalain, Daniel Rolnik, M. Mar Gil</p>
                            <p><strong>Managing Editors</strong><br />Murat Yayla</p>
                            <p><strong>Statistics Editor</strong><br />Resul Arısoy</p>
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
                    <div className="home-body-text w-[100%] px-3 ">
                        <div className="max-w-4xl mx-auto">
                            <h1 className="text-[24px] font-bold leading-[40px] text-[#0B5486] not-italic">
                            Publication Ethics
                            </h1>
                            <ul className="list-disc list-inside mb-10 space-y-2">
                                {editorialPolicies.map((policy) => (
                                <li key={policy.id}>
                                    <a
                                    href={`#${policy.id}`}
                                    className="text-blue-600 hover:underline"
                                    >
                                    {policy.title}
                                    </a>
                                </li>
                                ))}
                            </ul>

                            <div className="">
                                {editorialPolicies.map((policy) => (
                                <section
                                    key={policy.id}
                                    id={policy.id}
                                    className="scroll-mt-24"
                                >
                                    <h2 className="text-[14px] font-bold leading-[20px] text-[#333333]">
                                    {policy.title}
                                    </h2>
                                    <p className="text-[14px] font-normal leading-[20px] text-[#333333]">
                                    {policy.content}
                                    </p>
                                    <br />
                                </section>
                                ))}
                            </div>
                            </div>
                    </div>
                </div>
            </Layout>

        </div>
    )
}



