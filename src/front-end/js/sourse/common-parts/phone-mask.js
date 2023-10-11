var longPhone = 16;
$(".phone-mask").on("keydown", function (e) {

    // if (!parseInt(e.originalEvent.key)) {
    //     if (e.originalEvent.key != "Backspace") {
    //         e.preventDefault();
    //     }
    // }
    if ($(this).val().length < longPhone) {
        longPhone = 16;
        $(".phone-mask").mask("+7(999)999-99-999", {
            placeholder: " + 7(   )   -  -  "
        });
    } else {
        longPhone = 11;
        $(this).unmask();
        $(".phone-mask").mask("999999999999999999");
    }
});