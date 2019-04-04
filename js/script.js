$(document).ready(function(){

    //----------------------------------------------------------------- RELOAD -

    $(window).on("resize", function() {
        setTimeout(function () {
            location.reload();
            }, 0);
    });

    if ($(window).width() > 768) { //------------------------------------------------------------------------- DESKTOP -

        //---------------------------------------------------------------------------------------- MOUSEOVER -

        $(".point-selector").on("mouseover", function(e){

            e.preventDefault();

            //------------------------------------------------------------------------------ POINT -

            let pointSelector = $(this);
            let activePoint = $("#points .active");
            let pointId = pointSelector.attr("href");
            let point = $(pointId);
            let pointPosition = point.position();
            let pointHeight = Math.round(point[0].getBoundingClientRect().height);
            let pointWidth = Math.round(point[0].getBoundingClientRect().width);

            //--------------------------------------------------------------- SHOW POINT -

            activePoint.removeClass("active");
            point.addClass("active");

            //---------------------------------------------------------------------------- TOOLTIP -

            let tooltip = $("#tooltip");
            let tooltipTitle = pointSelector.attr("data-title");
            let tooltipPlace = pointSelector.attr("data-place");

            //----------------------------------------------------------------- ADD DATA -

            tooltip.find(".title").html(tooltipTitle);
            tooltip.find(".place").html(tooltipPlace);

            //----------------------------------------------------------------- POSITION -

            let tooltipWidth = tooltip.width();
            let tooltipHeight = tooltip.height();
            let tooltipTop = pointPosition.top - tooltipHeight / 2 + pointHeight / 2;
            let tooltipLeft;
            let title =  $("#tooltip .title");
            let place = $("#tooltip .place");

            if (pointSelector.attr("data-position")==="right") {
                tooltipLeft = pointPosition.left + pointWidth + 15;
                title.addClass("right");
                place.addClass("right");
            } else {
                tooltipLeft = pointPosition.left - tooltipWidth - 15;
                title.removeClass("right");
                place.removeClass("right");
            }

            //---------------------------------------------------------------------- CSS -

            tooltip.css( {"top": tooltipTop + "px", "left": tooltipLeft + "px"} );
            tooltip.addClass("active");

            //---------------------------------------------------------------------------- CONTENT -

            $("#header").addClass("hide");
            $("#content").addClass("active");
            $(".point-selector").removeClass("selected");
            $(this).addClass("selected");

        });

        //--------------------------------------------------------------------------------------- MOUSELEAVE -

        $("#list").on("mouseleave", function() {

            $("#header").removeClass("hide");
            $("#points .active").removeClass("active");
            $("#tooltip").removeClass("active");
            $("#content").removeClass("active");

        });

    } else { //------------------------------------------------------------------------------------------------ MOBILE -

        //-------------------------------------------------------------------------------------------- CLICK -

        $(".point-selector").on("click", function(e){

            e.preventDefault();

            //---------------------------------------------------------------- RESET MAP -

            $("#map img").css( {"transform": "translateX(0)"} );
            $("#points").css( {"transform": "translateX(0)"} );

            //------------------------------------------------------------------------------ POINT -

            let pointSelector = $(this);
            let activePoint = $("#points .active");
            let pointId = pointSelector.attr("href");
            let point = $(pointId);
            let pointPosition = point.position();
            let pointHeight = Math.round(point[0].getBoundingClientRect().height);

            //-------------------------------------------------------------------------------- MAP -

            let theFormula = screen.width / 2 - pointPosition.left;

            $("#map img").css( {"transform": "translateX(" + theFormula + "px)"} );
            $("#points").css( {"transform": "translateX(" + theFormula + "px)"} );

            //--------------------------------------------------------------- SHOW POINT -

            activePoint.removeClass("active");
            point.addClass("active");

            //----------------------------------- POINT POSITION ACTUALISATION -

            pointPosition = point.position();

            //---------------------------------------------------------------------------- TOOLTIP -

            let tooltip = $("#tooltip");
            let tooltipTitle = pointSelector.attr("data-title");
            let tooltipPlace = pointSelector.attr("data-place");

            //----------------------------------------------------------------- ADD DATA -

            tooltip.find(".title").html(tooltipTitle);
            tooltip.find(".place").html(tooltipPlace);

            //----------------------------------------------------------------- POSITION -

            let tooltipWidth = tooltip.width();
            let tooltipHeight = tooltip.height();
            let tooltipTop = pointPosition.top - tooltipHeight / 2 + pointHeight / 2;
            let tooltipLeft = pointPosition.left - tooltipWidth - 15;

            //---------------------------------------------------------------------- CSS -

            tooltip.css( {"top": tooltipTop + "px", "left": tooltipLeft + "px"} );
            tooltip.addClass("active");

            //---------------------------------------------------------------------------- CONTENT -

            $("#header").addClass("hide");
            $("#content").addClass("active");
            $("#content").addClass("click");
            $("#content-extra-small").addClass("active");
            $("#content-extra-small").addClass("click");
            $(".point-selector").removeClass("selected");
            $(this).addClass("selected");
            $(".description").addClass("hide");

        });

        //------------------------------------------------------------------------------------------ UNCLICK -

        $("#map").on("click", function(){

            //-------------------------------------------------------------------------------- MAP -

            $("#map img").css( {"transform": "translateX(0)"} );
            $("#points").css( {"transform": "translateX(0)"} );

            //---------------------------------------------------------------------------- CONTENT -

            $("#header").removeClass("hide");
            $("#points .active").removeClass("active");
            $("#tooltip").removeClass("active");
            $("#content").removeClass("active");
            $("#content").removeClass("click");
            $("#content-extra-small").removeClass("active");
            $("#content-extra-small").removeClass("click");
            $(".description").removeClass("hide");

        });

    }

});