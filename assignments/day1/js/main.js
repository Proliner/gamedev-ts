var init = function () {
    var rocket = {
        xPos: 0,
        yPos: 0,
        image: 'rocket.png',
        render: function () {
            var imgElement = document.createElement('img');
            imgElement.src = './assets/images/' + this.image;
            imgElement.className = 'rocket';
            imgElement.style.transform = "translate(" + this.xPos + "px, " + this.yPos + "px)";
            var container = document.getElementById('container');
            container.innerHTML = '';
            container.appendChild(imgElement);
        }
    };
    var moveToPosition = function (xPosition, yPosition) {
        var startingPoint = {
            xPos: rocket.xPos,
            yPos: rocket.yPos
        };
        var endingPoint = {
            xPos: xPosition,
            yPos: yPosition
        };
        rocket.xPos = xPosition;
        rocket.yPos = yPosition;
        var distanceTraveld = distance(startingPoint, endingPoint);
        return distanceTraveld;
    };
    var distance = function (startingPoint, endingPoint) {
        var a = startingPoint.xPos - endingPoint.xPos;
        var b = startingPoint.yPos - endingPoint.yPos;
        var c = Math.sqrt(a * a + b * b);
        return c;
    };
    window.addEventListener('click', handleClickEvent);
    function handleClickEvent(e) {
        console.log('yep');
        var newPosX = e.clientX;
        var newPosY = e.clientY;
        console.log(newPosX);
        moveToPosition(newPosX, newPosY);
        rocket.render();
    }
    rocket.render();
};
window.addEventListener('load', init);
//# sourceMappingURL=main.js.map