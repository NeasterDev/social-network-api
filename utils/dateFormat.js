const dateFormat = date => {
    const formattedDate = date.toLocaleDateString('en-us',
        {
            weekday: "long",
            year: "numeric",
            month: "short",
            day: "numeric"
        });
        console.log("F-DATE: " + formattedDate)
        return formattedDate.toString();
}

module.exports = dateFormat;