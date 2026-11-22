const CONTACT_ADDRESS = "hello@examplewebsite142.com";

function buildMailto(subject, body) {
    const mailtoUrl =
        `mailto:${CONTACT_ADDRESS}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
}




const contactForm = document.getElementById("contactForm");

contactForm?.addEventListener("submit", function (event) {

    event.preventDefault();

 
    const name = document.getElementById("contactName")?.value.trim();
    const email = document.getElementById("contactEmail")?.value.trim();
    const message = document.getElementById("contactMessage")?.value.trim();

    if (!name || !email || !message) {
        alert("Please complete all fields before submitting.");
        return;
    }

    const subject = `CONTACT FORM MESSAGE - ${name}`;

    const body =
`Hello Malaya Team,

I would like to send an inquiry.

Name: ${name}
Email Address: ${email}

${message}

Thank you!`;

    buildMailto(subject, body);

});
