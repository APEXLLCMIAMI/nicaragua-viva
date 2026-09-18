const fs = require('fs');
const https = require('https');
const path = require('path');

// 1. Remove Emojis from files
function removeEmojis(filePath) {
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');
  // Match common emojis (excluding basic punctuation)
  const emojiRegex = /[\u{1F300}-\u{1F9FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]|[\u{1F1E6}-\u{1F1FF}]|[\u{1F600}-\u{1F64F}]|[\u{1F680}-\u{1F6FF}]/gu;
  
  content = content.replace(emojiRegex, '').replace(/  +/g, ' '); 
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Removed emojis from ${filePath}`);
}

removeEmojis(path.join(__dirname, 'index.html'));
removeEmojis(path.join(__dirname, 'js/main.js'));
removeEmojis(path.join(__dirname, 'data/nicaragua-data.js'));

// 2. Wikipedia Image Fetcher Helper
function fetchWikiImage(title) {
  return new Promise((resolve) => {
    const url = `https://es.wikipedia.org/w/api.php?action=query&prop=pageimages&titles=${encodeURIComponent(title)}&pithumbsize=800&format=json`;
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const parsed = JSON.parse(data);
          const pages = parsed.query.pages;
          const pageId = Object.keys(pages)[0];
          if (pageId !== '-1' && pages[pageId].thumbnail) {
            resolve(pages[pageId].thumbnail.source);
          } else {
            resolve(null);
          }
        } catch (e) {
          resolve(null);
        }
      });
    }).on('error', () => resolve(null));
  });
}

const wikiMapping = {
  'managua': 'Managua',
  'masaya': 'Masaya',
  'granada': 'Granada (Nicaragua)',
  'carazo': 'Departamento de Carazo',
  'rivas': 'Departamento de Rivas',
  'leon': 'León (Nicaragua)',
  'chinandega': 'Departamento de Chinandega',
  'esteli': 'Estelí',
  'madriz': 'Departamento de Madriz',
  'nueva-segovia': 'Departamento de Nueva Segovia',
  'jinotega': 'Jinotega',
  'matagalpa': 'Matagalpa',
  'boaco': 'Departamento de Boaco',
  'chontales': 'Departamento de Chontales',
  'rio-san-juan': 'Departamento de Río San Juan',
  'costa-caribe-norte': 'Región autónoma de la Costa Caribe Norte',
  'costa-caribe-sur': 'Región autónoma de la Costa Caribe Sur'
};

const foodWikiMapping = {
  'gallo-pinto': 'Gallo pinto',
  'vigoron': 'Vigorón',
  'nacatamal': 'Nacatamal',
  'quesillo': 'Quesillo (Nicaragua)',
  'indio-viejo': 'Indio viejo',
  'rondón': 'Rondón (comida)',
  'cacao': 'Theobroma cacao',
  'macua': 'Macuá'
};

async function updateNicaraguaData() {
  const dataPath = path.join(__dirname, 'data/nicaragua-data.js');
  let content = fs.readFileSync(dataPath, 'utf8');

  for (const [id, wikiTitle] of Object.entries(wikiMapping)) {
    const imgUrl = await fetchWikiImage(wikiTitle);
    if (imgUrl) {
      const regex = new RegExp(`(id:\\s*['"]${id}['"][\\s\\S]*?image:\\s*['"])(.*?)(['"])`);
      content = content.replace(regex, `$1${imgUrl}$3`);
      console.log(`Updated image for ${id}: ${imgUrl}`);
    }
  }

  for (const [id, wikiTitle] of Object.entries(foodWikiMapping)) {
    const imgUrl = await fetchWikiImage(wikiTitle);
    if (imgUrl) {
      const regex = new RegExp(`(id:\\s*['"]${id}['"][\\s\\S]*?image:\\s*['"])(.*?)(['"])`);
      content = content.replace(regex, `$1${imgUrl}$3`);
      console.log(`Updated image for ${id}: ${imgUrl}`);
    }
  }

  fs.writeFileSync(dataPath, content, 'utf8');
  console.log('Finished updating nicaragua-data.js');
}

updateNicaraguaData();
