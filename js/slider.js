const images = [
  "./img/placeholder1.jpg",
  "./img/placeholder2.jpg",
  "./img/placeholder3.jpg",
  "./img/placeholder4.jpg"
];

const timeout = ms => new Promise(res => setTimeout(res, ms));

const changeImg = async () => {
  for (let i = 0; i < images.length; i++) {
    const slider = document.getElementById('slider');
    slider.src = images[i];
    for (let j = 0; j < 1; j += 0.01) {
      await timeout(10);
      slider.style.opacity = j;
      
    }
  
    await timeout(3000);
    for (let j = 1; j > 0; j -= 0.01) {
      await timeout(10);
      slider.style.opacity = j;
      
    }
    if ( i == images.length - 1) {
      i = 0;
    }
  }
};

changeImg();
                