describe("HitBoxDataExtractor tests.", function () {
    const correctDesc = [
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
            "start": 90,
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
            "start": 270,
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
    ];
    const descriptorWithMissingStart = [
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
            "start": 270,
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
    const descriptorWithEmptyHitBoxesArray = [
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
            "start": 90,
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
            "start": 270,
            "end": 360,
            "hitBoxes": []
        }
    ]
    const descriptorWithMissingY = [
        {
            "start": 0,
            "end": 90,
            "hitBoxes": [
                {
                    "x": 5,
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
            "start": 90,
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
            "start": 270,
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
    const descriptorWithPartOfTheCircleMissing = [
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
            "start": 270,
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

    const extractor = new HitBoxDataExtractor();

    it("Correct descriptor is accepted and HitBoxContainer is returned.", function () {
        const hitBoxContainer = extractor.extractHitBoxDescriptor(correctDesc);

        expect(hitBoxContainer).toBeInstanceOf(HitBoxContainer);
    });

    it("Correct descriptor yields HitBoxContainer with all needed data.", function () {
        const hitBoxContainer = extractor.extractHitBoxDescriptor(correctDesc);
        const intervalsInCorrectDescriptor = 3;
        const hitBoxesInInterval1 = 2;
        const hitBoxesInInterval2 = 1;
        const hitBoxesInInterval3 = 1;

        expect(hitBoxContainer.intervals.length).toBe(intervalsInCorrectDescriptor);
        expect(hitBoxContainer.intervals[0].hitBoxes.length).toBe(hitBoxesInInterval1);
        expect(hitBoxContainer.intervals[1].hitBoxes.length).toBe(hitBoxesInInterval2);
        expect(hitBoxContainer.intervals[2].hitBoxes.length).toBe(hitBoxesInInterval3);
    });

    it("Descriptor with missing start field throws error.", function () {
        expect(function () {
            extractor.extractHitBoxDescriptor(descriptorWithMissingStart)
        }).toThrow(new Error("hitBoxIntervalDescriptor is syntactically incorrect."));
    });

    it("Descriptor with empty hitBoxes array throws error.", function () {
        expect(function () {
            extractor.extractHitBoxDescriptor(descriptorWithEmptyHitBoxesArray)
        }).toThrow(new Error("Not all intervals have hit boxes."));
    });

    it("Descriptor with missing y throws error.", function () {
        expect(function () {
            extractor.extractHitBoxDescriptor(descriptorWithMissingY)
        }).toThrow(new Error("HitBox descriptor is incorrect."));
    });

    it("Descriptor with missing part of the circle throws error.", function () {
        expect(function () {
            extractor.extractHitBoxDescriptor(descriptorWithPartOfTheCircleMissing)
        }).toThrow(new Error("HitBoxIntervals are semantically incorrect."));
    });
});