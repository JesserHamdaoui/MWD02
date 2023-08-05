var nameEl = document.getElementById("name")
var cinEl = document.getElementById("cin")
var emailEl = document.getElementById("email")
var passwordEl = document.getElementById("password")
var reponse1El = document.getElementById("etudiant")
var reponse2El = document.getElementById("homme-daffaire")
var reponse3El = document.getElementById("employee")
var niveauSelct = document.getElementById("niveau")

var regex = /^[a-zA-Z ]*$/

function tester() {
    if(!nameEl.value || !cinEl.value || !emailEl.value || !passwordEl.value) {
        alert("il faut que vous entrez le nom, cin, email et le mot de passe")
    } else if(cinEl.value.length !== 8 || isNaN(cinEl.value)) {
        alert("il faut que le cin composé de 8 chiffres")
    } else if(cinEl.value.substring(0, 1) === '4' || cinEl.value.substring(0, 1) === '5' || cinEl.value.substring(0, 1) === '6' || cinEl.value.substring(0, 1) === '3'){
        alert("le cin ne peut pas etre comancer avec ce charctère")
    } else if(!regex.test(nameEl.value)){
        alert("le nom doit etre composé de alphabéts et d'espace")
    } else if(!regex.test(passwordEl.value.substring(0,4)) || isNaN(passwordEl.value.substring(4))){
        alert("le mot de passe doit être constitué de 4 lettres suivit de 4 chiffres")
    } else if(!reponse1El.checked && !reponse2El.checked && !reponse3El.checked){
        alert("Il doit choisir au minimum une occupation")
    } else if(niveauSelct.value === ""){
        alert("Il doit sélectionner un niveau")
    }else{
        window.open('../index.html')
    }
}