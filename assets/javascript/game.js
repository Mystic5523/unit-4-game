var min = 19;
        var max = 120;
        var randomTarget = Math.floor(Math.random() * (max - min + 1)) + min;
        console.log(randomTarget);
        document.getElementById("target").textContent = randomTarget;

       $(document).ready(function() {
        $("#btnClose1")
        .text("")
        .append("<img src=../../assets/images/diamond.png width=100 height=100  />")
        .button();
        });

        $(document).ready(function() {
        $("#btnClose2")
        .text("")
        .append("<img src=../assets/images/emerald.png width=100 height=100  />")
        .button();
        });

        $(document).ready(function() {
        $("#btnClose3")
        .text("")
        .append("<img src=assets/images/garnet.png width=100 height=100  />")
        .button();
        });

        $(document).ready(function() {
        $("#btnClose4")
        .text("")
        .append("<img src=assets/images/topaz.png width=100 height=100  />")
        .button();
        });