$(function () {
    var click = false;
    var elem = null;
    var offset_inner_x = 0;
    var offset_inner_y = 0;

    $('#btn-add').click(function () {
        var rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        rect.setAttribute('width', 80);
        rect.setAttribute('height', 32);
        rect.setAttribute('fill', '#cccccc');
        rect.setAttribute('stroke', '#333333');
        rect.setAttribute('stroke-width', 3);
        rect.setAttribute('x', 0);
        rect.setAttribute('y', 0);
        $('#main-svg').append(rect);
        rect.onmousedown = function(e) {
            console.log('down');
            click = true;
            elem = rect;
            let offset = $('#main-svg').offset();
            console.log(parseFloat(rect.getAttribute('x')));
            offset_inner_x = e.clientX - offset.left - parseFloat(rect.getAttribute('x'));
            offset_inner_y = e.clientY - offset.top - parseFloat(rect.getAttribute('y'));
        };
        rect.onmouseup = function(e) {
            console.log('up');
            click = false;
            elem = null;
        };
        var text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        text.innerHTML = 'button';
        text.setAttribute('x', 10);
        text.setAttribute('y', 20);
        text.setAttribute('pointer-events', 'none');
        $('#main-svg').append(text);
    });
    $('#main-svg').mousemove(function(e) {
        if (elem) {
            console.log(e.clientX + "," + e.clientY);
            let offset = $('#main-svg').offset();
            elem.setAttribute('x', e.clientX - offset.left - offset_inner_x);
            elem.setAttribute('y', e.clientY - offset.top - offset_inner_y);
        }
    });
});