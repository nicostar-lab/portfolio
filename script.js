const ratio = 0.5
const options = {
  root: null,
  rootMargin: "0px",
  threshold: ratio,
};
function callback(entries,observer){
    entries.forEach(entry => {
        if(entry.intersectionRatio > ratio){
            entry.target.classList.add('reveal-visible')
            
        }
        
    });
}

const observer = new IntersectionObserver(callback, options);
document.querySelectorAll('.reveal').forEach(function(r){
    observer.observe(r);
})