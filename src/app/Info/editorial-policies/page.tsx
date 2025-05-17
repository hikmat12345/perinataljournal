import Layout from '@/components/ui/Layout/layout'
import ModuleBox from '@/components/ui/modulebox/modulebox'
import Link from 'next/link'
import React from 'react'
import { FaThLarge, FaSearch, FaUserAlt, FaShareSquare } from "react-icons/fa";
import { FaShareFromSquare } from "react-icons/fa6";
import { GrLink } from "react-icons/gr";

export default function page() {
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
                            icon={<i className="icon-info-sign"></i>}
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
                    <div className="home-body-text w-[70%] p-3 ">
                        <strong>About Perinatal Journal</strong><br />
                        <ul>
                            <li><a href="#description">Description</a></li>
                            <li><a href="#audience">Audience</a></li>

                            <li><a href="#abstracted-indexed">Abstracted & Indexed</a></li>
                            <li><a href="#editorial-board">Editorial Board</a></li>
                            <li><a href="#publication-history">Publication History</a></li>
                            <li><a href="#journal-abbreviation">Journal Abbreviation</a></li>
                            <li><a href="#supplements">Supplements</a></li>
                            <li><a href="#journal-sponsorship">Journal Sponsorship</a></li>
                            <li><a href="#impressum">Impressum</a></li>
                            <li><a href="#correspondence">Correspondence</a></li>
                        </ul>
                        <br />
                        <div>
                            <strong>Description</strong><br />

                            <p>
                                Perinatal Journal is an online open access, peer-reviewed scientific journal (e-ISSN: 1305-3124). The journal is the official publication of <a href="http://www.perinatal.org.tr" target="_blank">Perinatal Medicine Foundation</a>. It is published three times a year in April, August and December. The publication language of the journal is English.
                            </p>
                            <br />
                            <strong>Audience</strong><br />
                            <p>
                                Perinatal Journal can be read by perinatal medicine experts, fetal medicine experts, obstetricians, gynecologists, radiologists, pediatricians, sonographers, midwives, radiographers, and scientific members of other related areas, that mainly includes original clinical and experimental research articles, case reports, reviews, technical notes and letters to the editor.
                            </p>
                            <br />
                            <strong>Abstracted & Indexed</strong><br />
                            <p>
                                Perinatal Journal is currently indexed in DOAJ (Directory of Open Access Journals) and Google Scholar, EBSCOhost, EBSCO (Academic Search Complete), TÜBİTAK ULAKBİM TR Index Health Sciences Database and SCOPUS
                            </p>
                            <br />
                            <strong>Editorial Board</strong><br />
                            <p>
                                The details of Editorial Team and Advisory Board members are available on <a href="https://perinataljournal.com/Info/editorial-board">Editorial Board page</a>.
                            </p>
                            <br />
                            <strong>Publication History</strong><br />
                            <p>
                                Perinatal Journal (2005-present)<br />
                                Perinatoloji Dergisi (1993-2004)
                            </p>
                            <br />
                            <strong>Journal Abbreviation</strong><br />
                            <p>
                                Perinat J
                            </p>
                            <br />
                            <strong>Supplements</strong><br />

                            <p>
                                Perinatal Journal can publish peer-reviewed supplementary issues to the main volume. Content will be in line with journal scope and may include original articles, reviews, proceedings, meeting abstracts and practice guidelines.
                            </p>
                            <br />
                            <strong>Journal Sponsorship</strong><br />
                            <p>
                                Perinatal Journal is sponsored by Perinatal Medicine Foundation which is an internationally recognized, non-profit, scientific institution.
                            </p>
                            <br />
                            <strong>Impressum</strong><br />
                            <p>
                                Ownership & Publisher: Perinatal Medicine Foundation<br />
                                Managing Editor: Murat Yayla<br />
                                Administrative Office: Cumhuriyet Cad. 30/5 Elmadağ, 34367 Taksim, Istanbul, Turkey&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;<br />
                                Advisor for Scientific Publishing: Akın Usta<br />
                                Publishing Coordinator: Rumeysa Uslu<br />

                                Language Editor: Fikret Yeşilyurt<br />
                                Technical Staff: Ali Koz<br />
                                Publishing service for  Perintal Journal are provided by <a href='mailto:info@perinatalmedicine.org?subject=Perinatal%20Journal'>
                                    CETUS
                                </a>
                            </p>
                            <br />
                            <strong>Correspondence</strong><br />
                            <p>
                                Perinatal Journal, Perinatal Medicine Foundation<br />
                                Ataköy 10.Kısım, Çobançeşme E5 Yan Yol No:6 Route A-70, Bakırköy, Istanbul, Turkey<br />
                                Phone: +90 542 442 87 b36
                            </p>
                            <a href='mailto:info@perinataljournal.com?subject=Perinatal%20Journal'>
                                <strong>Send e-mail</strong>
                            </a>

                        </div>
                    </div>
                </div>
            </Layout>

        </div>
    )
}



