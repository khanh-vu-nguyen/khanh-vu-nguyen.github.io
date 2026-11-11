// Make the email clickable without writing the real address in the page source
document.querySelectorAll('a.email').forEach(function (a) {
  a.href = 'mailto:' + a.dataset.user + '@' + a.dataset.domain;
});

// "Last updated" line: the date this page was last published
var modified = new Date(document.lastModified);
var updated = document.getElementById('updated');
if (updated && !isNaN(modified)) {
  updated.textContent = 'Last updated ' + modified.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
}
