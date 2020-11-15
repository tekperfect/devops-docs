$( document ).ready(function() {

    // load json
    $.getJSON("data.json", (data) => {

        // this week
        let thisMaterial = data.thisWeek.material;
        $("#twTitle").append(data.thisWeek.name);
        $("#twDate").append(data.thisWeek.data);
        for (let i = 0; i < thisMaterial.length; i++) {
            $("#twMaterial").append(
                `<li><a href="${thisMaterial[i].link}">${thisMaterial[i].name}</a>
                </li>
                `
            );
        };
        // last week
        let lastMaterial = data.lastWeek.material;
        $("#lwTitle").append(data.lastWeek.name);
        $("#lwDate").append(data.lastWeek.date);
        for (let i = 0; i < lastMaterial.length; i++) {
            $("#lwMaterial").append(`
            <li>
            <a href="${lastMaterial[i].link}">${lastMaterial[i].name}</a>
            </li>
            `);
        };
    }).fail(() => {
        console.log("An error is here! 🚨");
    });

});