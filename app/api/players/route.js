export async function GET() {
    return Response.json(
        [
            {
                "id": 1,
                "name": "LeBron James",
                "gender":"Female",
                "team": "Los Angeles Lakers",
                "position": "Forward",
                "height": "6 ft 9 in",
                "weight": "250 lbs",
                "status": "active",
                "src":"https://i.pravatar.cc/150?u=a042581f4e29026704d",
                "stats": {
                    "pointsPerGame": 27.1,
                    "reboundsPerGame": 7.4,
                    "assistsPerGame": 7.4
                }
            },
            {
                "id": 2,
                "name": "Stephen Curry",
                "gender":"Male",
                "team": "Golden State Warriors",
                "position": "Guard",
                "height": "6 ft 3 in",
                "weight": "185 lbs",
                "status": "active",
                "src":"https://i.pravatar.cc/150?u=a04258a2462d826712d",
                "stats": {
                    "pointsPerGame": 24.3,
                    "reboundsPerGame": 4.6,
                    "assistsPerGame": 6.5
                }
            },
            {
                "id": 3,
                "name": "Giannis Anteto",
                "team": "Milwaukee Bucks",
                "gender":"Female",
                "position": "Forward",
                "height": "7 ft 0 in",
                "weight": "242 lbs",
                "status": "active",
                "src":"https://i.pravatar.cc/300?u=a042581f4e29026709d",
                "stats": {
                    "pointsPerGame": 29.5,
                    "reboundsPerGame": 11.6,
                    "assistsPerGame": 5.7
                }
            },
            {
                "id": 4,
                "name": "Kevin Durant",
                "team": "Phoenix Suns",
                "gender":"Male",
                "position": "Forward",
                "height": "6 ft 10 in",
                "weight": "240 lbs",
                "status": "active",
                "src":"https://i.pravatar.cc/150?u=a04258114e29026302d",
                "stats": {
                    "pointsPerGame": 27.0,
                    "reboundsPerGame": 7.1,
                    "assistsPerGame": 4.1
                }
            },
            {
                "id": 5,
                "name": "James Harden",
                "team": "Los Angeles Clippers",
                "gender":"Male",
                "position": "Guard",
                "height": "6 ft 5 in",
                "weight": "220 lbs",
                "status": "active",
                "src":"https://i.pravatar.cc/150?u=a04258114e29026708c",
                "stats": {
                    "pointsPerGame": 24.6,
                    "reboundsPerGame": 5.6,
                    "assistsPerGame": 7.0
                }
            },
            {
                "id": 6,
                "name": "Kawhi Leonard",
                "team": "Los Angeles Clippers",
                "position": "Forward",
                "gender":"Male",
                "height": "6 ft 7 in",
                "weight": "225 lbs",
                "status": "vacation",
               "src":"https://i.pravatar.cc/150?u=a042581f4e29026024d",
                "stats": {
                    "pointsPerGame": 19.2,
                    "reboundsPerGame": 6.4,
                    "assistsPerGame": 2.9
                }
            },
            {
                "id": 7,
                "name": "Nikola Jokic",
                "team": "Denver Nuggets",
                "gender":"Female",
                "position": "Center",
                "height": "6 ft 11 in",
                "weight": "284 lbs",
                "status": "vacation",
                "src":"https://i.pravatar.cc/300?u=a042581f4e29026704f",
                "stats": {
                    "pointsPerGame": 26.3,
                    "reboundsPerGame": 10.1,
                    "assistsPerGame": 8.7
                }
            },
            {
                "id": 8,
                "name": "Luka Doncic",
                "gender":"Female",
                "position": "Guard",
                "height": "6 ft 7 in",
                "weight": "230 lbs",
                "status": "vacation",
                "src": "https://i.pravatar.cc/150?u=a04258114e29026702d",
                "stats": {
                    "pointsPerGame": 27.6,
                    "reboundsPerGame": 8.0,
                    "assistsPerGame": 8.6
                }
            },
            {
                "id": 9,
                "name": "Joel Embiid",
                "team": "Philadelphia 76ers",
                "gender":"Female",
                "position": "Center",
                "height": "7 ft 0 in",
                "weight": "280 lbs",
                "status": "vacation",
                "src":"https://i.pravatar.cc/300?u=a042581f4e29026709d",
                "stats": {
                    "pointsPerGame": 30.0,
                    "reboundsPerGame": 11.1,
                    "assistsPerGame": 4.2
                }
            },
            {
                "id": 10,
                "name": "Jayson Tatum",
                "team": "Boston Celtics",
                "gender":"Male",
                "position": "Forward",
                "height": "6 ft 8 in",
                "weight": "210 lbs",
                "status": "vacation",
                "src":"https://i.pravatar.cc/150?u=a04258114e29026302d",
                "stats": {
                    "pointsPerGame": 26.4,
                    "reboundsPerGame": 7.2,
                    "assistsPerGame": 3.8
                }
            }
        ]

    )
}