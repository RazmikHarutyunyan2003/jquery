let elementsToRemove = []

$('#add').on('click', function () {
    let num = $('#number').val().trim()

    if (num === '') {
        $('#number').addClass('border-red')
    } else {
        $('#number').removeClass('border-red')
        $('#content').html('')
	

        for (let i = 1; i <= num; i++) {
            $('#content').append('<div class = "box"><div class = "num_div">'+ i +'</div><div><input type = "checkbox" class = "check"></div></div>')
        }

        $('#number').val('')

        if ($('.remove_btn').length === 0) {
            $(this).after('<button type="button" class="remove_btn">Remove</button>')
        }
    }
})

        $('.select').append('<div id="select_all_container"><label><input type="checkbox" id="select_all">Select all</label></div>')
	


$(document).on('change', '#select_all', function () {
    $('.check').prop('checked', this.checked)
})


$(document).on('click', '.remove_btn', function () {
    elementsToRemove = $('.check:checked').closest('.box').toArray()

    if (elementsToRemove.length > 0) {
        $('.slide').css('top', '20px').show()
        $('.visible').fadeIn(300)
    }
})


$('.yes').on('click', function () {
    $(elementsToRemove).each(function () {
        $(this).fadeOut(500, function () {
            $(this).remove()

            $('.num_div').each(function (index) {
                $(this).text(index + 1)
            })
        })
    })

    elementsToRemove = []
    $('#select_all').prop('checked', false)
    $('.visible').fadeOut(300)
    $('.slide').css('top', '-200px')
})


$('.no, .removeSection').on('click', function () {
    elementsToRemove = []
    $('.visible').fadeOut(300)
    $('.slide').css('top', '-200px')
})