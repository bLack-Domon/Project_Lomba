document.addEventListener('DOMContentLoaded', function() {
    // Sample event data
    const events = [
        {
            id: 1,
            title: "Malam Puisi Kontemporer",
            category: "puisi",
            date: "15 Oktober 2023",
            price: "Rp 75.000",
            image: ""
        },
        {
            id: 2,
            title: "Drama Musikal 'Rindu'",
            category: "drama",
            date: "20 Oktober 2023",
            price: "Rp 120.000",
            image: "event2.jpg"
        },
        {
            id: 3,
            title: "Konser Jazz Malam",
            category: "music",
            date: "25 Oktober 2023",
            price: "Rp 150.000",
            image: "event3.jpg"
        },
        {
            id: 4,
            title: "Wayang Kulit Semalam",
            category: "wayang",
            date: "28 Oktober 2023",
            price: "Rp 100.000",
            image: "event4.jpg"
        },
        {
            id: 5,
            title: "Baca Puisi & Diskusi",
            category: "puisi",
            date: "5 November 2023",
            price: "Rp 50.000",
            image: "event5.jpg"
        },
        {
            id: 6,
            title: "Teater Modern 'Hening'",
            category: "drama",
            date: "12 November 2023",
            price: "Rp 90.000",
            image: "event6.jpg"
        },
        {
            id: 7,
            title: "Orkestra Klasik",
            category: "music",
            date: "18 November 2023",
            price: "Rp 200.000",
            image: "event7.jpg"
        },
        {
            id: 8,
            title: "Wayang Orang",
            category: "wayang",
            date: "25 November 2023",
            price: "Rp 80.000",
            image: "event8.jpg"
        }
    ];

    const eventsContainer = document.getElementById('events-container');
    const navItems = document.querySelectorAll('.nav-item:not(.contact-item)');

    // Function to render events
    function renderEvents(category = 'all') {
        eventsContainer.innerHTML = '';
        
        const filteredEvents = category === 'all' 
            ? events 
            : events.filter(event => event.category === category);
        
        if (filteredEvents.length === 0) {
            eventsContainer.innerHTML = '<p class="no-events">Tidak ada pertunjukan dalam kategori ini.</p>';
            return;
        }
        
        filteredEvents.forEach(event => {
            const eventCard = document.createElement('div');
            eventCard.className = 'event-card';
            eventCard.innerHTML = `
                <div class="event-image">
                    <img src="images/${event.image}" alt="${event.title}">
                </div>
                <div class="event-details">
                    <span class="event-category">${event.category}</span>
                    <h3 class="event-title">${event.title}</h3>
                    <div class="event-date">
                        <i class="far fa-calendar-alt"></i>
                        <span>${event.date}</span>
                    </div>
                    <div class="event-price">
                        <span class="price">${event.price}</span>
                        <button class="book-btn">Pesan Tiket</button>
                    </div>
                </div>
            `;
            eventsContainer.appendChild(eventCard);
        });
    }

    // Initial render
    renderEvents();

    // Event filtering
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            // Update active state
            navItems.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
            
            // Filter events
            const category = this.getAttribute('data-category');
            renderEvents(category);
        });
    });

    // Contact item click handler
    document.querySelector('.contact-item').addEventListener('click', function() {
        alert('Silahkan hubungi kami di: info@aksesstudio.com');
    });

    // Book button functionality (would be enhanced in a real app)
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('book-btn')) {
            const eventCard = e.target.closest('.event-card');
            const eventTitle = eventCard.querySelector('.event-title').textContent;
            alert(`Anda akan memesan tiket untuk: ${eventTitle}`);
        }
    });
});