// Function to switch match streams
function changeMatch(matchNumber) {
    document.getElementById("liveStream").src = "https://amartechbd.xyz/toffeebd/?play=match-" + matchNumber;
}

// Dark Mode Toggle
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

// Like Button
function toggleLike() {
    let likeBtn = document.getElementById("likeBtn");
    let likeCount = document.getElementById("likeCount");
    let currentLikes = parseInt(localStorage.getItem("likes") || 0);

    if (likeBtn.classList.contains("liked")) {
        currentLikes--;
        likeBtn.classList.remove("liked");
    } else {
        currentLikes++;
        likeBtn.classList.add("liked");
    }

    localStorage.setItem("likes", currentLikes);
    likeCount.textContent = currentLikes;
}

// Floating & Pop-up Ads
setTimeout(() => { document.getElementById("stickyAd").style.display = "block"; }, 5000);
setTimeout(() => { document.getElementById("popupAd").style.display = "block"; }, 10000);

function closeAd() { document.getElementById("stickyAd").style.display = "none"; }
function closePopup() { document.getElementById("popupAd").style.display = "none"; }

// Refresh Ads Every 30 Seconds
setInterval(() => { document.getElementById("bannerAd").contentWindow.location.reload(); }, 30000);
