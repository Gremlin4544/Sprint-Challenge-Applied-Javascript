// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

const data = [
    {
        date: 'MARCH 28, 2019',
        title: 'Lambda Times',
        temp: '98°'
    },
]

const object = document.querySelector('.header-container')
data.forEach(info => {
    object.appendChild(Header(info));
})

function Header() {}
