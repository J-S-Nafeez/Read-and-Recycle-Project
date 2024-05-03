function myfun() {
    const searchText = document.getElementById("mylocation").value.toLowerCase().trim(); // Trim spaces from search text
    const divs = document.querySelectorAll(".box");
  
    for (const div of divs) {
      const address = div.querySelector("p").textContent.toLowerCase().trim(); // Trim spaces from address
      if (address.includes(searchText)) {
        div.style.display = "block";
      } else {
        div.style.display = "none";
      }
    }
  }

  document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      myfun();
    }
  });
