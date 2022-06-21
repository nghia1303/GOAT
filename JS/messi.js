document.addEventListener("click", e => {
  const isDropdownButton = e.target.matches("[data-dropdown-button]")
  if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return

  let currentDropdown
  if (isDropdownButton) {
    currentDropdown = e.target.closest("[data-dropdown]")
    currentDropdown.classList.toggle("active")
  }

  document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
    if (dropdown === currentDropdown) return
    dropdown.classList.remove("active")
  })
})


let container = {
  "news": [
    {
      "title": "LEO HITS FIVE IN WIN OVER ESTONIA",
      "body": "REPOKER DE LEO ANTE ESTONIA Argentina venció por 5-0 a Estonia en El Sadar de Pamplona (España) en partido amistoso de preparación para el Mundial […]"

    },
    {
      "title": "ARGENTINA CLAIM FINALISSIMA 2022 CROWN",
      "body": "The Albiceleste ran out 3-0 winners over the Azzurri at Wembley. Leo captained Argentina and set them on their way […]"
    },
    {
      "title": "LEO BAGS ASSIST IN PSG ROUT",
      "body": "Leo Messi registered an assist as the Parisian outfit ran out 5-0 winners over Metz at the Parc des Princes […]"
    },
    {
      "title": "LEO HAS ALL EYES ON THE FINALISSIMA",
      "body": "As defending Copa América champions, Leo Messi’s Argentina will take on the current European Championship holders Italy on Wednesday at […]"
    },
    {
      "title": "LEO SET FOR LAST LEAGUE OUTING OF SEASON",
      "body": "Leo Messi and his PSG teammates face Metz at the Parc des Princes in the final matchday of the Ligue […]"
    }
  ]
}
sessionStorage.setItem('container', JSON.stringify(container));
const example = JSON.parse(sessionStorage.container);
console.log(example);