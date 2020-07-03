$(function () {
    $("button:submit").click(function(event) {
        $.ajax({
            type: "GET",
            url: "http://api.tvmaze.com/shows/" + $("#selectShow").val() + "?embed=cast",
            dataType: "json",
            async: true,
            success: (data) => {
                $("h1").empty().append(data.name);
                $(".image").empty().append("<img src=\"" + data.image.original + "\" alt=\"" + data.name + "\"\/>");
                $(".content").empty().append(data.summary);
                $(".info ul").empty()
                    .append("<li><strong>Network:<\/strong> " + data.network.name + "<\/li>");
                $(".info ul").append("<li><strong>Schedule:<\/strong> " + data.schedule.days + " at " + data.schedule.time + " (" + data.runtime + "min) " + "<\/li>");
                $(".info ul").append("<li><strong>Status:<\/strong> " + data.status + "<\/li>");
                $(".info ul").append("<li><strong>Show Type:<\/strong> " + data.type + "<\/li>");
                $(".info ul").append("<li><strong>Genres:<\/strong> " + data.genres[0] + " | " + data.genres[1] + " | " + data.genres[2] + "<\/li>");
                $(".info ul").append("<li><strong>Episodes ordered:<\/strong> " + "<\/li>");
                $(".info ul").append("<li><strong>Created by:<\/strong> " + "<\/li>");
                $(".info ul").append("<li><strong>Official site:<\/strong> <a href=\"" + data.officialSite + "\">" + data.officialSite + "<\/a><\/li>");
                $(".info ul").append("<li><strong>Rating: <i class=\"far fa-star\"></i> " + data.rating.average + "<\/strong><\/li>");
            },
            error: (error) => {
                $("h1").empty().append(error.responseJSON.status + " " + error.responseJSON.name);
                $(".image").empty();
                $(".content").empty();
                $(".info ul").empty();
            }
        });
        event.preventDefault();
    })
});