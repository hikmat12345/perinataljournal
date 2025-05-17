import Layout from '@/components/ui/Layout/layout';
import ModuleBox from '@/components/ui/modulebox/modulebox';
import React from 'react'

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <Layout sidebar={<div>

            <ModuleBox
                title="Module Title"
                icon={<span className="material-icons">module_icon</span>}
            >
                <p>This is the content of the module.</p>
            </ModuleBox>
            <ModuleBox
                title="Module Title"
                icon={<span className="material-icons">module_icon</span>}
            >
                <p>This is the content of the module.</p>
                <p>Additional content can go here.</p>
            </ModuleBox>
            <ModuleBox
                title="Module Title"
                icon={<span className="material-icons">module_icon</span>}
            >
                <p>This is the content of the module.</p>
                <p>Additional content can go here.</p>
            </ModuleBox>
            <ModuleBox
                title="Module Title"
                icon={<span className="material-icons">module_icon</span>}
            >
                <p>This is the content of the module.</p>
                <p>Additional content can go here.</p>
            </ModuleBox>
        </div>}>
            <div className="home-body-text">
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

        </Layout>
    )
}
