import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

const VOLUMES = ['volume-1', 'volume-2', 'volume-3'];
const PAGES = ['mission-log', 'field-journal', 'puzzle-forge', 'educator-key'];
const BASE_URL = 'http://localhost:3000';

async function generatePdfs() {
  const outputDir = path.join(process.cwd(), 'output');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  console.log('Launching browser...');
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  for (const volume of VOLUMES) {
    for (const pageName of PAGES) {
      const url = `${BASE_URL}/${volume}/${pageName}`;
      const outputPath = path.join(outputDir, `${volume}-${pageName}.pdf`);

      console.log(`Navigating to ${url}...`);
      await page.goto(url, { waitUntil: 'networkidle' });

      console.log(`Generating PDF: ${outputPath}`);
      await page.pdf({
        path: outputPath,
        format: 'Letter',
        printBackground: true,
        // Wait a bit to ensure fonts and styles are fully loaded if needed
        margin: { top: '0', right: '0', bottom: '0', left: '0' } // handled by globals.css mostly
      });
    }
  }

  console.log('Finished generating PDFs.');
  await browser.close();
}

generatePdfs().catch(console.error);
