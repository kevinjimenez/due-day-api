const card = document.getElementById('card');
const $ = (id) => document.getElementById(id);

const labels = {
  loading: { badge: 'Checking', status: '…' },
  up: { badge: 'Up', status: 'Up' },
  down: { badge: 'Down', status: 'Down' },
};

$('url').textContent = `${location.host}/health`;

function render(state, data = {}, latency = null) {
  card.dataset.state = state;
  $('badge').textContent = labels[state].badge;
  $('status').textContent = labels[state].status;
  $('environment').textContent = data.environment ?? '–';
  $('port').textContent = data.port ?? '–';
  $('latency').textContent = latency !== null ? `${latency} ms` : '–';
}

async function verify() {
  render('loading');
  const start = performance.now();
  try {
    const response = await fetch('/health', { cache: 'no-store' });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    render('up', data, Math.round(performance.now() - start));
  } catch {
    render('down');
  }
  $('last').textContent = new Date().toLocaleTimeString('en', {
    hour12: false,
  });
}

$('verify').addEventListener('click', verify);
verify();
