const findPalindromes = (text) => {
            novoArray = [...(text)].slice().reverse().join("");
            console.log(text);
            console.log(novoArray);
            console.log(novoArray === text ? "palíndromo" : "não palíndromo");
        }
        findPalindromes("mirim");