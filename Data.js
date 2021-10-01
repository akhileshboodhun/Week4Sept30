class Data {
    constructor(countries) {
        this.countries = countries;
    }

    fromJson = (data) =>
        new Data(
            data.map((el => Country.fromJson(el)))
        );
}