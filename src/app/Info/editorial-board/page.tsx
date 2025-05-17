import Layout from '@/components/ui/Layout/layout'
import ModuleBox from '@/components/ui/modulebox/modulebox'
import Link from 'next/link'
import React from 'react'

export default function page() {
    return (
        <div>
            <Layout
                sidebar={
                    <div>
                        <ModuleBox
                            title="Archive"
                            icon={<i className="fas fa-share"></i>}
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
                            icon={<i className="icon-share"></i>}
                        >
                            <p>You can be a member of the journal and log in quickly. Therefore you can enjoy and benefit with scientific papers, news, opinions, editorials, guidelines and all scientific media.</p>
                            <Link href="/User/SignIn" className='flex justify-end mt-2'>
                                <button className="btn btn-success text-right">Be a Member</button>
                            </Link>

                        </ModuleBox>
                        <ModuleBox
                            title="Links"
                            icon={<i className="icon-share"></i>}
                        >
                            <ul>
                                <li><a href="https://www.perinatalmedicine.org" target="_blank"><i className="icon-share"></i> Perinatal Medicine Foundation</a></li>
                                <li><a href="https://meet.perinatalmedicine.org/" target="_blank"><i className="icon-share"></i> World School of Perinatal Medicine</a></li>
                                <li><a href="http://www.worldperinatal.org" target="_blank"><i className="icon-share"></i> World Association of Perinatal Medicine</a></li>
                            </ul>
                        </ModuleBox>
                        <ModuleBox
                            title="Search"
                            icon={<i className="icon-search"></i>}
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
                            icon={<i className="icon-th-large"></i>}
                        >
                            <ul>
                                <li><a href="/Archive/Latest/">Current Issue</a></li>
                                <li><a href="/Archive/EarlyView/">Early View</a></li>
                                <li><a href="/Archive/Issue/">All Issues</a></li>
                            </ul>
                        </ModuleBox>
                        <ModuleBox
                            title="Submission"
                            icon={<i className="icon-share"></i>}
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
                        <div className="info-container">
                            <h1>Editorial Board</h1>

                            <ul>
                                <li><a href="#editors-in-chief">Editors-in-Chief</a></li>
                                <li><a href="#editors">Editors</a></li>
                                <li><a href="#managing-editors">Managing Editors</a></li>
                                <li><a href="#statistics-editor">Statistics Editor</a></li>
                                <li><a href="#editorial-board">Editorial Board</a></li>
                            </ul>

                            <section id="editors-in-chief">
                                <h2>Editors-in-Chief</h2>
                                <p><strong>Cihat Şen</strong>, MD <a href="https://orcid.org/0000-0002-2822-6840" target="_blank"><img src="/Content/img/orchid-id.png" alt="ORCID" /></a><br />
                                    President, Perinatal Medicine Foundation & World Association of Perinatal Medicine<br />
                                    Perinatal Medicine Unit, Memorial Bahçelievler Hospital, Istanbul, Türkiye
                                </p>
                                <p><strong>Nicola Volpe</strong>, MD, PhD <a href="https://orcid.org/0000-0003-4209-5602" target="_blank"><img src="/Content/img/orchid-id.png" alt="ORCID" /></a><br />
                                    Obstetrics & Gynecology Unit, Department of Medicine and Surgery, University of Parma<br />
                                    Azienda Ospedaliero-Universitaria Ospedale Maggiore di Parma, Parma, Italy
                                </p>
                            </section>

                            <section id="editors">
                                <h2>Editors</h2>
                                <p><strong>Cecilia Villalain</strong>, MD, PhD <a href="https://orcid.org/0000-0002-9456-4100" target="_blank"><img src="/Content/img/orchid-id.png" alt="ORCID" /></a><br />
                                    Department of Obstetrics & Gynecology, 12 de Octubre University Hospital, Madrid, Spain
                                </p>
                                <p><strong>Daniel Rolnik</strong>, MD, PhD <a href="https://orcid.org/0000-0002-2263-3592" target="_blank"><img src="/Content/img/orchid-id.png" alt="ORCID" /></a><br />
                                    Department of Obstetrics & Gynaecology, Monash University, Melbourne, Australia
                                </p>
                                <p><strong>Mar M. Gil</strong>, MD <a href="https://orcid.org/0000-0002-9993-5249" target="_blank"><img src="/Content/img/orchid-id.png" alt="ORCID" /></a><br />
                                    Department of Obstetrics & Gynecology, Hospital Universitario de Torrejón, Madrid, Spain<br />
                                    School of Health Sciences, Universidad Francisco de Vitoria, Madrid, Spain
                                </p>
                            </section>

                            <section id="managing-editors">
                                <h2>Managing Editor</h2>
                                <p><strong>Murat Yayla</strong>, MD<br />
                                    Perinatal Medicine Unit, Acıbadem International Hospital, Istanbul, Türkiye
                                </p>
                            </section>

                            <section id="statistics-editor">
                                <h2>Statistics Editor</h2>
                                <p><strong>Resul Arısoy</strong>, MD <a href="https://orcid.org/0000-0003-1359-1674" target="_blank"><img src="/Content/img/orchid-id.png" alt="ORCID" /></a><br />
                                    Perinatal Medicine Unit, Memorial Ataşehir Hospital, Istanbul, Türkiye
                                </p>
                            </section>

                            <section id="editorial-board">
                                <h2>Editorial Board</h2>
                                {/* Add your table here or ideally map it from JSON for better management */}
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <strong>Reuven Achiron</strong><br />
                                                Department of Obstetrics & Gynecology, Chaim Sheba Medical Center Tel-Hashomer, Tel-Aviv, Israel
                                            </td>
                                            <td>
                                                <strong>Elena Greco</strong><br />
                                                Department of Obstetrics & Gynecology, Fetal Medicine Unit, Royal London Hospital, London, UK
                                            </td>
                                        </tr>
                                        {/* Repeat rows or make dynamic */}
                                    </tbody>
                                </table>
                            </section>
                        </div>
                    </div>
                </div>
            </Layout>

        </div>
    )
}



