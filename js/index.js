let hamburgerBuka = false;

function openNav(){
    let hamburgerBukaBos = document.getElementById("hamburger-muncull");
    
    if(hamburgerBuka){
        hamburgerBukaBos.style.display = 'none';
        hamburgerBuka = false;
    }else{
        hamburgerBukaBos.style.display = 'flex';
        hamburgerBuka = true;
    }
}