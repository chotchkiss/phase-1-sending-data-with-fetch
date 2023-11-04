// Add your code here
function submitData(name, email){
    const user = {
        name,
        email
    }
    fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(user)
    }).then(response => response.json())
    .then(result => {
        const newUserId = result.id
        console.log(newUserId);
        document.querySelector('body').innerText = newUserId
    }).catch(error => console.log(error))
}
submitData("Darbi", "darbi@darbi.com")