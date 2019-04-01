$(".point-selector").on("click", function(e){

    e.preventDefault();

    //point selector
    let pointSelector = $(this);

    //point
    let activePoint = $("#points .active");
    let pointId = pointSelector.attr("href");
    let point = $(pointId);
    let pointPosition = point.position();
    let pointHeight = Math.round(point[0].getBoundingClientRect().height);
    let pointWidth = Math.round(point[0].getBoundingClientRect().width);

    //tooltip
    let tooltip = $("#map-tooltip");
    let tooltipTitle = pointSelector.attr("data-title");
    let tooltipDescription = pointSelector.attr("data-description");

    //tooltip add info data
    tooltip.find(".title").html(tooltipTitle);
    tooltip.find(".desc").html(tooltipDescription);

    //tooltip calculate position
    let tooltipWidth = tooltip.width();
    let tooltipHeight = tooltip.height();
    let tooltipTop = pointPosition.top - tooltipHeight / 2 + pointHeight / 2;
    if (pointSelector.attr("data-position")==="right") {
        var tooltipLeft = pointPosition.left + pointWidth + 24;
    } else {
        tooltipLeft = pointPosition.left - tooltipWidth - 24;
    }

    //move to position and show tooltip
    tooltip.css( {top: tooltipTop, left: tooltipLeft } );
    tooltip.addClass("active");

    //show point
    activePoint.removeClass("active");
    point.addClass("active");

    //.h1
    $(".h1").addClass("hide");

    //.selected
    $(".wraper-2").addClass("selected");

    //.activated
    $(".wraper-2 a").removeClass("activated");
    $(this).addClass("activated");

});