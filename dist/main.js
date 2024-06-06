/*gsap.from('.welcome',{duration: 2.5,delay: 2, y: '-200%', ease: 'back.out'})
gsap.from('.start',{duration: 2.5,delay: 2.5, x: '-2000%', ease: 'sine.out'})
gsap.from('.fiverr',{duration: 2.5,delay: 3, y: '3000%', ease: 'sine.out'})
gsap.from('.git',{duration: 2.5,delay: 3.4, x: '2000%', ease: 'sine.out'})
gsap.from('.yt',{duration: 2.5,delay: 3.6, x: '-3000%', ease: 'sine.out'})*/

const timeline = gsap.timeline()
timeline
    .from('.welcome',{duration: 1,delay: 2, y: '-200%', ease: 'back.out'})
    .from('.start',{duration: .5, x: '-2000%', ease: 'sine.out'})
    .from('.fiverr',{duration: .5, y: '3000%', ease: 'sine.out'})
    .from('.git',{duration: .5, x: '2000%', ease: 'sine.out'})
    .from('.yt',{duration: .5, x: '-3000%', ease: 'sine.out'})

const button = document.querySelector('.start')

button.addEventListener('click', () =>{
    timeline.timeScale(3)
    timeline.reverse()
})

document.addEventListener('DOMContentLoaded', function() {
    const image = document.getElementById('fiverr');

    image.addEventListener('mouseenter', () => {
        gsap.to(image, { scale: 1.2, duration: 0.5, ease: "power2.out" });
    });

    image.addEventListener('mouseleave', () => {
        gsap.to(image, { scale: 1, duration: 0.5, ease: "power2.out" });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const image = document.getElementById('git');

    image.addEventListener('mouseenter', () => {
        gsap.to(image, { scale: 1.2, duration: 0.5, ease: "power2.out" });
    });

    image.addEventListener('mouseleave', () => {
        gsap.to(image, { scale: 1, duration: 0.5, ease: "power2.out" });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const image = document.getElementById('youtube');

    image.addEventListener('mouseenter', () => {
        gsap.to(image, { scale: 1.2, duration: 0.5, ease: "power2.out" });
    });

    image.addEventListener('mouseleave', () => {
        gsap.to(image, { scale: 1, duration: 0.5, ease: "power2.out" });
    });
});