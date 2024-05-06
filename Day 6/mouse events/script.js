const logo=document.querySelector('img');

const onClick=()=>console.log('click event');

const onRightClick=()=>console.log(' right click event');

const onMouseDown=()=>console.log(' right click event');

const onMouseWheel=()=>console.log(' right click event');

const onDragStart=()=>console.log('on drag event');

logo.addEventListener('click',onClick);
logo.addEventListener('contextmenu',onRightClick);
logo.addEventListener('mousedown',onMouseDown);
logo.addEventListener('wheel',onMouseWheel);
logo.addEventListener('dragstart',onDragStart);
