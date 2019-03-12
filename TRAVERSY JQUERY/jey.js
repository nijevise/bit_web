$(document).ready(function () {
    // console.log('Hello World')
    // $('li:first').addClass('border')
    // $('li').addClass('textUp');
    // $('a:last').addClass('active');

    // var arrLinks = ['images/5.jpg', 'images/2.jpg', 'images/3.jpg', 'images/4.jpg'];
    // for (var i = 0; i < arrLinks.length; i++) {
    //     var imag = $("<img>")
    //     $('body').append(imag);
    // }

    // var arrLinks = ['images/5.jpg', 'images/2.jpg', 'images/3.jpg', 'images/4.jpg'];
    // $('body').prepend('<div>');
    // var gallery = $('div')
    // gallery.addClass('gallery')
    // var h1 = 'Amazing Gallery'
    // h1.toUpperCase();
    // gallery.before(h1)
    // gallery.append('<img>');
    // gallery.append('<img>');
    // gallery.append('<img>');
    // gallery.append('<img>');

    // $('img').each(function (index, element) {
    //     $(element).attr('src', arrLinks[index]);
    //     $(element).width((Math.random() * 300) + 100 + 'px');
    //     if ($(element).width() < 200) {
    //         $(element).css('border', '4px solid green');
    //         return false
    //     }
    // })

    //     $('body').append('<div>')
    //     $('body').append('<button>')
    //     $('button').css({
    //         'padding': '10px 20px',
    //     })
    //     $('button').text('stop')
    //     $('div').css({
    //         'background-image': 'url("field.png")',
    //         'background-size': 'contain',
    //         'height': '100vh',
    //         'width': '78%'
    //     })
    //     $('div').append('<img>')
    //     $('img').attr('src', 'player.png').width('200px')
    //     var game = $('div').on('click', function (event) {
    //         $('img').css({
    //             'position': 'absolute',
    //             'top': '' + event.pageY + 'px',
    //             'left': '' + event.pageX + 'px',
    //         })
    //     })
    //     $('button').on('click', function (event) {
    //         game.off();
    //     })

    var arrLinks = ['images/5.jpg', 'images/2.jpg', 'images/3.jpg', 'images/4.jpg', 'images/5.jpg', 'images/6.jpg'];

    $('body').prepend('<div>');
    $('body').prepend('<div>');
    var galleryOne = $('div:first').addClass('gallery1');
    var galleryTwo = $('div:last').addClass('gallery2');

    galleryOne.before('<p>Gallery 1</p>');
    galleryOne.append('<img>');
    galleryOne.append('<img>');
    galleryOne.append('<img>');
    galleryTwo.before('<p>Gallery 1</p>')
    galleryTwo.append('<img>');
    galleryTwo.append('<img>');
    galleryTwo.append('<img>');

    $('img').each(function (index, element) {
        $(element).attr('src', arrLinks[index]);
        $(element).width('30%');
        $(element).height('300px');
        $(element).css('margin', '10px');
        if (index === 0) {
            $(element).addClass('selected');
        }
    })


    function removeClass() {
        $('.gallery1 img').removeClass('selected')
        $('.gallery2 img:odd').addClass('selected')
    }

    removeClass()

    $('.selected').css('border', '4px solid red');
});

