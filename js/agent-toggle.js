(function() {
  var toggle = document.getElementById('agent-view-toggle');
  var rendered = document.getElementById('rendered-view');
  var raw = document.getElementById('raw-view');

  if (!toggle || !rendered || !raw) return;

  // Check URL param on load
  var params = new URLSearchParams(window.location.search);
  if (params.get('agent') === 'true') {
    rendered.style.display = 'none';
    raw.style.display = 'block';
    toggle.classList.add('active');
  }

  toggle.addEventListener('click', function() {
    var isRaw = raw.style.display !== 'none';
    rendered.style.display = isRaw ? 'block' : 'none';
    raw.style.display = isRaw ? 'none' : 'block';
    toggle.classList.toggle('active');

    // Update URL param without page reload
    var url = new URL(window.location);
    if (!isRaw) {
      url.searchParams.set('agent', 'true');
    } else {
      url.searchParams.delete('agent');
    }
    history.replaceState({}, '', url);
  });
})();
