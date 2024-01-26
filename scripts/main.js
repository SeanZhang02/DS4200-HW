document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.querySelector('button');
    
    button.addEventListener('click', () => {
        const newImage = document.createElement('img');
        newImage.setAttribute('src', 'images/tawa2.png'); 
        newImage.setAttribute('alt', 'A new image');
        newImage.style.cursor = 'pointer'; 
        
        document.body.appendChild(newImage);

        newImage.addEventListener('click', () => {
            const hiddenText = document.createElement('p');
            hiddenText.textContent = 'Welcome to join us!';
            
            newImage.after(hiddenText);

            newImage.removeEventListener('click', this);
        });

        button.style.display = 'none'; 
    });
});
