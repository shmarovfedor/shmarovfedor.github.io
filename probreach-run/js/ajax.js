    //function for displaying shopping cart using ajax
    function displayShoppingCart()
     {

        $.ajax({
            type: "GET",
            url: "/kohana/ajax/displayShoppingCart",
            dataType: "json",
            success: function(data)
            {
                var cart = $('#shoppingCart'),
                    cartHTML = [];
                for (entry in data.cart)
                {
                    cartHTML.push('<tr>');
                    cartHTML.push('<th><span class="badge badge-info">' + entry + '</span></th>');
                    cartHTML.push('<th>' + data.cart[entry]['name'] + '</th>');
                    cartHTML.push('<th>' + data.cart[entry]['quantity'] + '</th>');
                    cartHTML.push('<th>' + data.cart[entry]['total'] + '</th>');
                    cartHTML.push('<th><a class = "btn btn-primary addToCart" itemId = "' + entry + '">+</a></th>');
                    cartHTML.push('<th><a class = "btn subtractFromCart" itemId = "' + entry + '">-</a></th>');
                    cartHTML.push('<th><a class = "btn btn-danger removeFromCart" itemId = "' + entry + '">x</a></th>');
                    cartHTML.push('</tr>');
                }
                
                cart.html(cartHTML.join(''));
            }
        });
     }

    //adding item to the shopping cart using ajax
    function addToCart()
     {
        
        var id = $(this).attr("itemId");

        $.ajax({
            type: "POST",
            data: "id=" + id,
            url: "/kohana/ajax/addToCart",
            dataType: "json",
            success: function(data)
            {
                displayShoppingCart();
            }
        });
     }

    //reducing amount of items from the shopping cart using ajax
     function subtractFromCart()
     {
        
        var id = $(this).attr("itemId");

        $.ajax({
            type: "POST",
            data: "id=" + id,
            url: "/kohana/ajax/subtractFromCart",
            dataType: "json",
            success: function(data)
            {
                displayShoppingCart();                
            }
        });
     }

    //removing item from the shopping cart using ajax
     function removeFromCart()
     {
        
        var id = $(this).attr("itemId");

        $.ajax({
            type: "POST",
            data: "id=" + id,
            url: "/kohana/ajax/removeFromCart",
            dataType: "json",
            success: function(data)
            {
                displayShoppingCart();
            }
        });
     }

     function getJSON()
     {
        var id = $(this).attr("itemId");

        $.ajax({
            type: "POST",
            data: "id=" + id,
            url: "/probreach/index.html",
            dataType: "json",
            success: function(data)
            {
                displayShoppingCart();
            }
        });
     }

     //performs actions when the DOM is fully loaded
     $(document).ready(function(){
          $(".addToCart").click(addToCart);
          $('#shoppingCart').on('click', '.addToCart', addToCart);
          $('#shoppingCart').on('click', '.subtractFromCart', subtractFromCart);
          $('#shoppingCart').on('click', '.removeFromCart', removeFromCart);
          $(".displayShoppingCart").click(displayShoppingCart);
     });