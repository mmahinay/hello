(function () {
        var barId;
        var buttonVal = [];
        var progressObj;
        var buttonHtml;
        document.getElementById("barSelector").onchange = function (e) {
            barId = this.options[this.selectedIndex].value;
            console.log(barId);
            //updateProgressBar(barId, 10);    
        };

       var buttons = document.getElementsByTagName("button");

        for (i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('click', buttonClickHandler, false);
        }

        function buttonClickHandler(e) {
            debugger;
            var weight = Number(this.value) + Number(document.getElementById(barId).getAttribute("data-weight"));
            console.log(weight);
            updateProgressBar(barId, weight);
        }

        function updateProgressBar(barId, weight) {
            var progressBar = document.getElementById(barId),
                progress = progressBar.children[0], //document.getElementsByClassName('progress')[0],
                parent = progressBar.parentNode,
                duration = 5; //seconds 
            if (weight > 100) {
                weight = 100;
                progress.style.background = "red";
            } else {
                progress.style.background = "orange";
            }

            progress.style.width = weight + "%"; //"100%";
            progressBar.setAttribute("data-weight", weight);

        }

        //setTimeout(updateProgressBar, 1000);        
})();
