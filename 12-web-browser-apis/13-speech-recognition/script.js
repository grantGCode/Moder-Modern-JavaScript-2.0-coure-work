const mySpeechReconition = window.SpeechRecognition || window.webkitSpeechRecognition;

const rec = new mySpeechReconition();

rec.lang = 'en-US';
rec.continuous = true;


rec.onresult = function (e) {
    const acceptedColors = [
        "red",
        "orange",
        "yellow",
        "green",
        "blue",
        "indigo",
        "violet",
        "pink",
        "purple",
        "cyan",
        "magenta",
        "brown",
        "white",
        "black",
        "gray",
        "silver",
        "gold",
        "maroon",
        "navy",
        "teal",
      ];

    for (let i = e.resultIndex; i < e.results.length; i++) {
        const script = e.results[i][0].transcript.toLowerCase().trim(); 
        
        if (acceptedColors.includes(script)) {
            document.body.style.backgroundColor = script;
            console.log(script);
        } else {
            alert('Please say a color');
        };
    }
};

rec.start();

