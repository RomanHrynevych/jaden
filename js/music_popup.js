let SpotifyIframe;

function transformToFullScreen(clickedId) {
    $('#popup').addClass("active");
    $('.content').addClass("active");
    SpotifyIframe = $('#' + clickedId).find('.spotifyiframe').text();
    $("#" + SpotifyIframe).removeClass("hidden");
    $("#" + SpotifyIframe).height($(window).height() / 2);
    $('body').addClass("overflow-hidden");
}

function removeDiv() {
    $('#popup').removeClass("active");
    $('.content').removeClass("active");
    setTimeout(function () {
        $("#" + SpotifyIframe).addClass("hidden");
        $('body').removeClass("overflow-hidden");
    }, 300);

}