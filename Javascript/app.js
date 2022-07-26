// All of the data is available on the global `window` object.
const { products, categories } = window;

// global variables (arrays)
var menApparelArr = [];
var womenApparelArr = [];
var childrenApparelArr = [];

var i = 0;
// looping through every product and pushing it into their appropriate category arrays
for (i = 0; i < products.length; i++) 
{
  products[i].categories.forEach((e) => 
  {
    if (e === "P1" && !products[i].discontinued) 
    {
      menApparelArr.push(products[i]);
    } else if (e === "P2" && !products[i].discontinued) 
    {
      womenApparelArr.push(products[i]);
    } else if (e === "P3" && !products[i].discontinued) 
    {
      childrenApparelArr.push(products[i]);
    }
  });
}

// here, navbar is dynamically created
var nav = document.getElementById("menu");

for (i = 0; i < categories.length; i++) 
{
  // creating nav item for the nav bar of type, "button"
  var navItem;
  navItem = document.createElement("button");
  navItem.textContent = categories[i].name;

  navItem.id = categories[i].name;
  // appending the nav item to the nav bar
  nav.appendChild(navItem);
}

// logs the description of an individual product which is clicked by the user to the console
function logger(category) 
{
  // fetching all the rows of particular category table
  let allTheRows;
  allTheRows = document.querySelector("table").rows;

  if (category === "P1") {
    for (let i = 0; i <= menApparelArr.length; i++) 
    {
      // upon clicking a particular row of a table, it will log the description of the product to the console.
      allTheRows[i].addEventListener("click", function () 
      {
        console.log(menApparelArr[i - 1].description);
      });
    }
  } else if (category === "P2") {
    for (let i = 0; i <= womenApparelArr.length; i++) {
      allTheRows[i].addEventListener("click", function () 
      {
        console.log(womenApparelArr[i - 1].description);
      });
    }
  } 
  else if (category === "P3") 
  {
    for (let i = 0; i <= childrenApparelArr.length; i++) 
    {
      allTheRows[i].addEventListener("click", function () 
      {
        console.log(childrenApparelArr[i - 1].description);
      });
    }
  }
}

// When the user clicks on the navbar, the page will change to the clicked category table
let NavItems = document.querySelectorAll("#menu button");

for (let i = 0; i < NavItems.length; i++) 
{
  NavItems[i].addEventListener("click", function () 
  {
    // switch the category table based upon the user's nav item selection
    showProductsBasedOnCategory(NavItems[i].textContent);
  });
}

// creating rows and columns of the table
function createTableCells(category) 
{
  var tableBod;
  tableBod = document.getElementById("category-products");

  // finding the selected category by looping through the categories array
  for (let i = 0; i < categories.length; i++) {
    if (categories[i].id === category || categories[i].name === category) 
    {
      document.getElementById("selected-category").innerText = categories[i].name;
    }
  }

  let prodSize = products.length;

  for (let i = 0; i < prodSize; i++) 
  {
    document.createElement("tr");

    products[i].categories.forEach((e) => 
    {
      if (e === category && !products[i].discontinued) 
      {
        let nRow = tableBod.insertRow();
        let nCell = nRow.insertCell();

        // title column for the row
        nCell.appendChild(document.createTextNode(products[i].title));

        // description column for the row
        nCell = nRow.insertCell();
        nCell.appendChild(document.createTextNode(products[i].description));

        // price column for the row
        nCell = nRow.insertCell();

        let currencyFormatted;
        currencyFormatted = document.createTextNode(
          (products[i].price / 100).toLocaleString("en-CA", { currency: "CAD", style: "currency" })
        );

        nCell.appendChild(currencyFormatted);
      }
    });
  }
}

// function to call the functions when nav item is changed
function callFunctions(category) 
{
  createTableCells(category);
  logger(category);
}

// based upon the category chosen, show the products in the table
function showProductsBasedOnCategory(cat) 
{
  let tableBod;
  tableBod = document.getElementById("category-products");

  // clearing the table content
  tableBod.innerHTML = "";

  var category;
  for (let i = 0; i < categories.length; i++) 
  {
    if (categories[i].id === cat || categories[i].name === cat) 
    {
      category = categories[i].id;
    }
  }
  callFunctions(category);
}

// by default, Men's category would be displayed to the user
document.getElementById("selected-category").textContent = "Men";

createTableCells("P1");
logger("P1");