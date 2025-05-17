import Layout from '@/components/ui/Layout/layout';
import ModuleBox from '@/components/ui/modulebox/modulebox';
import React from 'react'
import 'font-awesome/css/font-awesome.min.css'; // For Font Awesome 4.x
import Carousel from '@/components/Carousel/Carousel.';
import Image from 'next/image';
import Link from 'next/link';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <Layout sidebar={
            <div>
                <ModuleBox
                    title="Archive"
                    icon={<i className="fas fa-share"></i>}
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


            </div>}>
            <div className='w-full h-20 flex'>
                <div className="home-body-text w-[70%] p-3 ">
                    <strong>Aim and Scope</strong><br />
                    <p>
                        <em>Perinatal Journal</em> serves as an interdisciplinary scientific platform dedicated to the dissemination and discussion of topics related to perinatal medicine. Committed to open access, the journal shares all its content freely with the national and international scientific communities.
                    </p>
                    <p>
                        The journal publishes electronic articles in various formats including original research, reviews, case reports, letters to the editor, reports, opinions, meeting abstracts, and clinical practice guidelines.
                    </p>
                    <p>
                        <em>Perinatal Journal</em> is the official publication of the Perinatal Medicine Foundation and is a peer-reviewed international journal supported by a robust editorial and advisory board with expertise in interdisciplinary fields.
                    </p>
                    <p><strong>Research topics covered include:</strong></p>
                    <ul>
                        <li>Perinatal Medicine</li>
                        <li>Gynecology and Obstetrics</li>
                        <li>Pregnancy Care</li>
                        <li>Fetal Surgery</li>
                        <li>Maternal Medicine</li>
                        <li>Fetal Medicine</li>
                        <li>Family Planning</li>
                        <li>Genetics and Fetal Therapy</li>
                        <li>Infertility and Assisted Reproductive Techniques (ART)</li>
                    </ul>

                    <strong>Open Access Policy</strong><br />
                    <p>
                        To advance global <a href="https://en.wikipedia.org/wiki/Open_access" target="_blank">open access</a> to scientific research, <em>Perinatal Journal</em> provides immediate open access to all content.
                    </p>
                    <p>
                        All published materials become the property of <em>Perinatal Journal</em> and the Perinatal Medicine Foundation. Authors must approve the "Acknowledgement of Authorship and Transfer of Copyright Agreement" during the submission process.
                    </p>
                    <p>
                        Content is published under a <a href="http://creativecommons.org/licenses/by-nc-nd/4.0/" target="_blank">CC BY-NC-ND 4.0 License</a>, allowing free access, distribution, and reproduction for non-commercial purposes with proper citation. For commercial use, please contact the <a href="mailto:info@perinataljournal.com?subject=Perinatal%20Journal">publisher</a>.
                    </p>

                    <strong>Article Processing Fee</strong><br />
                    <p>
                        <em>Perinatal Journal</em> does not charge any subscription or submission fees. However, an <u>Article Processing Charge (APC)</u> applies only to accepted manuscripts. Payment must be made upon acceptance to proceed with publication; otherwise, the article will not appear on the Early View page or be published.
                    </p>
                    <p>
                        APC payments are processed via a secure link sent to the corresponding author, with a payment receipt issued afterward. Please note that payments are non-refundable.
                    </p>
                    <p>
                        APCs have no influence on the editorial or peer-review processes.
                        <a href="https://perinataljournal.com/Info/article-processing-charge">Click here for more information.</a>
                    </p>

                    <strong>Publication Frequency</strong><br />
                    <p>
                        <em>Perinatal Journal</em> is published three times annually—in April, August, and December.
                    </p>

                    <strong>Peer Review Process</strong><br />
                    <p>
                        All submissions undergo a preliminary technical and plagiarism evaluation. Manuscripts outside the journal’s scope are either rejected or returned for adjustment.
                    </p>
                    <p>
                        Eligible manuscripts proceed to a double-blind peer review, evaluated by at least two external experts. Editors manage the review process, including those involving advisory board members.
                    </p>
                    <p>
                        Manuscripts by editorial board members are handled by an independent editor. Revised manuscripts are re-reviewed as needed. Editors can recommend changes and submit final publication decisions to the Editors-in-Chief, who have the ultimate authority.
                    </p>

                    <strong>Advertising Policy</strong><br />
                    <p>
                        The journal’s advertising policy aligns with WAME’s guidelines. Advertised products must relate to medical practice, education, or healthcare and do not influence editorial decisions. Advertisements are displayed separately from academic content.
                    </p>

                    <strong>Archiving</strong><br />
                    <p>
                        <em>Perinatal Journal</em> is indexed in <a href="http://www.scopus.com">Scopus</a>,
                        <a href="https://trdizin.gov.tr/en/about/" target="_blank">TR Dizin</a>, and
                        <a href="https://doaj.org/toc/1305-3124?source=..." target="_blank">DOAJ</a>.
                    </p>

                    <strong>Disclaimer of Liability</strong><br />
                    <p>
                        The journal does not endorse the views expressed in published articles or guarantee advertised products or services. Scientific and legal responsibility rests with the authors. The publisher remains neutral on jurisdictional claims and affiliations.
                    </p>
                    <p>
                        All materials (e.g., images, tables) must be original or accompanied by written permission for reuse.
                    </p>

                    <strong>Research Ethics Policy</strong><br />
                    <p>
                        Manuscripts involving human subjects must include statements of informed consent and ethical approval. Case reports require written consent from subjects or legal representatives.
                    </p>
                    <p>
                        Studies must comply with the Declaration of Helsinki and uphold patient confidentiality.
                    </p>
                    <p>
                        Animal studies must include ethics committee approval and follow international animal welfare guidelines. Authors must provide documentation upon request and describe humane treatment practices.
                    </p>
                    <p>
                        Authors must disclose financial support, conflicts of interest, or any factors that may influence the research.
                    </p>

                    <strong>Plagiarism Check</strong><br />
                    <p>
                        All manuscripts are screened using iThenticate. A similarity score between 10–40% requires revision. Manuscripts exceeding 40% are rejected without review.
                    </p>

                    <strong>Corrections, Retractions, and Expressions of Concern</strong><br />
                    <p><em><strong>Corrections:</strong></em> Published corrections will appear as a new article under the Erratum category, citing the original publication.</p>
                    <p><em><strong>Retractions:</strong></em> Articles may be retracted for errors invalidating conclusions or ethical violations, in accordance with COPE guidelines.</p>
                    <p><em><strong>Expressions of Concern:</strong></em> Issued in cases of unresolved or suspected research integrity issues. Linked to the original publication.</p>

                    <strong>Publication Ethics and Malpractice Statement</strong><br />
                    <p>
                        The journal adheres to ethical guidelines set by the
                        <a href="http://publicationethics.org/resources/code-conduct" target="_blank">COPE</a>,
                        <a href="http://www.councilscienceeditors.org/" target="_blank">CSE</a>,
                        <a href="http://www.wame.org/" target="_blank">WAME</a>, and
                        <a href="http://www.icmje.org/recommendations/browse/roles-and-responsibilities/" target="_blank">ICMJE</a>.
                    </p>
                    <p>
                        <a href="https://perinataljournal.com/Info/publication-ethics">Click here to read the full Publication Ethics and Malpractice Statement.</a>
                    </p>
                </div>
                <div className="home-body-right-sidebar w-[30%]">
                    <div className="home-body-right-sidebar-inner">
                        <Carousel />
                        <ModuleBox
                            title="Latest Articles"
                            icon={<i className="icon-share"></i>}
                        >
                            <ul>
                                <li><a href="/Archive/Latest/">Current Issue</a></li>
                                <li><a href="/Archive/EarlyView/">Early View</a></li>
                                <li><a href="/Archive/Issue/">All Issues</a></li>
                            </ul>
                        </ModuleBox>
                        <div className='mb-4 border border-black'>
                            <a href="https://www.scopus.com/results/results.uri?sort=plf-f&amp;src=s&amp;st1=13053124&amp;sid=71065fb360f89f361d486ba2aa4a8e7d&amp;sot=b&amp;sdt=b&amp;sl=14&amp;s=ISSN%2813053124%29&amp;origin=searchbasic&amp;editSaveSearch=&amp;yearFrom=Before+1960&amp;yearTo=Present&amp;sessionSearchId=71065fb360f89f361d486ba2aa4a8e7d&amp;limit=10" target="_blank">
                                {/* <img src="/Content/img/scopus-banner.jpg"> */}
                                <Image src="/scopus-banner.jpg" alt="Scopus" width={300} height={100} />
                            </a>
                        </div>
                        <ModuleBox
                            title="Latest Articles"
                            icon={<i className="icon-share"></i>}
                        >
                            <p className='p-2'>
                                You can be a member of the journal and log in quickly.Therefore you can enjoy and benefit with scientific papers, news, opininons, editorials, guidelines and all scientific media.
                            </p>
                            <Link href="/User/SignIn" className='flex justify-end mt-2'>
                                <button className="btn btn-success text-right">Be a Member</button>
                            </Link>
                        </ModuleBox>

                        <ModuleBox
                            title="Related Links"
                            icon={<i className="icon-share"></i>}
                        >
                            <ul>
                                <li><a href="https://www.perinatalmedicine.org" target="_blank"><i className="icon-share"></i> Perinatal Medicine Foundation</a></li>
                                <li><a href="https://meet.perinatalmedicine.org/" target="_blank"><i className="icon-share"></i> World School of Perinatal Medicine</a></li>
                                <li><a href="http://www.worldperinatal.org" target="_blank"><i className="icon-share"></i> World Association of Perinatal Medicine</a></li>
                            </ul>
                        </ModuleBox>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
