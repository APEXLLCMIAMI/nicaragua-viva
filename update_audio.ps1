$jsPath = "c:\Users\olive\OneDrive\Documentos\UCN\TRABAJO WEB CRSITIANONV\js\main.js"
$content = Get-Content $jsPath -Encoding UTF8 -Raw

$newAudioFunc = @'
const AUDIO_TRACKS = [
  {
    title: 'Sonidos del Bosque Nuboso',
    artist: 'Naturaleza de Nicaragua',
    icon: '🌿',
    duration: '6:12',
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
  },
  {
    title: 'Ambiente de Mercado',
    artist: 'Sonidos Auténticos',
    icon: '🏪',
    duration: '7:05',
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3'
  },
  {
    title: 'El Lago al Amanecer',
    artist: 'Naturaleza de Nicaragua',
    icon: '🌅',
    duration: '5:44',
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3'
  }
];

let currentTrack = 0;
let isPlaying = false;
let audioInstance = new Audio();

function initAudioPlayer() {
  const playBtn = document.getElementById('audio-play-btn');
  const prevBtn = document.getElementById('audio-prev-btn');
  const nextBtn = document.getElementById('audio-next-btn');
  const trackItems = document.querySelectorAll('.audio-track-item');
  const progressBar = document.getElementById('audio-progress');
  const currentTimeEl = document.getElementById('audio-current-time');

  if (!playBtn) return;

  renderAudioTrack(currentTrack);

  playBtn.addEventListener('click', togglePlay);
  if(prevBtn) prevBtn.addEventListener('click', () => { changeTrack(-1); });
  if(nextBtn) nextBtn.addEventListener('click', () => { changeTrack(1); });

  trackItems.forEach((item, i) => {
    item.addEventListener('click', () => {
      currentTrack = i;
      renderAudioTrack(i);
      updateTrackList();
      simulatePlay();
    });
  });

  audioInstance.addEventListener('timeupdate', () => {
    if (audioInstance.duration) {
      const progressPercent = (audioInstance.currentTime / audioInstance.duration) * 100;
      if (progressBar) progressBar.value = progressPercent;
      
      const mins = Math.floor(audioInstance.currentTime / 60);
      const secs = Math.floor(audioInstance.currentTime % 60).toString().padStart(2, '0');
      if (currentTimeEl) currentTimeEl.textContent = `${mins}:${secs}`;
    }
  });

  audioInstance.addEventListener('ended', () => {
    changeTrack(1);
  });

  if(progressBar) {
    progressBar.addEventListener('input', () => {
      if (audioInstance.duration) {
        const newTime = (progressBar.value / 100) * audioInstance.duration;
        audioInstance.currentTime = newTime;
      }
    });
  }
}

function renderAudioTrack(index) {
  const track = AUDIO_TRACKS[index];
  if (!track) return;

  const nameEl = document.getElementById('audio-track-name');
  const artistEl = document.getElementById('audio-track-artist');
  const iconEl = document.getElementById('audio-track-icon');
  if (nameEl) nameEl.textContent = track.title;
  if (artistEl) artistEl.textContent = track.artist;
  if (iconEl) iconEl.textContent = track.icon;
  
  const wasPlaying = !audioInstance.paused;
  audioInstance.src = track.src;
  if (wasPlaying || isPlaying) {
    audioInstance.play().catch(e => console.log('Autoplay prevented', e));
  }
}

function togglePlay() {
  isPlaying = !isPlaying;
  const playBtn = document.getElementById('audio-play-btn');
  if (playBtn) playBtn.innerHTML = isPlaying ? '⏸' : '▶';

  if (isPlaying) {
    audioInstance.play().catch(e => console.log(e));
  } else {
    audioInstance.pause();
  }
}

function changeTrack(direction) {
  currentTrack = (currentTrack + direction + AUDIO_TRACKS.length) % AUDIO_TRACKS.length;
  renderAudioTrack(currentTrack);
  updateTrackList();
  if (isPlaying) {
    audioInstance.play().catch(e => console.log(e));
  }
}

function simulatePlay() {
  isPlaying = true;
  const playBtn = document.getElementById('audio-play-btn');
  if (playBtn) playBtn.innerHTML = '⏸';
  audioInstance.play().catch(e => console.log(e));
}

function updateTrackList() {
  document.querySelectorAll('.audio-track-item').forEach((item, i) => {
    if(item.classList) item.classList.toggle('playing', i === currentTrack);
    const numEl = item.querySelector('.audio-track-num');
    if (numEl) numEl.innerHTML = i === currentTrack ? '🎵' : (i + 1).toString();
  });
}
'@

$pattern = 'const AUDIO_TRACKS = \[[\s\S]*?function updateTrackList\(\) \{[\s\S]*?\}\s*\}\s*\)'
# Actually, looking at lines 947 to 1070: it ends at line 1070.
# A more robust replace using start and end markers
$startString = 'const AUDIO_TRACKS = ['
$endString = '  });' + "`r`n" + '}'
$startIndex = $content.IndexOf($startString)
# Find the end of updateTrackList
$updateTrackListStart = $content.IndexOf('function updateTrackList()', $startIndex)
$endIndex = $content.IndexOf('}', $content.IndexOf('})', $updateTrackListStart)) + 1

if ($startIndex -ge 0 -and $endIndex -gt $startIndex) {
    $before = $content.Substring(0, $startIndex)
    $after = $content.Substring($endIndex)
    $newContent = $before + $newAudioFunc + $after
    Set-Content -Path $jsPath -Value $newContent -Encoding UTF8 -NoNewline
    Write-Host "Audio replaced successfully"
} else {
    Write-Host "Failed to find bounds"
}
