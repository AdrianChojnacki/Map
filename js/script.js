$(".point-selector").on("mouseover", function(e){

    e.preventDefault();

    let pointSelector = $(this);

    //---------------------------------------------------------------------------------------------------------- POINT -

    let activePoint = $("#points .active");
    let pointId = pointSelector.attr("href");
    let point = $(pointId);
    let pointPosition = point.position();
    let pointHeight = Math.round(point[0].getBoundingClientRect().height);
    let pointWidth = Math.round(point[0].getBoundingClientRect().width);

    //------------------------------------------------------------------------------------------- SHOW POINT -

    activePoint.removeClass("active");
    point.addClass("active");

    //-------------------------------------------------------------------------------------------------------- TOOLTIP -

    let tooltip = $("#map-tooltip");
    let tooltipTitle = pointSelector.attr("data-title");
    let tooltipDescription = pointSelector.attr("data-description");

    //--------------------------------------------------------------------------------------------- ADD DATA -

    tooltip.find(".title").html(tooltipTitle);
    tooltip.find(".desc").html(tooltipDescription);

    //--------------------------------------------------------------------------------------------- POSITION -

    let tooltipWidth = tooltip.width();
    let tooltipHeight = tooltip.height();
    let tooltipTop = pointPosition.top - tooltipHeight / 2 + pointHeight / 2;
    let tooltipLeft;
    let title =  $("#map-tooltip .title");
    let desc = $("#map-tooltip .desc");
    if (pointSelector.attr("data-position")==="right") {
        tooltipLeft = pointPosition.left + pointWidth + 15;
        title.addClass("right");
        desc.addClass("right");
    } else {
        tooltipLeft = pointPosition.left - tooltipWidth - 15;
        title.removeClass("right");
        desc.removeClass("right");
    }

    //-------------------------------------------------------------------------------------------------- CSS -

    tooltip.css( {top: tooltipTop, left: tooltipLeft } );
    tooltip.addClass("active");

    //-------------------------------------------------------------------------------------------------------- CONTENT -

    $("#header").addClass("hide");

    $("#content").addClass("active");

    $("#content a").removeClass("selected");
    $(this).addClass("selected");

});

$(".list").on("mouseleave", function() {

    $("#header").removeClass("hide");

    $("#points .active").removeClass("active");

    $("#map-tooltip").removeClass("active");

    $("#content").removeClass("active");

});