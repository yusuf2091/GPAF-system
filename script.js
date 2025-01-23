document.getElementById('mobile-menu-btn').addEventListener('click', function(event) {
    var mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
    event.stopPropagation(); // Prevent click from propagating to the document
  });
  
  document.addEventListener('click', function(event) {
    var mobileMenu = document.getElementById('mobile-menu');
    var navbar = document.querySelector('header'); // Target the entire header
    if (!navbar.contains(event.target) && !mobileMenu.classList.contains('hidden')) {
      mobileMenu.classList.add('hidden');
    }
  });
  
  function openModal(type) {
    const modalContent = document.getElementById('modal-content');
    if (type === 'login') {
        modalContent.innerHTML = `
            <div class="z-50 " id="login">
            <h1 class='text-2xl font-mono mb-8 text-center'>LOGIN</h1>
            <form class='space-y-6'>
                <div>
                    <label class='block text-lg'>Email Address</label>
                    <input type='email' class='w-full p-3 bg-transparent border-2 border-yellow-500 rounded-xl'>
                </div>
                <div>
                    <label class='block text-lg'>Password</label>
                    <input type='password' class='w-full p-3 bg-transparent border-2 border-yellow-500 rounded-xl'>
                </div>
                <button class='w-full py-3 bg-yellow-500 rounded-xl'>Login</button>
            </form>
            <p class="mt-6 text-white text-center">
                 Don't have an account? 
                 <a href="javascript:void(0)" onclick="openModal('register')" class="text-yellow-500">Register here</a>
            </p>

            </div>
        `;
    } else {
        modalContent.innerHTML = `
            <div class="z-50 relative " id="register">
            <h1 class='text-2xl font-bold font-mono mb-8 text-center'>REGISTER</h1>
            <form class='space-y-6'>
                <div>
                    <label class='block text-lg'>Full Name</label>
                    <input type='text' class='w-full p-3 bg-transparent border-2 border-yellow-500 rounded-xl'>
                </div>
                <div>
                    <label class='block text-lg'>Email Address</label>
                    <input type='email' class='w-full p-3 bg-transparent border-2 border-yellow-500 rounded-xl'>
                </div>
                <div>
                    <label class='block text-lg'>Password</label>
                    <input type='password' class='w-full p-3 bg-transparent border-2 border-yellow-500 rounded-xl'>
                </div>
                <button class='w-full py-3 bg-yellow-500 rounded-xl'>Register</button>
            </form>
            <p class="mt-6 text-white text-center">
              Already have an account? 
              <a href="javascript:void(0)" onclick="openModal('login')" class="text-yellow-500">Login here</a>
             </p>
        
            </div>
        `;
    }
    document.getElementById('modal').classList.remove('hidden');
}

function closeModal() {
    document.getElementById('modal').classList.add('hidden');
}

