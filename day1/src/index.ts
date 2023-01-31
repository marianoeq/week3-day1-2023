const template = `
<p></p>
<p id="p1"></p>
<p id="p2"></p>
<button>Pintar</button
`;
document.querySelector('#root')!.innerHTML = template;
// Localizar un elemento del DOM

const element = document.querySelector('p');
const elements = [...document.querySelectorAll('p')];
let counter: number = 1;

const elementP = document.querySelector('#p1');
const elementSecondP = document.querySelector('#p2');
const button = document.querySelector('button');
//Modificamos un elemento del DOM
//if(!element) throw new Error(""); => Arrojar error controlado.

function testingSetTimeout() {
  console.log('working');
  element!.innerHTML = `Esto es un p lanzado despues de 2 seg ${counter}`;
}
setTimeout(testingSetTimeout, 2000);

const handleClick = () => {
  elementP!.innerHTML = 'Este es el <strong>primer</strong> P';
  elementSecondP!.innerHTML = 'Este es el <strong>segundo</strong> P';
};

button?.addEventListener('click', handleClick);
