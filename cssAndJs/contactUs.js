function formSubmitClick()
{
    console.log("submited");

    var _phoneNumber = document.getElementById("phoneNumber").value;
    _phoneNumber += "@gmail.com";
    document.getElementById("phoneNumber").value = _phoneNumber;
}