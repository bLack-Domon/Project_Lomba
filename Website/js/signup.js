document.addEventListener('DOMContentLoaded', function() {
    // Toggle password visibility
    const togglePassword = document.querySelector('.toggle-password');
    const passwordInput = document.getElementById('password');
    
    if (togglePassword && passwordInput) {
        togglePassword.addEventListener('click', function() {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            this.classList.toggle('fa-eye-slash');
        });
    }
    
    // Form validation
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(e) {
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirm-password').value;
            
            if (password !== confirmPassword) {
                e.preventDefault();
                alert('Passwords do not match!');
                document.getElementById('password').focus();
            }
        });
    }
});

   // Form validation
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(e) {
            // Add your validation logic here
            // Example: Check if fields are not empty
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            if (!username || !password) {
                e.preventDefault();
                alert('Please fill in all fields!');
            }
        });
    }
    
    // Remember me functionality
    const rememberCheckbox = document.getElementById('remember');
    if (rememberCheckbox) {
        // Check if there are saved credentials
        const savedUsername = localStorage.getItem('rememberedUsername');
        const savedPassword = localStorage.getItem('rememberedPassword');
        
        if (savedUsername && savedPassword) {
            document.getElementById('username').value = savedUsername;
            document.getElementById('password').value = savedPassword;
            rememberCheckbox.checked = true;
        }
        
        // Save credentials when form is submitted
        form.addEventListener('submit', function() {
            if (rememberCheckbox.checked) {
                localStorage.setItem('rememberedUsername', document.getElementById('username').value);
                localStorage.setItem('rememberedPassword', document.getElementById('password').value);
            } else {
                localStorage.removeItem('rememberedUsername');
                localStorage.removeItem('rememberedPassword');
            }
        });
    }

    function inputUserSignUp(){
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        localStorage.setItem("username", username)
        localStorage.setItem("email", email)
        localStorage.setItem("password", password)

        if(username, email, password){
            window.location.href='login.html'
        }
    }


    function inputUserLogIn(){
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        let savedUsername = localStorage.getItem('username');
        let savedPassword = localStorage.getItem('password');
        let savedEmail = localStorage.getItem('email');
        if(username == savedUsername || username == savedEmail && password == savedPassword){
            alert("anda berhasil login")
            window.location.href='Website-Ticket/index.html'
        }else{
            document.getElementById('output').textContent = "Username atau Password ada yang salah";
        }
    }