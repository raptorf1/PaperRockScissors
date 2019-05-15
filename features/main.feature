Feature: Play a game
  
  As a user
  In order to have fun
  I would like to play the game Paper-Rock-Scissors

    Scenario: User visits the site to play the game VS the computer
      Given I visit the site
      Then I should see "Paper"
      Then I should see "Rock"
      Then I should see "Scissors"
      Then I should see "Game"
      And I should see "Player Chooses"
      And I should see "Computer Chooses"
      And I should see "And the Winner is"
      And I should see "Score"
      And I should see "Player 0"
      And I should see "Computer 0"
      When I click "scissors"
      Then I should see "Scissors"
      Then the session storage length must be 3
      When I click "rock"
      Then I should see "Rock"
      Then the session storage length must be 6
      When I click "paper"
      Then I should see "Paper"
      Then the session storage length must be 9
      When I click "reset"
      Then the session storage length must be 0
      And I should see "Player 0"
      And I should see "Computer 0"
      
    Scenario: User visits the site to play the game VS another player
      Given I visit the site
      Then I should see "Paper"
      Then I should see "Rock"
      Then I should see "Scissors"
      Then I should see "Game"
      And I click "paper"
      And I click "rock"
      And I click "player vs player mode"
      Then I should see "Player 1 Chooses"
      And I should see "Player 2 Chooses"
      And I should see "And the Winner is"
      When I click "scissors1"
      Then I should see "Scissors"
      When I click "rock1"
      Then I should see "Rock"
      When I click "paper1"
      Then I should see "Paper"
      When I click "player vs computer mode"
      Then the session storage length must be 6
      