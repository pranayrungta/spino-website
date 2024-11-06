import React from 'react'
import Layout from '../components/Layout'
import Banner from '../components/Banner'

export default function EcoGreenEnv() {
  return (<Layout>
    <Banner page='invst'/>
    <div className="innerbody">
    <div className="container">
          <div className="contact-form">
            <div className="row align-items-center">

              <div className="col-sm-12 contact_right">
                <p>
                  <button
                    className="btn btn-primary"
                    type="button"
                    data-toggle="collapse.show"
                    style={{"whiteSpace": "normal"}}
                    data-target="#annualreturn"
                    aria-expanded="false"
                    aria-controls="annualreturn"
                  >
                    Annual Return
                  </button>
                </p>
                <div className="collapse" id="annualreturn">
                  <ul id="returncontent">
                    <li><a href="annual-return/MGT7_FY1920.pdf" target="_blank">
                      MGT7 2019-2020
                    </a></li>
                    <li><a href="annual-return/MGT7_FY2021.pdf" target="_blank">
                      MGT7 2020-2021
                    </a></li>
                    <li><a href="annual-return/MGT7_FY2122.pdf" target="_blank">
                      MGT7 2021-2022
                    </a></li>
                    <li><a href="annual-return/MGT7_FY2223.pdf" target="_blank">
                      MGT7 2022-2023
                    </a></li>
                  </ul>
                </div>
              </div>


              <div className="col-sm-12 contact_right">
                <p>
                  <button
                    className="btn btn-secondary"
                    type="button"
                    data-toggle="collapse"
                    style={{"whiteSpace": "normal"}}
                    data-target="#boardcomposition"
                    aria-expanded="false"
                    aria-controls="boardcomposition"
                  >
                    Board of Directors and Key Managerial Personnel
                  </button>
                </p>
                <div className="collapse" id="boardcomposition">
                  <table className="table table-striped table-responsive">
                    <thead>
                      <tr>
                        <th>Sn</th>
                        <th>Name</th>
                        <th>DIN</th>
                        <th>Category</th>
                        <th>Designation</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th>1</th>
                        <td>Aditya Todi</td>
                        <td>01914193</td>
                        <td>Promoter - Executive</td>
                        <td>Managing Director</td>
                      </tr>
                      <tr>
                        <th>2</th>
                        <td>Amit Sultania</td>
                        <td>00548098</td>
                        <td>Promoter - Executive</td>
                        <td>Chief Finance Officer</td>
                      </tr>
                      <tr>
                        <th>3</th>
                        <td>Pushp Deep Rungta</td>
                        <td>10637697</td>
                        <td>Professional - Non Executive</td>
                        <td>Director</td>
                      </tr>
                      <tr>
                        <th>4</th>
                        <td>Ankita Periwal</td>
                        <td>-</td>
                        <td>Key Managerial Person</td>
                        <td>Company Secretary</td>
                      </tr>
                      <tr>
                        <th>5</th>
                        <td>Shikha Gupta</td>
                        <td>10654047</td>
                        <td>Independent Non Executive</td>
                        <td>Director</td>
                      </tr>
                      <tr>
                        <th>6</th>
                        <td>Rajesh Kumar Murarka</td>
                        <td>10670428</td>
                        <td>Independent Non Executive</td>
                        <td>Director</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="col-sm-12 contact_right">
                <p>
                  <button
                    className="btn btn-light"
                    type="button"
                    data-toggle="collapse"
                    data-target="#committeecomp"
                    aria-expanded="false"
                    aria-controls="committeecomp"
                  >
                    Committee Composition
                  </button>
                </p>
                <div className="collapse" id="committeecomp">
                  <table className="table table-striped table-responsive">
                    <thead>
                      <tr>
                        <th>SN</th>
                        <th>Audit Committee</th>
                        <th>Category</th>
                        <th>Nomination and Remuneration</th>
                        <th>Category.1</th>
                        <th>Stakeholders' Relationship Committee</th>
                        <th>Category.2</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th>1</th>
                        <td>Rajesh Kumar Murarka</td>
                        <td>Chairperson</td>
                        <td>Shikha Gupta</td>
                        <td>Chairperson</td>
                        <td>Pushp Deep Rungta</td>
                        <td>Chairperson</td>
                      </tr>
                      <tr>
                        <th>2</th>
                        <td>Shikha Gupta</td>
                        <td>Member</td>
                        <td>Rajesh Kumar Murarka</td>
                        <td>Member</td>
                        <td>Amit Sultania</td>
                        <td>Member</td>
                      </tr>
                      <tr>
                        <th>2</th>
                        <td>Aditya Todi</td>
                        <td>Member</td>
                        <td>Pushp Deep Rungta</td>
                        <td>Member</td>
                        <td>Rajesh Kumar Murarka</td>
                        <td>Member</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="col-sm-12 contact_right">
                <p>
                  <button
                    className="btn btn-success"
                    type="button"
                    data-toggle="collapse"
                    data-target="#policies"
                    aria-expanded="false"
                    aria-controls="policies"
                  >
                    Policies
                  </button>
                </p>
                <div className="collapse" id="policies">
                  <div className="card card-body">
                    <a href="pdf/name.pdf">Name.pdf</a>
                    <a href="pdf/file.pdf">file.pdf</a>
                  </div>
                </div>
              </div>

              <div className="col-sm-12 contact_right">
                <p>
                  <button
                    className="btn btn-danger"
                    type="button"
                    data-toggle="collapse"
                    data-target="#rtasection"
                    aria-expanded="false"
                    aria-controls="rtasection"
                  >
                    Our RTA
                  </button>
                </p>
                <div className="collapse" id="rtasection">
                  <div className="card card-body">
                    <p>
                      M/s. Cameo Corporate Services Limited
                      <br />
                      Subramanian Building, # 1, Club House Road, Chennai - 600
                      002, Tamil Nadu <br />
                      Ph: 91-044-28460390 <br />
                      Fax: 91-044-28460129 <br />
                      E-mail: investor@cameoindia.com <br />
                      Website: www.cameoindia.com
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-sm-12 contact_right">
                <p>
                  <button
                    className="btn btn-warning"
                    type="button"
                    data-toggle="collapse"
                    data-target="#ipo"
                    aria-expanded="false"
                    aria-controls="ipo"
                  >
                    Initial Public Offer
                  </button>
                </p>
                <div className="collapse" id="ipo">
                  <div className="card card-body">
                    Draft Prospectus             <br />
                    Final Prospectus             <br />
                    Abridged Prospectus          <br />
                    General Information Document <br />
                    Pre-Issue Ad                 <br />
                    Basis of Allotment Ad        <br />
                    <br />
                    Download Online Application Form   <br />
                    Download Revision Application Form <br />
                    Download Blank Application Form
                  </div>
                </div>
              </div>

              <div className="col-sm-12 contact_right">
                <p>
                  <button
                    className="btn btn-info"
                    type="button"
                    data-toggle="collapse"
                    data-target="#investorgriev"
                    aria-expanded="false"
                    aria-controls="investorgriev"
                  >
                    Investor Grievance
                  </button>
                </p>
                <div className="collapse" id="investorgriev">
                  <div className="card card-body">Some text.</div>
                </div>
              </div>

              <div className="col-sm-12 contact_right">
                <p>
                  <button
                    className="btn btn-success"
                    type="button"
                    data-toggle="collapse"
                    data-target="#materialdocs"
                    aria-expanded="false"
                    aria-controls="materialdocs"
                  >
                    Material Documents
                  </button>
                </p>
                <div className="collapse" id="materialdocs">
                  <div className="card card-body">
                    Issue Agreement with LM
                    <br />RTA Agreement <br />TPA Agreements with NSDL & CDSL
                    <br />Banker to the Issue Agreement <br />Market Maker
                    Agreement <br />Underwriting Agreement <br />Certified
                    copies of MOA & AOA <br />Certificate of Incorporations
                    <br />BR & SR for IPO <br />Consents of Directors, Promoters
                    and CS <br />Peer Review Auditors Report for 2022, 2023 &
                    2024 <br />Statement of tax benefits
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
    <div className="newsletter_area"> </div>
  </Layout>)
}
