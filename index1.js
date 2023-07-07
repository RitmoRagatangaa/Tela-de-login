        let login = "Senac"
        let password = "123A";
        let attempts = 3;
        
        const log=document.querySelector(".login")
        const pass=document.querySelector(".pass")
        const btn=document.querySelector(".btn")
        const corpo=document.querySelector("#corpo")

        btn.addEventListener('click', enviar)

        function enviar() {
        
            if(log.value == login && pass.value == password) {

                location.href="https://www.youtube.com/"
                alert("Senha correta")
                
            }

            else {
                alert("teste")
                attempts--
                alert("Login ou senha incorretos! " + attempts + " tentativa(s) restante(s).")
                if(attempts < 1) {
                    location.href="https://www.youtube.com/"
                    alert("Senha incorreta")
                }

            }
        }