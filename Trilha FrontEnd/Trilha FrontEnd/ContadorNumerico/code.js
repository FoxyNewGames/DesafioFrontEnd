const contNumerico = document.querySelectorAll('.cont')

contNumerico.forEach(cont => {
    cont.innerText = '0'

    const sobeContNumerico = () => {
        const AB = +cont.getAttribute('data-target')
        const c = +cont.innerText

        const incremento = AB / 200

        if(c < AB) {
            cont.innerText = `${Math.ceil(c + incremento)}`
            setTimeout(sobeContNumerico, 1)
        } else {
            cont.innerText = AB
        }
    }

    sobeContNumerico()
    
})