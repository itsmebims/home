document.getElementById('buyBtn1').addEventListener('click', function() {
    alert('Anda akan diarahkan ke Discord untuk membeli SAMP Cloud #2');
});

document.getElementById('buyBtn2').addEventListener('click', function() {
    alert('Anda akan diarahkan ke Discord untuk membeli SAMP Cloud #3');
});
document.getElementById('buyBtn1').addEventListener('click', function() {
    alert('Anda akan diarahkan ke Discord untuk membeli SAMP Cloud #2');
});

document.getElementById('buyBtn2').addEventListener('click', function() {
    alert('Anda akan diarahkan ke Discord untuk membeli SAMP Cloud #3');
});

// Toggle detail untuk SAMP Cloud #2
document.getElementById('toggleDetails1').addEventListener('click', function() {
    var details = document.getElementById('details1');
    if (details.style.display === 'none') {
        details.style.display = 'block';
        this.textContent = 'Sembunyikan Detail';
    } else {
        details.style.display = 'none';
        this.textContent = 'Tampilkan Detail';
    }
});

// Toggle detail untuk SAMP Cloud #3
document.getElementById('toggleDetails2').addEventListener('click', function() {
    var details = document.getElementById('details2');
    if (details.style.display === 'none') {
        details.style.display = 'block';
        this.textContent = 'Sembunyikan Detail';
    } else {
        details.style.display = 'none';
        this.textContent = 'Tampilkan Detail';
    }
});
// Animasi saat halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    var plans = document.querySelectorAll('.plan');
    plans.forEach(function(plan, index) {
        setTimeout(function() {
            plan.classList.add('fadeIn');
        }, index * 500); // Delay setiap plan
    });
});
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Pesan Anda telah terkirim!');
    // Anda bisa menambahkan kode untuk mengirim data formulir ke server di sini
});