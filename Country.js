class Country {
    constructor(countryName, listStats) {
        this.countryName = countryName;
        this.listStats = listStats;
    }

    fromJson = (data) =>
        new Country(
            data[0],
            data[0].map((el) => Stats.fromJson(el)).toList()
        );
}