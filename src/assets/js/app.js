document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#todo');
    const button = document.querySelector('#button');
    const list = document.querySelector('.list');

    button.addEventListener('click', (e) => {
        if (form.value === '') {
            alert('Please enter a task');
        } else {
            e.preventDefault();
            const p = document.createElement('p');
            const span = document.createElement('span');
            span.className = 'task';
            
            const icon = document.createElement('span');
            icon.className = 'material-icons-sharp';
            icon.textContent = 'clear';

            p.textContent = form.value;
            span.appendChild(p);
            span.appendChild(icon);
            list.append(span);
            form.value = '';
            
            icon.addEventListener('click', () => {
                span.remove();
            });
            p.addEventListener('click', () => {
                p.style.textDecoration = 'line-through';
            });
        }
    });

    function getCurrentTime() {
        const date = new Date();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        return `${hours}:${minutes}:${seconds}`;
    }

    function removeParagraph(p, time = 5) {
        var timer = time * 1000; 
        setTimeout(() => {
            p.remove();
        }, timer);
    }
});
