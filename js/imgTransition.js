export function imageTransition(className){
    let honours_image = document.getElementsByClassName(className);
    let top = 1;
    let length = honours_image.length;
    let current = length - 1;

    for (let i = 0; i < length; ++i) {
        honours_image[i].style.opacity = 1;
    }

    setInterval(async function changeImage(){
        
        let nextImage = (1 + current) % length;
  
        honours_image[current].style.zIndex = top + 1;
        honours_image[nextImage].style.zIndex = top;

        await transition();

        honours_image[current].style.zIndex = top;
        honours_image[nextImage].style.zIndex = top + 1;
        top++;
        
        honours_image[current].style.opacity = 1;       
        current = nextImage;
    }, 2000);
  
    function transition(){
        return new Promise((resolve) =>{
            let del = 0.05;
            let id = setInterval(function changeOpacity(){
                honours_image[current].style.opacity -= del;
                if (honours_image[current].style.opacity <= 0) {
                    clearInterval(id);
                    resolve();
                }
            }, 0);
        })
    }
}

