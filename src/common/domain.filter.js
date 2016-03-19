function domainFilter() {
    return (input) => {
        var matches,
            output = "",
            urls = /\w+:\/\/([\w\.-]+)/ ;

        matches = urls.exec(input);

        if (matches !== null) {
            output = matches[1];
        }

        return output;
    };
};

export default domainFilter;