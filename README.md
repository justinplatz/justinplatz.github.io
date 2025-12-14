# Justin Platz - Personal Website

A minimalist, config-driven personal website inspired by Drew Coffman's design aesthetic. Features an About section showcasing professional background and a visual Shelf section displaying books, movies, and TV shows with cover art.

## Features

- **Fully config-driven**: All content is managed through `config.json`
- **Dark mode**: Toggle between light and dark themes with persistent preference
- **Minimalist design**: Clean, text-forward aesthetic inspired by Drew Coffman
- **Visual shelf**: Beautiful grid layout with book covers and movie/TV posters
- **Responsive layout**: Works beautifully on desktop and mobile
- **Interactive filtering**: Sort by year or rating, filter favorites
- **No hard-coded content**: Easy to customize without touching HTML/CSS/JS
- **SEO optimized**: Includes Open Graph and Twitter Card meta tags

## Structure

```
personalwebsite/
├── index.html          # Main HTML structure
├── config.json         # All site content and configuration
├── css/
│   └── style.css       # Minimalist styling
├── js/
│   └── app.js          # Dynamic content loading and filtering
└── README.md           # This file
```

## Customization

All customization is done through `config.json`. Here's what you can configure:

### Site Settings
- `site.title`: Your name or site title
- `site.description`: Site meta description
- `site.symbol`: A symbol/emoji to represent you

### Navigation
- Add/remove navigation items
- Configure links

### Social Links
- Add your LinkedIn, GitHub, or other social profiles
- Customize the icon text

### About Section
- `headerImage`: Optional URL to a header/hero image (leave empty string "" if you don't want one)
- `now`: Current activities and interests
- `previously`: Past experiences
- `lore`: Notable achievements or fun facts

### Shelf Content

#### Books
Each book can have:
- `title`: Book title
- `author`: Author name
- `year`: Publication year
- `rating`: 1-5 star rating
- `review`: Your thoughts on the book
- `favorite`: true/false to mark favorites with a ❤ badge
- `coverImage`: URL to book cover image (required for visual grid display)
- `isbn`: ISBN number (optional)

#### Movies
Each movie can have:
- `title`: Movie title
- `director`: Director name
- `year`: Release year
- `rating`: 1-5 star rating
- `review`: Your thoughts on the movie
- `favorite`: true/false to mark favorites with a ❤ badge
- `coverImage`: URL to movie poster image (required for visual grid display)

#### TV Shows
Each TV show can have:
- `title`: Show title
- `creator`: Creator name
- `year`: Release year
- `rating`: 1-5 star rating
- `review`: Your thoughts on the show
- `favorite`: true/false to mark favorites with a ❤ badge
- `coverImage`: URL to show poster image (required for visual grid display)

## Usage

### Local Development

1. Simply open `index.html` in your web browser
2. Or use a local server:
   ```bash
   # Python 3
   python -m http.server 8000

   # Node.js
   npx serve
   ```

3. Open `http://localhost:8000` in your browser

### Editing Content

1. Open `config.json` in your favorite text editor
2. Update any content (name, social links, books, movies, etc.)
3. Save the file
4. Refresh your browser to see changes

### Adding Items to Your Shelf

To add a new book:
```json
{
  "title": "New Book Title",
  "author": "Author Name",
  "year": 2024,
  "rating": 5,
  "review": "Your review here",
  "favorite": true,
  "coverImage": "https://example.com/book-cover.jpg"
}
```

To add a new movie:
```json
{
  "title": "Movie Title",
  "director": "Director Name",
  "year": 2024,
  "rating": 5,
  "review": "Your review here",
  "favorite": true,
  "coverImage": "https://example.com/movie-poster.jpg"
}
```

To add a new TV show:
```json
{
  "title": "TV Show Title",
  "creator": "Creator Name",
  "year": 2024,
  "rating": 5,
  "review": "Your review here",
  "favorite": true,
  "coverImage": "https://example.com/show-poster.jpg"
}
```

**Note:** You can find cover images from sources like:
- Goodreads (for books)
- IMDb or The Movie Database (for movies/TV shows)
- Google Images (search for "[title] cover" or "[title] poster")

## Deployment

You can deploy this site to any static hosting service:

- **GitHub Pages**: Commit to a repository and enable GitHub Pages
- **Netlify**: Drag and drop the folder
- **Vercel**: Connect your GitHub repository
- **Cloudflare Pages**: Deploy via Git integration

## Credits

Design inspired by [Drew Coffman's personal website](https://drewcoffman.com/).
