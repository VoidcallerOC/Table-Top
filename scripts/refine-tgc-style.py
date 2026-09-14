from pathlib import Path

path = Path('/home/ubuntu/Table-Top/client/src/index.css')
s = path.read_text()
replacements = {
    '--paper:#0e0f12;': '--paper:#f7f4ee;',
    '--surface:#16181d;': '--surface:#fffdf9;',
    '--surface-2:#1c1e25;': '--surface-2:#f0ece5;',
    '--ink:#edede7;': '--ink:#1b1d24;',
    '--accent:#efe7ce;': '--accent:#d79d22;',
    '--accent-strong:#d6c99f;': '--accent-strong:#b77b0b;',
    '--muted:#9ea0a8;': '--muted:#6b6f78;',
    '--line:#22252c;': '--line:#ded9d0;',
    '--line-strong:#454955;': '--line-strong:#bcb5aa;',
    '--light-line:rgba(237,237,231,.1);': '--light-line:rgba(27,29,36,.12);',
    'background:rgba(14,15,18,.84);': 'background:rgba(247,244,238,.9);',
    'border-bottom:1px solid var(--line-strong);backdrop-filter': 'border-bottom:1px solid var(--line);backdrop-filter',
    'background:var(--surface);border-bottom:1px solid var(--line);display:flex;align-items:center;justify-content:center': 'background:var(--ink);border-bottom:1px solid var(--line-strong);display:flex;align-items:center;justify-content:center',
    'background:var(--surface);border-bottom:1px solid var(--line-strong);border-bottom': 'background:var(--surface);border-bottom:1px solid var(--line-strong);border-bottom',
    'color:var(--paper);background:var(--accent);border:1px solid var(--accent)': 'color:var(--ink);background:var(--accent);border:1px solid var(--accent)',
    'color:var(--paper);background:var(--accent);border-color:var(--accent)': 'color:var(--ink);background:var(--accent);border-color:var(--accent)',
    'color:var(--paper);background:var(--accent);': 'color:var(--ink);background:var(--accent);',
    'color:var(--paper);background:var(--accent);border-radius': 'color:var(--ink);background:var(--accent);border-radius',
    'color:var(--ink);background:var(--surface-2);border:1px solid var(--line-strong);border-radius:var(--radius);display:flex': 'color:var(--ink);background:var(--surface-2);border:1px solid var(--line-strong);border-radius:var(--radius);display:flex',
    'background:var(--surface-2)}.pathway.gold,.pathway.purple,.pathway.green,.pathway.coral{background:var(--surface-2)}': 'background:var(--surface-2)}.pathway.gold{background:#f2cc72}.pathway.purple{background:#d8cafa}.pathway.green{background:#c5dfc8}.pathway.coral{background:#f2b19c}',
    '.start-section{background:var(--paper);': '.start-section{background:#f1d8a8;',
    '.now-section{background:var(--paper);': '.now-section{background:#f7f4ee;',
    '.simple-page{min-height:620px;padding:': '.simple-page{min-height:620px;padding:',
}
for old, new in replacements.items():
    s = s.replace(old, new)
# Explicitly restore expressive hover states while keeping dark text readable.
s = s.replace('.pathway:hover{background:#252830;', '.pathway:hover{background:#fffdf9;')
s = s.replace('.community-card:hover{background:#252830;', '.community-card:hover{background:#2a2d35;')
path.write_text(s)
