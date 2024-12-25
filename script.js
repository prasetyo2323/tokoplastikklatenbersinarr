document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const emailContent = `Nama: ${name}\nEmail: ${email}\nPesan: ${message}`;
    const mailtoLink = `mailto:epras4133@gmail.com?subject=Pesan dari ${name}&body=${encodeURIComponent(emailContent)}`;

    window.location.href = mailtoLink;
});
