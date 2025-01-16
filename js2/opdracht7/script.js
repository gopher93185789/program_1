const images = [
    {name: "gopher", path: "./assets/1.jpeg"},
    {name: "clang", path: "./assets/2.png"},
    {name: "cpu", path: "./assets/3.webp"},
    {name: "4090FE", path: "./assets/4.jpg"},
    {name: "vscode", path: "./assets/5.jpeg"},
    {name: "c lang", path: "./assets/6.png"},
    {name: "python", path: "./assets/7.webp"},
    {name: "github", path: "./assets/8.webp"},
    {name: "neofetch", path: "./assets/9.png"},
    {name: ".bashrc", path: "./assets/10.jpg"},
    {name: "arch linux", path: "./assets/11.png"},
    {name: "xss", path: "./assets/12.png"},
]

function main() {
    const main = document.createElement('div')
    main.classList.add("grid-container")
    document.body.append(main)

    for (let i = 0; i < images.length; i++){
        const child = document.createElement("div")
        if (!child) {
            console.log("Failed to create child element")
            continue
        }
        child.classList.add('container')

        const image = document.createElement('img')
        const text = document.createElement('p')

        image.src = images[i].path
        image.alt = images[i].name
        text.innerText = images[i].name


        child.appendChild(image)
        child.appendChild(text)
        
        main.appendChild(child)
    }
}

main()