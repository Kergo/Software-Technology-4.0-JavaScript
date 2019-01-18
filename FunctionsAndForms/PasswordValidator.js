function passwordValidator(password) {

    let validLength = true;
    let validContent = true;
    let twoDigits = true;
    
    if (!lengthChecker(password)) {
        console.log("Password must be between 6 and 10 characters");
        validLength = false;
    }
    if (!contentChecker(password)) {
        console.log('Password must consist only of letters and digits');
        validContent = false;                    
    }
    if (digitLengthChecker(password)) {
        console.log('Password must have at least 2 digits');                 
        twoDigits = false;        
    }
    if (validLength && validContent && twoDigits) {
        console.log('Password is valid');
        
    }

    function lengthChecker(password) {
        return password.length >= 6 && password.length <= 10;
    }

    function contentChecker(password) { 
        let isValid = true;     
        let regEx = /[\W_]/g;     
        if (regEx.test(password)) {
            isValid = false;
        }
        return isValid;
    }

    function digitLengthChecker(password) {
        let regEx = /[0-9]/g;
        return password.match(regEx) < 2
    }
}
passwordValidator('222asn');