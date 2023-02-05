import grill1 from './images/grill1.jpg';
import Decorative from './images/house.jpg'
import gate from './images/gate.jpg'
import pipegate from './images/pipe-gate.jpg'
import shutters from './images/shutters.jpg'
import shutters1 from './images/shutters2.jpg'
import truss from './images/truss.jpg'
import weld2 from './images/Weld2.jpg'

const items = [
    {
        id: 1,
        title: "Simple grill",
        category: "Grill",
        price: "Rs.110/Kg inclusive of material",
        img: grill1,
        desc: "Simple grills made from M.S. flats, angles and square bars for windows and doors."
    },
    {
        id: 2,
        title: "Decorative grill",
        category: "Grill",
        price: "Rs.115/Kg inclusive of material",
        img: Decorative,
        desc: "Decorative grills for windows and doors"
    },
    {
        id: 3,
        title: "Gates",
        category: "Gates",
        price: "Rs.110/Kg inclusive of material",
        img: gate,
        desc: "Simple gates"
    },
    {
        id: 4,
        title: "M.S tube gates",
        category: "Gates",
        price: "Rs.120/Kg inclusive of material",
        img: pipegate,
        desc: "Simple gates"
    },
    {
        id: 5,
        title: "Rolling shutters",
        category: "Shutters",
        price: "Rs.220/Sq.feet excluding material",
        img: shutters,
        desc: "Steel shutters including installation"
    },
    {
        id: 6,
        title: "Perforated shutters",
        category: "Shutters",
        price: "Rs.250/Sq.feet excluding material",
        img: shutters1,
        desc: "Perforated shutters made of either perforated profiles or rods along with installation"
    },
    {
        id: 7,
        title: "Roof truss",
        category: "Truss",
        price: "Rs.20/Sq.feet excluding material",
        img: truss,
        desc: "Making and installation of roof truss and ceiling"
    },
    {
        id: 8,
        title: "Custom Job",
        category: "Custom Job",
        price: "Will be quoted after assessing the job",
        img: weld2,
        desc: "We take on any custom welding job. May it be trollies, flower stands or furnitures."
    },
]

export default items