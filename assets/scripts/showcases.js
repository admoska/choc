console.log("--- showcases.js file has started parsing ---");

document.addEventListener("DOMContentLoaded", () => {
  console.log("showcases.js script loaded and DOMContentLoaded fired.");

  const videoIds = [
    "9hedjripwn4",
    "I9Fr20rSte8",
    "lGjsRm3E9Qw",
    "ckWh72cyc6U",
    "MBFqVO8ngEo",
    "TAzdaOBE4Gc",
    "ZSLnMkOh9EE",
  ];

  const showcasesGrid = document.querySelector(".showcases-grid");
  let scrollInterval;
  const scrollSpeed = 1; // Pixels per interval
  const intervalTime = 20; // Milliseconds

  if (!showcasesGrid) {
    console.error(
      "Error: .showcases-grid element not found. Check / structure or script loading order."
    );
    return; // Exit if element not found
  }
  console.log("Found showcases-grid element:", showcasesGrid);

  videoIds.forEach((id) => {
    const card = document.createElement("div");
    card.classList.add("showcase-card");

    const youtubePlaceholder = document.createElement("div");
    youtubePlaceholder.classList.add("youtube-placeholder");
    youtubePlaceholder.setAttribute("data-id", id);

    const thumbnailUrl = `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
    const thumbnailImg = document.createElement("img");
    thumbnailImg.src = thumbnailUrl;
    thumbnailImg.alt = `YouTube Thumbnail for video ID: ${id}`;

    const playButton = document.createElement("div");
    playButton.classList.add("play-button");
    playButton.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M8 5v14l11-7z"/>
      </svg>
    `;

    youtubePlaceholder.appendChild(thumbnailImg);
    youtubePlaceholder.appendChild(playButton);
    card.appendChild(youtubePlaceholder);

    youtubePlaceholder.addEventListener("click", function () {
      const videoId = this.getAttribute("data-id");
      const iframe = document.createElement("iframe");
      iframe.setAttribute(
        "src",
        `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`
      );
      iframe.setAttribute("frameborder", "0");
      iframe.setAttribute(
        "allow",
        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      );
      iframe.setAttribute("allowfullscreen", "");
      iframe.setAttribute("loading", "lazy"); // Improve performance
      iframe.classList.add("showcase-iframe"); // Add class for CSS styling

      this.parentNode.replaceChild(iframe, this); // Replace the placeholder with the iframe
    });

    showcasesGrid.appendChild(card);
  });
  console.log(`Successfully added ${videoIds.length} showcase cards.`);

  // Auto-scrolling logic
  const startScrolling = () => {
    if (scrollInterval) clearInterval(scrollInterval); // Clear any existing interval
    scrollInterval = setInterval(() => {
      if (
        showcasesGrid.scrollLeft + showcasesGrid.clientWidth >=
        showcasesGrid.scrollWidth
      ) {
        // If at the end, reset to beginning (or slightly after to avoid flicker)
        showcasesGrid.scrollLeft = 0;
      } else {
        showcasesGrid.scrollLeft += scrollSpeed;
      }
    }, intervalTime);
  };

  const stopScrolling = () => {
    clearInterval(scrollInterval);
  };

  // Start scrolling initially
  startScrolling();

  // Pause on hover, resume on mouse out
  showcasesGrid.addEventListener("mouseenter", stopScrolling);
  showcasesGrid.addEventListener("mouseleave", startScrolling);
});
