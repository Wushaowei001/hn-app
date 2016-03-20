function timeFilter() {
    return (input) => {
        return new Date(input * 1000);
    };
};

export default timeFilter;