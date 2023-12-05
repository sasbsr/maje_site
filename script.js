function openTab(tabName) { 
    // Hide all tabs
  if(document.getElementById('about').style.display == 'none'&&
    document.getElementById('collections').style.display == 'none'&&
    document.getElementById('experience').style.display == 'none'&&
    document.getElementById('information').style.display == 'none'){
        document.getElementById('about').style.display == 'block'
    }
  
  document.getElementById('about').style.display = 'none';
    document.getElementById('collections').style.display = 'none';
    document.getElementById('experience').style.display = 'none';
    document.getElementById('information').style.display = 'none';

    // Show the selected tab
    document.getElementById(tabName).style.display = 'block';
  
}
window.onload = function() {
  openTab('about');
};