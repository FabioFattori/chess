function setAllCaselle(Matrix) {
    Matrix.forEach(Colonna => {
        Colonna.forEach(Casella => {
            Casella.Evidenziata = false;
        });
    });
}

export { setAllCaselle }