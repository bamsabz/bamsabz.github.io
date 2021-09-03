function submitFormClick()
{
    console.log("submited");

    var _phoneNumber = document.getElementById("phoneNumber").value;
    console.log(_phoneNumber);
    _phoneNumber += "@gmail.com";
    document.getElementById("phoneNumber").value = _phoneNumber;
}