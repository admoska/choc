document.addEventListener("DOMContentLoaded", async () => {
  let dlink; // Declare dlink globally within this script's scope

  async function runfirst() {
    const response = await fetch(
      "https://download.getvelocity.live/api/status"
    );
    const data = await response.json();
    const version = data.currentVelocityVersion;
    const versionElement = document.getElementById("version");
    const downloadLink = data.downloadlink;
    dlink = downloadLink; // Assign to the dlink variable
    const announcement = data.announcement;
    const announcementElement = document.getElementById("announcement");
    const downloadVelocityButton = document.getElementById(
      "download-velocity-button"
    );
    const changelogContentElement = document.getElementById(
      "changelog-content-text"
    );

    // Populate the changelog content
    if (changelogContentElement && data.changeLog) {
      changelogContentElement.textContent = data.changeLog;
    } else if (changelogContentElement) {
      changelogContentElement.textContent = "Changelog not available.";
    }
    if (announcement && announcement.enabled) {
      announcementElement.innerText = announcement.content;
      announcementElement.classList.add("announcement-banner"); // Add the CSS class
      announcementElement.style.display = ""; // Ensure it's displayed
    } else {
      if (announcementElement) {
        announcementElement.style.display = "none";
      }
    }

    // Update the "Download Velocity" button text
    if (downloadVelocityButton) {
      downloadVelocityButton.innerHTML = `
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="icon"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" x2="12" y1="15" y2="3" />
        </svg>
        Download (v${version})
      `;
    }

    try {
      const weaoresponse = await fetch(
        "https://weao.xyz/api/status/exploits/velocity",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "User-Agent": "WEAO-3PService",
          },
        }
      );
      const weaodata = await weaoresponse.json();

      if (versionElement) {
        versionElement.innerHTML = `Version ${version} | <a href="https://datad.weao.xyz/?channel=LIVE&binaryType=WindowsPlayer&version=${
          weaodata.rbxversion.split("-")[1]
        }&compressZip=true&compressionLevel=9" style="color: var(--gray-300)">Roblox ${
          weaodata.rbxversion
        }</a>`;
      }

      const statusIndicator = document.getElementById("statusindicator");
      if (statusIndicator) {
        if (weaodata.updateStatus === false) {
          statusIndicator.style.backgroundColor = "red";
        } else {
          statusIndicator.style.backgroundColor = "green"; // Assuming green for true/working status
        }
      }

      // Update the "Download Roblox" link
      const downloadRobloxLink = document.getElementById(
        "download-roblox-link"
      );
      if (downloadRobloxLink) {
        downloadRobloxLink.href = `https://datad.weao.xyz/?channel=LIVE&binaryType=WindowsPlayer&version=${
          weaodata.rbxversion.split("-")[1]
        }&compressZip=true&compressionLevel=9`;
      }
    } catch (e) {
      console.error("Error fetching WEAO data:", e);
      if (versionElement) {
        versionElement.innerText = `Version ${version}`;
      }
      const statusIndicator = document.getElementById("statusindicator");
      if (statusIndicator) {
        statusIndicator.style.backgroundColor = "orange"; // Indicate error/unknown status
      }
    }
  }

  runfirst();
});
