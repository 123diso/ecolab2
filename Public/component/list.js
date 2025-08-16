        (async function load(){
        const r = await fetch('/posts?_sort=createdAt&_order=desc');
        if (!r.ok) { document.getElementById('posts').textContent = 'Error cargando'; return; }
        const posts = await r.json();
        document.getElementById('posts').innerHTML = posts.map(p => `
            <article class="card">
            ${p.image ? `<img src="${p.image}" alt="${p.title}">` : ''}
            <h2>${p.title ?? ''}</h2>
            <p>${p.description ?? ''}</p>
            </article>
        `).join('');
        })();