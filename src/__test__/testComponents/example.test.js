import puppeteer from 'puppeteer';

//test para encontrar el text'Jugador'
test('Prueba de busqueda de jugador', async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const app = 'http://localhost:3000/';
  await page.goto(app);

  //buscar el texto 'Jugador' en la etiqueta div es rendereado correctamente
  await page.type('div', 'Jugador');


  await browser.close();
});

test('Render tablero', async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const app = 'http://localhost:3000/';
  await page.goto(app);

  await page.click('div#simbolo');

  await browser.close();
});


