const program3 = [
    { title: "Opdracht 1", link: "js3/opdracht1/index.html" },
    { title: "Opdracht 2", link: "js3/opdracht2/index.html" },

];

const extra = [
    { title: "kaarten", link: "kaarten/kaarten.html" },
];

function createEntries(items, id) {
    const parent = document.getElementById(id)

    items.forEach((item) => {
        const anchor = document.createElement('a');
        anchor.href = item.link;
        anchor.target = '_blank';
        const div = document.createElement('div');
        div.className = 'h-16 w-full overflow-hidden bg-neutral-900 flex flex-row active:scale-95 items-center gap-3 p-2 hover:shadow-neutral-800 group hover:shadow-lg rounded-lg hover:cursor-pointer hover:scale-[102%] duration-300 ease-in-out will-change-transform';
    
        const img = document.createElement('img');
        img.className = 'aspect-square xl:flex hidden h-full rounded-md';
        img.src = 'https://cdn.simpleicons.org/javascript/F7DF1E';
    
        const p = document.createElement('p');
        p.className = 'text-2xl text-nowrap w-full text-white font-bold text-opacity-50 will-change-transform group-hover:text-opacity-100 duration-300 ease-in-out';
        p.textContent = item.title;
    
        div.appendChild(img);
        div.appendChild(p);
    
        anchor.appendChild(div);
    
        parent.appendChild(anchor);
    });
}

createEntries(program3, 'js3')
createEntries(extra, 'extra')