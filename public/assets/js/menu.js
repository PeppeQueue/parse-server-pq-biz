function Menu() {

}

Menu.init = function () {
    Parse.initialize(Config.PARSE_APP_ID);
    Parse.serverURL = Config.PARSE_SERVER_URL;
    var currentUser = Parse.User.current();

    var items = '';
    for (var i = 0; i < 2; i++) {
        var id = i;
        var name = "Menu" + i;
        items += '<li class="list-group-item"  data-containerID=' + id
            + ' data-id=' + id + ' data-role-id=' + id
            + ' data-name="' + name
            + '"><input type="checkbox" class="checkboxes">' + name
            + '</li>';
    }
    $('#menuList').empty();
    $('#menuList').append(items);
    
    var menuItems = '';
    for (var i = 0; i < 5; i++) {
        var id = i;
        var name = "MenuItem" + i;
        menuItems += '<li class="list-group-item"  data-containerID=' + id
            + ' data-id=' + id + ' data-role-id=' + id
            + ' data-name="' + name
            + '"><input type="checkbox" class="checkboxes">' + name
            + '</li>';
    }
    $('#menuItemList').empty();
    $('#menuItemList').append(menuItems);

    var menuItems2 = '';
    for (var i = 5; i < 10; i++) {
        var id = i;
        var name = "MenuItem" + i;
        menuItems2 += '<li class="list-group-item"  data-containerID=' + id
            + ' data-id=' + id + ' data-role-id=' + id
            + ' data-name="' + name
            + '"><input type="checkbox" class="checkboxes">' + name
            + '</li>';
    }
    $('#menuItemList2').empty();
    $('#menuItemList2').append(menuItems2);


    enableListItemClick();

    $('input').blur(function () {

        if ($(this).hasClass('create-menuName')) {
            if ($(this).val().length == '') {
                $(this).siblings('span.error').text('Please type menu name').fadeIn().parent('.form-group').addClass('hasError');
                
            } else {
                $(this).siblings('.error').text('').fadeOut().parent('.form-group').removeClass('hasError');
                
            }
        }

        if ($(this).hasClass('create-menuDes')) {
            if ($(this).val().length == '') {
                $(this).siblings('span.error').text('Please type description').fadeIn().parent('.form-group').addClass('hasError');
                
            } else {
                $(this).siblings('.error').text('').fadeOut().parent('.form-group').removeClass('hasError');
                
            }
        }

        if ($(this).hasClass('create-menuNote')) {
            if ($(this).val().length == '') {
                $(this).siblings('span.error').text('Please type note').fadeIn().parent('.form-group').addClass('hasError');
                
            } else {
                $(this).siblings('.error').text('').fadeOut().parent('.form-group').removeClass('hasError');
                
            }
        }
    });
}