// Load configuration and initialize the site
let config = {};
let currentShelf = 'books';

// Fetch and load configuration
async function loadConfig() {
    try {
        const response = await fetch('config.json');
        config = await response.json();
        initializeSite();
    } catch (error) {
        console.error('Error loading config:', error);
    }
}

// Initialize the entire site from config
function initializeSite() {
    // Set page title and meta
    document.getElementById('site-title').textContent = config.site.title;
    if (config.site.description) {
        document.querySelector('meta[name="description"]')?.setAttribute('content', config.site.description);
    }

    // Update Open Graph and Twitter Card meta tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDesc = document.querySelector('meta[property="og:description"]');
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    const twitterDesc = document.querySelector('meta[name="twitter:description"]');

    if (ogTitle) ogTitle.setAttribute('content', config.site.title);
    if (ogDesc && config.site.description) ogDesc.setAttribute('content', config.site.description);
    if (twitterTitle) twitterTitle.setAttribute('content', config.site.title);
    if (twitterDesc && config.site.description) twitterDesc.setAttribute('content', config.site.description);

    // Set site name
    const siteNameElement = document.getElementById('site-name');
    if (siteNameElement) {
        siteNameElement.textContent = config.site.title;
    }


    // Populate navigation
    populateNavigation();

    // Populate social links
    populateSocialLinks();

    // Populate about section
    populateAboutSection();

    // Populate shelf sections
    populateShelf('books');
    populateShelf('podcasts');
    populateShelf('apps');

    // Set up event listeners
    setupEventListeners();

    // Apply initial filter after items are rendered
    setTimeout(() => {
        applyFilter();
    }, 100);

    // Handle section navigation
    setupSectionNavigation();

    // Handle site name click to scroll to top
    setupSiteNameClick();

    // Setup theme toggle
    setupThemeToggle();

    // Setup scroll to top button
    setupScrollToTop();
}

// Setup scroll to top button
function setupScrollToTop() {
    const scrollTopBtn = document.getElementById('scroll-top');

    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });

    // Scroll to top when clicked
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Setup theme toggle
function setupThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');

    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'light';
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
        // Show light_mode icon in dark mode (to switch to light)
        themeIcon.textContent = 'light_mode';
    } else {
        // Show dark_mode icon in light mode (to switch to dark)
        themeIcon.textContent = 'dark_mode';
    }

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');

        // Update icon: show light_mode in dark mode, dark_mode in light mode
        themeIcon.textContent = isDark ? 'light_mode' : 'dark_mode';

        // Save preference
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
}

// Populate navigation from config
function populateNavigation() {
    const nav = document.getElementById('main-nav');
    nav.innerHTML = config.navigation.map((item, index) => {
        const separator = index < config.navigation.length - 1 ? ' ' : '';
        return `<a href="${item.href}">${item.name}</a>${separator}`;
    }).join('');
}

// Populate social links from config
function populateSocialLinks() {
    const socialLinks = document.getElementById('social-links');
    socialLinks.innerHTML = config.social.map(link =>
        `<a href="${link.url}" target="_blank" rel="noopener noreferrer">${link.name}</a>`
    ).join('');
}

// Populate about section from config
function populateAboutSection() {
    const aboutSections = document.getElementById('about-sections');
    const sections = config.about.sections;

    let html = '';

    // Add intro paragraph if it exists
    if (config.about.intro) {
        const introParagraphs = config.about.intro.split('\n\n');
        html += introParagraphs.map(p => `<p class="intro-paragraph">${p}</p>`).join('');
    }

    // Add sections
    html += Object.keys(sections).map(key => {
        const section = sections[key];
        return `
            <p class="label">${section.title}</p>
            <ul>
                ${section.items.map(item => {
                    // Replace "Apple Ads" with hyperlink
                    const itemWithLink = item.replace(/Apple Ads/g, '<a href="https://ads.apple.com/" target="_blank" rel="noopener noreferrer">Apple Ads</a>');
                    return `<li>${itemWithLink}</li>`;
                }).join('')}
            </ul>
        `;
    }).join('');

    aboutSections.innerHTML = html;
}

// Setup section navigation
function setupSectionNavigation() {
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Setup site name click to scroll to top
function setupSiteNameClick() {
    const siteName = document.getElementById('site-name');
    if (siteName) {
        siteName.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// Fetch app info from iTunes API using JSONP (bypasses CORS)
function fetchAppInfo(appId) {
    return new Promise((resolve) => {
        try {
            const callbackName = `jsonp_callback_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
            
            window[callbackName] = function(data) {
                delete window[callbackName];
                if (script.parentNode) {
                    document.body.removeChild(script);
                }
                if (data && data.results && data.results.length > 0) {
                    const app = data.results[0];
                    // Use description as subtitle, truncate to first sentence or 100 chars
                    let subtitle = app.description || '';
                    if (subtitle) {
                        // Try to get first sentence, otherwise truncate to 100 chars
                        const firstSentence = subtitle.match(/^[^.!?]+[.!?]/);
                        subtitle = firstSentence ? firstSentence[0] : subtitle.substring(0, 100);
                    }
                    resolve({
                        artworkUrl: app.artworkUrl512 || app.artworkUrl100 || app.artworkUrl60 || null,
                        name: app.trackName || null,
                        subtitle: subtitle
                    });
                } else {
                    resolve(null);
                }
            };
            
            const script = document.createElement('script');
            script.src = `https://itunes.apple.com/lookup?id=${appId}&entity=software&callback=${callbackName}`;
            script.onerror = () => {
                delete window[callbackName];
                if (script.parentNode) {
                    document.body.removeChild(script);
                }
                resolve(null);
            };
            document.body.appendChild(script);
            
            // Timeout after 5 seconds
            setTimeout(() => {
                if (window[callbackName]) {
                    delete window[callbackName];
                    if (script.parentNode) {
                        document.body.removeChild(script);
                    }
                    resolve(null);
                }
            }, 5000);
        } catch (error) {
            console.warn('Failed to fetch app info:', error);
            resolve(null);
        }
    });
}

// Fetch podcast artwork from iTunes API using JSONP (bypasses CORS)
function fetchPodcastArtwork(podcastId) {
    return new Promise((resolve) => {
        try {
            const callbackName = `jsonp_callback_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
            
            window[callbackName] = function(data) {
                delete window[callbackName];
                if (script.parentNode) {
                    document.body.removeChild(script);
                }
                if (data && data.results && data.results.length > 0) {
                    const artworkUrl = data.results[0].artworkUrl600 || data.results[0].artworkUrl100;
                    resolve(artworkUrl || null);
                } else {
                    resolve(null);
                }
            };
            
            const script = document.createElement('script');
            script.src = `https://itunes.apple.com/lookup?id=${podcastId}&entity=podcast&callback=${callbackName}`;
            script.onerror = () => {
                delete window[callbackName];
                if (script.parentNode) {
                    document.body.removeChild(script);
                }
                resolve(null);
            };
            document.body.appendChild(script);
            
            // Timeout after 5 seconds
            setTimeout(() => {
                if (window[callbackName]) {
                    delete window[callbackName];
                    if (script.parentNode) {
                        document.body.removeChild(script);
                    }
                    resolve(null);
                }
            }, 5000);
        } catch (error) {
            console.warn('Failed to fetch podcast artwork:', error);
            resolve(null);
        }
    });
}

// Populate shelf content from config
function populateShelf(shelfType) {
    const items = config.shelf[shelfType];
    const listElement = document.getElementById(`${shelfType}-list`);

    if (!items || items.length === 0) {
        listElement.innerHTML = '<p>No items to display</p>';
        return;
    }

    // For podcasts and apps, try to fetch artwork URLs asynchronously (non-blocking)
    if (shelfType === 'podcasts') {
        // Render first with placeholders, then update as artwork loads
        renderShelfItems(shelfType, items);
        
        // Fetch artwork in background with delays to avoid rate limiting
        items.forEach((item, index) => {
            if (item.applePodcastsId && !item.coverImage) {
                // Add delay between requests to avoid rate limiting (500ms per request)
                setTimeout(() => {
                    fetchPodcastArtwork(item.applePodcastsId).then(artworkUrl => {
                        if (artworkUrl) {
                            item.coverImage = artworkUrl;
                            // Update the image src if it exists
                            const images = listElement.querySelectorAll('.item img');
                            if (images[index]) {
                                images[index].src = artworkUrl;
                            }
                        }
                    }).catch(err => {
                        console.warn(`Failed to fetch artwork for ${item.title}:`, err);
                    });
                }, index * 500); // Stagger requests by 500ms
            }
        });
    } else if (shelfType === 'apps') {
        // Render first with placeholders, then update as app info loads
        renderShelfItems(shelfType, items);
        
        // Fetch app info in background with delays to avoid rate limiting
        items.forEach((item, index) => {
            if (item.appStoreId && !item.coverImage) {
                // Add delay between requests to avoid rate limiting (500ms per request)
                setTimeout(() => {
                    fetchAppInfo(item.appStoreId).then(appInfo => {
                        if (appInfo) {
                            item.coverImage = appInfo.artworkUrl;
                            if (appInfo.name) {
                                item.title = appInfo.name;
                            }
                            if (appInfo.subtitle) {
                                item.subtitle = appInfo.subtitle;
                            }
                            // Update the image src if it exists
                            const images = listElement.querySelectorAll('.item img');
                            if (images[index] && appInfo.artworkUrl) {
                                images[index].src = appInfo.artworkUrl;
                            }
                            // Update title and subtitle if they exist
                            const itemElements = listElement.querySelectorAll('.item');
                            if (itemElements[index]) {
                                const titleElement = itemElements[index].querySelector('.item-title');
                                const metaElement = itemElements[index].querySelector('.item-meta');
                                if (titleElement && appInfo.name) {
                                    titleElement.textContent = appInfo.name;
                                }
                                if (metaElement && appInfo.subtitle) {
                                    metaElement.textContent = appInfo.subtitle.length > 60 
                                        ? appInfo.subtitle.substring(0, 60) + '...' 
                                        : appInfo.subtitle;
                                }
                            }
                        }
                    }).catch(err => {
                        console.warn(`Failed to fetch app info for ${item.title}:`, err);
                    });
                }, index * 500); // Stagger requests by 500ms
            }
        });
    } else {
        renderShelfItems(shelfType, items);
    }
}

// Render shelf items
function renderShelfItems(shelfType, items) {
    const listElement = document.getElementById(`${shelfType}-list`);

    // For podcasts, don't group by year - just render all items
    if (shelfType === 'podcasts') {
        let html = '<div class="year-items">';
        items.forEach(item => {
            const favoriteBadge = item.favorite ? '<div class="badge heart">❤</div>' : '';

            let metaInfo = item.host;

            // For podcasts, use coverImage (fetched from iTunes API in populateShelf)
            let coverImage;
            let isPodcast = true;
            if (item.coverImage) {
                coverImage = item.coverImage;
            } else if (item.applePodcastsId) {
                // Fallback: construct iTunes artwork URL (may not always work)
                coverImage = `https://is1-ssl.mzstatic.com/image/thumb/Podcasts116/v4/8a/0c/0e/8a0c0e5e-0b5e-5b5e-5b5e-5b5e5b5e5b5e/mza_1234567890.jpg/600x600bb.jpg`;
            } else {
                coverImage = 'https://via.placeholder.com/200x200?text=No+Cover';
            }
            const placeholderImage = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2VlZSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5ObyBDb3ZlcjwvdGV4dD48L3N2Zz4=';

            html += `
                <div class="item" data-rating="${item.rating}" data-favorite="${item.favorite}" title="${item.title}">
                    <div class="item-cover podcast-cover">
                        <img src="${coverImage}" alt="${item.title}" loading="lazy" onerror="this.onerror=null; this.src='${placeholderImage}';">
                    </div>
                    <div class="item-badges">
                        ${favoriteBadge}
                    </div>
                    <div class="item-info">
                        <div class="item-title">${item.title}</div>
                        <div class="item-meta">${metaInfo}</div>
                    </div>
                </div>
            `;
        });
        
        html += `</div>`;
        listElement.innerHTML = html;
    } else if (shelfType === 'apps') {
        // For apps, don't group by year - just render all items
        let html = '<div class="year-items">';
        items.forEach(item => {
            const favoriteBadge = item.favorite ? '<div class="badge heart">❤</div>' : '';

            // Truncate subtitle if too long
            let metaInfo = item.subtitle 
                ? (item.subtitle.length > 60 ? item.subtitle.substring(0, 60) + '...' : item.subtitle)
                : '';

            // For apps, use coverImage (fetched from iTunes API in populateShelf)
            let coverImage;
            if (item.coverImage) {
                coverImage = item.coverImage;
            } else if (item.appStoreId) {
                // Fallback: construct iTunes artwork URL (may not always work)
                coverImage = `https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/00/00/00/00000000-0000-0000-0000-000000000000/mzl.placeholder.png/512x512bb.jpg`;
            } else {
                coverImage = 'https://via.placeholder.com/200x200?text=No+Icon';
            }
            const placeholderImage = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2VlZSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5ObyBJY29uPC90ZXh0Pjwvc3ZnPg==';

            html += `
                <div class="item" data-favorite="${item.favorite}" title="${item.title}">
                    <div class="item-cover app-cover">
                        <img src="${coverImage}" alt="${item.title}" loading="lazy" onerror="this.onerror=null; this.src='${placeholderImage}';">
                    </div>
                    <div class="item-badges">
                        ${favoriteBadge}
                    </div>
                    <div class="item-info">
                        <div class="item-title">${item.title}</div>
                        <div class="item-meta">${metaInfo}</div>
                    </div>
                </div>
            `;
        });
        
        html += `</div>`;
        listElement.innerHTML = html;
    } else {
        // For books, group by year
        const itemsByYear = {};
        items.forEach(item => {
            if (!itemsByYear[item.year]) {
                itemsByYear[item.year] = [];
            }
            itemsByYear[item.year].push(item);
        });

        // Sort years in descending order
        const years = Object.keys(itemsByYear).sort((a, b) => parseInt(b) - parseInt(a));

        // Render items grouped by year
        let html = '';
        years.forEach(year => {
            // Add year header
            html += `<div class="year-group"><h3 class="year-header">${year}</h3><div class="year-items">`;
            
            // Render items for this year
            itemsByYear[year].forEach(item => {
                const favoriteBadge = item.favorite ? '<div class="badge heart">❤</div>' : '';

                let metaInfo = item.author;

                // Use Open Library API if OLID or ISBN is available, otherwise use coverImage or placeholder
                let coverImage;
                let isPodcast = false;
                if (item.olid) {
                    // Use OLID (Open Library ID) for covers
                    coverImage = `https://covers.openlibrary.org/b/olid/${item.olid}-M.jpg?default=false`;
                } else if (item.isbn) {
                    // Use ISBN for covers
                    coverImage = `https://covers.openlibrary.org/b/isbn/${item.isbn}-M.jpg?default=false`;
                } else if (item.coverImage) {
                    coverImage = item.coverImage;
                } else {
                    coverImage = 'https://via.placeholder.com/200x300?text=No+Cover';
                }
                const placeholderImage = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iI2VlZSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5ObyBDb3ZlcjwvdGV4dD48L3N2Zz4=';

                html += `
                    <div class="item" data-year="${item.year}" data-rating="${item.rating}" data-favorite="${item.favorite}" title="${item.title}">
                        <div class="item-cover">
                            <img src="${coverImage}" alt="${item.title}" loading="lazy" onerror="this.onerror=null; this.src='${placeholderImage}';">
                        </div>
                        <div class="item-badges">
                            ${favoriteBadge}
                        </div>
                        <div class="item-info">
                            <div class="item-title">${item.title}</div>
                            <div class="item-meta">${metaInfo}</div>
                        </div>
                    </div>
                `;
            });
            
            html += `</div></div>`;
        });

        listElement.innerHTML = html;
    }
    
    // Add error handlers to all images after rendering
    setTimeout(() => {
        const images = listElement.querySelectorAll('img');
        images.forEach(img => {
            img.addEventListener('error', function() {
                // Use square placeholder for podcasts and apps, rectangular for books
                const itemCover = this.closest('.item-cover');
                const isSquareCover = itemCover?.classList.contains('podcast-cover') || itemCover?.classList.contains('app-cover');
                const placeholderImage = isSquareCover
                    ? 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2VlZSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5ObyBDb3ZlcjwvdGV4dD48L3N2Zz4='
                    : 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iI2VlZSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5ObyBDb3ZlcjwvdGV4dD48L3N2Zz4=';
                this.src = placeholderImage;
            });
        });
    }, 100);
}

// Set up event listeners
function setupEventListeners() {
    // Tab switching
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all tabs and content
            tabButtons.forEach(btn => btn.classList.remove('active'));
            document.querySelectorAll('.shelf-content').forEach(content =>
                content.classList.remove('active')
            );

            // Add active class to clicked tab and corresponding content
            button.classList.add('active');
            const shelfType = button.dataset.shelf;
            document.getElementById(`${shelfType}-shelf`).classList.add('active');
            currentShelf = shelfType;

            // Reapply current filter when switching tabs
            applyFilter();
        });
    });

    // Filter switching
    const filterButtons = document.querySelectorAll('.filter-button');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all filter buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked filter button
            button.classList.add('active');
            // Apply filter
            applyFilter();
        });
    });
}

// Apply filter to current shelf
function applyFilter() {
    const activeFilter = document.querySelector('.filter-button.active')?.dataset.filter || 'all';
    const activeShelf = document.querySelector('.shelf-content.active');
    
    if (!activeShelf) return;
    
    const items = activeShelf.querySelectorAll('.item');
    
    items.forEach(item => {
        if (activeFilter === 'favorites') {
            const isFavorite = item.dataset.favorite === 'true';
            item.style.display = isFavorite ? '' : 'none';
        } else {
            // Show all items
            item.style.display = '';
        }
    });
}

// Initialize the site when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadConfig);
} else {
    loadConfig();
}
