function showGallery() {
    const gallery = document.getElementById("gallery");

    if (gallery.classList.contains("hidden")) {
        gallery.classList.remove("hidden");
    } else {
        gallery.classList.add("hidden");
    }
} 