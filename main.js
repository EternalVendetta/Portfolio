// Pick up the DOM ELEMENTS
const button = document.querySelector('.button');
const presentation = document.querySelector('.presentation')
const footer = document.querySelector('footer')

// Add an onClick Event
button.addEventListener('click', (e) => {
    // Remove the default behaviour
    e.preventDefault()
    // Remove the class "hidden" in the DOM
    presentation.classList.remove('hidden');
    footer.classList.remove('hidden');
    // Nextly add class "display" which is an Animation itself
    presentation.classList.add('display')
    // Lastly Scroll the page towards the Bottom
    window.scrollBy(0, 1024)
})

