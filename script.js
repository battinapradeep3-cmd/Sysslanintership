"use strict";

/* ============================================================
   AURELIA EVENT BOOKING WEBSITE
   UPDATED JAVASCRIPT — ONLY JS
   ============================================================ */


/* ============================================================
   EVENT DATA
   ============================================================ */

const EVENTS = {

    "Velvet Symphony": {
        category: "CLASSICAL NIGHT",
        date: "20 SEP 2026",
        time: "7:00 PM",
        location: "Vijayawada",
        venue: "The Grand Arena",
        price: 799,
        vip: 1499,
        vvip: 2499,
        description:
            "An elegant evening of classical music, live performances and unforgettable moments. Experience premium sound, beautiful ambience and an extraordinary night at The Grand Arena."
    },

    "Midnight Noir": {
        category: "NIGHT EXPERIENCE",
        date: "25 SEP 2026",
        time: "6:30 PM",
        location: "Visakhapatnam",
        venue: "Harbour Convention Centre",
        price: 649,
        vip: 1299,
        vvip: 2199,
        description:
            "Step into an atmospheric night filled with music, lights and premium entertainment. Midnight Noir brings a sophisticated nightlife experience to Visakhapatnam."
    },

    "Aurum Jazz": {
        category: "JAZZ EXPERIENCE",
        date: "02 OCT 2026",
        time: "7:30 PM",
        location: "Hyderabad",
        venue: "Skyline Arena",
        price: 899,
        vip: 1699,
        vvip: 2799,
        description:
            "A premium live jazz evening featuring extraordinary performances, elegant ambience and unforgettable musical moments."
    },

    "Grand Vintner": {
        category: "LUXURY EVENING",
        date: "05 OCT 2026",
        time: "7:00 PM",
        location: "Bengaluru",
        venue: "The Garden Stage",
        price: 749,
        vip: 1499,
        vvip: 2399,
        description:
            "A sophisticated luxury evening created for people who appreciate music, atmosphere and memorable experiences."
    },

    "Celestial Rooftop": {
        category: "ROOFTOP EXPERIENCE",
        date: "18 OCT 2026",
        time: "8:00 PM",
        location: "Mumbai",
        venue: "Metro Live Arena",
        price: 999,
        vip: 1899,
        vvip: 2999,
        description:
            "Enjoy an unforgettable rooftop experience under the stars with premium entertainment, music and a spectacular atmosphere."
    },

    "Imperial Opera": {
        category: "OPERA NIGHT",
        date: "31 OCT 2026",
        time: "6:00 PM",
        location: "Goa",
        venue: "Neon Beach Arena",
        price: 1099,
        vip: 1999,
        vvip: 3299,
        description:
            "An elegant opera experience combining art, music, stage performance and luxury in the beautiful surroundings of Goa."
    },

    "Elysian Nights": {
        category: "SIGNATURE NIGHT",
        date: "08 NOV 2026",
        time: "7:30 PM",
        location: "Chennai",
        venue: "Grand Convention Hall",
        price: 899,
        vip: 1699,
        vvip: 2799,
        description:
            "A signature AURELIA experience featuring music, entertainment and an elegant atmosphere designed for an unforgettable evening."
    },

    "Veloura": {
        category: "LUXURY EXPERIENCE",
        date: "15 NOV 2026",
        time: "8:00 PM",
        location: "Pune",
        venue: "Imperial Convention Centre",
        price: 1199,
        vip: 2199,
        vvip: 3499,
        description:
            "Veloura is a premium luxury experience bringing together music, entertainment and an elegant atmosphere."
    },

    "Noir Élan": {
        category: "MIDNIGHT AFFAIR",
        date: "21 NOV 2026",
        time: "9:00 PM",
        location: "Delhi",
        venue: "The Grand Pavilion",
        price: 1299,
        vip: 2399,
        vvip: 3699,
        description:
            "A stylish midnight affair featuring premium entertainment, dramatic lighting and an unforgettable nightlife atmosphere."
    },

    "Astral Reverie": {
        category: "COSMIC EXPERIENCE",
        date: "05 DEC 2026",
        time: "8:30 PM",
        location: "Kochi",
        venue: "Waterfront Arena",
        price: 1099,
        vip: 2099,
        vvip: 3299,
        description:
            "Step into a cosmic experience where music, atmosphere and entertainment come together for an extraordinary night."
    }
};


/* ============================================================
   GLOBAL VARIABLES
   ============================================================ */

let selectedEventName = null;
let selectedEvent = null;


/* ============================================================
   EVENT KEY ALIASES
   Keeps existing index.html onclick values working.
   ============================================================ */

const EVENT_ALIASES = {
    velvet: "Velvet Symphony",
    noir: "Midnight Noir",
    aurum: "Aurum Jazz",
    vintner: "Grand Vintner",
    celestial: "Celestial Rooftop",
    imperial: "Imperial Opera",
    elysian: "Elysian Nights",
    veloura: "Veloura",
    noirelan: "Noir Élan",
    astral: "Astral Reverie"
};


/* ============================================================
   LOCAL STORAGE
   ============================================================ */

function getUser() {

    try {

        return JSON.parse(
            localStorage.getItem("aureliaUser")
        );

    } catch (error) {

        return null;

    }
}


function saveUser(user) {

    localStorage.setItem(
        "aureliaUser",
        JSON.stringify(user)
    );
}


function removeUser() {

    localStorage.removeItem(
        "aureliaUser"
    );
}


function getAccounts() {

    try {

        return JSON.parse(
            localStorage.getItem("aureliaAccounts")
        ) || [];

    } catch (error) {

        return [];

    }
}


function saveAccounts(accounts) {

    localStorage.setItem(
        "aureliaAccounts",
        JSON.stringify(accounts)
    );
}


function getBookings() {

    try {

        return JSON.parse(
            localStorage.getItem("aureliaBookings")
        ) || [];

    } catch (error) {

        return [];

    }
}


function saveBookings(bookings) {

    localStorage.setItem(
        "aureliaBookings",
        JSON.stringify(bookings)
    );
}


/* ============================================================
   BASIC HELPERS
   ============================================================ */

function getValue(id) {

    const element =
        document.getElementById(id);

    if (!element) {
        return "";
    }

    return element.value.trim();
}


function setValue(id, value) {

    const element =
        document.getElementById(id);

    if (element) {
        element.value = value;
    }
}


function setText(id, value) {

    const element =
        document.getElementById(id);

    if (element) {
        element.textContent = value;
    }
}


function escapeHTML(value) {

    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


/* ============================================================
   MODALS
   ============================================================ */

function openModal(id) {

    const modal =
        document.getElementById(id);

    if (!modal) {

        console.warn(
            "Modal not found:",
            id
        );

        return;
    }

    modal.style.display = "flex";

    modal.classList.add(
        "active"
    );

    document.body.style.overflow =
        "hidden";
}


function closeModal(id) {

    const modal =
        document.getElementById(id);

    if (!modal) {
        return;
    }

    modal.style.display =
        "none";

    modal.classList.remove(
        "active"
    );

    document.body.style.overflow =
        "";
}


function closeAllModals() {

    document
        .querySelectorAll(".modal")
        .forEach(function(modal) {

            modal.style.display =
                "none";

            modal.classList.remove(
                "active"
            );

        });

    document.body.style.overflow =
        "";
}


/* ============================================================
   EVENT VIEW
   ============================================================ */

function showEvent(eventName) {

    const actualEventName =
        EVENT_ALIASES[eventName] || eventName;

    const event =
        EVENTS[actualEventName];

    if (!event) {

        alert(
            "Event details not available."
        );

        return;
    }

    selectedEventName =
        actualEventName;

    selectedEvent =
        event;

    closeAllModals();

    createFullEventPage(
        actualEventName,
        event
    );
}


/* ============================================================
   FULL EVENT DETAILS PAGE
   ============================================================ */

function createFullEventPage(
    eventName,
    event
) {

    const existing =
        document.getElementById(
            "aureliaFullEventPage"
        );

    if (existing) {
        existing.remove();
    }


    const page =
        document.createElement(
            "div"
        );

    page.id =
        "aureliaFullEventPage";


    page.innerHTML = `

        <div class="aurelia-event-screen">

            <button
                type="button"
                class="aurelia-event-back"
                id="aureliaEventBack">

                ← Back to Events

            </button>


            <div class="aurelia-event-inner">

                <div class="aurelia-event-category">

                    ${escapeHTML(
                        event.category
                    )}

                </div>


                <h1 class="aurelia-event-title">

                    ${escapeHTML(
                        eventName
                    )}

                </h1>


                <p class="aurelia-event-description">

                    ${escapeHTML(
                        event.description
                    )}

                </p>


                <div class="aurelia-event-information">

                    <div class="aurelia-event-info-box">

                        <span>DATE</span>

                        <strong>
                            ${escapeHTML(
                                event.date
                            )}
                        </strong>

                    </div>


                    <div class="aurelia-event-info-box">

                        <span>TIME</span>

                        <strong>
                            ${escapeHTML(
                                event.time
                            )}
                        </strong>

                    </div>


                    <div class="aurelia-event-info-box">

                        <span>LOCATION</span>

                        <strong>
                            ${escapeHTML(
                                event.location
                            )}
                        </strong>

                    </div>


                    <div class="aurelia-event-info-box">

                        <span>VENUE</span>

                        <strong>
                            ${escapeHTML(
                                event.venue
                            )}
                        </strong>

                    </div>

                </div>


                <h3 class="aurelia-ticket-heading">

                    TICKET PRICES

                </h3>


                <div class="aurelia-event-prices">

                    <div class="aurelia-price-box">

                        <span>GENERAL</span>

                        <strong>
                            ₹${event.price}
                        </strong>

                    </div>


                    <div class="aurelia-price-box">

                        <span>VIP</span>

                        <strong>
                            ₹${event.vip}
                        </strong>

                    </div>


                    <div class="aurelia-price-box">

                        <span>VVIP</span>

                        <strong>
                            ₹${event.vvip}
                        </strong>

                    </div>

                </div>


                <button
                    type="button"
                    id="aureliaBookEvent"
                    class="aurelia-book-button">

                    Book Tickets →

                </button>

            </div>

        </div>

    `;


    document.body.appendChild(
        page
    );


    document.body.style.overflow =
        "hidden";


    const backButton =
        document.getElementById(
            "aureliaEventBack"
        );


    if (backButton) {

        backButton.addEventListener(
            "click",
            function() {

                page.remove();

                document.body.style.overflow =
                    "";

            }
        );
    }


    const bookButton =
        document.getElementById(
            "aureliaBookEvent"
        );


    if (bookButton) {

        bookButton.addEventListener(
            "click",
            function() {

                page.remove();

                document.body.style.overflow =
                    "";

                startBooking();

            }
        );
    }
}


/* ============================================================
   SIGN IN
   ============================================================ */

function openLogin() {

    const user =
        getUser();


    if (user) {

        const logout =
            confirm(
                "You are signed in as " +
                user.name +
                ".\n\nDo you want to Sign Out?"
            );


        if (logout) {

            signOut();

        }

        return;
    }


    openModal(
        "loginModal"
    );
}


/* ============================================================
   LOGIN
   ============================================================ */

function handleLogin(event) {

    if (event) {
        event.preventDefault();
    }


    const email =
        getValue("loginEmail")
            .toLowerCase();


    const password =
        getValue("loginPassword");


    if (
        !email ||
        !password
    ) {

        alert(
            "Please enter your email and password."
        );

        return;
    }


    const accounts =
        getAccounts();


    const account =
        accounts.find(
            function(item) {

                return (
                    item.email === email &&
                    item.password === password
                );

            }
        );


    if (!account) {

        alert(
            "Invalid email or password."
        );

        return;
    }


    saveUser({

        name:
            account.name,

        email:
            account.email

    });


    closeModal(
        "loginModal"
    );


    updateAuthUI();


    alert(
        "Signed in successfully!"
    );
}


/* ============================================================
   SIGN UP
   ============================================================ */

function handleSignup(event) {

    if (event) {
        event.preventDefault();
    }


    const name =
        getValue("signupName");


    const email =
        getValue("signupEmail")
            .toLowerCase();


    const password =
        getValue("signupPassword");


    if (
        !name ||
        !email ||
        !password
    ) {

        alert(
            "Please fill all fields."
        );

        return;
    }


    if (
        password.length < 6
    ) {

        alert(
            "Password must contain at least 6 characters."
        );

        return;
    }


    const accounts =
        getAccounts();


    const exists =
        accounts.some(
            function(account) {

                return (
                    account.email ===
                    email
                );

            }
        );


    if (exists) {

        alert(
            "This email is already registered."
        );

        return;
    }


    accounts.push({

        name:
            name,

        email:
            email,

        password:
            password

    });


    saveAccounts(
        accounts
    );


    saveUser({

        name:
            name,

        email:
            email

    });


    closeModal(
        "signupModal"
    );


    updateAuthUI();


    alert(
        "Account created successfully!"
    );
}


/* ============================================================
   SWITCH LOGIN / SIGNUP
   ============================================================ */

function switchToSignup() {

    closeModal(
        "loginModal"
    );

    openModal(
        "signupModal"
    );
}


function switchToLogin() {

    closeModal(
        "signupModal"
    );

    openModal(
        "loginModal"
    );
}


/* ============================================================
   SIGN OUT
   ============================================================ */

function signOut() {

    removeUser();

    updateAuthUI();

    alert(
        "You have been signed out."
    );
}


/* ============================================================
   AUTH UI
   ============================================================ */

function updateAuthUI() {

    const button =
        document.getElementById(
            "authButton"
        );


    if (!button) {
        return;
    }


    const user =
        getUser();


    if (user) {

        button.textContent =
            "Hi, " +
            user.name;

    } else {

        button.textContent =
            "Sign In";

    }

    loadTickets();
}


/* ============================================================
   BOOKING
   ============================================================ */

function startBooking() {

    const user =
        getUser();


    if (!user) {

        alert(
            "Please sign in before booking tickets."
        );

        openLogin();

        return;
    }


    if (!selectedEvent) {

        alert(
            "Please select an event first."
        );

        return;
    }


    closeAllModals();


    const eventModal =
        document.getElementById(
            "eventModal"
        );

    if (eventModal) {
        eventModal.style.display =
            "none";
    }


    openModal(
        "bookingModal"
    );


    setText(
        "bookingEventName",
        selectedEventName
    );


    setText(
        "bookingEventDate",
        selectedEvent.date
    );


    setText(
        "bookingEventLocation",
        selectedEvent.location
    );


    const bookingUser =
        document.getElementById(
            "bookingName"
        );

    if (bookingUser) {
        bookingUser.value =
            user.name;
    }


    const bookingEmail =
        document.getElementById(
            "bookingEmail"
        );

    if (bookingEmail) {
        bookingEmail.value =
            user.email;
    }


    const generalPrice =
        document.getElementById(
            "bookingGeneralPrice"
        );

    if (generalPrice) {
        generalPrice.textContent =
            "₹" +
            selectedEvent.price;
    }


    const vipPrice =
        document.getElementById(
            "bookingVipPrice"
        );

    if (vipPrice) {
        vipPrice.textContent =
            "₹" +
            selectedEvent.vip;
    }


    const vvipPrice =
        document.getElementById(
            "bookingVvipPrice"
        );

    if (vvipPrice) {
        vvipPrice.textContent =
            "₹" +
            selectedEvent.vvip;
    }


    updateBookingTotal();
}


/* ============================================================
 BOOKING TOTAL
   ============================================================ */

function updateBookingTotal() {

    if (!selectedEvent) {
        return;
    }


    const ticketTypeElement =
        document.getElementById(
            "ticketType"
        );


    const quantityElement =
        document.getElementById(
            "ticketQuantity"
        );


    if (
        !ticketTypeElement ||
        !quantityElement
    ) {
        return;
    }


    const ticketType =
        ticketTypeElement.value;


    let price =
        selectedEvent.price;


    if (
        ticketType === "VIP"
    ) {

        price =
            selectedEvent.vip;

    }


    if (
        ticketType === "VVIP"
    ) {

        price =
            selectedEvent.vvip;

    }


    let quantity =
        parseInt(
            quantityElement.value,
            10
        );


    if (
        isNaN(quantity) ||
        quantity < 1
    ) {

        quantity = 1;

    }


    const total =
        price * quantity;


    setText(
        "bookingTotal",
        "₹" + total
    );
   }
           alert(
            "Please Sign In before booking a ticket."
        );

        openLogin();

        return;
    }


    if (!selectedEvent) {

        alert(
            "Please select an event first."
        );

        return;
    }


    setValue(
        "bookingEventName",
        selectedEventName
    );


    setValue(
        "bookingName",
        user.name
    );


    setValue(
        "bookingEmail",
        user.email
    );


    setValue(
        "ticketType",
        "general"
    );


    setValue(
        "ticketQuantity",
        "1"
    );


    updateBookingTotal();


    openModal(
        "bookingModal"
    );
}


/* ============================================================
   BOOKING TOTAL
   ============================================================ */

function updateBookingTotal() {

    if (!selectedEvent) {
        return;
    }


    let type =
        getValue("ticketType");


    let quantity =
        parseInt(
            getValue("ticketQuantity"),
            10
        );


    if (
        isNaN(quantity) ||
        quantity < 1
    ) {

        quantity = 1;

        setValue(
            "ticketQuantity",
            "1"
        );
    }


    let price =
        selectedEvent.price;


    if (type === "vip") {

        price =
            selectedEvent.vip;

    } else if (type === "vvip") {

        price =
            selectedEvent.vvip;

    }


    setText(
        "bookingTotal",
        "₹" +
        (price * quantity)
    );
}


/* ============================================================
   BOOKING SUBMIT
   ============================================================ */

function handleBooking(event) {

    if (event) {
        event.preventDefault();
    }


    const user =
        getUser();


    if (!user) {

        closeModal(
            "bookingModal"
        );

        openLogin();

        return;
    }


    if (!selectedEvent) {

        alert(
            "Please select an event."
        );

        return;
    }


    const name =
        getValue("bookingName");


    const email =
        getValue("bookingEmail");


    const phone =
        getValue("bookingPhone");


    const ticketType =
        getValue("ticketType");


    const quantity =
        parseInt(
            getValue("ticketQuantity"),
            10
        );


    if (
        !name ||
        !email ||
        !phone
    ) {

        alert(
            "Please fill all booking details."
        );

        return;
    }


    if (
        isNaN(quantity) ||
        quantity < 1
    ) {

        alert(
            "Please enter a valid ticket quantity."
        );

        return;
    }


    let price =
        selectedEvent.price;


    if (
        ticketType === "vip"
    ) {

        price =
            selectedEvent.vip;

    } else if (
        ticketType === "vvip"
    ) {

        price =
            selectedEvent.vvip;

    }


    const total =
        price * quantity;


    const bookingId =
        "AUR-" +
        Date.now()
            .toString()
            .slice(-8);


    const booking = {

        id:
            bookingId,

        event:
            selectedEventName,

        date:
            selectedEvent.date,

        time:
            selectedEvent.time,

        location:
            selectedEvent.location,

        venue:
            selectedEvent.venue,

        name:
            name,

        email:
            email,

        userEmail:
            user.email,

        phone:
            phone,

        ticketType:
            ticketType,

        quantity:
            quantity,

        total:
            total

    };


    const bookings =
        getBookings();


    bookings.push(
        booking
    );


    saveBookings(
        bookings
    );


    closeModal(
        "bookingModal"
    );


    setText(
        "confirmationId",
        bookingId
    );


    setText(
        "confirmationEvent",
        selectedEventName
    );


    setText(
        "confirmationDate",
        selectedEvent.date +
        " · " +
        selectedEvent.time
    );


    setText(
        "confirmationTickets",
        quantity +
        " × " +
        formatTicketType(
            ticketType
        )
    );


    setText(
        "confirmationTotal",
        "₹" +
        total
    );


    openModal(
        "confirmationModal"
    );

    addConfirmationQR(booking);

    loadTickets();
}


/* ============================================================
   TICKET TYPE
   ============================================================ */

function formatTicketType(type) {

    if (type === "vip") {
        return "VIP";
    }


    if (type === "vvip") {
        return "VVIP";
    }


    return "General";
}


/* ============================================================
   QR CODE
   ============================================================ */

function createQRCodeData(booking) {

    const data = [
        "AURELIA DIGITAL TICKET",
        "Booking ID: " + booking.id,
        "Event: " + booking.event,
        "Date: " + booking.date,
        "Time: " + booking.time,
        "Venue: " + booking.venue,
        "Ticket: " + formatTicketType(booking.ticketType),
        "Quantity: " + booking.quantity,
        "Total: ₹" + booking.total
    ].join(" | ");

    return (
        "https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=" +
        encodeURIComponent(data)
    );
}


function addConfirmationQR(booking) {

    const details =
        document.querySelector(
            "#confirmationModal .confirmation-details"
        );

    if (!details) {
        return;
    }

    let qrBox =
        document.getElementById(
            "aureliaConfirmationQR"
        );

    if (!qrBox) {
        qrBox = document.createElement("div");
        qrBox.id = "aureliaConfirmationQR";
        qrBox.style.cssText =
            "margin:20px auto 0;text-align:center;padding:15px;border:1px solid rgba(201,169,110,.25);background:rgba(255,255,255,.025);max-width:220px;";
        details.parentNode.insertBefore(
            qrBox,
            details.nextSibling
        );
    }

    qrBox.innerHTML = `
        <div style="font-size:9px;letter-spacing:1.5px;color:#aaa39a;margin-bottom:10px;">
            SCAN TO VERIFY TICKET
        </div>

        <img
            src="${createQRCodeData(booking)}"
            alt="QR code for ${escapeHTML(booking.id)}"
            style="width:180px;height:180px;margin:auto;background:#fff;padding:6px;"
        >

        <div style="font-size:10px;color:#c9a96e;margin-top:8px;">
            ${escapeHTML(booking.id)}
        </div>
    `;
}


/* ============================================================
   MY TICKETS
   ============================================================ */

function loadTickets() {

    const container =
        document.getElementById("ticketList") ||
        document.getElementById("ticketsContainer");

    if (!container) {
        return;
    }

    const user = getUser();
    const allBookings = getBookings();

    const bookings = user
        ? allBookings.filter(function(booking) {

            return !booking.userEmail ||
                   booking.userEmail.toLowerCase() ===
                   user.email.toLowerCase();

        })
        : [];

    if (bookings.length === 0) {

        container.innerHTML = `
            <div class="empty-tickets">

                <h3>No tickets yet</h3>

                <p>
                    Sign in and book an event
                    to see your digital tickets here.
                </p>

                <a
                    href="#events"
                    class="btn btn-primary">
                    Explore Events
                </a>

            </div>
        `;

        return;
    }

    container.innerHTML = "";

    bookings.forEach(function(booking) {

        const card =
            document.createElement("div");

        card.className =
            "ticket-card";

        card.innerHTML = `
            <div class="ticket-info">

                <small>
                    AURELIA DIGITAL TICKET
                </small>

                <h3>
                    ${escapeHTML(booking.event)}
                </h3>

                <p>
                    ${escapeHTML(booking.date)}
                    ·
                    ${escapeHTML(booking.time)}
                </p>

                <p>
                    ${escapeHTML(booking.location)}
                </p>

                <p>
                    ${escapeHTML(booking.venue)}
                </p>

                <p>
                    ${booking.quantity}
                    ×
                    ${escapeHTML(
                        formatTicketType(
                            booking.ticketType
                        )
                    )}
                </p>

                <strong>
                    ₹${booking.total}
                </strong>

                <p class="ticket-id">
                    Booking ID:
                    ${escapeHTML(booking.id)}
                </p>


                <div
                    style="
                        margin-top:18px;
                        text-align:center;
                        padding:12px;
                        border-top:1px solid rgba(255,255,255,.10);
                    "
                >

                    <img
                        src="${createQRCodeData(booking)}"
                        alt="QR code for ${escapeHTML(booking.id)}"
                        style="
                            width:140px;
                            height:140px;
                            background:#fff;
                            padding:5px;
                            margin:auto;
                        "
                    >

                    <small
                        style="
                            display:block;
                            margin-top:7px;
                        "
                    >
                        SCAN TO VERIFY
                    </small>

                </div>


                <button
                    type="button"
                    class="btn btn-outline"
                    data-cancel-ticket="${escapeHTML(booking.id)}"
                >
                    Cancel Ticket
                </button>

            </div>
        `;

        container.appendChild(card);
    });


    container
        .querySelectorAll(
            "[data-cancel-ticket]"
        )
        .forEach(function(button) {

            button.addEventListener(
                "click",
                function() {

                    cancelTicket(
                        button.getAttribute(
                            "data-cancel-ticket"
                        )
                    );

                }
            );

        });
}


/* ============================================================
   CANCEL TICKET
   ============================================================ */

function cancelTicket(id) {

    const confirmCancel =
        confirm(
            "Are you sure you want to cancel this ticket?"
        );


    if (!confirmCancel) {
        return;
    }


    let bookings =
        getBookings();


    bookings =
        bookings.filter(
            function(booking) {

                return (
                    booking.id !== id
                );

            }
        );


    saveBookings(
        bookings
    );


    loadTickets();


    alert(
        "Ticket cancelled successfully."
    );
}


/* ============================================================
   EVENT BUTTONS
   ============================================================ */

function setupEventButtons() {

    const cards =
        document.querySelectorAll(
            ".event-card, article, .card"
        );


    cards.forEach(
        function(card) {

            const heading =
                card.querySelector(
                    "h1, h2, h3, h4, h5, h6"
                );


            if (!heading) {
                return;
            }


            const title =
                heading.textContent
                    .replace(
                        /\s+/g,
                        " "
                    )
                    .trim();


            if (!EVENTS[title]) {
                return;
            }


            const buttons =
                card.querySelectorAll(
                    "button, a"
                );


            buttons.forEach(
                function(button) {

                    const text =
                        button.textContent
                            .replace(
                                /\s+/g,
                                " "
                            )
                            .trim()
                            .toLowerCase();


                    if (
                        !text.includes(
                            "view event"
                        )
                    ) {
                        return;
                    }


                    if (
                        button.dataset
                            .aureliaReady ===
                        "true"
                    ) {
                        return;
                    }


                    button.dataset
                        .aureliaReady =
                        "true";


                    button.addEventListener(
                        "click",
                        function(event) {

                            event.preventDefault();

                            event.stopPropagation();

                            showEvent(
                                title
                            );

                        }
                    );

                }
            );

        }
    );
}


/* ============================================================
   SIGN IN BUTTON
   ============================================================ */

function setupSignInButton() {

    const button =
        document.getElementById(
            "authButton"
        );


    if (!button) {

        console.warn(
            "authButton not found."
        );

        return;
    }


    if (
        button.dataset
            .aureliaReady ===
        "true"
    ) {
        return;
    }


    button.dataset
        .aureliaReady =
        "true";


    button.addEventListener(
        "click",
        function(event) {

            event.preventDefault();

            event.stopPropagation();

            openLogin();

        }
    );
}


/* ============================================================
   CONTACT
   ============================================================ */

function setupContactDetails() {

    const contact =
        document.getElementById(
            "contact"
        );


    if (!contact) {
        return;
    }


    contact
        .querySelectorAll(
            'a[href^="mailto:"]'
        )
        .forEach(
            function(emailLink) {

                emailLink.remove();

            }
        );


    if (
        document.getElementById(
            "aureliaPhoneContacts"
        )
    ) {
        return;
    }


    const wrapper =
        document.createElement(
            "div"
        );


    wrapper.id =
        "aureliaPhoneContacts";


    wrapper.innerHTML = `

        <div class="aurelia-contact-box">

            <span>
                PHONE 01
            </span>

            <a href="tel:+919876543210">

                +91 98765 43210

            </a>

        </div>


        <div class="aurelia-contact-box">

            <span>
                PHONE 02
            </span>

            <a href="tel:+919123456789">

                +91 91234 56789

            </a>

        </div>

    `;


    contact.appendChild(
        wrapper
    );
}


/* ============================================================
   NAVIGATION
   ============================================================ */

function setupNavigation() {

    document
        .querySelectorAll(
            'a[href^="#"]'
        )
        .forEach(
            function(link) {

                if (
                    link.dataset
                        .aureliaNavReady ===
                    "true"
                ) {
                    return;
                }


                link.dataset
                    .aureliaNavReady =
                    "true";


                link.addEventListener(
                    "click",
                    function(event) {

                        const target =
                            link.getAttribute(
                                "href"
                            );


                        if (
                            !target ||
                            target === "#"
                        ) {
                            return;
                        }


                        const section =
                            document.querySelector(
                                target
                            );


                        if (section) {

                            event.preventDefault();


                            section.scrollIntoView({

                                behavior:
                                    "smooth",

                                block:
                                    "start"

                            });

                        }

                    }
                );

            }
        );
}


/* ============================================================
   FORMS
   ============================================================ */

function setupForms() {

    const loginForm =
        document.getElementById(
            "loginForm"
        );


    if (loginForm) {

        loginForm.addEventListener(
            "submit",
            handleLogin
        );

    }


    const signupForm =
        document.getElementById(
            "signupForm"
        );


    if (signupForm) {

        signupForm.addEventListener(
            "submit",
            handleSignup
        );

    }


    const bookingForm =
        document.getElementById(
            "bookingForm"
        );


    if (bookingForm) {

        bookingForm.addEventListener(
            "submit",
            handleBooking
        );

    }


    const ticketType =
        document.getElementById(
            "ticketType"
        );


    if (ticketType) {

        ticketType.addEventListener(
            "change",
            updateBookingTotal
        );

    }


    const quantity =
        document.getElementById(
            "ticketQuantity"
        );


    if (quantity) {

        quantity.addEventListener(
            "input",
            updateBookingTotal
        );

        quantity.addEventListener(
            "change",
            updateBookingTotal
        );

    }
}


/* ============================================================
   MODAL ACTIONS
   ============================================================ */

function setupModalActions() {

    document
        .querySelectorAll(
            ".modal"
        )
        .forEach(
            function(modal) {

                modal.addEventListener(
                    "click",
                    function(event) {

                        if (
                            event.target ===
                            modal
                        ) {

                            closeModal(
                                modal.id
                            );

                        }

                    }
                );

            }
        );


    document.addEventListener(
        "keydown",
        function(event) {

            if (
                event.key !==
                "Escape"
            ) {
                return;
            }


            const eventPage =
                document.getElementById(
                    "aureliaFullEventPage"
                );


            if (eventPage) {

                eventPage.remove();

                document.body.style.overflow =
                    "";

                return;
            }


            closeAllModals();

        }
    );
}


/* ============================================================
   INITIALIZATION
   ============================================================ */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        console.log(
            "AURELIA JS loaded successfully."
        );


        updateAuthUI();

        setupEventButtons();

        setupSignInButton();

        setupForms();

        setupModalActions();

        setupNavigation();

        setupContactDetails();

        loadTickets();

    }
);
/* =========================================================
   AURELIA SIGN IN
========================================================= */

function openLogin() {

    const loginModal =
        document.getElementById("loginModal");

    if (!loginModal) {

        console.error(
            "loginModal not found"
        );

        return;
    }

    loginModal.classList.add("active");

    document.body.classList.add(
        "no-scroll"
    );

    setTimeout(function () {

        const username =
            document.getElementById(
                "loginUsername"
            );

        if (username) {
            username.focus();
        }

    }, 100);

}


/* CLOSE LOGIN */

function closeLogin() {

    const loginModal =
        document.getElementById("loginModal");

    if (!loginModal) {
        return;
    }

    loginModal.classList.remove("active");

    document.body.classList.remove(
        "no-scroll"
    );

}


/* LOGIN FORM */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const loginForm =
            document.getElementById(
                "loginForm"
            );

        if (!loginForm) {
            return;
        }


        loginForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                const username =
                    document.getElementById(
                        "loginUsername"
                    ).value.trim();


                const password =
                    document.getElementById(
                        "loginPassword"
                    ).value.trim();


                const message =
                    document.getElementById(
                        "loginMessage"
                    );


                if (!username || !password) {

                    message.textContent =
                        "Please enter username and password.";

                    message.style.color =
                        "#d99a8f";

                    return;
                }


                /*
                   FRONT-END DEMO LOGIN

                   This does not create a real
                   secure account/database.
                */

                localStorage.setItem(
                    "aureliaUser",
                    username
                );


                message.textContent =
                    "Sign in successful!";

                message.style.color =
                    "#c9a96e";


                setTimeout(
                    function () {

                        closeLogin();

                        updateUserStatus();

                    },
                    700
                );

            }
        );


        /* CLOSE WHEN CLICKING OUTSIDE */

        const loginModal =
            document.getElementById(
                "loginModal"
            );

        loginModal.addEventListener(
            "click",
            function (event) {

                if (
                    event.target ===
                    loginModal
                ) {

                    closeLogin();

                }

            }
        );

    }
);


/* UPDATE NAVBAR */

function updateUserStatus() {

    const username =
        localStorage.getItem(
            "aureliaUser"
        );

    const userStatus =
        document.getElementById(
            "userStatus"
        );

    const authButton =
        document.getElementById(
            "authButton"
        );


    if (
        username &&
        userStatus &&
        authButton
    ) {

        userStatus.textContent =
            "Hi, " + username;

        authButton.textContent =
            "Sign Out";

        authButton.onclick =
            logoutUser;

    }

}


/* LOGOUT */

function logoutUser() {

    localStorage.removeItem(
        "aureliaUser"
    );

    const userStatus =
        document.getElementById(
            "userStatus"
        );

    const authButton =
        document.getElementById(
            "authButton"
        );


    if (userStatus) {
        userStatus.textContent = "";
    }

    if (authButton) {

        authButton.textContent =
            "Sign In";

        authButton.onclick =
            openLogin;

    }

}


/* CHECK LOGIN ON PAGE LOAD */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        updateUserStatus();

    }
);


/* ESC KEY */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape"
        ) {

            closeLogin();

        }

    }
);
