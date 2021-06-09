window.onload = function(){ 
    const first = document.getElementById("name0")
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const btn = document.querySelector("button");
    btn.addEventListener("click",()=>{
        const firstv = first.value.trim();
        const namev = name.value.trim();
        const emailv = email.value.trim();
        const passwordv = password.value.trim();
        
        if (firstv === ""){
            setError(first,'*required field');
        }
        if (namev ===""){
            setError(name,'*required field');
        }
        if (emailv ===""){
            setError(email,'*required field');
        }else if(!(isEmail(emailv))){
            setError(email,'*not valid format');
        }
        if (passwordv === ""){
            setError(password,'*required field');
        }
        
    });
    function setError(input, message){
        const form = input.parentElement.parentElement;

        const small = form.querySelector('small');
        small.innerHTML = message;
        form.className = "form error";
    };
    function isEmail(email){
        var filter = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
        return String(email).search (filter) != -1;
    }


}