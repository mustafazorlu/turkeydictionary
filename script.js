const buttons = document.querySelectorAll(".btn");
const times = document.querySelector(".times");
const glosbe_dict = document.querySelector(".glosbe_dict");

buttons.forEach((item) => {
    item.addEventListener("click", function () {
        const input = document.getElementById("input");
        let inputValue = input.value;
        const array = inputValue
            .trim()
            .split(/[^a-zA-z\u0401\u0451\u0410-\u044f]/g);

        let temp = "";
        let link = "";
        temp = item.id;

        if (input.value == "") {
            return;
        }

        if (temp == "cambridge") {
            link =
                "https://dictionary.cambridge.org/dictionary/english-turkish/";
        } else if (temp == "oxford") {
            link =
                "https://www.oxfordlearnersdictionaries.com/definition/english/";
        } else if (temp == "glosbe") {
            link = "https://tr.glosbe.com/ru/tr/";
        } else if (temp == "trex") {
            link = "https://tr-ex.me/translation/russian-english/";
        } else if (temp == "wordreference") {
            link = "https://www.wordreference.com/ruen/";
        } else if (temp == "dictionary") {
            link = "https://dictionary.reverso.net/russian-english/";
        } else if (temp == "dict") {
            link = "https://www.dict.com/rusca-turkce/";
        } else if (temp == "glosbe_dict") {
            const [temp1, temp2] = temp;
            console.log(temp1, temp2);
        }else if(temp == "scholar"){
            link = "https://scholar.google.com/scholar?hl=tr&as_sdt=0%2C5&q=";
        }

        for (let i = 0; i < array.length; i++) {
            if (temp !== "glosbe_dict") {
                window.open(link + array[i]);
            }else if(temp == "scholar"){
                window.open(link + array[i]);
            } else {
                window.open(`https://tr.glosbe.com/ru/tr/${array[i]}`);
                window.open(`https://www.dict.com/rusca-turkce/${array[i]}`);
            }
        }
    });
});

times.addEventListener("click", () => {
    document.getElementById("input").value = "";
});
