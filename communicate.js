      function sendCatalog() {
        var data = document.getElementById("catalog").value;
        var destination = document.getElementById("destination").contentWindow;
        destination.postMessage(data, "*");
        return false;
      }

      function sendPrevDataTDestination() {
        var prevData = "prev";
        var destination = document.getElementById("destination").contentWindow;
        destination.postMessage(prevData, "*");
      }

      function sendForwDataTDestination() {
        var forwData = "forw";
        var destination = document.getElementById("destination").contentWindow;
        destination.postMessage("forwData", "*");
      }

      $(document).on("click", "#forward", function () {
        var data = "forw";
        var destination = document.getElementById("destination").contentWindow;
        destination.postMessage(data, "*");
      });

      $(document).on("click", "#previous", function () {
        var data = "prev";
        var destination = document.getElementById("destination").contentWindow;
        destination.postMessage(data, "*");
      });

      $(document).on("click", "#btn", function () {
        var data = document.getElementById("catalog").value;
        var destination = document.getElementById("destination").contentWindow;
        destination.postMessage(data, "*");
        return false;
      });
