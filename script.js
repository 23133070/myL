document.addEventListener('DOMContentLoaded', function() {
    const envelope = document.getElementById('envelope');
    const letterContent = document.getElementById('letter-content');
    const envelopeImg = document.getElementById('envelope-img');

    envelope.addEventListener('click', function() {
        // Hiệu ứng mở thư
        envelope.classList.add('open-animation');
        envelopeImg.style.filter = 'blur(2px) brightness(0.8)';
        setTimeout(function() {
            envelope.style.display = 'none';
            letterContent.classList.remove('hidden');
            letterContent.style.animation = 'fadeIn 0.7s';
        }, 600);
    });
});
