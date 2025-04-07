const resultAvenger = sessionStorage.getItem('result');
    
    
    document.getElementById('resultText').innerText = `You are: ${resultAvenger}`;

    
    console.log(`You are: ${resultAvenger}`);

    function restartQuiz() {
      sessionStorage.clear(); 
      window.location.href = '../index.html';
    }



    document.addEventListener("DOMContentLoaded", function () {
      let resultName = sessionStorage.getItem('result') || "Unknown Avenger";
  
      let avengerImages = {
        "Hawkeye": "../images/hawkeye.jpg",
        "Captain America": "../images/captain america.jpg",
        "Thor": "../images/Thor.jpg",
        "Iron Man": "../images/IM.jpg"
      };
  
      let resultImage = avengerImages[resultName] || "images/unknown.jpg";
  
      let resultContainer = document.getElementById('resultContainer');
  
        if (resultContainer) {
          let resultNameElement = document.createElement("h2");
          resultNameElement.textContent = resultName;
          resultContainer.appendChild(resultNameElement);
  
          // Create and insert the image
          let imgElement = document.createElement("img");
          imgElement.src = resultImage;
          imgElement.alt = resultName;
          imgElement.style.width = "240px";
          imgElement.style.height = "370px";
          imgElement.style.display = "block";
          imgElement.style.borderRadius  = "15px";
          imgElement.style.margin = "20px auto";
  
          resultContainer.appendChild(imgElement); 
      } else {
          console.error("Error: #resultContainer element not found!");
      }
  });
  
    