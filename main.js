document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".btnDetail").forEach((item) => {
    item.addEventListener("click", (e) => {
      let parent = e.target.closest(".card");

      let imageEl = parent.querySelector(".card-img-top");
      let priceEl = parent.querySelector(".price");
      let nameEl = parent.querySelector(".card-text");
      let descriptionEl = parent.querySelector(".description");
      let modalButtonEl = document.querySelector(".btnModal");

      let imageSrc = imageEl.src;
      let price = priceEl.innerHTML;
      let name = nameEl.innerHTML;
      let description = descriptionEl.innerHTML;

      console.log(`Image: ${imageSrc}`);
      console.log(`Price: ${price}`);
      console.log(`Name: ${name}`);
      console.log(`Description: ${description}`);
      modalButtonEl.click();

      document.querySelector(".modalTitle").innerHTML = name;

      let image = document.createElement("img");
      image.src = imageSrc;
      image.classList.add("w-100");

      document.querySelector(".modalImage").innerHTML = "";
      document.querySelector(".modalImage").appendChild(image);
      document.querySelector(".modalDescription").innerHTML = description;
      document.querySelector(".modalPrice").innerHTML = price;

      const nohp = "6283176842249";
      let message = `Halo ganteng, ${name} ini bagus bingit, akuwh mw beli dung.`;
      let waLink = `https://api.whatsapp.com/send?phone=${nohp}&text=${encodeURIComponent(
        message
      )}`;
      document.querySelector(".btnBuy").href = waLink;
    });
  });
});
