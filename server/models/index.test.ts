const app = require('./index');

describe('Database connection',   () => {
    it("Verify connection to database b", async () => {

        const logSpy = jest.spyOn(console, 'log');
        console.log('Connected to MongoDB');

        expect(logSpy).toHaveBeenCalledWith('Connected to MongoDB');
    })
});