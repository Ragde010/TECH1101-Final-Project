

window.addEventListener('scroll', function() {
  const nav = document.querySelector('nav');
  const scrollPosition = window.scrollY;
  if (scrollPosition >= nav.offsetTop) {
    nav.classList.add('sticky');
    nav.style.backgroundColor = 'transparent';
    nav.style.width = '100%'; 
  } else {
    nav.classList.remove('sticky');
    nav.style.backgroundColor = 'white';
    nav.style.width = '100%'; 
  }
});
  
    var year = new Date().getFullYear();
         document.querySelector('.footer-text').innerHTML = '&copy; Green Thumb Landscaping | Created ' + year;

  function calculate() {
    // Get the input values
    var yardSize = parseFloat(document.getElementById("yard-size").value);
    var landscapeMaintenance = parseFloat(document.getElementById("landscape-maintenance").value);
    var treatmentFertilization = parseFloat(document.getElementById("treatment-fertilization").value);  
    var lawnThatching = parseFloat(document.getElementById("lawn-thatching").value);
    var grassCutting = parseFloat(document.getElementById("grass-cutting").value);
    var mulching = parseFloat(document.getElementById("mulching").value);
    var seeding = parseFloat(document.getElementById("seeding").value);
    var aeration = parseFloat(document.getElementById("aeration").value);
    var treeInspections = parseFloat(document.getElementById("tree-inspections").value);
    var treeTrimming = parseFloat(document.getElementById("tree-trimming").value);
    var shrubPruning = parseFloat(document.getElementById("shrub-pruning").value);
    var weedManagement = parseFloat(document.getElementById("weed-management").value);
    var treeRemoval = parseFloat(document.getElementById("tree-removal").value);

// Calculate the estimate
    var maintenanceCost = landscapeMaintenance * 10;
    var treatmentCost = yardSize * treatmentFertilization;
    var lawnThatchingCost = yardSize * lawnThatching;
    var grassCuttingCost = yardSize * grassCutting;
    var mulchingCost = yardSize * mulching;
    var seedingCost = yardSize * seeding;
    var aerationCost = yardSize * aeration;
    var treeInspectionsCost = treeInspections * 5;
    var treeTrimmingCost = treeTrimming * 40;
    var shrubPruningCost = shrubPruning * 10;
    var weedManagementCost = weedManagement * 10;
    var treeRemovalCost = treeRemoval * 80;

    var totalEstimate = maintenanceCost + treatmentCost + lawnThatchingCost + grassCuttingCost + mulchingCost + seedingCost + aerationCost + treeInspectionsCost + treeTrimmingCost + shrubPruningCost + weedManagementCost + treeRemovalCost;

// Display the estimate
document.getElementById("total-estimate").textContent = "$" + totalEstimate.toFixed(2);
document.getElementById("estimate-form").reset();
}
document.getElementById("estimate-button").addEventListener("click", function(event) {
  event.preventDefault();
  calculate();
});
