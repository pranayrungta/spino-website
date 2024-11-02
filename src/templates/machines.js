import React from "react"
import Layout from "../components/Layout"
import { table, get_data, breadcrum, featured } from "./prod-data";

function machines_data(){
  return {
    "coating-machine"              : {imgsrc : "/machines/m-5.jpg"  ,
                                      name : "Coating machine"             },
    "slitting-machine"             : {imgsrc : "/machines/m-4.jpg"  ,
                                      name : "Slitting machine"            },
    "flexo-paper-printing-machine" : {imgsrc : "/machines/m-3.jpg"  ,
                                      name : "Flexo Paper Printing Machine"},
    "die-cutting-machine"          : {imgsrc : "/machines/m-2.png"  ,
                                      name : "Die cutting Machine"         },
    "paper-cup-machine"            : {imgsrc : "/machines/m-1.png"  ,
                                      name : "Paper Cup Machine"           },
  }
}


function coating_machine(){
  const df = [['Capacity', '120 metre per min(Production)'],
    ['Automation Grade',            'Semi-Automatic'],
    ['Applicable Coating Material', 'PE'],
    ['Max Width of Coating',        '1200 mm'],
    ['Max Working Speed',           '150 m/min']]
  return (<div className="col-sm-6">
    <h2>Coating machine</h2>
    {table(df)}
    <hr/>
  </div>)
}

function slitting(){
  return (<div className="col-sm-6">
  <h2>Slitting machine</h2>
  <p>
    This machine has the cutting width of 30-1250mm, which includes
    the diameter of less than 1300 mm. Furthermore, the specification
    of the width finished is 30/1250mm. The offered machine has entire
    productive things to handle high production along with supporting
    customized deliveries. Besides, the machine paper rolls tight end
    face flushes.
  </p>
  <p>Features:</p>
  <ul>
    <li>The rewinding parts adopted double servo motors</li>
    <li>Structure, slide, and one line production</li>
    <li>Require dia. is 100mm with dynamic balance</li>
  </ul>
  <p>Technical Parameter:</p>
  <ul>
    <li>The range of gram weight: 80-400 gsm.</li>
    <li>The cutting width: 30-1250mm</li>
    <li>The diameter cutting is less than 1300 mm</li>
    <li>
      Finished specification width: 30/1250mm , the diameter of paper
      is less than 800mm, After the cut end deviation 0.25mm, Paper
      roll tightness of consistent, end face flush
    </li>
    <li>The deviation of cutting width: 0.25mm</li>
    <li>The speed of operation: 75-150mtr/min</li>
    <li>The suitable material: 50-400 gsm</li>
    <li>
      The range of rewinding: from 30mm-1250mm within could adjust ,
      the circular knife is 14 pieces
    </li>
    <li>
      The mode of taking-up equipment: it adopts double rewinding
      shaft, it could choose different roll according to your
      requirement, it is equipped with air-expansion ( 2 pieces of 3
      inch air-expansion rewinding shaft )
    </li>
    <li>
      In the system : Correct an error to make sure good condition ,
      also the scrape edge is 3-8mm
    </li>
    <li>
      The unwinding parts: it could adjust from left to right , the
      air-expansion shafts is hard to make sure handing is safe and
      convenient
    </li>
    <li>Feeding tension control : 20kg magnetic powder control</li>
    <li>
      Automatic count meter, alarm and halt equipment , the whole is
      equipped with safe signal and shield to make sure operate safety
    </li>
    <li>
      The rewinding parts : it is adopted double servo motors control
      , the dia. of rewinding is less than 800mm
    </li>
    <li>
      The whole adopts superior steel plate (thickness is 30mm) and
      channel steel structure, slide adopts linear bearing
    </li>
    <li>It adopts the dia. is 100mm dynamic balance</li>
    <li>
      The mainframe adopts 5.5km stepless frequency speed regulation
      is 0-150m/min( it could adjust according to different material )
    </li>
  </ul>
  <p>Additional Information:Item Code: PSM-1300</p>
  <hr />
  </div>)
}

function flexo(){
  const df = [['Model Number', 'RPC-930-A'],
    ['Max Printing Length',    '500-1000 (mm)'],
    ['Material',               'Iron'],
    ['Colour Printing',        'Colour Printing'],
    ['Weight',                 '7 Ton'],
    ['Printing Speed',         '110-120/Meter/Min']]
  return (<div className="col-sm-6">
  <h2>Flexo Paper Printing Machine</h2>
  {table(df)}
  <p>
    Since our commencement, our firm is engaged to introduce a premium
    quality array of 4 Colour Flexo Printing Machine. The offered
    machine has a Mitsubishi automatic tension controller for
    unwinding the prating status. This machine is equipped with four
    colour printing station with automatic tension controller for
    rewinding. Also, the 4 set of printing cylinder and IR dryer for
    every printing station makes the machine highly productive. It
    required less space for installation.
  </p>
  <p><strong>Features:</strong></p>
  <ul>
    <li>Low maintenance and power efficient</li>
    <li>±0.15mm chromatography precision:</li>
    <li>1500mm is the maximum diameter rewinding</li>
  </ul>
  <p><strong>Machine Units List:</strong></p>
  <ul>
    <li>4 colours printing station</li>
    <li>Laminating</li>
    <li>Mitsubishi automatic tension controller for unwinding</li>
    <li>Automatic tension controller for rewinding made in China</li>
    <li>4 pcs of ceramic Anilox (line number on your request)</li>
    <li>4 set of printing cylinder</li>
    <li>IR dryer for every printing station</li>
    <li>With web guide &amp; corona treatment</li>
  </ul>
  <p><strong>Machine Specification:</strong></p>
  <ul>
    <li>Max. Printing speed: 60m/min</li>
    <li>Printing colour: 4 colours</li>
    <li>Max paper roll width: 930mm</li>
    <li>Max printing width: 920mm</li>
    <li>Max unwinding diameter: 1500mm</li>
    <li>Max rewinding diameter: 1500mm</li>
    <li>Printing girth: 180-420mm</li>
    <li>Chromatography precision: ±0.15mm</li>
  </ul>
  <p><strong>Additional Information:</strong> <br/>
    Item Code: RPC-930-A</p>
  <hr />
  </div>)
}

function die_cutting(){
  return (<div className="col-sm-6">
    <h2>Die cutting Machine</h2>
    <p>
      The offered machine delivers working speed of 100-130 punches per
      minute. It has the ability to die-cutting, creasing, and embossing
      for various shapes. In addition, the machine has motor to assure
      steady and accurate conveying of the cut. Further, the smart photo
      electricity sensor checks the colour code of printing to ensure
      fix the paper position accurately.
    </p>
    <p>
      The working speed is 100-130 Punches per minute the level of the
      capacity in China is 120 times per minute. It has the ability to
      die-cutting, creasing and embossing for various shapes
    </p>
    <p>
      Paper conveyed by servo motor to ensures steady and accurate
      conveying. Photo electricity sensor checks the colour code of
      printing to ensure fix the paper position accurately
    </p>
    <p>
      Electric control system uses PLC and HMI. Equipped with safety
      refinements to make acousto - optical alarming and auto stop
      when some faults.
    </p>
    <p>
      Worm wheel and worm transmission system ensures the powerful and
      steady pressure;it is very convenient and accurate to adjust
      pressure through HMI
    </p>
    <p>
      Lubricating with oil circulation and alarming when lack of oil to
      ensure smooth running and prolong the machine life. The
      die-cutting frame uses pneumatic locking system to convenient
      operation. Die-cutting down steel board from Taiwan is accurate
      and lasts forever
    </p>
    <p>
      It adapts electric control pneumatic clutch to protect the machine
      when start and emergency stop. The flywheel provides a mounting
      location to the clutch and also can increase the pressure
    </p>
    <p><strong>Features:</strong></p>
    <p>Transmission system control power and pressure system</p>
    <p>Safety refinements added such as alarming and indicating</p>
    <p>Die-cutting frame uses pneumatic locking system</p>
    <p>
      <strong>Specifications:</strong>
      TypeRDC-950ACut Precision:± 0.10mm <br/>
      Production capacity:100-130 PUNCHES/min  <br/>
      Maximum cutting size:950 x550mm <br/>
      Max Paper Convey Width:970mm <br/>
      Suitable Material:100-600g/m2Maximum <br/>
      Pressure:300T <br/>
      Total Power:15HP, 3PH(380V) <br/>
      Total Weight:8.0 MT <br/>
      Overall Dimension:4100 x 2000 x 1850 mm <br/>
      Working Air Source:Air pressure 0.5-0.7Mpa (Need to buy Air compressor)
    </p>
    <hr/>
  </div>)
}

function paper_cup(){
  const df = [['Frequency', '50-60 Hz'     ],
    ['Machines Speed',      '65-75 PPM'    ],
    ['Machine Weight',      '2000-3000 Kg' ],
    ['Production Capacity', '60-75 cup/min'],
    ['Power Consumption',   '3.50 kW'      ],
    ['Automation Grade',    'Automatic'    ],
    ['Warranty',            '1 Year'       ],
    ['Weight 2100Kgs',      '2500 KG'      ],
    ['Voltage',             '210- 280 V'   ]]
  return (<div className="col-sm-6">
  <h2>Paper Cup Machine</h2>
  <p>
    We offer best quality Fully Automatic High- Speed Paper Cup Making
    Machine at an affordable rate with overall technical support.
  </p>
  {table(df)}
  <hr />
  </div>)
}


function machine_details(slug){
  const maps = {
    'coating-machine' : coating_machine,
    'die-cutting-machine' : die_cutting,
    'paper-cup-machine' : paper_cup,
    'flexo-paper-printing-machine' : flexo,
    'slitting-machine': slitting
  }
  if (slug in maps)
    return maps[slug]()
  return (<div></div>)
}

export default function Machines({pageContext}) {
  const alldata = get_data(machines_data(), pageContext.slug)
  const curprod = alldata.prod;

  return (<Layout>
    <div>
      <div className="innerBanner">
        <img src="/banner/pexels-photo-1108572.jpg"
          alt="" className="img-responsive"/>
      </div>
      {breadcrum(curprod.name)}
    </div>

    <div className="innerbody product_details">
    <div className="container">
    <div className="row">
      <div className="col-sm-4">
        <div className="service_img">
        <img src={curprod.imgsrc} alt={curprod.name}
          className="img-responsive img-thumbnail" />
        </div>
      </div>
      {machine_details(pageContext.slug)}
    </div>
    </div>
    </div>
    {featured(alldata.fp, true)}
    <div className="newsletter_area"></div>
  </Layout>)
}
