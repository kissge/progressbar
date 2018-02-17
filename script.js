const $s = document.getElementById('inner');
const $e = document.getElementById('outer2');

const life = (s, e) => {
  const start = new Date(s + ' 00:00:00');
  const end = new Date(e + ' 23:59:59');

  const now = new Date();

  if (start <= now && now <= end) {
    $s.dataset.val = s;
    $e.dataset.val = e;
    $s.style.width = `${100 * (now - start) / (end - start)}%`;
  }
};

const args = location.href.replace(/\/+$/, '').split('/').slice(-2);

if (args.length == 2 && args.every(x => x.match(/^\d{4}-\d{2}-\d{2}$/))) {
  life(...args);
} else {
  const year = new Date().getFullYear();
  life(`${year}-01-01`, `${year}-12-31`);
}
