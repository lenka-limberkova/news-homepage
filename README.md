# Frontend Mentor - News homepage solution

This is a solution to the [News homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- Open and close a mobile navigation menu via a hamburger icon

### Screenshot

![](/design/screenshots/desktop.png)

![](/design/screenshots/mobile.png)


### Links

- Solution URL: https://github.com/lenka-limberkova/news-homepage
- Live Site URL: https://lenka-limberkova.github.io/news-homepage/

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties (colors, fonts, font weights defined in `:root`)
- CSS Grid for the main page layout (`grid-template-areas`)
- Flexbox for component-level layout (nav, cards, buttons)
- `clamp()` for fluid, responsive typography and spacing
- A single responsive breakpoint at `920px` switching from a 3-column grid to a single-column stacked layout
- Vanilla JavaScript (no frameworks/libraries) for the mobile navigation menu (open/close on hamburger click, close button, and click-outside via an overlay)
- Google Fonts (Inter)

### What I learned

This project's mobile menu is handled with plain JavaScript using `classList.add`/`remove` to toggle an `.open` class, combined with a CSS `transition` on `transform` for the slide-in animation:

```js
hamburger.addEventListener("click", function () {
    mobileNav.classList.add("open");
    blackBlur.classList.add("open");
});
```

```css
.mobile-nav {
    transform: translateX(100%);
    transition: transform 0.3s ease;
}

.mobile-nav.open {
    transform: translateX(0);
}
```

A dedicated `.blur` overlay element is used both to dim the background and to catch clicks for closing the menu, which keeps the click-outside-to-close logic simple (no need to check click targets against the nav element).

### Continued development

- Keep learning JavaScript - this project only uses vanilla JS for a simple menu toggle, and I'd like to get more comfortable writing more complex, interactive logic
- Get a better understanding of responsive design - I want to move beyond just copying breakpoints and really understand *why* certain approaches (fluid units like `clamp()`, `grid-template-areas` changes, mobile-first vs. desktop-first) work the way they do
- Add `:focus` styles alongside the existing `:hover` styles so keyboard users get the same visual feedback (currently only hover states are defined for links and the button)
- Consider replacing the two separate `<img>` elements for desktop/mobile hero images (toggled via CSS `display`) with a `<picture>` element, so the browser only downloads the image it actually needs

