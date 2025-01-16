         // let password = document.getElementById("input-field");
        // let eyeicon = document.getElementById("eyeicon");

        // eyeicon.onclick = function(){
        //     if(password.type == "password"){
        //         password.type = "text";
        //         eyeicon.src= 'assets/eye-open.png';
        //         eyeicon.style.color = 'red'
        //     }else {
        //         password.type = "password";
        //         eyeicon.src= 'assets/eye-hide.png'

        //     }
        // }

        let password = document.getElementById('input-field');
        let eyeicon = document.getElementById('eyeicon');

        eyeicon.onclick = function(){
            if(password.type == 'password'){
                password.type = 'text';
                eyeicon.src = 'eye-open.png';
            }else{
                password.type = 'password';
                eyeicon.src= 'eye-hide.png'
            }
        }
