function submitData(){
    
    let name = document.getElementById('input-name').value;
    let email = document.getElementById('input-email').value;
    let phone = document.getElementById('input-phone').value;
    let subject = document.getElementById('input-subject').value;
    let message = document.getElementById('input-message').value;

    let skillHtml =  document.getElementById('html').checked;
    let skillCss =  document.getElementById('css').checked;
    let skillJavascript =  document.getElementById('javascript').checked;
    
    if (skillHtml) {
        skillHtml = (document.getElementById('html').value);
        
    } else {
        skillHtml = "";
    } 
    
    if (skillCss) {
        skillCss = (document.getElementById('css').value);
    } else {
        skillCss = "";
    }

    if (skillJavascript) {
        skillJavascript = (document.getElementById('javascript').value);
    } else {
        skillJavascript = "";
    }

    

    if (name == ''){
        return alert("Name require to fill!");
    } else if (email == '') {
        return alert("Email require to fill!");
    } else if (phone == '') {
        return alert("Phone require to fill!");
    } else if (subject == '') {
        return alert("Subject require to fill!");
    } else if (message == '') {
        return alert("Message require to fill!");
    } 

    let emailReceiver = 'ardi.prasetia19@mail.com';

    let a = document.createElement('a');

    a.href = `mailto: ${emailReceiver}?subject=${subject}&body=Hallo my name is ${name} ${message}, contact me to ${phone} and send CV to ${email}, requirment skill ${skillHtml} ${skillCss} ${skillJavascript} `;
    a.click();



    

    

}