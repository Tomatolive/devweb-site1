document.getElementById("toggle-stock-button").addEventListener("click", function() {
    var stockColumn = document.getElementById("stock");
    var stockCells = document.querySelectorAll("#produit tbody td:nth-child(3)");

    if (stockColumn.classList.contains("cache")) {
        stockColumn.classList.remove("cache");
        stockCells.forEach(function(cell) {
            cell.classList.remove("cache");
        });
    } else {
        stockColumn.classList.add("cache");
        stockCells.forEach(function(cell) {
            cell.classList.add("cache");
        });
    }
});
