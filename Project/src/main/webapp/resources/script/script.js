
$(function () {

    $("#btnRegister").click(register);

    function register() {
        var user = {};
        user.userName = $("#username").val();
        user.password = $("#password").val();
        user.fullName = $("#fullname").val();
        user.email = $("#email").val();
        user.phone = $("#phone").val();
        user.address = $("#address").val();

        $.post("", {"userNew": JSON.stringify(user)})
            .done(function (data) {
                var resp = JSON.parse(data);
                if (resp.userName === "") {
                    $("#alertBody").html("This username is exists.")
                    $("#myModal").modal("show");
                    $("#password").val("");
                } else {
                    $(location).attr("href", "/profile");
                }
            })
    }

    $('.addToCart').click(function () {
        var url = $(this).attr('href');
        $.post(url).done(function (response) {
            $("#num-of-items").text(response);
            $("#alertBody").html("Product was added successfully! Please check the cart for details.")
            $("#myModal").modal("show");
        }).fail(function () {
            $("#alertBody").html("Error! Please contact Administrator.")
            $("#myModal").modal("show");

        });

        return false;
    });

    $('#btnContinueShopping').click(function () {
        $(location).attr("href", "/");
    });





    $('#btnRemove, #btnUpdate').click(function () {

        let action = $(this).val();
        let productIds = "";
        let product = {};
        let data = {"product": product};
        $('input[type=checkbox]').each(function () {
            if (this.checked) {
                let productId = $(this).val();
                productIds += productId + ",";
                product[""+productId] = $("#quantity_"+productId).val();

            }
        });
        let url = "shopping-cart?ids=" + productIds + "&action=" + action;

        if(productIds !== "") {
            $.ajax({
                url: url,
                type: 'put',
                async: false,
                data: JSON.stringify(product),
                success: reloadPage,
                contentType: 'json'
            });
        }
    });
    function reloadPage(){
        location.reload();
    }

    $("#btnCheckout").click(()=>{
        console.log("checkout click");
        if ($(".item").length > 0) {
            $(location).attr("href", "checkout");
            $("#num-of-items").text(0);
        } else {
            $("#alertBody").html("Please add item in your cart before doing checkout.")
            $("#myModal").modal("show");
        }
    });

    // $('.btn-remove-cart').click(function () {
    //
    //     let action = 'remove'
    //     let productIds = $(this).val();
    //
    //     let url = "shopping-cart?ids=" + productIds + "&action=" + action;
    //
    //     if(productIds !== "") {
    //         $.ajax({
    //             url: url,
    //             type: 'put',
    //             async: false,
    //             // data: JSON.stringify(product),
    //             success: reloadPage,
    //             contentType: 'json'
    //         });
    //     }
    // });


    var success = false;
    $(".payment-form").submit( (e) => {
        console.log(e);
    e.preventDefault();
    var order = {};
    order.fullName = $("#fullName").val();
    order.shippingAddress = $("#address").val();
    order.paymentMethod = $("[name='payment']:checked").val();
    order.comment = $("#comment").val();

    console.log("order", order);

    $.post("checkout", {
        order: JSON.stringify(order)
    }).done(orderSuccess).fail(error);
});

    function orderSuccess(data) {
        if (data == "success") {
            success = true;
            $("#myModal").modal("show");
        } else {
            success = false;
            $("#alertBody").html("There are some errors from our system. Please try again.")
            $("#myModal").modal("show");
        }
        console.log(data);
    }

    function error(err) {
        console.log(err);
        success = false;
    }

    $('#myModal').on('hidden.bs.modal', function (e) {
        console.log("Hide");
        if(success) {
            $(location).attr("href", "/");
        }
    });

})