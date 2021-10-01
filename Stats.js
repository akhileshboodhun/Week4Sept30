class Stats {
    constructor(confirmed, deaths, recovered) {
        this.confirmed = confirmed;
        this.deaths = deaths;
        this.recovered = recovered;
    }

    fromJson = (data) =>
        new Stats(
            data['confirmed'],
            data['deaths'],
            data['recovered']
        );
}