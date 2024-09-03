const productContainer = document.getElementById("repeatable-items");
const inStock = document.getElementById("stock");
const byName = document.getElementById("byName");
const myform = document.getElementById("myForm");

let arrayTemp = [...jsonDatas];

setup();
printItems(jsonDatas);

function setup() {
  const translatedType = {
    car: "Voiture",
    house: "Maison",
    game: "Jeu",
    videoGame: "Jeux Vidéos",
    show: "Spectacle",
  };

  for (let i = 0; i < jsonDatas.length; i++) {
    switch (jsonDatas[i].type) {
      case "car":
        jsonDatas[i].translatedType = translatedType.car;
        break;
      case "house":
        jsonDatas[i].translatedType = translatedType.house;
        break;
      case "game":
        jsonDatas[i].translatedType = translatedType.game;
        break;
      case "videoGame":
        jsonDatas[i].translatedType = translatedType.videoGame;
        break;
      case "show":
        jsonDatas[i].translatedType = translatedType.show;
        break;
      default:
        jsonDatas[i].translatedType = "";
        break;
    }

    console.log(jsonDatas[i]);
  }
}

function printItems(array) {
  for (let i = 0; i < array.length; i++) {
    productContainer.innerHTML +=
      "<p class='card text-center py-5 mt-5 mb-5'>" +
      "<span class='text-success fs-2'>" +
      array[i].item[0].name +
      "</span>" +
      "<br>" +
      array[i].translatedType +
      "<br>" +
      array[i].item[0].description +
      "<br>" +
      array[i].item[0].price +
      "<br>" +
      array[i].item[0].quantity +
      "<br>" +
      "<span class='text-start ps-5 text-danger'>" +
      array[i].item[0].contact.firstName +
      " " +
      array[i].item[0].contact.lastName +
      " - " +
      array[i].item[0].contact.address +
      "</span></p>";
  }
}

function sortABC() {
  arrayTemp.sort(function (a, b) {
    if (a.item[0].name < b.item[0].name) {
      return -1;
    }
    if (a.item[0].name > b.item[0].name) {
      return 1;
    }
    return 0;
  });
  return arrayTemp;
}

function sortZYX() {
  arrayTemp.sort(function (b, a) {
    if (a.item[0].name < b.item[0].name) {
      return -1;
    }
    if (a.item[0].name > b.item[0].name) {
      return 1;
    }
    return 0;
  });
  return arrayTemp;
}

///// EVENT LISTENERS
inStock.addEventListener("change", function () {
  productContainer.innerHTML = "";
  if (inStock.checked) {
    for (let i = 0; i < jsonDatas.length; i++) {
      if (jsonDatas[i].item[0].quantity > 0) {
        productContainer.innerHTML +=
          "<p class='card text-center py-5 mt-5 mb-5'>" +
          "<span class='text-success fs-2'>" +
          jsonDatas[i].item[0].name +
          "</span>" +
          "<br>" +
          jsonDatas[i].translatedType +
          "<br>" +
          jsonDatas[i].item[0].description +
          "<br>" +
          jsonDatas[i].item[0].price +
          "<br>" +
          jsonDatas[i].item[0].quantity +
          "<br>" +
          "<span class='text-start ps-5 text-danger'>" +
          jsonDatas[i].item[0].contact.firstName +
          " " +
          jsonDatas[i].item[0].contact.lastName +
          " - " +
          jsonDatas[i].item[0].contact.address +
          "</span></p>";
      }
    }
    byName.checked = false;
    byNameReversed.checked = false;
  } else printItems(jsonDatas);
});

byName.addEventListener("change", function () {
  productContainer.innerHTML = "";
  if (byName.checked) {
    sortABC();
    printItems(arrayTemp);
    inStock.checked = false;
    byNameReversed.checked = false;
  } else {
    printItems(jsonDatas);
  }
});

byNameReversed.addEventListener("change", function () {
  productContainer.innerHTML = "";
  if (byNameReversed.checked) {
    sortZYX();
    printItems(arrayTemp);
    inStock.checked = false;
    byName.checked = false;
  } else {
    printItems(jsonDatas);
  }
});

////// FORM SUBMISSION

function submitForm(e) {
  e.preventDefault();

  let tempObject = {};
  var formData = new FormData(myform);

  fetch("https://show.ratufa.io/json", {
    method: "POST",
    body: formData,
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("network returns error");
      }
      return response.json();
    })
    .then((resp) => {
      tempObject = {
        translatedType: resp.FormData.type,
        type: "",
        item: [
          {
            name: resp.FormData.name,
            description: resp.FormData.description,
            price: resp.FormData.price,
            quantity: resp.FormData.quantity,
            contact: {
              lastName: "You",
              firstName: "Posted By",
              address: "404 Rue de Votre Adresse 77700, Votreville",
            },
          },
        ],
      };
      jsonDatas.push(tempObject);
      console.log(jsonDatas);
      printItems(jsonDatas);
    });
}

myform.addEventListener("submit", submitForm);
