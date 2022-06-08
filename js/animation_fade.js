window.addEventListener('scroll', function(){

    function fade(direction){

        var image = document.querySelectorAll('.fade_'+direction);

        for(var i=0; i < image.length; i++){

            var height = window.innerHeight/1.3;

            var distance = image[i].getBoundingClientRect().top;

            image[i].classList.add('transform_'+direction)

            if (distance <= height) {
                image[i].classList.add('appear')
            }else {
                image[i].classList.remove('appear')
            }

        }

    }

    fade('up');
    fade('left');
})
