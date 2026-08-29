
// MINI BIRDS Product Data

const products = [

    {
        name: "Little Princess Lehenga",
        age: "0-2",
        category: "Wedding",
        price: "₹1,999",
        icon: "👗"
    },

    {
        name: "Floral Celebration Dress",
        age: "3-5",
        category: "Birthday",
        price: "₹1,799",
        icon: "🌸"
    },

    {
        name: "Festive Chaniya Choli",
        age: "6-8",
        category: "Navratri",
        price: "₹2,299",
        icon: "🪔"
    },

    {
        name: "Royal Wedding Look",
        age: "9-10",
        category: "Wedding",
        price: "₹2,799",
        icon: "👑"
    },

    {
        name: "Pastel Party Dress",
        age: "3-5",
        category: "Party",
        price: "₹1,699",
        icon: "✨"
    },

    {
        name: "Traditional Festive Set",
        age: "0-2",
        category: "Festival",
        price: "₹1,499",
        icon: "🌼"
    },

    {
        name: "Elegant Sharara Set",
        age: "6-8",
        category: "Party",
        price: "₹2,099",
        icon: "💗"
    },

    {
        name: "Mini Maharani Lehenga",
        age: "9-10",
        category: "Wedding",
        price: "₹2,999",
        icon: "👸"
    }

];


// Display Products

function displayProducts(list) {

    const container = document.getElementById("product-container");

    container.innerHTML = "";

    list.forEach(product => {

        container.innerHTML += `

            <div class="product-card">

                <div class="product-image">
                    ${product.icon}
                </div>

                <div class="product-info">

                    <h3>${product.name}</h3>

                    <p>
                        ${product.category} • ${product.age} Years
                    </p>

                    <div class="product-price">
                        ${product.price}
                    </div>

                    <a
                        href="#customise"
                        class="enquire-small"
                        onclick="selectOccasion('${product.category}')"
                    >
                        Enquire About This Look
                    </a>

                </div>

            </div>

        `;

    });

}


// Filter by Age

function filterProducts(age, button) {

    document.querySelectorAll(".age-button")
        .forEach(btn => btn.classList.remove("active"));

    button.classList.add("active");

    if (age === "all") {

        displayProducts(products);

    } else {

        const filtered = products.filter(
            product => product.age === age
        );

        displayProducts(filtered);

    }

}


// Select Occasion

function selectOccasion(occasion) {

    document.getElementById("occasion").value = occasion;

    document.getElementById("customise")
        .scrollIntoView({
            behavior: "smooth"
        });

}


// WhatsApp Enquiry

function sendWhatsApp(event) {

    event.preventDefault();

    const age =
        document.getElementById("age").value;

    const occasion =
        document.getElementById("occasion").value;

    const style =
        document.getElementById("style").value;

    const colour =
        document.getElementById("colour").value;

    const message =
        document.getElementById("message").value;


    // IMPORTANT:
    // Replace this with your real WhatsApp number.
    // Include country code without + sign.
    // Example: 919876543210

    const phone = "YOUR_WHATSAPP_NUMBER";


    const text =
`Hello MINI BIRDS 🐦

I am interested in a customised outfit.

Age: ${age}
Occasion: ${occasion}
Style: ${style}
Preferred Colour: ${colour}

My requirements:
${message}

Please share available designs and pricing.

Thank you!`;


    const url =
        "https://wa.me/" +
        phone +
        "?text=" +
        encodeURIComponent(text);


    window.open(url, "_blank");

}


// Initial product display

displayProducts(products);
