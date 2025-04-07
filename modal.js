document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modalImage');
    const pdfViewer = document.getElementById('pdfViewer');
    const closeButton = document.getElementById('closeButton');

    document.querySelectorAll('.btn-1').forEach(button => {
        button.addEventListener('click', function () {
            const imgSrc = this.getAttribute('data-image');
            const pdfSrc = this.getAttribute('data-pdf');

            modalImage.style.display = 'none';
            pdfViewer.style.display = 'none';

            if (imgSrc) {
                modalImage.src = imgSrc;
                modalImage.style.display = 'block';
            } else if (pdfSrc) {
                pdfViewer.src = pdfSrc;
                pdfViewer.style.display = 'block';
            }

            modal.style.display = 'flex';
        });
    });

    closeButton.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});



