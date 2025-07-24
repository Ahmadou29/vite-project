import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './TableShop.css';

import image1 from '../assets/images/accessoires/accessoire-1.jpg';
import image2 from '../assets/images/accessoires/accessoire-2.jpg';
import image3 from '../assets/images/accessoires/accessoire-3.jpg';
import image4 from '../assets/images/accessoires/accessoire-4.jpg';
import image5 from '../assets/images/accessoires/accessoire-5.jpg';

import image16 from '../assets/images/accessoires/accessoire-6.jpg';
import image17 from '../assets/images/accessoires/accessoire-7.jpg';
import image18 from '../assets/images/accessoires/accessoire-8.jpg';
import image19 from '../assets/images/accessoires/accessoire-9.jpg';
import image20 from '../assets/images/accessoires/accessoire-10.jpg';

import image6 from '../assets/images/femmes/femme-1.jpg';
import image7 from '../assets/images/femmes/femme-2.jpg';
import image8 from '../assets/images/femmes/femme-3.jpg';
import image9 from '../assets/images/femmes/femme-4.jpg';
import image10 from '../assets/images/femmes/femme-11.jpg';

import image11 from '../assets/images/femmes/femme-6.jpg';
import image12 from '../assets/images/femmes/femme-7.jpg';
import image13 from '../assets/images/femmes/femme-8.jpg';
import image14 from '../assets/images/femmes/femme-9.jpg';
import image15 from '../assets/images/femmes/femme-10.jpg';

import image21 from '../assets/images/homme/homme-1.jpg';
import image22 from '../assets/images/homme/homme-2.jpg';
import image23 from '../assets/images/homme/homme-3.jpg';
import image24 from '../assets/images/homme/homme-4.jpg';
import image25 from '../assets/images/homme/homme-5.jpg';
import image26 from '../assets/images/homme/homme-6.jpg';
import image27 from '../assets/images/homme/homme-7.jpg';
import image28 from '../assets/images/homme/homme-8.jpg';
import image29 from '../assets/images/homme/homme-10.jpg';
import image30 from '../assets/images/homme/homme-11.jpg';

import image31 from '../assets/images/montre/montre-1.jpg';
import image32 from '../assets/images/montre/montre-2.jpg';
import image33 from '../assets/images/montre/montre-3.jpg';
import image34 from '../assets/images/montre/montre-4.jpg';
import image35 from '../assets/images/montre/montre-5.jpg';
import image36 from '../assets/images/montre/montre-6.jpg';
import image37 from '../assets/images/montre/montre-7.jpg';
import image38 from '../assets/images/montre/montre-8.jpg';
import image39 from '../assets/images/montre/montre-9.jpg';
import image40 from '../assets/images/montre/montre-10.jpg';

import image41 from '../assets/images/lunette/lunette-1.jpg';
import image42 from '../assets/images/lunette/lunette-2.jpg';
import image43 from '../assets/images/lunette/lunette-3.jpg';
import image44 from '../assets/images/lunette/lunette-4.jpg';
import image45 from '../assets/images/lunette/lunette-5.jpg';
import image46 from '../assets/images/lunette/lunette-6.jpg';
import image47 from '../assets/images/lunette/lunette-7.jpg';
import image48 from '../assets/images/lunette/lunette-8.jpg';
import image49 from '../assets/images/lunette/lunette-9.jpg';
import image50 from '../assets/images/lunette/lunette-10.jpg';
import image51 from '../assets/images/lunette/lunette-11.jpg';
import image52 from '../assets/images/lunette/lunette-12.jpg';

import image53 from '../assets/images/enfant/enfant-1.jpg';
import image54 from '../assets/images/enfant/enfant-2.jpg';
import image55 from '../assets/images/enfant/enfant-14.jpg';
import image56 from '../assets/images/enfant/enfant-13.jpg';
import image57 from '../assets/images/enfant/enfant-5.jpg';
import image58 from '../assets/images/enfant/enfant-6.jpg';
import image59 from '../assets/images/enfant/enfant-7.jpg';
import image60 from '../assets/images/enfant/enfant-8.jpg';
import image61 from '../assets/images/enfant/enfant-9.jpg';
import image62 from '../assets/images/enfant/enfant-10.jpg';
import image63 from '../assets/images/enfant/enfant-11.jpg';
import image64 from '../assets/images/enfant/enfant-12.jpg';

const tabs = [
{ id: "fashion", label: "Fashion" },
{ id: "promo", label: "Promo" },
{ id: "lookbook", label: "Lookbook" },
];

const fashionItems = [
{ img: image1, },
{ img: image2, texte: 25 },
{ img: image3, texte: 25 },
{ img: image4, texte: 25 },
{ img: image5, texte: 25 },

{ img: image6, texte: 25 },
{ img: image7, texte: 25 },
{ img: image8, texte: 25 },
{ img: image9, texte: 25 },
{ img: image10, texte: 25 },

{ img: image11, texte: 25 },
{ img: image12, texte: 25 },
{ img: image13, texte: 25 },
{ img: image14, texte: 25 },
{ img: image15, texte: 25 },

{ img: image16, texte: 25 },
{ img: image17, texte: 25 },
{ img: image18, texte: 25 },
{ img: image19, texte: 25 },
{ img: image20, texte: 25 },


{ img: image21, texte: 25 },
{ img: image22, texte: 25 },
{ img: image23, texte: 25 },
{ img: image24, texte: 25 },
{ img: image25, texte: 25 },
{ img: image26, texte: 25 },
{ img: image27, texte: 25 },
{ img: image28, texte: 25 },
{ img: image29, texte: 25 },
{ img: image30, texte: 25 },

{ img: image31, texte: 25 },
{ img: image32, texte: 25 },
{ img: image33, texte: 25 },
{ img: image34, texte: 25 },
{ img: image35, texte: 25 },
{ img: image36, texte: 25 },
{ img: image37, texte: 25 },
{ img: image38, texte: 25 },
{ img: image39, texte: 25 }, 
{ img: image40, texte: 25 },

{ img: image41, texte: 25 },
{ img: image42, texte: 25 },
{ img: image43, texte: 25 },
{ img: image44, texte: 25 },
{ img: image45, texte: 25 },
{ img: image46, texte: 25 },
{ img: image47, texte: 25 },
{ img: image48, texte: 25 },
{ img: image49, texte: 25 }, 
{ img: image50, texte: 25 }, 
{ img: image51, texte: 25 },
{ img: image52, texte: 25 }, 


{ img: image53, texte: 25 },
{ img: image54, texte: 25 },
{ img: image55, texte: 25 },
{ img: image56, texte: 25 },
{ img: image57, texte: 25 },
{ img: image58, texte: 25 },
{ img: image59, texte: 25 }, 
{ img: image60, texte: 25 }, 
{ img: image61, texte: 25 },
{ img: image62, texte: 25 },
{ img: image63, texte: 25 },
{ img: image64, texte: 25 },
];

const promoItems = [
{
img: "src/assets/images/enfant/enfant-15.jpg",
newPrice: 10,
oldPrice: 15.5,

},

{
img: "src/assets/images/enfant/enfant-16.jpg",
newPrice: 10,
oldPrice: 15.5,

},
{
img: "src/assets/images/enfant/enfant-17.jpg",
newPrice: 10,
oldPrice: 15.5,

},

{
img: "src/assets/images/enfant/enfant-18.jpg",
newPrice: 10,
oldPrice: 15.5,

},

{
img: "src/assets/images/enfant/enfant-19.jpg",
newPrice: 10,
oldPrice: 15.5,

},

{
img: "src/assets/images/enfant/enfant-20.jpg",
newPrice: 10,
oldPrice: 15.5,

},

{
img: "src/assets/images/enfant/enfant-21.jpg",
newPrice: 10,
oldPrice: 15.5,

},

{
img: "src/assets/images/enfant/enfant-22.jpg",
newPrice: 10,
oldPrice: 15.5,

},

{
img: "src/assets/images/enfant/enfant-23.jpg",
newPrice: 10,
oldPrice: 15.5,

},

{
img: "src/assets/images/enfant/enfant-24.jpg",
newPrice: 10,
oldPrice: 15.5,

},

{
img: "src/assets/images/enfant/enfant-25.jpg",
newPrice: 10,
oldPrice: 15.5,

},

{
img: "src/assets/images/enfant/enfant-26.jpg",
newPrice: 10,
oldPrice: 15.5,

},

// femmes
{
img: "src/assets/images/femmes/femme-13.jpg",
newPrice: 10,
oldPrice: 15.5,
},

{
img: "src/assets/images/femmes/femme-14.jpg",
newPrice: 10,
oldPrice: 15.5,
},

{
img: "src/assets/images/femmes/femme-15.jpg",
newPrice: 10,
oldPrice: 15.5,
},

{
img: "src/assets/images/femmes/femme-16.jpg",
newPrice: 10,
oldPrice: 15.5,
},

{
img: "src/assets/images/femmes/femme-17.jpg",
newPrice: 10,
oldPrice: 15.5,
},

{
img: "src/assets/images/femmes/femme-18.jpg",
newPrice: 10,
oldPrice: 15.5,
},

{
img: "src/assets/images/femmes/femme-19.jpg",
newPrice: 10,
oldPrice: 15.5,
},

{
img: "src/assets/images/femmes/femme-20.jpg",
newPrice: 10,
oldPrice: 15.5,
},

{
img: "src/assets/images/femmes/femme-21.jpg",
newPrice: 10,
oldPrice: 15.5,
},

{
img: "src/assets/images/femmes/femme-22.jpg",
newPrice: 10,
oldPrice: 15.5,
},

{
img: "src/assets/images/femmes/femme-23.jpg",
newPrice: 10,
oldPrice: 15.5,
},

{
img: "src/assets/images/femmes/femme-24.jpg",
newPrice: 10,
oldPrice: 15.5,
},

{
img: "src/assets/images/femmes/femme-25.jpg",
newPrice: 10,
oldPrice: 15.5,
},

{
img: "src/assets/images/femmes/femme-26.jpg",
newPrice: 10,
oldPrice: 15.5,
},

{
img: "src/assets/images/femmes/femme-27.jpg",
newPrice: 10,
oldPrice: 15.5,
},

{
img: "src/assets/images/femmes/femme-28.jpg",
newPrice: 10,
oldPrice: 15.5,
},

{
img: "src/assets/images/femmes/femme-29.jpg",
newPrice: 10,
oldPrice: 15.5,
},

{
img: "src/assets/images/femmes/femme-30.jpg",
newPrice: 10,
oldPrice: 15.5,
},

{
img: "src/assets/images/femmes/femme-31.jpg",
newPrice: 10,
oldPrice: 15.5,
},

{
img: "src/assets/images/femmes/femme-32.jpg",
newPrice: 10,
oldPrice: 15.5,
},

{
img: "src/assets/images/femmes/femme-33.jpg",
newPrice: 10,
oldPrice: 15.5,
},

{
img: "src/assets/images/femmes/femme-34.jpg",
newPrice: 10,
oldPrice: 15.5,
},

{
img: "src/assets/images/femmes/femme-35.jpg",
newPrice: 10,
oldPrice: 15.5,
},


{
img: "src/assets/images/femmes/femme-37.jpg",
newPrice: 10,
oldPrice: 15.5,
},


{
img: "src/assets/images/accessoires/accessoire-11.jpg",
newPrice: 10,
oldPrice: 15.5,
},

{
img: "src/assets/images/accessoires/accessoire-12.jpg",
newPrice: 10,
oldPrice: 15.5,
},

{
img: "src/assets/images/accessoires/accessoire-13.jpg",
newPrice: 10,
oldPrice: 15.5,
},

{
img: "src/assets/images/accessoires/accessoire-14.jpg",
newPrice: 10,
oldPrice: 15.5,
},

{
img: "src/assets/images/accessoires/accessoire-15.jpg",
newPrice: 10,
oldPrice: 15.5,
},

{
img: "src/assets/images/accessoires/accessoire-16.jpg",
newPrice: 10,
oldPrice: 15.5,
},

{
img: "src/assets/images/accessoires/accessoire-17.jpg",
newPrice: 10,
oldPrice: 15.5,
},

{
img: "src/assets/images/montre/montre-11.jpg",
newPrice: 10,
oldPrice: 15.5,
},

{
img: "src/assets/images/montre/montre-12.jpg",
newPrice: 10,
oldPrice: 15.5,
},

{
img: "src/assets/images/montre/montre-13.jpg",
newPrice: 10,
oldPrice: 15.5,
},

{
img: "src/assets/images/montre/montre-14.jpg",
newPrice: 10,
oldPrice: 15.5,
},


{
img: "src/assets/images/montre/montre-15.jpg",
newPrice: 10,
oldPrice: 15.5,
},

{
img: "src/assets/images/montre/montre-4.jpg",
newPrice: 10,
oldPrice: 15.5,
},

{
img: "src/assets/images/montre/montre-5.jpg",
newPrice: 10,
oldPrice: 15.5,
},

{
img: "src/assets/images/montre/montre-1.jpg",
newPrice: 10,
oldPrice: 15.5,
},

{
img: "src/assets/images/montre/montre-2.jpg",
newPrice: 10,
oldPrice: 15.5,
},

{
img: "src/assets/images/montre/montre-6.jpg",
newPrice: 10,
oldPrice: 15.5,
},


{
img: "src/assets/images/lunette/lunette-13.jpg",
newPrice: 10,
oldPrice: 15.5,
},

{
img: "src/assets/images/lunette/lunette-14.jpg",
newPrice: 10,
oldPrice: 15.5,
},

{
img: "src/assets/images/lunette/lunette-15.jpg",
newPrice: 10,
oldPrice: 15.5,
},

{
img: "src/assets/images/lunette/lunette-16.jpg",
newPrice: 10,
oldPrice: 15.5,
},

{
img: "src/assets/images/lunette/lunette-17.jpg",
newPrice: 10,
oldPrice: 15.5,
},

{
img: "src/assets/images/lunette/lunette-3.jpg",
newPrice: 10,
oldPrice: 15.5,
},

{
img: "src/assets/images/lunette/lunette-5.jpg",
newPrice: 10,
oldPrice: 15.5,
},

{
img: "src/assets/images/lunette/lunette-8.jpg",
newPrice: 10,
oldPrice: 15.5,
},

{
img: "src/assets/images/homme/homme-12.jpg",
newPrice: 10,
oldPrice: 15.5,
},

{
img: "src/assets/images/homme/homme-13.jpg",
newPrice: 10,
oldPrice: 15.5,
},

{
img: "src/assets/images/homme/homme-14.jpg",
newPrice: 10,
oldPrice: 15.5,
},

{
img: "src/assets/images/homme/homme-15.jpg",
newPrice: 10,
oldPrice: 15.5,
},

{
img: "src/assets/images/homme/homme-16.jpg",
newPrice: 10,
oldPrice: 15.5,
},

{
img: "src/assets/images/homme/homme-17.jpg",
newPrice: 10,
oldPrice: 15.5,
},

{
img: "src/assets/images/homme/homme-18.jpg",
newPrice: 10,
oldPrice: 15.5,
},

{
img: "src/assets/images/homme/homme-18.jpg",
newPrice: 10,
oldPrice: 15.5,
},

{
img: "src/assets/images/homme/homme-19.jpg",
newPrice: 10,
oldPrice: 15.5,
},

{
img: "src/assets/images/homme/homme-20.jpg",
newPrice: 10,
oldPrice: 15.5,
},

{
img: "src/assets/images/homme/homme-21.jpg",
newPrice: 10,
oldPrice: 15.5,
},

];

const lookbookItems = [
{img: "src/assets/images/montre/montre-13.jpg",},
{img: "src/assets/images/montre/montre-10.jpg",},
{ img: "src/assets/images/enfant/enfant-1.jpg", },
{ img: "src/assets/images/enfant/enfant-12.jpg", },
{img: "src/assets/images/montre/montre-3.jpg",},
{ img: "src/assets/images/enfant/enfant-13.jpg", },
{ img: "src/assets/images/enfant/enfant-5.jpg", },
{img: "src/assets/images/homme/homme-17.jpg",},
{img: "src/assets/images/homme/homme-1.jpg",},
{img: "src/assets/images/homme/homme-19.jpg",},
{img: "src/assets/images/accessoires/accessoire-7.jpg",},
{img: "src/assets/images/accessoires/accessoire-1.jpg",},
{img: "src/assets/images/homme/homme-10.jpg",},
{img: "src/assets/images/accessoires/accessoire-11.jpg",},
{img: "src/assets/images/accessoires/accessoire-8.jpg",},
{img: "src/assets/images/homme/homme-16.jpg",},
{img: "src/assets/images/lunette/lunette-12.jpg",},
{img: "src/assets/images/lunette/lunette-13.jpg",},
{img: "src/assets/images/lunette/lunette-14.jpg",},
{img: "src/assets/images/lunette/lunette-1.jpg",},
{img: "src/assets/images/accessoires/accessoire-10.jpg",},
{img: "src/assets/images/accessoires/accessoire-12.jpg",},
{img: "src/assets/images/homme/homme-20.jpg",},
{img: "src/assets/images/femmes/femme-19.jpg",},
{img: "src/assets/images/femmes/femme-10.jpg",},
{img: "src/assets/images/femmes/femme-11.jpg",},
{img: "src/assets/images/homme/homme-2.jpg",},
{img: "src/assets/images/femmes/femme-17.jpg",},
{img: "src/assets/images/montre/montre-2.jpg",},
{img: "src/assets/images/accessoires/accessoire-13.jpg",},
{img: "src/assets/images/homme/homme-17.jpg",},
{img: "src/assets/images/montre/montre-10.jpg",},
{img: "src/assets/images/accessoires/accessoire-14.jpg",},
{img: "src/assets/images/montre/montre-12.jpg",},
{img: "src/assets/images/montre/montre-5.jpg",},
{img: "src/assets/images/montre/montre-4.jpg",},
{img: "src/assets/images/montre/montre-6.jpg",},
{img: "src/assets/images/montre/montre-8.jpg",},
{img: "src/assets/images/lunette/lunette-2.jpg",},
{img: "src/assets/images/lunette/lunette-3.jpg",},
{img: "src/assets/images/lunette/lunette-4.jpg",},
{img: "src/assets/images/lunette/lunette-5.jpg",},
{img: "src/assets/images/lunette/lunette-6.jpg",},
{img: "src/assets/images/lunette/lunette-7.jpg",},
{img: "src/assets/images/lunette/lunette-8.jpg",},
{img: "src/assets/images/lunette/lunette-9.jpg",},
{img: "src/assets/images/lunette/lunette-10.jpg",},
{img: "src/assets/images/lunette/lunette-11.jpg",},
{img: "src/assets/images/enfant/enfant-1.jpg",},
{img: "src/assets/images/enfant/enfant-2.jpg",},
{img: "src/assets/images/enfant/enfant-10.jpg",},
{img: "src/assets/images/enfant/enfant-11.jpg",},
{img: "src/assets/images/enfant/enfant-5.jpg",},
{img: "src/assets/images/enfant/enfant-7.jpg",},
{img: "src/assets/images/enfant/enfant-8.jpg",},
{img: "src/assets/images/enfant/enfant-9.jpg",},
{img: "src/assets/images/enfant/enfant-12.jpg",},
{img: "src/assets/images/enfant/enfant-13.jpg",},
{img: "src/assets/images/enfant/enfant-14.jpg",},
{img: "src/assets/images/enfant/enfant-15.jpg",},
{img: "src/assets/images/femmes/femme-37.jpg",},
{img: "src/assets/images/femmes/femme-1.jpg",},
{img: "src/assets/images/femmes/femme-35.jpg",},
{img: "src/assets/images/femmes/femme-34.jpg",},
{img: "src/assets/images/femmes/femme-33.jpg",},
{img: "src/assets/images/femmes/femme-32.jpg",},
{img: "src/assets/images/femmes/femme-31.jpg",},
{img: "src/assets/images/femmes/femme-30.jpg",},
{img: "src/assets/images/femmes/femme-29.jpg",},
{img: "src/assets/images/femmes/femme-28.jpg",},
{img: "src/assets/images/femmes/femme-27.jpg",},
{img: "src/assets/images/femmes/femme-26.jpg",},


// Continue avec tous les autres items Lookbook...
];

export default function TabsShop () {
const [activeTab, setActiveTab] = useState("fashion");

return (
<div id="blog" className="container">
<h1 className="text-danger fw-bolder">Blog</h1>
{/* Nav tabs */}
<ul className="nav nav-tabs mt-3" id="shopTabs" role="tablist">
{tabs.map(({ id, label }) => (
<li key={id} className="nav-item" role="presentation">
<button
className={`nav-link ${activeTab === id ? "active" : ""}`}
id={`${id}-tab`}
type="button"
role="tab"
aria-controls={`${id}-pane`}
aria-selected={activeTab === id}
onClick={() => setActiveTab(id)}
>
{label}
</button>
</li>
))}
</ul>

{/* Tab panes */}
<div className="tab-content mt-4" id="shopTabsContent">
{/* Fashion */}
<div
className={`tab-pane fade ${activeTab === "fashion" ? "show active" : ""}`}
id="fashion-pane"
role="tabpanel"
aria-labelledby="fashion-tab"
>
<div className="row">
{fashionItems.map(({ img, texte }, idx) => (
<div key={idx} className="col-md-3 py-3">
<div className="card shadow-lg p-3">
<a href="#">
<img src={img} alt="fashion item" className="card-img-top" />
</a>
<div className="card-body">
<h5 className="card-title fs-6 fw-lighter text-center text-danger">2021 STYLE GUIDE: THE BIGGEST FALL TRENDS</h5>
<p class="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
possimus animi quae.</p>
</div>
</div>
</div>
))}
</div>
</div>

{/* Promo */}
<div
className={`tab-pane fade ${activeTab === "promo" ? "show active" : ""}`}
id="promo-pane"
role="tabpanel"
aria-labelledby="promo-tab"
>
<div className="row">
{promoItems.map(({ img, oldPrice, newPrice }, idx) => (
<div key={idx} className="col-md-3 py-3">
<div className="card shadow-lg p-3">
<a href="#">
<img src={img} alt="promo item" className="card-img-top" />
</a>
<div className="card-body">
<h5 className="card-title text-decoration-line-through">${oldPrice}</h5>
<p className="card-text text-danger">${newPrice}</p>
</div>
</div>
</div>
))}
</div>
</div>

{/* Lookbook */}
<div className={`tab-pane fade ${activeTab === "lookbook" ? "show active" : ""}`}
id="lookbook-pane"
role="tabpanel"
aria-labelledby="lookbook-tab"
>
<div className="row">
{lookbookItems.map(({ img, texte }, idx) => (

<div key={idx} className="card col-md-3 py-3">
<a href="#">
<img src={img} alt="lookbook item" className="img-fluid" />
</a>


<div className=" py-3 shadow-lg">
<span className="fw-bold text-danger">5 FALL LOOKS I'M LOVING</span>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit Sunt rerum, magnam neque sed repellendus maiores.</p>
</div>
</div>
))}
</div>

</div>
</div>

</div>
);
}



// export default EcommerceFashion;
