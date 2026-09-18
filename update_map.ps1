$jsPath = "c:\Users\olive\OneDrive\Documentos\UCN\TRABAJO WEB CRSITIANONV\js\main.js"
$content = Get-Content $jsPath -Encoding UTF8 -Raw

$newMapFunc = @'
// ============================================================
// MAPA INTERACTIVO DE NICARAGUA
// ============================================================
function initMap() {
  const mapContainer = document.getElementById('nicaragua-map');
  if (!mapContainer) return;

  const mapDepts = [
    { id: 'chinandega', name: 'Chinandega', color: '#c1440e', labelX: 108, labelY: 148,
      d: 'M 60,80 L 145,72 L 168,95 L 175,125 L 158,155 L 130,170 L 95,165 L 68,148 L 55,120 Z' },
    { id: 'leon', name: 'Leon', color: '#e63946', labelX: 162, labelY: 210,
      d: 'M 130,170 L 158,155 L 175,125 L 195,140 L 215,155 L 220,185 L 205,215 L 180,230 L 155,225 L 135,205 Z' },
    { id: 'nueva-segovia', name: 'N. Segovia', color: '#344e41', labelX: 228, labelY: 68,
      d: 'M 145,72 L 235,40 L 295,45 L 310,65 L 295,90 L 265,100 L 230,95 L 200,105 L 168,95 Z' },
    { id: 'madriz', name: 'Madriz', color: '#588157', labelX: 248, labelY: 120,
      d: 'M 200,105 L 230,95 L 265,100 L 280,120 L 268,140 L 245,148 L 218,140 L 205,125 Z' },
    { id: 'esteli', name: 'Esteli', color: '#606c38', labelX: 265, labelY: 170,
      d: 'M 218,140 L 245,148 L 268,140 L 285,158 L 278,185 L 258,195 L 232,190 L 215,175 Z' },
    { id: 'jinotega', name: 'Jinotega', color: '#1b4332', labelX: 340, labelY: 110,
      d: 'M 265,100 L 310,65 L 370,60 L 410,80 L 415,115 L 390,145 L 355,155 L 320,148 L 295,130 L 280,120 Z' },
    { id: 'matagalpa', name: 'Matagalpa', color: '#386641', labelX: 348, labelY: 195,
      d: 'M 278,185 L 285,158 L 320,148 L 355,155 L 390,145 L 400,175 L 388,210 L 358,225 L 322,222 L 295,210 Z' },
    { id: 'managua', name: 'Managua', color: '#e76f51', labelX: 214, labelY: 258,
      d: 'M 180,230 L 205,215 L 232,218 L 252,235 L 248,262 L 228,272 L 200,268 L 182,252 Z' },
    { id: 'masaya', name: 'Masaya', color: '#f4a261', labelX: 262, labelY: 275,
      d: 'M 248,262 L 270,258 L 280,272 L 270,285 L 252,285 L 244,275 Z' },
    { id: 'carazo', name: 'Carazo', color: '#8ecae6', labelX: 210, labelY: 292,
      d: 'M 182,275 L 200,268 L 228,272 L 244,275 L 240,295 L 220,308 L 196,305 L 182,290 Z' },
    { id: 'granada', name: 'Granada', color: '#e9c46a', labelX: 278, labelY: 305,
      d: 'M 252,285 L 270,285 L 292,295 L 298,315 L 282,328 L 260,322 L 250,305 Z' },
    { id: 'rivas', name: 'Rivas', color: '#52b788', labelX: 225, labelY: 348,
      d: 'M 196,305 L 220,308 L 240,295 L 250,305 L 260,322 L 252,350 L 235,375 L 210,380 L 192,360 L 188,335 Z' },
    { id: 'boaco', name: 'Boaco', color: '#bc6c25', labelX: 342, labelY: 262,
      d: 'M 295,210 L 322,222 L 358,225 L 372,248 L 365,272 L 338,280 L 310,272 L 295,252 Z' },
    { id: 'chontales', name: 'Chontales', color: '#9c6644', labelX: 368, labelY: 318,
      d: 'M 310,272 L 338,280 L 365,272 L 390,285 L 398,315 L 385,342 L 352,350 L 322,338 L 308,310 Z' },
    { id: 'rio-san-juan', name: 'Rio San Juan', color: '#0a7e3f', labelX: 358, labelY: 395,
      d: 'M 260,322 L 282,328 L 308,310 L 322,338 L 352,350 L 368,375 L 358,415 L 330,435 L 295,428 L 262,410 L 248,385 L 252,358 Z' },
    { id: 'costa-caribe-norte', name: 'Caribe Norte', color: '#0077b6', labelX: 530, labelY: 165,
      d: 'M 410,80 L 490,65 L 570,72 L 615,100 L 620,160 L 600,215 L 560,245 L 510,255 L 460,248 L 420,225 L 400,175 L 415,115 Z' },
    { id: 'costa-caribe-sur', name: 'Caribe Sur', color: '#00b4d8', labelX: 520, labelY: 355,
      d: 'M 398,315 L 420,225 L 460,248 L 510,255 L 560,245 L 575,290 L 580,350 L 558,405 L 520,440 L 475,455 L 430,448 L 400,420 L 385,375 Z' }
  ];

  let deptsHTML = '';
  for (const d of mapDepts) {
    deptsHTML += '<g class="map-dept-group" data-dept="' + d.id + '" role="button" tabindex="0" aria-label="' + d.name + '" style="cursor:pointer">' +
      '<path d="' + d.d + '" fill="' + d.color + '" opacity="0.82" stroke="rgba(255,255,255,0.35)" stroke-width="1" stroke-linejoin="round" class="map-dept-path" style="transition:opacity 0.2s,stroke-width 0.2s"/>' +
      '<text x="' + d.labelX + '" y="' + d.labelY + '" text-anchor="middle" dominant-baseline="middle" fill="white" font-size="8.5" font-family="Inter,sans-serif" font-weight="700" style="pointer-events:none;text-shadow:0 1px 3px rgba(0,0,0,0.8)">' + d.name + '</text>' +
      '</g>';
  }

  mapContainer.innerHTML = '<svg viewBox="0 0 680 480" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;filter:drop-shadow(0 8px 24px rgba(0,0,0,0.4))" role="img" aria-label="Mapa interactivo de Nicaragua">' +
    '<rect width="680" height="480" fill="rgba(0,40,80,0.3)" rx="12"/>' +
    '<ellipse cx="282" cy="330" rx="48" ry="30" fill="rgba(0,119,182,0.55)" stroke="rgba(100,200,255,0.4)" stroke-width="1"/>' +
    '<text x="282" y="328" text-anchor="middle" fill="rgba(255,255,255,0.55)" font-size="7.5" font-family="Inter,sans-serif">Lago</text>' +
    '<text x="282" y="338" text-anchor="middle" fill="rgba(255,255,255,0.55)" font-size="7.5" font-family="Inter,sans-serif">Cocibolca</text>' +
    '<ellipse cx="200" cy="238" rx="24" ry="14" fill="rgba(0,119,182,0.45)" stroke="rgba(100,200,255,0.3)" stroke-width="1"/>' +
    '<text x="200" y="242" text-anchor="middle" fill="rgba(255,255,255,0.45)" font-size="6" font-family="Inter,sans-serif">Xolotlan</text>' +
    deptsHTML +
    '<text x="650" y="28" text-anchor="middle" fill="rgba(255,255,255,0.6)" font-size="13" font-family="Inter,sans-serif" font-weight="700">N</text>' +
    '<polygon points="650,32 645,48 650,44 655,48" fill="rgba(255,255,255,0.5)"/>' +
    '<rect x="12" y="440" width="10" height="10" rx="2" fill="#e63946" opacity="0.85"/>' +
    '<text x="26" y="449" fill="rgba(255,255,255,0.65)" font-size="9" font-family="Inter,sans-serif">Pacifico</text>' +
    '<rect x="78" y="440" width="10" height="10" rx="2" fill="#386641" opacity="0.85"/>' +
    '<text x="92" y="449" fill="rgba(255,255,255,0.65)" font-size="9" font-family="Inter,sans-serif">Central</text>' +
    '<rect x="144" y="440" width="10" height="10" rx="2" fill="#0077b6" opacity="0.85"/>' +
    '<text x="158" y="449" fill="rgba(255,255,255,0.65)" font-size="9" font-family="Inter,sans-serif">Caribe</text>' +
    '</svg>';

  const infoPanel = document.getElementById('map-dept-info');

  mapContainer.querySelectorAll('.map-dept-group').forEach(function(group) {
    const deptId = group.dataset.dept;
    const path = group.querySelector('.map-dept-path');

    const handleEnter = function() {
      if (path) { path.setAttribute('opacity', '1'); path.setAttribute('stroke-width', '2.5'); path.setAttribute('stroke', 'white'); }
      updateMapInfo(deptId, infoPanel);
    };
    const handleLeave = function() {
      if (path) { path.setAttribute('opacity', '0.82'); path.setAttribute('stroke-width', '1'); path.setAttribute('stroke', 'rgba(255,255,255,0.35)'); }
    };

    group.addEventListener('mouseenter', handleEnter);
    group.addEventListener('mouseleave', handleLeave);
    group.addEventListener('click', function() { openDeptModal(deptId); });
    group.addEventListener('focus', handleEnter);
    group.addEventListener('blur', handleLeave);
    group.addEventListener('keydown', function(e) { if (e.key === 'Enter') openDeptModal(deptId); });
  });
}
'@

# Find and replace the initMap function block
$startMarker = '// ============================================================' + "`r`n" + '// MAPA INTERACTIVO DE NICARAGUA' + "`r`n" + '// ============================================================' + "`r`n" + 'function initMap() {'
$pattern = '// ={60}\s*\r?\n// MAPA INTERACTIVO DE NICARAGUA\s*\r?\n// ={60}\s*\r?\nfunction initMap\(\) \{[\s\S]*?\n\}'

$content = [regex]::Replace($content, $pattern, $newMapFunc.Trim())
Set-Content -Path $jsPath -Value $content -Encoding UTF8 -NoNewline
Write-Host "Done"
