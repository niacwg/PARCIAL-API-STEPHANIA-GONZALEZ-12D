import fs from 'fs';
import https from 'https';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const csvUrl = 'https://raw.githubusercontent.com/plotly/datasets/refs/heads/master/beers.csv';
const outputPath = path.join(__dirname, '../db/beers.csv');

export const downloadCSV = async () => {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(outputPath);
    https.get(csvUrl, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Error al descargar CSV. Código: ${response.statusCode}`));
        return;
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close(() => resolve('Archivo CSV descargado con éxito.'));
      });
    }).on('error', (err) => {
      fs.unlink(outputPath, () => reject(err));
    });
  });
};
