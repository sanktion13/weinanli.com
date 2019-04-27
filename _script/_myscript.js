// this javascript is written by weinan li

// interaction for back to top button
function backToTop() {   
    var documentEl = $(document);
    
    documentEl.ready(function() {
        $("#back2Top").click(function(event) {
            event.preventDefault();
            $("html, body").animate({ scrollTop: 0 }, "slow");
            return false;
        });
    });
};

// interaction for internal page nav
function pageNav() {
    var documentEl = $(document);
    var navLinks = $("div ul li a"),
        navH = $(".page-nav").height(),
        section = $("section");

    documentEl.on("scroll", function() {
        // show the page nav when scroll past headerTop
        var header = $("#sectionZero").offset().top,
            currentScrollPos = documentEl.scrollTop();

        if (currentScrollPos >= header) {
            $("#pageNav").addClass("page-nav-show");
        } else {
            $("#pageNav").removeClass("page-nav-show");
        };

        // how active link when scroll in each section
        section.each(function() {
            var self = $(this);

            if ((currentScrollPos + navH) > self.offset().top && currentScrollPos < (self.offset().top + self.outerHeight())) {
                var targetClass = "." + self.attr("class") + "-marker";
                navLinks.removeClass("active");
                $(targetClass).addClass("active");
            };
        });
    });
};

// interaction for blog post toggle
function articleToggle(i) {
    if ($("#more" + i).css("display") == "none") {
        $("#more" + i).css("display", "inline");
        $("#dots" + i).css("display", "none");
        $("#toggle" + i).text("Show Less");
    } else {
        $("#more" + i).css("display", "none");
        $("#dots" + i).css("display", "inline");
        $("#toggle" + i).text("Show More");
        $("body, html").animate({scrollTop: $("#section" + i).offset().top - 35}, "slow");
    };
};