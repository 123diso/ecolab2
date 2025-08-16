        document.getElementById('postForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        const body = {
            image: document.getElementById('image').value.trim(),
            title: document.getElementById('title').value.trim(),
            description: document.getElementById('description').value.trim(),
            createdAt: Date.now()
        };
        const res = await fetch('/posts', { // mismo host/puerto
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        });
        if (!res.ok) { alert('No se pudo guardar'); return; }
        location.href = '/list.html'; // redirige al listado
        });