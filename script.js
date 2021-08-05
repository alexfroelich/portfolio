
//Variables for all Games
//Matchsticks
var matchSticksImages = ['./assets/matchsticks1.jpg','./assets/matchsticks2.jpg', 'assets/matchsticks3.jpg', 'assets/matchsticks4.jpg','assets/matchsticks5.jpg','assets/matchsticks7.jpg','assets/matchsticks8.jpg'];
var matchSticksImage = document.getElementById('matchsticks-image');
var matchSticksIndex = 0;
matchSticksImage.src = matchSticksImages[matchSticksIndex];
//Sliding Puzzle
var slidingPuzzleImages = ['./assets/slidingPuzzle1.png','./assets/slidingPuzzle2.png', 'assets/slidingPuzzle3.png', 'assets/slidingPuzzle4.png'];
var slidingPuzzleImage = document.getElementById('slidingPuzzle-image');
var slidingPuzzleIndex = 0;
slidingPuzzleImage.src = slidingPuzzleImages[slidingPuzzleIndex];
//Shooter
var shooterImages = ['./assets/ShooterStart.jpg','./assets/ShooterHit.jpg', 'assets/ShooterDefeated.jpg', 'assets/ShooterShip.jpg','assets/ShooterOrange.jpg','assets/ShooterPanel.jpg','assets/ShooterRecords.jpg'];
var shooterImage = document.getElementById('shooter-image');
var shooterIndex = 0;
shooterImage.src = shooterImages[shooterIndex];

//Castora
var castoraImages = ['./assets/castora.jpg','./assets/castora_1.png', 'assets/castora_2.png', 'assets/castoraGameOver.jpg'];
var castoraImage = document.getElementById('castora-image');
var castoraIndex = 0;
castoraImage.src = castoraImages[castoraIndex];
//Ermitao
var ermitaoImages = ['assets/ermitaoLogo.png','assets/ermitaoGameplay.png', 'assets/ErmitaoPOW.png', 'assets/ErmitaoLatilson.png'];
var ermitaoImage = document.getElementById('ermitao-image');
var ermitaoIndex = 0;
ermitaoImage.src = ermitaoImages[ermitaoIndex];
//Satellight
var satellightImages = ['assets/satellight_splash_mini.png','assets/satellight_1.png',
 'assets/satellight_2.png', 'assets/satellight_3.png'];
var satellightImage = document.getElementById('satellight-image');
var satellightIndex = 0;
satellightImage.src = satellightImages[satellightIndex];
//Terraform
var terraformImages = ['assets/terraform_splash.jpg','assets/terraform_gameplay2.png',  'assets/terraform_npc.png', 'assets/bossataque1.gif',
  'assets/purificaçao.gif'];
var terraformImage = document.getElementById('terraform-image');
var terraformIndex = 0;
terraformImage.src = terraformImages[terraformIndex];

function nextImage(value, gameName) {

switch (gameName) {
  case 'MATCHSTICKS':
    matchSticksIndex += value;
      if(matchSticksIndex >= matchSticksImages.length)
      matchSticksIndex = 0;
      if(matchSticksIndex < 0)
      matchSticksIndex = matchSticksImages.length - 1;
      matchSticksImage.src = matchSticksImages[matchSticksIndex];
    break;
    
    case 'SLIDINGPUZZLE':
      slidingPuzzleIndex += value;
        if(slidingPuzzleIndex >= slidingPuzzleImages.length)
        slidingPuzzleIndex = 0;
        if(slidingPuzzleIndex < 0)
        slidingPuzzleIndex =slidingPuzzleImages.length - 1;
        slidingPuzzleImage.src =slidingPuzzleImages[slidingPuzzleIndex];
      break;
    case 'SHOOTER':
      shooterIndex += value;
      if(shooterIndex >= shooterImages.length)
        shooterIndex = 0;
      if(shooterIndex < 0)
        shooterIndex = shooterImages.length - 1;
        shooterImage.src = shooterImages[shooterIndex];
    break;
    case 'CASTORA':
      castoraIndex += value;
      if(castoraIndex >= castoraImages.length)
        castoraIndex = 0;
      if(castoraIndex < 0)
        castoraIndex = castoraImages.length - 1;
      castoraImage.src = castoraImages[castoraIndex];
    break;
    case 'ERMITAO':
      ermitaoIndex += value;
      if(ermitaoIndex >= ermitaoImages.length)
        ermitaoIndex = 0;
      if(ermitaoIndex < 0)
        ermitaoIndex = ermitaoImages.length - 1;
      ermitaoImage.src = ermitaoImages[ermitaoIndex];
      break;
    case 'SATELLIGHT':
      satellightIndex += value;
      if(satellightIndex >= satellightImages.length)
        satellightIndex = 0;
      if(satellightIndex < 0)
        satellightIndex = satellightImages.length - 1;
      satellightImage.src = satellightImages[satellightIndex];
      break;
    case 'TERRAFORM':
      terraformIndex += value;
      if(terraformIndex >= terraformImages.length)
        terraformIndex = 0;
      if(terraformIndex < 0)
        terraformIndex = terraformImages.length - 1;
      terraformImage.src = terraformImages[terraformIndex];
      break;
    default:

  }


}
