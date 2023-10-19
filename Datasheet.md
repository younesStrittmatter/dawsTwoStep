# Daws two step task (columns)

name                | description                                                                                       | options 
stepOne_Param       | Indicates what side the choices for the first step are                                            | [0, 1], [1, 0]
stepOneTwo_Param    | Indicates the choices/sides of the second step if 0 was chosen in the first step                  | [0, 1], [1, 0], [2, 3], [3, 2]
stepOneTwo_Param    | Indicates the choices/sides of the second step if 1 was chosen in the first step                  | [0, 1], [1, 0], [2, 3], [3, 2]
rewards_Param       | The rewards of the second step choices in order (0, 1, 2, 3)                                      | [0 or 1, 0 or 1, 0 or 1, 0 or 1]
stepOneChoice       | The actual choice of the participant in step 1                                                    | 0, 1
stepTwoChoice       | The actual choice of the participant in step 2                                                    | 0, 1, 2, 3
reward              | The reward that was given to the participant                                                      | 0, 1
rewardProbabilities | The rewardprobability in order (0, 1, 2, 3)                                                       | [.25-.75, .25-.75,.25-.75, .25-.75]
isHighProbOne       | Indicates whether choice 0 in step 1 is followed by the low or high probable options in step 2    | 0, 1
isHighProbTwo       | Indicates whether choice 1 in step 1 is followed by the low or high probable options in step 2    | 0, 1
