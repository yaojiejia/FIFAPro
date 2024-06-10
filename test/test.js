import app from '../api/app.js'
import supertest from 'supertest'

describe("get player's info", () => {
    test('should response with 200 status code', async () => {
        const response = await supertest(app).get('/api/players/getByName/')
        expect(response.status).toBe(200)
    })
    test('should get ronaldo info as json by passing ronaldo', async () => {
        const response = await supertest(app).get('/api/players/getByName/?name=ronaldo&version=24')
        expect(response.body).toEqual({
            
                "id": "664808c1651c9e0618f1f0f1",
                "version": 24,
                "name": "Cristiano Ronaldo",
                "position": "ST",
                "nation": "Portugal",
                "club": "Al Nassr",
                "overall": 86,
                "pot": 86,
                "height": 187,
                "weight": 85,
                "pace": 77,
                "shoot": 88,
                "pass": 75,
                "dribble": 80,
                "defend": 34,
                "physic": 74,
                "gk": 11
            
        })
    })
    test('should get mbappe info by inserting 664808bb651c9e0618f1f0c0', async () => {
        const response = await supertest(app).get('/api/players/getByID/664808bb651c9e0618f1f0c0')
        expect(response.body).toEqual({
            "id": "664808bb651c9e0618f1f0c0",
            "version": 24,
            "name": "K. Mbappé",
            "position": "ST, LW",
            "nation": "France",
            "club": "Paris Saint Germain",
            "overall": 91,
            "pot": 94,
            "height": 182,
            "weight": 75,
            "pace": 97,
            "shoot": 90,
            "pass": 80,
            "dribble": 92,
            "defend": 36,
            "physic": 78,
            "gk": 5
        })
    })
    test('should get all players by version 24', async () => {
        const response = await supertest(app).get('/api/players/version/?version=24')
        expect(response.status).toBe(200)
    }, 10000)
})

