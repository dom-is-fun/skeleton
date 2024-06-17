const imagePlace = document.querySelector('.loadingImage')
const loadingParam = document.querySelector('.loadingParam')


function addclass() {
    const image = document.querySelector('.image')
    const imgAdd = document.createElement("img");
    const param = document.querySelector('.param')
    const title = param.querySelector('h2')
    const infor = param.querySelector('p')
    const btn = param.querySelector('button')
    imgAdd.src = "./assets/photo-1637420425895-97a239041d53.avif";
    image.appendChild(imgAdd)
    title.textContent = "QProject"
    infor.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut soluta qui repudiandae, maxime optio voluptatem eius eveniet officiis'
    btn.textContent = 'Read More'
}


function endAnimate() {
    imagePlace.className = 'image'
    loadingParam.className = 'param'
    setTimeout(() => {
        addclass()
    }, 1);
}

setTimeout(() => {
    endAnimate()
}, 4210);