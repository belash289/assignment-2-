document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('dayMode').addEventListener('click', function() {
        document.body.style.backgroundColor = 'Deep Sky Blue';
        document.body.style.color = 'black';
    });

    document.getElementById('nightMode').addEventListener('click', function() {
        document.body.style.backgroundColor = '#654321'; // Dark brown
        document.body.style.color = 'Deep Sky Blue';
    });

    document.getElementById('showAnswer').addEventListener('click', function() {
        document.getElementById('answer').classList.remove('hidden');
    });

    const dynamicImage = document.getElementById('dynamicImage');
    dynamicImage.addEventListener('mouseenter', function() {
        this.src = 'https://nyunews.com/wp-content/uploads/2023/01/C6.jpg';
    });
    dynamicImage.addEventListener('mouseleave', function() {
        this.src = 'https://nyunews.com/wp-content/uploads/2023/01/C7.jpg';
    });
});
