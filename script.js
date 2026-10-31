// =================================
// NEXORA APPLICATION MANAGER
// =================================

const NEXORA_APPS = {
    docs: {
        name: "NEXORA Docs",
        location: "docs/index.html",
        installed: false
    }
};

// Check whether the actual Docs application exists.
async function checkDocsInstallation() {
    const status = document.getElementById("docsStatus");
    const button = document.getElementById("docsButton");

    try {
        const response = await fetch(
            NEXORA_APPS.docs.location,
            { method: "GET" }
        );

        NEXORA_APPS.docs.installed = response.ok;

    } catch (error) {
        NEXORA_APPS.docs.installed = false;
    }

    if (NEXORA_APPS.docs.installed) {
        status.textContent = "Installed and ready!";
        button.textContent = "Open Docs";

        // Only show the welcome popup if Docs exists.
        document.getElementById("docsWelcome").style.display = "flex";

    } else {
        status.textContent = "Feature Unavailable";
        button.textContent = "Feature Unavailable";
    }
}

// Open Docs
function openDocs() {
    if (!NEXORA_APPS.docs.installed) {
        document.getElementById("docsStatus").textContent =
            "Feature Unavailable";

        return;
    }

    window.location.href = NEXORA_APPS.docs.location;
}

// Close popup
function closeDocsPopup() {
    document.getElementById("docsWelcome").style.display = "none";
}

// Check on startup
document.addEventListener("DOMContentLoaded", () => {
    checkDocsInstallation();
});
