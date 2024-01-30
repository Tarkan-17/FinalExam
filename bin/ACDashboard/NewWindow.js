
// Refresh function, if click "Home" button
    function refreshPage() {
        location.reload();
    }

    // ---------------------------- Loader function & HideClient ---------------------------- 
    var myVar;
    function myFunction() {
      myVar = setTimeout(showPage, 3000);
    }
    
    function showPage() {
      document.getElementById("myDiv").style.display = "block";
      
    //   setTimeout(() => hideClientContainer("client1"), 3000);
    //   setTimeout(() => stopLoaderAnimation("loader"), 2000);

    //   setTimeout(() => hideClientContainer("client2"), 5000);
    //   setTimeout(() => stopLoaderAnimation("loader1"), 4000);

    //   setTimeout(() => hideClientContainer("client3"), 7000);
    //   setTimeout(() => stopLoaderAnimation("loader2"), 6000);
    }

    // Hide Client Function
    function hideClientContainer(clientId){
        var clientContainer = document.getElementById(clientId);
        clientContainer.style.display = 'none';
    }

    // Stop Loader Function
    function stopLoaderAnimation(loader) {
        var loader = document.getElementById(loader);
        loader.style.display = 'none';
    }

    // Hide startButton
    var isRunning = false;

    function toggleButtons(startButtonId, stopButtonId, condition){
        var startButton = document.getElementById(startButtonId);
        var stopButton =  document.getElementById(stopButtonId);

        if(condition){
            startButton.style.display = 'none';
            stopButton.style.display = 'initial';
            // setTimeout(() => stopLoaderAnimation("loader"), 60000); // Loader hidde after setted time
            // setTimeout(() => stopLoaderAnimation("loader1"), 120000); // Loader hidde after setted time
            // setTimeout(() => stopLoaderAnimation("loader2"), 180000); // Loader hidde after setted time

            if(condition){
                loader.style.display = 'none';
                // setTimeout(() => hideClientContainer("client1"), 3000);
                // setTimeout(() => hideClientContainer("client2"), 3000);
                // setTimeout(() => hideClientContainer("client3"), 3000);
            }

        }else{
            startButton.style.display = 'initial';
            stopButton.style.display = 'none';
        }
    }


    function hideStopButton(){

      var stopDiv = document.getElementById("stopDiv");
      stopDiv.style.display = 'none';

      var stopDiv1 = document.getElementById("stopDiv1");
      if (stopDiv1) {
      stopDiv1.style.display = 'none';
      }

      var stopDiv2 = document.getElementById("stopDiv2");
      if (stopDiv2) {
      stopDiv2.style.display = 'none';
      }
    }

        
    // ---------------------------- PopUp Stop function ---------------------------- 
    function togglePopup(displayValue) {
        var popup = document.getElementById('popup-stop');
        popup.style.display = displayValue;
    }

    function StopFunction() {
        var popup = document.getElementById('popup-stop');
        popup.style.display = 'block';
        isRunning = false;
    }

    function closePopupStop() {
        var popup = document.getElementById('popup-stop');
        popup.style.display = 'none';
    }

    function confirmAction(){
        var popup = document.getElementById('popup-stop');
        popup.style.display = 'none';
    }


    // ---------------------------- PopUp Start function ----------------------------
    
    function StartFunction() {
        var crawlerInput = document.getElementById('crawlerInput1');
        var popup = document.getElementById('popup-start');
        
        if (crawlerInput.files.length > 0) { // Auswahl einer Datei
    
            alert('Datei ausgewählt: ' + crawlerInput.files[0].name); // Auswahl der Datei wird angezeigt
    
            popup.style.display = 'block';
            isRunning = true;
        } else {
            alert('Bitte wählen Sie eine Datei aus.');
        }
    }
    
    function handleFileSelection() {
        var crawlerInput = document.getElementById('crawlerInput1');
        var startButton = document.getElementById('startButton1');
    
        startButton.disabled = crawlerInput.files.length === 0; // Verhalten des Button wird kontrolliert, je nach Zustand
    }
    























    function StartFunction() {
        var popup = document.getElementById('popup-start');
        popup.style.display = 'block';
        isRunning = true;
    }

    function closePopupStart() {
        var popup = document.getElementById('popup-start');
        popup.style.display = 'none';
    }

    function togglePopup(displayValue) {
        var popup = document.getElementById('popup-start');
        popup.style.display = displayValue;
    }

    var shouldShowStopPopup = true;
    if (shouldShowStopPopup) {
    StartFunction();
    } else {
        StopFunction();
    }

    // FileSystem hidde function

    // var isRunning = false;

    // function hiddeDataImport(importId, importDataId, condition){
    //     var importId = document.getElementById(importId);
    //     var importDataId = document.getElementById(importDataId);

    //     if(condition){
    //         import.style.display = 'none';
    //         importData.style.display = 'initial';
    //     }
    // }


    // ---------------------------- Flush Function ----------------------------
    function openFlushPopup() {
    var popup = document.getElementById('popup-flush'); // Open the Popup Start window
    popup.style.display = 'block';
    }

    function closePopupFlush() {
    var popup = document.getElementById('popup-flush');
    popup.style.display = 'none';
    }

    function flushConfirmAction(){
    var popup = document.getElementById('popup-flush');
    popup.style.display = 'none';
    }
