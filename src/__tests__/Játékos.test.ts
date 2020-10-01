import Játékos from "../Játékos";
describe("Játékos osztály unit tesztek:", () => {
    const tesztJátékos = new Játékos("Laci 2 2 3 4 5 2 3 1 1 2");
    it("Játékos osztálypéldány ellenőrzése", async () => {
        expect(tesztJátékos).toBeInstanceOf(Játékos);
    });

    it("Játékos nevének ellenőrzése", async () => {
        expect(tesztJátékos.név).toBe("Laci");
    });

    it("Fordulók száma", async () => {
        expect(tesztJátékos.fordulókSzáma).toBe(10);
    });

    it("Legnagyobb tipp", async () => {
        expect(tesztJátékos.játékosLegnagyobbTipp).toBe(5);
    });

    it("Első forduló tippje", async () => {
        expect(tesztJátékos.elsőFordulóTippje).toBe(2);
    });

    it("Forduló tippjei(1-)", async () => {
        const tippek: number[] = [2, 2, 3, 4, 5, 2, 3, 1, 1, 2];
        for (let i = 1; i < tippek.length; i++) {
            expect(tesztJátékos.fordulóTippje(i)).toBe(tippek[i - 1]);
        }
    });
});
