   

   //Т А Б Ы //


   $(document).ready(function(){
    $('#wrapper a').click(function(e) {
    	e.preventDefault();
        var click_id=$(this).attr('id');//находим айди ссылки на которую кликнули//
        if (click_id != $('#wrapper a.active').attr('id') ) {//если кликнутая ссылка не является первой(которая актив по умолчанию) то находим ее айди//
            $('#wrapper a').removeClass('active');//всем ссылкам отменяем класс актив//
            $(this).addClass('active');//кликнутой ссылке добавляем класс актив//
            $('#wrapper div').removeClass('active');//у всех дивов удаляем класс актив//
            $('#con_' + click_id).addClass('active');//нужному дивудобавляем класс актив//
            $('#wrapper span').removeClass('banner-minus-active');//у удаляем класс актив//
            $('.span__' + click_id).addClass('banner-minus-active');//нужному дивудобавляем класс актив//
        }
    })
});



   	//O U R   S E R V I C E//


   $(document).ready(function(){
    $('.our-services-list a').click(function(e) {
    	e.preventDefault();
        var click_link_id=$(this).attr('id');//находим айди ссылки на которую кликнули//
        if (click_link_id != $('.our-services-list a.active-link-our-service').attr('id') ) {//если кликнутая ссылка не является первой(которая актив по умолчанию) то находим ее айди//
            $('.our-services-list a').removeClass('active-link-our-service');//всем ссылкам отменяем класс актив//
            $(this).addClass('active-link-our-service');//кликнутой ссылке добавляем класс актив//
            $('.our-services div').removeClass('active-box-our-service');//у всех дивов удаляем класс актив//
            $('#hover_' + click_link_id).addClass('active-box-our-service');//нужному диву добавляем класс актив//
        }
    })
});







		