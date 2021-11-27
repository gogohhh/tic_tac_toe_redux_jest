// Importamos la librería de Puppeteer.
import { launch } from "puppeteer";
 
// Obtenemos el primer argumento del comando.
const [url] = process.argv.slice(2);
 
(async () => {
  // Lanzamos un nuevo navegador.
  const browser = await launch();
  // Abrimos una nueva página.
  const page = await browser.newPage();
 
  // Vamos a la URL.
  await page.goto(url);
 
  // Cerramos la página y el navegador.
  await page.close();
  await browser.close();
})();