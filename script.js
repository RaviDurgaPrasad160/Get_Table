$(document).ready(function () {
    $('#btn').click(function () {
        let tab = $('#inp').val();
        tab = Number(tab);
        getTable(tab);
        let ul = getTable(tab)
         $('#out').html(ul);
        $('#out').css('padding', '25px 70px')
        $('#inpbtn').css('border-radius', '25px 25px 0 0')
    })
    $('#btn').click(function(){
        $('#out').hide(function(){
            $('#out').slideDown(2000)
        })
    })
})

function getTable(num) {
    let res = '<ul>\n'
    for(let i=1; i<=10; i++){
         res += '<li>'+num+ ' x '+ i +' = '+ num*i+'</li>\n'
    }
    res += '</ul>'
    return res;
}
