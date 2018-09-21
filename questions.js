var questions = [
    {
        id: "",
        text: "What is your hardhat number?",
        type: "number",
        answerIsVariable: true,
        variableName: "hardhatnumber",
        validations: [
            { type: "length", limit: 5, message: "length too long" },
            { type: "allNumber", message: "can only be numbers" }
        ]
    },
    {
        id: "",
        text: "What operations are you doing today - hardhat number: {hardhatnumber}?",
        type: "list-image",
        hasVariableInText: true,
        choices: [
            {
                id: "",
                label: "Excavation & Trenching",
                image: "https://images.typeform.com/images/YEuZJjbMYTXy/choice/default#.jpeg"
            },
            {
                id: "",
                label: "Hazardous Materials & SDS",
                image: "https://images.typeform.com/images/9MRAC7aTCvc7/choice/default#.jpeg"
            },
            {
                id: "",
                label: "Heavy Equipment",
                image: "https://images.typeform.com/images/yGKzq48SQrh8/choice/default#.jpeg"
            },
            {
                id: "",
                label: "Hoisting, Rigging & Cranes",
                image: "https://images.typeform.com/images/RjjrWZhAHEyv/choice/default#.jpeg"
            },
            {
                id: "",
                label: "Loading and Unloading Material",
                image: "https://images.typeform.com/images/RZqpVZsxgmgA/choice/default#.png"
            },
            {
                id: "",
                label: "Respiratory Hazards",
                image: "https://images.typeform.com/images/PaQuLHxYYbK9/choice/default#.jpeg"
            },
            {
                id: "",
                label: "Site and Vehicle Traffic",
                image: "https://images.typeform.com/images/XMG7KZMk6kfQ/choice/default#.jpeg"
            },
            {
                id: "",
                label: "Temperature Extremes",
                image: "https://images.typeform.com/images/c4SV2rxBwg7e/choice/default#.jpeg"
            }
        ]
    },
    {
        id: "",
        text: "What operations are you doing today?",
        type: "list-image",
        answerIsVariable: true,
        variableName: "operation",
        choices: [
            {
                id: "",
                label: "Hazardous Materials & SDS",
                image: "https://images.typeform.com/images/9MRAC7aTCvc7/choice/default#.jpeg",
                value: "hazard"
            },
            {
                id: "",
                label: "Heavy Equipment",
                image: "https://images.typeform.com/images/yGKzq48SQrh8/choice/default#.jpeg",
                value: "machine"
            },
            {
                id: "",
                label: "Hazardous Materials & SDS",
                image: "https://images.typeform.com/images/9MRAC7aTCvc7/choice/default#.jpeg",
                value: "hazard"
            },
            {
                id: "",
                label: "Heavy Equipment",
                image: "https://images.typeform.com/images/yGKzq48SQrh8/choice/default#.jpeg",
                value: "machine"
            }
        ]
    },
    {
        id: "",
        text: "Which of these?",
        type: "list-image",
        filteredChocies: true,
        choices: [
            {
                id: "",
                label: "Excavation & Trenching",
                image: "https://images.typeform.com/images/YEuZJjbMYTXy/choice/default#.jpeg",
                filterVariable: "operation",
                filterValue: "machine"
            },
            {
                id: "",
                label: "Hoisting, Rigging & Cranes",
                image: "https://images.typeform.com/images/RjjrWZhAHEyv/choice/default#.jpeg",
                filterVariable: "operation",
                filterValue: "machine"
            },
            {
                id: "",
                label: "Respiratory Hazards",
                image: "https://images.typeform.com/images/PaQuLHxYYbK9/choice/default#.jpeg",
                filterVariable: "operation",
                filterValue: "hazard"
            },
            {
                id: "",
                label: "Temperature Extremes",
                image: "https://images.typeform.com/images/c4SV2rxBwg7e/choice/default#.jpeg",
                filterVariable: "operation",
                filterValue: "hazard"
            }
        ]
    },
];
