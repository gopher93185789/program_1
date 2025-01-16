function main (){
    window.onload = function() {
        const canvas = document.createElement("canvas")
        canvas.setAttribute("width", 2000)
        const slice = canvas.getContext("2d")
        slice.fillStyle = 'rgb(0,255,0)'
        slice.beginPath()
        let sig = 10
        let sig2 = 100

        for(let i = 0; i < 10; i++){
            slice.arc(sig2, 75 , sig, 0, 2 * Math.PI)
            sig+=5
            sig2+=110    
        }

       
        slice.fill()
        document.body.appendChild(canvas)
    }
}
main()
