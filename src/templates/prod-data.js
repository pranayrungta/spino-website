
function table(df){
  return (<div className="table-responsive">
    <table>
    <tbody>
      {df.map((row, idi)=>{return (<tr key={idi}>
        <td><strong>{row[0]}</strong></td>
        {row.slice(1).map((e, idj) =>
          (<td key={idj}>{e}</td>))}
      </tr>)})}
    </tbody>
    </table>
  </div>)
}


function tab_only(slug){
  let d = {
    "paper-plate-blanks"       : {name : "Paper Plate Blanks"      , data : [['Size', 'As per Requirement'], ['Bag Packing', '30 Kg']] },
    "aluminium-foil-container" : {name : "Aluminium Foil Container", data : [['Size', '120 ml', '230 ml', '250 ml', '450 ml', '660 ml', '750 ml'], ['Packing(Pcs)', '100', '100', '100', '100', '100', '100'], ['Box Packing (Pcs)', '3750', '1650', '1750', '1750', '1750', '1750'], ['Thickness(Micron)', '34', '34', '34', '35', '38', '38']] },
    "bobbin"                   : {name : "Bobbin"                  , data : [['Size', 'As per Requirement'], ['Packing (in Kgs)', 'As per Requirement']] },
    "laminated-lid"            : {name : "Laminated LID"           , data : [['Size', '120 ml', '150 ml', '200 ml', '230 ml', '250 ml', '450 ml', '660 ml', '750 ml'], ['Packing (Pcs)', '100', '100', '100', '100', '100', '100', '100', '100'], ['Box Packing (Pcs)', 'As per Container Quantity', 'As per Container Quantity', 'As per Container Quantity', 'As per Container Quantity', 'As per Container Quantity', 'As per Container Quantity', 'As per Container Quantity', 'As per Container Quantity']] },
    "paper-cups"               : {name : "Paper Cups"              , data : [['Size', '40 ml', '50 ml', '60 ml', '80 ml', '100 ml', '150 ml', '210 ml', '250 ml'], ['Packing(Pcs)', '100', '100', '100', '100', '100', '100', '100', '100'], ['Box Packing(Pcs)', '7800', '6600', '6600', '5500', '4500', '2500', '2500', '2500'], ['Thickness(GSM)', '152-162', '152-162', '152-162', '152-162', '152-162', '152-162', '152-162', '152-162']] },
    "paper-straw"              : {name : "Paper Straw"             , data : [['Size', '6 mm', '8 mm', '10 mm'], ['Packing (Pcs)', '50', '50', '50'], ['Box Packing (Pcs)', '5000', '5000', '5000']] },
    "aluminium-home-foil"      : {name : "Aluminium Home Foil"     , data : [['Size', '9 Mtrs', '72 Mtrs', '72 No.', '75 No.'], ['Micron', '10.5 Micron', '10.5 Micron', '10.5 Micron', '10.5 Micron'], ['Box Packing (Pcs)', '100', '25', '25', '25']] },
    "paper-tissue"             : {name : "Paper Tissue"            , data : [['Size', '20 X 20', '24 X 24', '30 X 30', '33 X 33'], ['Packing (Pcs)', '50', '50', '50', '50'], ['Box Packing (Pcs)', '500', '500', '500', '500']] }
  }

  return (<div class="col-sm-8">
    <h2>{d[slug].name}</h2>
    <h6>Size Available :</h6>
    {table(d[slug].data)}
    <hr />
  </div>)
  return table(data[slug])
}

function paper_cup_banks(){
  let tab = table([['Size', 'As per Requirement'],
                   ['Bag Packing', '25 Kg']]);
  return (<div class="col-sm-8">
    <h2>Paper Cup Blanks</h2>
    <p>PLAIN, SINGLE COLOUR, TWO COLOUR, MULTI COLOUR</p>
    <h6>Size Available :</h6>
    {tab}
    <hr />
  </div>)
}

function coated_paper(){
  return (<div class="col-sm-8">
    <h2>Coated Paper</h2>
    <h6>Size Available :</h6>
    <hr />
  </div>)
}

function final_data(slug){
  let maps = {"paper-cup-blanks" : paper_cup_banks,
              "coated-paper"     : coated_paper};
  if (slug in maps)
    return maps[slug];
  return tab_only(slug)
}
