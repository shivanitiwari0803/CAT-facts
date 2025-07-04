
const btn = document.getElementById('fetchBtn');
const result = document.getElementById('result');
const catImg = document.getElementById('catImage');

btn.addEventListener('click', async () => {
  result.innerText = "Loading cat fact...";
  catImg.style.display = "none";

  try {
    const [factRes, imgRes] = await Promise.all([
      axios.get('https://catfact.ninja/fact'),
      axios.get('https://api.thecatapi.com/v1/images/search')
    ]);

    result.innerText = factRes.data.fact;
    catImg.src = imgRes.data[0].url;
    catImg.style.display = "block";
  } catch (error) {
    result.innerText = "Failed to load cat data.";
  }
});

