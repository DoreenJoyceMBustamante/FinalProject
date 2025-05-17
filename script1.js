if (document.querySelector('form')) {
    const form = document.querySelector('form');
    form.addEventListener('submit', function (e) {
        e.preventDefault();
    
        const firstName = document.getElementById('firstName').value.trim();
        const lastName = document.getElementById('lastName').value.trim();
        const email = document.getElementById('email').value.trim();
        const sex = document.querySelector('input[name="sex"]:checked')?.value;
        const whySupport = document.getElementById('whySupport').value.trim();
    
        const requiredFields = [
            { value: firstName, id: 'firstNameError' },
            { value: lastName, id: 'lastNameError' },
            { value: email, id: 'emailError' },
            { value: sex, id: 'sexError' },
            { value: whySupport, id: 'whySupportError' }
        ];
    
        let hasError = false;
        requiredFields.forEach(field => {
            const errorEl = document.getElementById(field.id);
            if (!field.value) {
            errorEl.textContent = 'Required';
            hasError = true;
            } else {
            errorEl.textContent = '';
            }
        });
    
        if (!hasError) {
            localStorage.setItem('userProfile', JSON.stringify({
            firstName,
            lastName,
            email,
            sex,
            whySupport
            }));
            window.location.href = 'profile.html';
        }
    });
}

if (document.getElementById('profileFirstName')) {
    const profileData = JSON.parse(localStorage.getItem('userProfile'));
  
    if (profileData) {
        document.getElementById('profileFirstName').textContent = profileData.firstName;
        document.getElementById('profileLastName').textContent = profileData.lastName;
        document.getElementById('profileEmail').textContent = profileData.email;
        document.getElementById('profileSex').textContent = profileData.sex;
        document.getElementById('profileWhy').textContent = profileData.whySupport;
    } else {
        const container = document.querySelector('.profile-info');
        container.innerHTML = `<p> No profile found yet. Please <a href="signup.html">sign up here</a>.</p>`;
    }
}
    