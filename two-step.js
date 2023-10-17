(function (jspsych) {
    "use strict";
    const info = {
        name: 'dawsTwoStep',
        description: '',
        parameters: {
            stepOne: {
                type: jspsych.ParameterType.Array,
                pretty_name: 'Step One Positions',
                default: [0, 1],
                description: 'Positions of the step one choices.'
            },
            stepOneTwo: {
                type: jspsych.ParameterType.Array,
                pretty_name: 'Step Two Positions after step 1 == 0',
                default: [0, 1],
                description: 'Positions of the step Two choices.'
            },
            stepTwoTwo: {
                type: jspsych.ParameterType.Array,
                pretty_name: 'Step Two Positions after step 1 == 1',
                default: [2, 3],
                description: 'Positions of the step Two choices.'
            },
            reward: {
                type: jspsych.ParameterType.ARRAY,
                pretty_name: '',
                default: [1, 1, 0, 0],
                description: ''
            },
            seed: {
                type: jspsych.ParameterType.FLOAT,
                pretty_name: 'Seed for the symbols',
                default: 0,
                description: 'Seed for the randomly generated symbols.'
            }
        }
    }

    class jsPsychDawsTwoStep {
        constructor(jsPsych) {
            this.jsPsych = jsPsych;
        }

        trial(display_element, trial) {
            const stepOneColor = '#2f0'
            const stepTwoColor = '#f19'
            let stepTwo = [trial.stepOneTwo, trial.stepTwoTwo]
            if (trial.stepOne[0] === 1) {
                stepTwo = [trial.stepTwoTwo, trial.stepOneTwo]
            }
            const stepOneSize = .15
            const stepTwoSize = .13

            const stepOneArray = ['a', 'b']
            const stepTwoArray = ['a', 'b', 'c', 'd']

            let style = document.createElement('style');
            style.appendChild(document.createTextNode(css_style));
            display_element.appendChild(style)

            let stepOneContainer_a = document.createElement('div')
            stepOneContainer_a.className += ' step-one-container'
            stepOneContainer_a.style.left = '4vw'
            display_element.appendChild(stepOneContainer_a)

            let stepOneInterior_a = document.createElement('div')
            stepOneInterior_a.className += ' step-one-container-interior'
            stepOneContainer_a.appendChild(stepOneInterior_a)

            let s2canvas_a = document.createElement('canvas')
            s2canvas_a.width = s2canvas_a.height = window.innerWidth * stepTwoSize
            s2canvas_a.id = 'step-two-button-a'
            stepOneInterior_a.appendChild(s2canvas_a);
            let s2ctx_a = s2canvas_a.getContext('2d');
            s2canvas_a.style.position = 'absolute'
            s2canvas_a.style.left = '-2vw'
            s2canvas_a.style.top = '-2vw'
            generateSymbol(
                seededRandom(trial.seed + 17 + stepTwo[0][0] * 2397),
                s2canvas_a, s2ctx_a, stepTwoColor)

            let s2canvas_b = document.createElement('canvas')
            s2canvas_b.width = s2canvas_b.height = window.innerWidth * stepTwoSize
            s2canvas_b.id = 'step-two-button-b'
            stepOneInterior_a.appendChild(s2canvas_b);
            let s2ctx_b = s2canvas_b.getContext('2d');
            s2canvas_b.style.position = 'absolute'
            s2canvas_b.style.right = '-2vw'
            s2canvas_b.style.top = '-2vw'
            generateSymbol(
                seededRandom(trial.seed + 17 + stepTwo[0][1] * 2397),
                s2canvas_b, s2ctx_b, stepTwoColor)

            let stepOneDoor_a = document.createElement('div')
            stepOneDoor_a.className += ' step-one-door'
            stepOneDoor_a.id = 'step-one-door-a'
            stepOneContainer_a.appendChild(stepOneDoor_a)

            let s1canvas_a = document.createElement('canvas')
            s1canvas_a.width = s1canvas_a.height = window.innerWidth * stepOneSize
            s1canvas_a.id = 'step-one-button-a'
            display_element.appendChild(s1canvas_a);
            let s1ctx_a = s1canvas_a.getContext('2d');
            s1canvas_a.style.left = '10vw'
            s1canvas_a.style.top = '-2vw'
            generateSymbol(
                seededRandom(trial.seed + trial.stepOne[0] * 2397),
                s1canvas_a, s1ctx_a, '#2f0')

            let stepOneContainer_b = document.createElement('div')
            stepOneContainer_b.className += 'step-one-container'
            stepOneContainer_b.style.right = '4vw'
            display_element.appendChild(stepOneContainer_b)

            let stepOneInterior_b = document.createElement('div')
            stepOneInterior_b.className += ' step-one-container-interior'
            stepOneContainer_b.appendChild(stepOneInterior_b)

            let s2canvas_c = document.createElement('canvas')
            s2canvas_c.width = s2canvas_c.height = window.innerWidth * stepTwoSize
            s2canvas_c.id = 'step-two-button-c'
            stepOneInterior_b.appendChild(s2canvas_c);
            let s2ctx_c = s2canvas_c.getContext('2d');
            s2canvas_c.style.position = 'absolute'
            s2canvas_c.style.left = '-2vw'
            s2canvas_c.style.top = '-2vw'
            generateSymbol(
                seededRandom(trial.seed + 17 + stepTwo[1][0] * 2397),
                s2canvas_c, s2ctx_c, stepTwoColor)

            let s2canvas_d = document.createElement('canvas')
            s2canvas_d.width = s2canvas_d.height = window.innerWidth * stepTwoSize
            s2canvas_d.id = 'step-two-button-d'
            stepOneInterior_b.appendChild(s2canvas_d);
            let s2ctx_d = s2canvas_d.getContext('2d');
            s2canvas_d.style.position = 'absolute'
            s2canvas_d.style.right = '-2vw'
            s2canvas_d.style.top = '-2vw'
            generateSymbol(
                seededRandom(trial.seed + 17 + stepTwo[1][1] * 2397),
                s2canvas_d, s2ctx_d, stepTwoColor)

            let stepOneDoor_b = document.createElement('div')
            stepOneDoor_b.className += ' step-one-door'
            stepOneDoor_b.id = 'step-one-door-b'
            stepOneContainer_b.appendChild(stepOneDoor_b)

            let s1canvas_b = document.createElement('canvas')
            s1canvas_b.width = s1canvas_b.height = window.innerWidth * stepOneSize
            display_element.appendChild(s1canvas_b);
            s1canvas_b.id = 'step-one-button-b'
            let s1ctx_b = s1canvas_b.getContext('2d');
            s1canvas_b.style.right = '10vw'
            s1canvas_b.style.top = '-2vw'
            generateSymbol(
                seededRandom(trial.seed + trial.stepOne[1] * 2397),
                s1canvas_b, s1ctx_b, '#2f0')


            let rewardContainer_a = document.createElement('div')
            rewardContainer_a.className += 'reward-container'
            rewardContainer_a.style.left = '4vw'
            display_element.appendChild(rewardContainer_a)

            let rewardInterior_a = document.createElement('div')
            rewardInterior_a.className += ' reward-container-interior'
            rewardContainer_a.appendChild(rewardInterior_a)

            let reward_a = document.createElement('div')
            reward_a.className += 'coin'
            reward_a.id = 'reward-a'
            rewardInterior_a.appendChild(reward_a)

            let rewardDoor_a = document.createElement('div')
            rewardDoor_a.className += 'step-one-door'
            rewardDoor_a.id = 'reward-door-a'
            rewardContainer_a.appendChild(rewardDoor_a)


            let rewardContainer_b = document.createElement('div')
            rewardContainer_b.className += 'reward-container'
            rewardContainer_b.style.left = '24vw'
            display_element.appendChild(rewardContainer_b)

            let rewardInterior_b = document.createElement('div')
            rewardInterior_b.className += ' reward-container-interior'
            rewardContainer_b.appendChild(rewardInterior_b)

            let reward_b = document.createElement('div')
            reward_b.className += 'coin'
            reward_b.id = 'reward-b'
            rewardInterior_b.appendChild(reward_b)

            let rewardDoor_b = document.createElement('div')
            rewardDoor_b.className += 'step-one-door'
            rewardDoor_b.id = 'reward-door-b'
            rewardContainer_b.appendChild(rewardDoor_b)


            let rewardContainer_c = document.createElement('div')
            rewardContainer_c.className += 'reward-container'
            rewardContainer_c.style.right = '24vw'
            display_element.appendChild(rewardContainer_c)

            let rewardInterior_c = document.createElement('div')
            rewardInterior_c.className += ' reward-container-interior'
            rewardContainer_c.appendChild(rewardInterior_c)

            let reward_c = document.createElement('div')
            reward_c.className += 'coin'
            reward_c.id = 'reward-c'
            rewardInterior_c.appendChild(reward_c)

            let rewardDoor_c = document.createElement('div')
            rewardDoor_c.className += 'step-one-door'
            rewardDoor_c.id = 'reward-door-c'
            rewardContainer_c.appendChild(rewardDoor_c)


            let rewardContainer_d = document.createElement('div')
            rewardContainer_d.className += 'reward-container'
            rewardContainer_d.style.right = '4vw'
            display_element.appendChild(rewardContainer_d)

            let rewardInterior_d = document.createElement('div')
            rewardInterior_d.className += ' reward-container-interior'
            rewardContainer_d.appendChild(rewardInterior_d)

            let reward_d = document.createElement('div')
            reward_d.className += 'coin'
            reward_d.id = 'reward-d'
            rewardInterior_d.appendChild(reward_d)

            let rewardDoor_d = document.createElement('div')
            rewardDoor_d.className += 'step-one-door'
            rewardDoor_d.id = 'reward-door-d'
            rewardContainer_d.appendChild(rewardDoor_d)


            for (let i = 0; i < 2; i++) {
                display_element
                    .querySelector("#step-one-button-" + stepOneArray[i])
                    .addEventListener("click", (e) => {
                        after_response_one(stepOneArray[i], i);
                    });
            }


            let responded_first = false
            let response_second = false

            let trial_data = {}


            const after_response_one = (identifier, i) => {
                if (responded_first) {
                    return
                }

                trial_data['step_one'] = trial.stepOne[i]
                responded_first = true

                let door = display_element.querySelector("#step-one-door-" + identifier)
                door.style.transform = 'translateY(-100%)'
                for (let i = 0; i < 4; i++) {
                    display_element
                        .querySelector("#step-two-button-" + stepTwoArray[i])
                        .addEventListener("click", (e) => {
                            after_response_two(stepTwoArray[i], i);
                        });
                }

            };
            const after_response_two = (identifier, i) => {
                if (!responded_first || response_second) {
                    return
                }
                response_second = true
                let index = [stepTwo[0][0], stepTwo[0][1], stepTwo[1][0], stepTwo[1][1]][i]

                let door = display_element.querySelector("#reward-door-" + identifier)
                door.style.transform = 'translateY(-100%)'
                if (trial.reward[index] > 0) {
                    let reward = display_element.querySelector("#reward-" + identifier)
                    reward.style.visibility = 'visible'
                }

                setTimeout(() => {
                    display_element.innerHTML = ''
                    this.jsPsych.finishTrial(trial_data)
                }, 1000)
            }
        }
    }

    jsPsychDawsTwoStep.info = info;

    window.jsPsychDawsTwoStep = jsPsychDawsTwoStep
})(jsPsychModule);


function seededRandom(seed) {
    let x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
}


function generateSymbol(seed, canvas, ctx, color) {
    // Clear any previous symbol
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.filter = 'blur(0.5px)';
    ctx.lineWidth = 4;
    // Here you need to decide how the seed affects your symbol.
    // This can be the number of lines, points, their positions, angles, etc.
    // For the sake of this example, let's say it affects the number of lines in the symbol.
    let lines = Math.floor(seededRandom(seed)) + 3;
    let r = canvas.width / 2
    let centerX = r;
    let centerY = r;


    for (let i = 0; i < lines; i++) {
        let radius = (seededRandom(seed + i) + .2) * r * .53
        if (seededRandom(seed + 1 + i) > 0.4) {
            radius = (seededRandom(seed) + .2) * r * .53
        }
        let startAngle = seededRandom(seed + 2 + i) * Math.PI * 2;
        if ((seededRandom(seed + 3 + i) > 0.4) && !((seededRandom(seed + 1 + i) > 0.3))) {
            startAngle = seededRandom(seed + 2) * Math.PI * 2
        }
        let endAngle = startAngle + seededRandom(seed + 4 + i) * Math.PI + Math.PI / 10;
        if (seededRandom(seed + 5 + i) > 0.1) {
            endAngle = startAngle + seededRandom(seed + 4) * Math.PI + Math.PI / 10;
        }
        let lineLength = (seededRandom(seed + 6 + i) * .5 - .5) * r * .73
        if (seededRandom(seed + 7 + i) > 0.4) {
            lineLength = (seededRandom(seed + 6) * .5 - .5) * r * .73
        }

        // Draw an arc
        ctx.beginPath();

        ctx.arc(centerX, centerY, radius, startAngle, endAngle);
        // Draw the line from the end of the arc
        ctx.moveTo(centerX + radius * Math.cos(endAngle), centerY + radius * Math.sin(endAngle));
        if (seededRandom(seed + 4 + i) > 0.5) {
            ctx.lineTo(centerX + radius * Math.cos(endAngle) + lineLength, centerY + radius * Math.sin(endAngle));
        } else {
            ctx.lineTo(centerX + radius * Math.cos(endAngle), centerY + radius * Math.sin(endAngle) + lineLength);
        }
        ctx.strokeStyle = color
        ctx.shadowColor = color; // Color of the glow
        ctx.shadowBlur = 30;        // Strength of the glow effect
        ctx.shadowOffsetX = 0;      // Horizontal distance of the shadow
        ctx.shadowOffsetY = 0;
        ctx.stroke();
        ctx.shadowColor = 'none';
        ctx.shadowBlur = 0;
        ctx.stroke();
    }
}


const css_style = `
    body {
        background: #8e8e8e;
        overflow: hidden;
    }
    * {
        margin: 0;
        padding: 0;
    }
    canvas {
        position: fixed;
        background: #999;
        border-radius: 50%;
        box-shadow: inset 4px 8px 10px #fff2, inset -4px -8px 10px #0002, 0px 0px 1px 5px #777;
        scale: .5;
    }
    canvas:hover {
        box-shadow: inset 4px 8px 10px #fff2, inset -4px -8px 10px #0002, 0px 0px 1px 6px #777;
        scale: .495
    }
    
    .step-one-container {
        overflow: hidden;
        position: fixed;
        top: 13vw;
        width: 30vw;
        height: 15vw;
      
        
    }
    .step-one-container-interior {
        position: absolute;
        width: 20vw;
        height: 9vw;
        background: #0003;
        border-bottom: solid 3vw #0001;
        border-left: solid 5vw #0002;
        border-right: solid 5vw #0002;
        border-top: solid 3vw #0003;
    }
    
    .step-one-door {
        position: absolute;
        background: #888;
        width: 100%;
        height: 100%;
        transition: 200ms;
        box-shadow: inset 0 -4px 1px 6px #0002;
    }
    
    .reward-container {
        position: fixed;
        overflow: hidden;
        bottom: 3vw;
        width: 10vw;
        height: 10vw;
    }
    
    .reward-container-interior {
        position: absolute;
        width: 6vw;
        height: 6vw;
        background: #0003;
        border-bottom: solid 2vw #0001;
        border-left: solid 2vw #0002;
        border-right: solid 2vw #0002;
        border-top: solid 2vw #0003;
    }
    
    
    .coin {
    width: 70%;
    height: 70%;
    transform: translate(25%, 25%);
    border-radius: 50%; /* Makes it a circle */
    background: linear-gradient(to top, #ffcc00 0%, #ffea80 40%, #ffcc00 60%, #d4a017 100%); /* Gradient for 3D effect */
    box-shadow: 0px 0px 5px 0px #666666; /* Shadow for 3D effect */
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: bold;
    color: #805700;
    visibility: hidden;
  }

  .coin:after {
    content: "$"; /* Coin symbol, can be replaced with other text or symbols */
    position: absolute;
  }
`

