var __appState__ = {
    "is_restaurant":false
};

var registerListenerForRegisterTab = function() {
    $("#register_tab").on("click", function() {
        $(this).addClass("active").removeClass("inactive");
        $("#login_tab").addClass("inactive").removeClass("active");
        $("#password").parent().parent().addClass("col-md-6").removeClass("col-md-12")
        $("#password_confirmation").parent().parent().show();
        $("#register_user_name").show();
        $("#register_btn_container").show();
        $("#login_btn_container").hide();
    });
};

var registerListenerForLoginTab = function() {
    $("#login_tab").on("click", function() {
        $(this).addClass("active").removeClass("inactive");
        $("#register_tab").addClass("inactive").removeClass("active");
        $("#password_confirmation").parent().parent().hide();
        $("#password").parent().parent().addClass("col-md-12").removeClass("col-md-6");
        $("#register_user_name").hide();
        $("#register_btn_container").hide();
        $("#login_btn_container").show();
    });
};

var registerListenerForUsertypeSelection = function() {
    $("#restaurant_user_type").on("click", function(){
        __appState__["is_restaurant"] = true;
        $("#user_type_selection_route").hide();
        $("#authentication_route").show();
    });

    $("#agent_user_type").on("click", function(){
        __appState__["is_restaurant"] = false;
        $("#user_type_selection_route").hide();
        $("#authentication_route").show();
    });
};

$(document).ready(function() {
    $("#authentication_route").hide();
    $("#login_btn_container").hide();
    registerListenerForLoginTab();
    registerListenerForRegisterTab();
    registerListenerForUsertypeSelection();
});
