$("#signInButton").click(function(){
    $("#signInModal").modal("show")
})

$("#registerButton").click(function(){
    $("#registerModal").modal("show")
})

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})


$(function(){
    $("#SignInButton").click(function(){
        if(document.getElementById("loginEmail").value=="thanh@yahoo.com" && document.getElementById("loginPassword").value==123)
        {window.open("user.html","_self")}
    })
})

