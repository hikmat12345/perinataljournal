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
          <div className="home-body-text w-[100%] px-3 ">
            <h1 className="text-[24px] font-bold leading-[40px] text-[rgb(11,84,134)]">
              Article Processing Charge
            </h1>
            <br />
            <div className="text-[#333333]">
              <h2 className="text-[14px] font-bold">
                Perinatal Journal is an open access journal and has no any
                subscription and publication fee.
              </h2>
              <p className="text-[14px] font-normal leading-[20px]">
                However in order to cover our handling, processing and
                production expenses, a nominal processing fee called{" "}
                <span className="font-bold">
                  Article Processing Charges (APC)
                </span>{" "}
                is charged on every accepted submission made to Perinatal
                Journal by authors just before publication. This fee also
                accommodates efforts put into tasks such as editing,
                proofreading, quality check, web maintenance, plagiarism check
                and much more. APC may vary based on the type of manuscript and
                the place where it’s being processed.
                <br />
                <br />
                But it applies an{" "}
                <span className="font-bold">
                  Article Processing Charge (APC)
                </span>{" "}
                for only accepted articles. No fees are requested from the
                authors during submission and evaluation process. All
                manuscripts must be submitted via Manuscript Manager.
                <br />
                <br />
                When you are informed that your article has been accepted for
                preperation about publication, you have to make payment as soon
                as possible, otherwise{" "}
                <span className="font-bold">
                  will not be appearing on early view page and not published{" "}
                </span>{" "}
                which means it is not accepted publication.
                <br />
                <br />
                The APCs will be accepted through the link below{" "}
                <span className="font-bold">
                  after a notification from the Perinatal Journal which your
                  maunscript is accepted for publication.
                </span>{" "}
                In the next step, the author will be receiving a receipt of
                their payment. Please be aware that there is no any refund after
                your payment, even after withdrawal of the manuscript.
                <br />
                <br />
                Please note that the Article Processing Charge (APC) will not
                affect neither the editorial and peer-review process nor the
                priority of the manuscripts by no means.
                <br />
                <br />
                The APC fee is 200 € for a manuscript. Please bear in mind that
                payment process is processed by the CETUS which gives this
                services.
                <br />
                <br />
                For payment
                <a
                  href="https://www.perinataljournal.com/Member/Login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0B5486] text-[14px] font-normal hover:underline"
                >
                  &nbsp;
                  <span className="bg-red-500 text-white">please click on</span>
                </a>
                .
                <br />
                <br />
                Türkiye için
                <a
                  href="https://www.perinataljournal.com/Member/Login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0B5486] text-[14px] font-normal hover:underline"
                >
                  &nbsp;
                  <span className="bg-red-500 text-white">
                    lütfen tıklayınız
                  </span>
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
