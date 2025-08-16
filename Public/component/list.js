    const container = document.getElementById('posts');

    async function load() {
    const r = await fetch('/posts?_sort=createdAt&_order=desc');
    if (!r.ok) { container.textContent = 'Error cargando'; return; }
    const posts = await r.json();

    container.innerHTML = posts.map(p => `
        <article class="card">
        ${p.image ? `<img src="${p.image}" alt="${p.title}">` : ''}
        <h2>${p.title ?? ''}</h2>
        <p>${p.description ?? ''}</p>
        <button data-del="${p.id}">Eliminar</button>
        </article>
    `).join('');
    }


    

    container.addEventListener('click', async (e) => {
    const btn = e.target.closest('button[data-del]');
    if (!btn) return;

    const id = btn.dataset.del;
    if (!confirm('¿Eliminar este post?')) return;

    const res = await fetch(`/posts/${encodeURIComponent(id)}`, { method: 'DELETE' });
    if (res.ok) load();
    else alert('No se pudo eliminar');
    });

    document.addEventListener('DOMContentLoaded', load);
