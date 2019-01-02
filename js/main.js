/* checking form data for varification for more robust form*/

function check() {
    var name = $("#name").val();
    var email = $("#email").val();
    var phone = $("#phone").val();
    var reason = $("#sel1").val();
    var info = $("#info").val();
    var radioValue = $("input[name='optradio']:checked").val();

    if (isNaN(phone)) { alert("invalid phone number"); }

    var selectedday = "";
    var n = jQuery(".checkboxClass:checked").length;
    if (n > 0) {
        jQuery(".checkboxClass:checked").each(function () {
            selectedday+=$(this).val()+"  ";
        });
    }
    //validating form data
    var text="Name: "+name+"\nEmail: "+email+"\nPhone: "+phone+"\nReason for Inquiry: "+reason+"\nAdditional Information: "+info+"\nHave you been to the restaurant?: "+radioValue+"\nBest days to contact you: "+selectedday;
    alert(text);

    return false;
}
