document.getElementById("showSignupForm").addEventListener('click', function showSignupForm() {
    document.getElementById('signupContainer').style.display = 'block';
    document.getElementById('loginContainer').style.display = 'none';
  })

  
  document.getElementById("showLoginForm").addEventListener('click',  function showLoginForm() {
    document.getElementById('signupContainer').style.display = 'none';
    document.getElementById('loginContainer').style.display = 'block';
  })
 
  document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('signupConfirmPassword').value;
  
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
  
    const user = { name, email, password };
    localStorage.setItem('user', JSON.stringify(user));
    alert('Signup successful!');
    
    function showLoginForm() {
      document.getElementById('signupContainer').style.display = 'none';
      document.getElementById('loginContainer').style.display = 'block';
    }
    showLoginForm();
  });
  
  document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
  
    const storedUser = JSON.parse(localStorage.getItem('user'));
  
    if (storedUser && storedUser.email === email && storedUser.password === password) {
      alert('Login successful!');
      localStorage.setItem('loggedInUser', JSON.stringify(storedUser));
      window.location.href = '../Quiz_App_Home/welcome.html';
    } else {
      alert('Invalid email or password!');
    }
  });