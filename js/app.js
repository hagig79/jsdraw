$(function () {
    $('#btn-add').click(function () {
        var rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        rect.setAttribute('width', 300);
        rect.setAttribute('height', 200);
        rect.setAttribute('fill', '#ffffff');
        rect.setAttribute('stroke', '#ff0000');
        rect.setAttribute('stroke-width', 3);
        $('#main-svg').append(rect);
        var text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        text.innerHTML = 'hello';
        text.setAttribute('x', 10);
        text.setAttribute('y', 20);
        $('#main-svg').append(text);
    });
});