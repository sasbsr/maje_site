function openTab(tabName) {
    // Hide all tabs
    document.getElementById('about').style.display = 'none';
    document.getElementById('collections').style.display = 'none';
    document.getElementById('experience').style.display = 'none';

    // Show the selected tab
    document.getElementById(tabName).style.display = 'block';
}