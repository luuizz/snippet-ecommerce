const attributesProduct = [
  { valor: 20, medida: "mm" },
  { valor: 25, medida: "mm" },
  { valor: 32, medida: "mm" },
  { valor: 40, medida: "mm" },
  { valor: 50, medida: "mm" },
  { valor: 60, medida: "mm" },
  { valor: 75, medida: "mm" },
  { valor: 85, medida: "mm" },
  { valor: 110, medida: "mm" },
];

const bottomItemsContainer = document.querySelector(".js-area-items");

function createAttributeItem(attribute) {
  const itemAttr = document.createElement("div");
  itemAttr.classList.add("item-attr");

  const attrValues = document.createElement("div");
  attrValues.classList.add("js-attr", "values");

  const valueSpan = document.createElement("span");
  valueSpan.dataset.attrValue = attribute.valor;
  valueSpan.textContent = attribute.valor;

  const typeSpan = document.createElement("span");
  typeSpan.dataset.attrType = attribute.medida;
  typeSpan.textContent = attribute.medida;

  attrValues.appendChild(valueSpan);
  attrValues.appendChild(typeSpan);

  const controlls = document.createElement("div");
  controlls.classList.add("js-controlls", "controlls");

  const btnMinus = document.createElement("button");
  btnMinus.classList.add("js-btn-minus", "btn-controll");
  btnMinus.innerHTML = "<span>-</span>";

  const quantitySpan = document.createElement("span");
  quantitySpan.classList.add("js-quantity", "quantity");
  quantitySpan.textContent = "0";

  const btnPlus = document.createElement("button");
  btnPlus.classList.add("js-btn-plus", "btn-controll");
  btnPlus.innerHTML = "<span>+</span>";

  controlls.appendChild(btnMinus);
  controlls.appendChild(quantitySpan);
  controlls.appendChild(btnPlus);

  btnMinus.addEventListener("click", () => {
    const currentQuantity = parseInt(quantitySpan.textContent, 10);
    if (currentQuantity > 0) {
      quantitySpan.textContent = currentQuantity - 1;
    }
  });

  btnPlus.addEventListener("click", () => {
    const currentQuantity = parseInt(quantitySpan.textContent, 10);
    quantitySpan.textContent = currentQuantity + 1;
  });

  itemAttr.appendChild(attrValues);
  itemAttr.appendChild(controlls);

  return itemAttr;
}

attributesProduct.forEach((attribute) => {
  const attributeItem = createAttributeItem(attribute);
  bottomItemsContainer.appendChild(attributeItem);
});
