document.addEventListener('DOMContentLoaded', function() {
   
    const form = document.getElementById('commentForm');
    if(form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const comment = document.getElementById('comment').value;
            

            console.log({name, email, comment});
            
            form.reset();
            document.getElementById('thankYouMessage').style.display = 'block';
        });
    }
    
});