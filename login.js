function entrar() {
    let senha = document.getElementById('senha').value;

    if( senha == 'SENHA') {
        window.location.href = "atletas.html";
    } else {
        alert('Credencial inválida. Tente novamente.')
    }
}
