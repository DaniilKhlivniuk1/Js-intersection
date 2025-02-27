
const manyImages = document.querySelectorAll(".image-photo");

const options = {};


const showImage = (entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {

            const img = entry.target;
            img.src = img.dataset.src; 

            img.classList.add("visible"); 
            observer.unobserve(img); 
        }
        
    });
};

const observer = new IntersectionObserver(showImage, options);

manyImages.forEach((photo) => observer.observe(photo));