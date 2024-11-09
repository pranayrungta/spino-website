import React from 'react'
import Layout from '../components/Layout'
import Banner from '../components/Banner'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

function OneSection({heading, color, children}) {
  const [open, setOpen] = useState(false);
  return (<>
    <Button aria-controls={heading} variant={color}
      onClick={() => setOpen(!open)} aria-expanded={open} >
      {heading}
    </Button>
    <Collapse in={open}>
      <div id={heading}>
        {children}
      </div>
    </Collapse>
    <br/> <br/>
  </>);
}

export default function EcoGreenEnv() {
  return (<Layout>
    <Banner page='invst'/>
    <div className="innerbody">
      <div className="container">
      <div className="contact-form">
        <OneSection  color='primary'
          heading='Annual Return'>
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
        </OneSection>

        <OneSection  color='secondary'
          heading='Board of Directors and Key Managerial Personnel'>
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
        </OneSection>
        <OneSection  color='light'
          heading='Committee Composition'>
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
        </OneSection>

        <OneSection  color='success'
          heading='Policies'>
        </OneSection>

        <OneSection  color='danger'
          heading='Our RTA'>
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
        </OneSection>

        <OneSection  color='warning'
          heading='Initial Public Offer'>
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
        </OneSection>

        <OneSection  color='info'
          heading='Investor Grievance'>
        </OneSection>

        <OneSection  color='success'
          heading='Material Documents'>
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
        </OneSection>

        <div className="row align-items-center">
        </div>
      </div>
      </div>
    </div>
    <div className="newsletter_area"> </div>
  </Layout>)
}
