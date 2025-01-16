// const program1 = [
//     { title: "Opdracht 1", link: "les 1/opdracht 1/index.html" },
//     { title: "Opdracht 2", link: "les 2/opdracht2/index.html" },
//     { title: "Opdracht 3", link: "opdracht_3,4,5,6/index.html" },
//     { title: "Opdracht 7", link: "opdracht7/index.html" },
//     { title: "Opdracht 8", link: "opdracht8/index.html" },
//     { title: "Opdracht 9, 10", link: "opdrach9,10/index.html" },
//     { title: "Eindopdracht 1", link: "js1/eindopdracht_1/index.html" },
//     { title: "Eindopdracht 2", link: "js1/eindopdracht_2/index.html" },

// ];

// const program2 = [
//     { title: "Opdracht 1", link: "js2/opdracht1/index.html" },
//     { title: "Opdracht 2", link: "js2/opdracht2/index.html" },
//     { title: "Opdracht 3", link: "js2/opdracht3/index.html" },
//     { title: "Opdracht 4", link: "js2/opdracht4/index.html" },
//     { title: "Extra Opdracht 1", link: "js2/x_1/index.html" },
//     { title: "Extra Opdracht 2", link: "js2/x_2/script.js" },
//     { title: "Extra Opdracht 3", link: "js2/x_3/index.html" },
//     { title: "Extra Opdracht 6", link: "js2/x_6/index.html" },
//     { title: "Extra Opdracht 7", link: "js2/x_7/index.html" },
// ];

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
        div.className = 'h-16 w-full overflow-hidden bg-neutral-900 flex flex-row active:scale-95 items-center gap-3 p-2 hover:shadow-neutral-900 group hover:shadow-lg rounded-lg hover:cursor-pointer hover:scale-[102%] duration-300 ease-in-out will-change-transform';
    
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

// createEntries(program1, 'js1')
// createEntries(program2, 'js2')
createEntries(program3, 'js3')
createEntries(extra, 'extra')

