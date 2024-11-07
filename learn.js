document.getElementById('searchBtn').addEventListener('click', function() {
    const query = document.getElementById('searchBar').value.toLowerCase();

    // Dummy data for related videos (replace with real API calls)
    const relatedVideos = [
        { title: "Course Introduction", url: "https://www.youtube.com/embed/example1" },
        { title: "Advanced Concepts", url: "https://www.youtube.com/embed/example2" },
        { title: "Final Project Walkthrough", url: "https://www.youtube.com/embed/example3" }
    ];

    // Clear existing videos
    const videoContainer = document.getElementById('videoContainer');
    videoContainer.innerHTML = '';

    // Filter videos based on the search query
    const filteredVideos = relatedVideos.filter(video => 
        video.title.toLowerCase().includes(query)
    );

    // Check if any videos match the search query
    if (filteredVideos.length === 0) {
        videoContainer.innerHTML = '<p>No videos found for your search.</p>';
        return;
    }

    // Display related videos
    filteredVideos.forEach(video => {
        const videoElement = document.createElement('iframe');
        videoElement.src = video.url;
        videoElement.width = "560";
        videoElement.height = "315";
        videoElement.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
        videoElement.allowFullscreen = true;

        const titleElement = document.createElement('h3');
        titleElement.textContent = video.title;

        // Append title and video element to the container
        videoContainer.appendChild(titleElement);
        videoContainer.appendChild(videoElement);
    });
});

