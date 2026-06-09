
const quoteText = document.querySelector(".quote p");
const authorText = document.querySelector(".author p");
const button = document.querySelector("button");

async function getQuote(){
   

        quoteText.textContent = "Fetching...."
        authorText.textContent = "";

    try{
    

        const response = await fetch("http://api.quotable.io/random");

        if(!response.ok){
            throw new Error("Failed to fetch quote");
        }

        const result = await response.json();

        quoteText.textContent = `"${result.content}"`;
        authorText.textContent = `-${result.author}`;

    }
    catch(error){
        quoteText.textContent = "Unable to load quote.";
        authorText.textContent = "Please try again.";
        console.error(error);

    }
   
    
   
}




button.addEventListener("click", getQuote);

getQuote();