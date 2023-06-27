 // It is use in portfolio files.
 // One of the node js because it is a js code that use in backend use in web developer 
 // This is Node Js code in portfolio file to work in backend in website page.
const links = document.querySelectorAll('.link');   
const sections = document.querySelectorAll('section');

let activeLink = 0; // link is not active

links.forEach((link, i) =>{
    link.addEventListener('click',  () => {
        if(activeLink != i){
          links[activeLink].classList.remove('active'); 
          link.classList.add('active');                    // All link are active.
          sections[activeLink].classList.remove('active');
          
          setTimeout(() => {
            activeLink = i;
            sections[i].classList.add('active'); // time to take home to about.
         }, 100);
        }
    })
})
// This use in work in portfolio link = home , section = home tag 