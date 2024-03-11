const togglePassword = document.querySelector("#togglePassword");
        const password = document.querySelector("#password");

        togglePassword.addEventListener("click", function () {
            if (password.type == "password") {
                password.type = "text"
            }
            else if (password.type == "text") {
                password.type = "password"
            }
            // toggle the icon
            this.classList.toggle("bi-eye");
        });
