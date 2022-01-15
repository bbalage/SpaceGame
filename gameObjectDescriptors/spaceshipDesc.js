const spaceshipDesc = {
    "sprites": {
        "normal": "img/spaceship.png" //TODO: Use this!
    },
    "hitBoxIntervals": [
        {
            "start": 0,
            "end": 90,
            "hitBoxes": [
                {
                    "x": 5,
                    "y": 5,
                    "width": 20,
                    "height": 20
                },
                {
                    "x": 25,
                    "y": 25,
                    "width": 34,
                    "height": 50
                }
                ]
        },
        {
            "start": 91,
            "end": 270,
            "hitBoxes": [
                    {
                        "x": 5,
                        "y": 5,
                        "width": 54,
                        "height": 70
                    }
                ]
        },
        {
            "start": 271,
            "end": 360,
            "hitBoxes": [
                    {
                        "x": 5,
                        "y": 5,
                        "width": 54,
                        "height": 70
                    }
                ]
        }
    ]
}