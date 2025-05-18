import Layout from "@/components/ui/Layout/layout";
import ModuleBox from "@/components/ui/modulebox/modulebox";
import Link from "next/link";
import React from "react";
import { FaThLarge, FaSearch, FaUserAlt, FaShareSquare } from "react-icons/fa";
import { FaShareFromSquare } from "react-icons/fa6";
import { RiInformation2Fill } from "react-icons/ri";
import { GrLink } from "react-icons/gr";

export default function page() {
  return (
    <div>
      <Layout
        sidebar={
          <div>
            <ModuleBox title="Archive" icon={<FaThLarge />}>
              <ul>
                <li>
                  <a href="/Info/about-perinatal-journal">
                    About Perinatal Journal
                  </a>
                </li>
                <li>
                  <a href="/Info/editorial-board">Editorial Board</a>
                </li>
                <li>
                  <a href="/Info/author-guidelines">Author Guidelines</a>
                </li>
                <li>
                  <a href="/Info/article-processing-charge">
                    Article Processing Charge
                  </a>
                </li>
                <li>
                  <a href="/Info/editorial-policies">Editorial Policies</a>
                </li>
                <li>
                  <a href="/Info/publication-ethics">Publication Ethics</a>
                </li>
                <li>
                  <a href="/Info/contact-us">Contact Us</a>
                </li>
              </ul>
            </ModuleBox>
            <ModuleBox title="Be a Member" icon={<FaUserAlt />}>
              <p>
                You can be a member of the journal and log in quickly. Therefore
                you can enjoy and benefit with scientific papers, news,
                opinions, editorials, guidelines and all scientific media.
              </p>
              <Link href="/User/SignIn" className="flex justify-end mt-2">
                <button className="btn btn-success text-right">
                  Be a Member
                </button>
              </Link>
            </ModuleBox>
            <ModuleBox title="Links" icon={<GrLink />}>
              <ul>
                <li>
                  <a href="https://www.perinatalmedicine.org" target="_blank">
                    <i className="icon-share"></i> Perinatal Medicine Foundation
                  </a>
                </li>
                <li>
                  <a href="https://meet.perinatalmedicine.org/" target="_blank">
                    <i className="icon-share"></i> World School of Perinatal
                    Medicine
                  </a>
                </li>
                <li>
                  <a href="http://www.worldperinatal.org" target="_blank">
                    <i className="icon-share"></i> World Association of
                    Perinatal Medicine
                  </a>
                </li>
              </ul>
            </ModuleBox>
            <ModuleBox title="Search" icon={<FaSearch />}>
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
                <input
                  type="text"
                  className="input-block-level"
                  name="q"
                  id="q"
                />
                <input
                  type="submit"
                  className="btn btn-success"
                  value="Search"
                />
              </form>
              <div className="clearfix"></div>
            </ModuleBox>
            <ModuleBox title="Archive" icon={<FaThLarge />}>
              <ul>
                <li>
                  <a href="/Archive/Latest/">Current Issue</a>
                </li>
                <li>
                  <a href="/Archive/EarlyView/">Early View</a>
                </li>
                <li>
                  <a href="/Archive/Issue/">All Issues</a>
                </li>
              </ul>
            </ModuleBox>
            <ModuleBox title="Submission" icon={<FaShareFromSquare />}>
              <ul>
                <li>
                  <a href="/Submission/">New Submission</a>
                </li>
                <li>
                  <a href="/Info/about-perinatal-journal">
                    About Perinatal Journal
                  </a>
                </li>
                <li>
                  <a href="/Info/author-guidelines">Author Guidelines</a>
                </li>
              </ul>
            </ModuleBox>
            <ModuleBox
              title="Journal Information"
              icon={<RiInformation2Fill />}
            >
              <p>
                <strong>Online ISSN</strong>
                <br />
                1305-3124
              </p>
              <p>
                <strong>Established</strong>
                <br />
                1993
              </p>
              <p>
                <strong>Editors-in-Chief</strong>
                <br />
                &ZeroWidthSpace;Cihat Şen, &ZeroWidthSpace;Nicola Volpe
              </p>
              <p>
                <strong>Editors</strong>
                <br />
                Cecilia Villalain, Daniel Rolnik, M. Mar Gil
              </p>
              <p>
                <strong>Managing Editors</strong>
                <br />
                Murat Yayla
              </p>
              <p>
                <strong>Statistics Editor</strong>
                <br />
                Resul Arısoy
              </p>
              <div className="text-center" style={{ margin: "15px 0" }}>
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
        <div className="w-full h-20 flex">
          <div className="home-body-text w-[100%] p-3 ">
            <div>
              <h2 className="text-[24px] font-bold text-[#0B5486] mb-2">
                Author Guidelines
              </h2>
              <ul className="list-disc pl-5 space-y-1">
                {[
                  "Coverage",
                  "Manuscript Evaluation",
                  "Ethical Issues",
                  "Manuscript Preparation",
                  "Authorship and Length of Texts",
                  "Sections in the Manuscripts",
                  "Submission",
                  "Open Data Policy",
                  "Open Access Policy & Copyright",
                  "Privacy Statement",
                ].map((item, index) => (
                  <li key={index}>
                    <a
                      href={`#${item
                        .toLowerCase()
                        .replace(/[^a-z0-9]+/g, "-")}`}
                      className="text-[#0B5486] text-[14px] font-normal hover:underline"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <br />
            <div className="text-[#333333]">
              <h2 className="text-[14px] font-bold">Coverage</h2>
              <p className="text-[14px] font-normal leading-[20px]">
                The manuscripts should be prepared for one of the following
                article categories which are peer-reviewed:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li className="text-[14px] font-normal">Original Article</li>
                <li className="text-[14px] font-normal">Case Report</li>
                <li className="text-[14px] font-normal">Review</li>
                <li className="text-[14px] font-normal">Technical Note</li>
                <li className="text-[14px] font-normal">
                  Letter to the Editor
                </li>
              </ul>
            </div>
            <br />
            <div className="text-[#333333]">
              <p className="text-[14px] font-normal leading-[20px]">
                In addition, the journal includes article categories which do
                not require a peer review process but are prepared by the
                Editorial Board or consist of invited articles, titled as:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li className="text-[14px] font-normal">Editorial</li>
                <li className="text-[14px] font-normal">Opinion</li>
                <li className="text-[14px] font-normal">Report</li>
                <li className="text-[14px] font-normal">Abstracts</li>
                <li className="text-[14px] font-normal">Announcements</li>
                <li className="text-[14px] font-normal">Erratum</li>
                <li className="text-[14px] font-normal">Clinical Guidelines</li>
              </ul>
            </div>
            <br />
            <div className="text-[#333333]">
              <h2 className="text-[14px] font-bold">Manuscript Evaluation</h2>
              <p className="text-[14px] font-normal leading-[20px]">
                All submissions to the Perinatal Journal must be original,
                unpublished, and not under the review of any other publication.
                This is recorded by the system automatically with the IP number,
                the date and time of submission. On behalf of all authors the
                corresponding author should state that all authors are
                responsible for the manuscripts. The name, date, and place of
                the relevant meeting should be stated if the submission is a
                work that was previously presented in a scientific meeting.
                <br />
                <br />
                All manuscripts that are submitted to the Perinatal Journal are
                first subjected to technical evaluation in terms of conformance
                to the journal’s manuscript rules and plagiarism at the
                preliminary evaluation. Following this initial evaluation,
                manuscripts that are within the scope of the journal undergo
                double-blind peer review. For more detailed information about
                the Editorial Policy for peer review process of the journal
                please
                <a
                  href="https://perinataljournal.com/Info/editorial-policies#peer-review-process"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0B5486] text-[14px] font-normal hover:underline"
                >
                  click here
                </a>
              </p>
            </div>
            <br />
            <div className="text-[#333333]">
              <h2 className="text-[14px] font-bold">Ethical Issues</h2>
              <p className="text-[14px] font-normal leading-[20px]">
                All manuscripts presenting data obtained from studies involving
                human subjects must include a statement that the written
                informed consent of the participants was obtained and that the
                study was approved by an institutional ethics board or an
                equivalent body. This institutional approval should be submitted
                with the manuscript. Authors of case reports must submit the
                written informed consent of the subject(s) of the report or of
                the patient’s legal representatives for the publication of the
                manuscript. All studies should be carried out in accordance with
                the World Medical Association Declaration of Helsinki, covering
                the latest revision date. Patient confidentiality must be
                protected according to the universally accepted guidelines and
                rules.
                <br />
                <br />
                Manuscripts reporting the results of experimental studies on
                animals must include a statement that the study protocol was
                approved by the animal ethics committee of the institution and
                that the study was conducted in accordance with the
                internationally accepted guidelines, including the Universal
                Declaration of Animal Rights, European Convention for the
                Protection of Vertebrate Animals Used for Experimental and Other
                Scientific Purposes, Principles of Laboratory Animal Science,
                and the Handbook for the Care and Utilization of Laboratory
                Animals.
                <br />
                <br />
                The authors are strongly requested to send the approval of the
                ethics committee together with the manuscript. In addition,
                manuscripts on human and animal studies should describe
                procedures indicating the steps taken to eliminate pain and
                suffering.
                <br />
                <br />
                The authors should also disclose all issues concerning financial
                relationship, conflicts of interest, and competing interest that
                may potentially influence the results of the research or
                scientific judgment. All financial contributions or sponsorship,
                financial relations, and areas of conflicts of interest should
                be clearly explained in the relevant step of the submission
                process, with full assurance that any related document will be
                submitted to the journal when requested.
                <br />
                <br />
                Perinatal Journal is committed to upholding the highest
                standards of publication ethics and observes the following
                principles of Publication Ethics and Malpractice Statement which
                is based on the recommendations and guidelines for journal
                editors developed by the
                <a
                  href="https://publicationethics.org/resources/code-conduct"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0B5486] text-[14px] font-normal hover:underline"
                >
                  Committee on Publication Ethics (COPE),
                </a>
                <a
                  href="https://www.councilscienceeditors.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0B5486] text-[14px] font-normal hover:underline"
                >
                  Council of Science Editors (CSE),
                </a>
                <a
                  href="https://www.wame.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0B5486] text-[14px] font-normal hover:underline"
                >
                  World Association of Medical Editors (WAME)
                </a>{" "}
                and
                <a
                  href="https://www.icmje.org/recommendations/browse/roles-and-responsibilities/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0B5486] text-[14px] font-normal hover:underline"
                >
                  International Committee of Medical Journal Editors (ICMJE).
                </a>
                For the details of journal Publication Ethics and Malpractice
                Statement please
                <a
                  href="https://perinataljournal.com/Info/publication-ethics"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0B5486] text-[14px] font-normal hover:underline"
                >
                  click here.
                </a>
              </p>
            </div>
            <br />
            <div>
              <strong>Description</strong>
              <br />

              <p>
                Perinatal Journal is an online open access, peer-reviewed
                scientific journal (e-ISSN: 1305-3124). The journal is the
                official publication of{" "}
                <a href="http://www.perinatal.org.tr" target="_blank">
                  Perinatal Medicine Foundation
                </a>
                . It is published three times a year in April, August and
                December. The publication language of the journal is English.
              </p>
              <br />
              <strong>Audience</strong>
              <br />
              <p>
                Perinatal Journal can be read by perinatal medicine experts,
                fetal medicine experts, obstetricians, gynecologists,
                radiologists, pediatricians, sonographers, midwives,
                radiographers, and scientific members of other related areas,
                that mainly includes original clinical and experimental research
                articles, case reports, reviews, technical notes and letters to
                the editor.
              </p>
              <br />
              <strong>Abstracted & Indexed</strong>
              <br />
              <p>
                Perinatal Journal is currently indexed in DOAJ (Directory of
                Open Access Journals) and Google Scholar, EBSCOhost, EBSCO
                (Academic Search Complete), TÜBİTAK ULAKBİM TR Index Health
                Sciences Database and SCOPUS
              </p>
              <br />
              <strong>Editorial Board</strong>
              <br />
              <p>
                The details of Editorial Team and Advisory Board members are
                available on{" "}
                <a href="https://perinataljournal.com/Info/editorial-board">
                  Editorial Board page
                </a>
                .
              </p>
              <br />
              <strong>Publication History</strong>
              <br />
              <p>
                Perinatal Journal (2005-present)
                <br />
                Perinatoloji Dergisi (1993-2004)
              </p>
              <br />
              <strong>Journal Abbreviation</strong>
              <br />
              <p>Perinat J</p>
              <br />
              <strong>Supplements</strong>
              <br />

              <p>
                Perinatal Journal can publish peer-reviewed supplementary issues
                to the main volume. Content will be in line with journal scope
                and may include original articles, reviews, proceedings, meeting
                abstracts and practice guidelines.
              </p>
              <br />
              <strong>Journal Sponsorship</strong>
              <br />
              <p>
                Perinatal Journal is sponsored by Perinatal Medicine Foundation
                which is an internationally recognized, non-profit, scientific
                institution.
              </p>
              <br />
              <strong>Impressum</strong>
              <br />
              <p>
                Ownership & Publisher: Perinatal Medicine Foundation
                <br />
                Managing Editor: Murat Yayla
                <br />
                Administrative Office: Cumhuriyet Cad. 30/5 Elmadağ, 34367
                Taksim, Istanbul, Turkey&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
                <br />
                Advisor for Scientific Publishing: Akın Usta
                <br />
                Publishing Coordinator: Rumeysa Uslu
                <br />
                Language Editor: Fikret Yeşilyurt
                <br />
                Technical Staff: Ali Koz
                <br />
                Publishing service for Perintal Journal are provided by{" "}
                <a href="mailto:info@perinatalmedicine.org?subject=Perinatal%20Journal">
                  CETUS
                </a>
              </p>
              <br />
              <strong>Correspondence</strong>
              <br />
              <p>
                Perinatal Journal, Perinatal Medicine Foundation
                <br />
                Ataköy 10.Kısım, Çobançeşme E5 Yan Yol No:6 Route A-70,
                Bakırköy, Istanbul, Turkey
                <br />
                Phone: +90 542 442 87 b36
              </p>
              <a href="mailto:info@perinataljournal.com?subject=Perinatal%20Journal">
                <strong>Send e-mail</strong>
              </a>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
